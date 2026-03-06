<?php
/**
 * Xcentra Blog Admin — File Upload Handler
 * Handles image uploads for featured images and TinyMCE inline images.
 * Returns JSON: { "location": "/uploads/blog/filename.jpg" } (TinyMCE format)
 */

require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/config.php';

requireAuth();

header('Content-Type: application/json');

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed.']);
    exit;
}

// Check if file was uploaded
if (!isset($_FILES['file']) || $_FILES['file']['error'] !== UPLOAD_ERR_OK) {
    $errorMessages = [
        UPLOAD_ERR_INI_SIZE   => 'File exceeds server upload limit.',
        UPLOAD_ERR_FORM_SIZE  => 'File exceeds form upload limit.',
        UPLOAD_ERR_PARTIAL    => 'File was only partially uploaded.',
        UPLOAD_ERR_NO_FILE    => 'No file was uploaded.',
        UPLOAD_ERR_NO_TMP_DIR => 'Server missing temporary folder.',
        UPLOAD_ERR_CANT_WRITE => 'Failed to write file to disk.',
        UPLOAD_ERR_EXTENSION  => 'Upload blocked by server extension.',
    ];
    $code = $_FILES['file']['error'] ?? UPLOAD_ERR_NO_FILE;
    $msg = $errorMessages[$code] ?? 'Unknown upload error.';
    http_response_code(400);
    echo json_encode(['error' => $msg]);
    exit;
}

$file = $_FILES['file'];

// Validate file size
if ($file['size'] > MAX_UPLOAD_SIZE) {
    http_response_code(400);
    echo json_encode(['error' => 'File is too large. Maximum size is ' . (MAX_UPLOAD_SIZE / 1024 / 1024) . 'MB.']);
    exit;
}

// Validate MIME type
$finfo = new finfo(FILEINFO_MIME_TYPE);
$mimeType = $finfo->file($file['tmp_name']);

if (!in_array($mimeType, ALLOWED_TYPES, true)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid file type. Allowed: JPEG, PNG, WebP, GIF.']);
    exit;
}

// Validate with getimagesize() for real image check
$imageInfo = getimagesize($file['tmp_name']);
if ($imageInfo === false) {
    http_response_code(400);
    echo json_encode(['error' => 'File is not a valid image.']);
    exit;
}

// Determine extension from actual MIME
$extMap = [
    'image/jpeg' => 'jpg',
    'image/png'  => 'png',
    'image/webp' => 'webp',
    'image/gif'  => 'gif',
];
$ext = $extMap[$mimeType] ?? 'jpg';

// Generate unique filename
$filename = time() . '-' . bin2hex(random_bytes(8)) . '.' . $ext;

// Create upload directory if it doesn't exist
$uploadDir = UPLOAD_DIR;
if (!is_dir($uploadDir)) {
    if (!mkdir($uploadDir, 0755, true)) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to create upload directory.']);
        exit;
    }
}

$destPath = $uploadDir . $filename;

// Process image: resize if too wide, compress JPEG
$width = $imageInfo[0];
$height = $imageInfo[1];
$imageType = $imageInfo[2];

$needsResize = ($width > MAX_IMAGE_WIDTH);
$isJpeg = ($imageType === IMAGETYPE_JPEG);

if ($needsResize || $isJpeg) {
    // Load image with GD
    switch ($imageType) {
        case IMAGETYPE_JPEG:
            $srcImage = imagecreatefromjpeg($file['tmp_name']);
            break;
        case IMAGETYPE_PNG:
            $srcImage = imagecreatefrompng($file['tmp_name']);
            break;
        case IMAGETYPE_WEBP:
            $srcImage = imagecreatefromwebp($file['tmp_name']);
            break;
        case IMAGETYPE_GIF:
            $srcImage = imagecreatefromgif($file['tmp_name']);
            break;
        default:
            $srcImage = false;
    }

    if ($srcImage === false) {
        // Fallback: just move the file as-is
        if (!move_uploaded_file($file['tmp_name'], $destPath)) {
            http_response_code(500);
            echo json_encode(['error' => 'Failed to save uploaded file.']);
            exit;
        }
        echo json_encode(['location' => UPLOAD_URL . $filename]);
        exit;
    }

    // Resize if needed
    if ($needsResize) {
        $newWidth = MAX_IMAGE_WIDTH;
        $newHeight = (int)round($height * ($newWidth / $width));

        $resized = imagecreatetruecolor($newWidth, $newHeight);

        // Preserve transparency for PNG and WebP
        if ($imageType === IMAGETYPE_PNG || $imageType === IMAGETYPE_WEBP) {
            imagealphablending($resized, false);
            imagesavealpha($resized, true);
            $transparent = imagecolorallocatealpha($resized, 0, 0, 0, 127);
            imagefilledrectangle($resized, 0, 0, $newWidth, $newHeight, $transparent);
        }

        imagecopyresampled($resized, $srcImage, 0, 0, 0, 0, $newWidth, $newHeight, $width, $height);
        imagedestroy($srcImage);
        $srcImage = $resized;
    }

    // Save
    switch ($imageType) {
        case IMAGETYPE_JPEG:
            imagejpeg($srcImage, $destPath, JPEG_QUALITY);
            break;
        case IMAGETYPE_PNG:
            imagepng($srcImage, $destPath, 6); // compression level 6
            break;
        case IMAGETYPE_WEBP:
            imagewebp($srcImage, $destPath, JPEG_QUALITY);
            break;
        case IMAGETYPE_GIF:
            imagegif($srcImage, $destPath);
            break;
    }

    imagedestroy($srcImage);
} else {
    // No processing needed — just move the file
    if (!move_uploaded_file($file['tmp_name'], $destPath)) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to save uploaded file.']);
        exit;
    }
}

// Return TinyMCE-compatible response
echo json_encode(['location' => UPLOAD_URL . $filename]);
