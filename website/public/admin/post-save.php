<?php
/**
 * Xcentra Blog Admin — Save Post (Create / Update)
 * Accepts JSON POST body or form data.
 * Returns JSON response.
 */

require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/db.php';
require_once __DIR__ . '/../includes/functions.php';

requireAuth();

header('Content-Type: application/json');

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed.']);
    exit;
}

// Parse input — prefer JSON body, fallback to $_POST
$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    $input = $_POST;
}

// Verify CSRF
$csrfToken = $input['csrf_token'] ?? '';
if (!verifyCSRF($csrfToken)) {
    http_response_code(403);
    echo json_encode(['success' => false, 'error' => 'Invalid or expired CSRF token.']);
    exit;
}

// Extract and validate fields
$id            = isset($input['id']) ? (int)$input['id'] : 0;
$title         = trim($input['title'] ?? '');
$slug          = trim($input['slug'] ?? '');
$category      = trim($input['category'] ?? 'Announcement');
$featuredImage = trim($input['featured_image'] ?? '');
$excerpt       = trim($input['excerpt'] ?? '');
$content       = $input['content'] ?? '';
$published     = !empty($input['published']) ? 1 : 0;
$metaTitle     = trim($input['meta_title'] ?? '');
$metaDesc      = trim($input['meta_description'] ?? '');

// Validate required fields
if ($title === '') {
    echo json_encode(['success' => false, 'error' => 'Title is required.']);
    exit;
}

// Validate category
$validCategories = ['Announcement', 'Industry', 'Education', 'Lifestyle', 'Product', 'Regional'];
if (!in_array($category, $validCategories, true)) {
    $category = 'Announcement';
}

// Auto-generate slug if empty
if ($slug === '') {
    $slug = slugify($title);
}

// Sanitize content
$content = sanitizeContent($content);

// Calculate read time
$readTime = calculateReadTime($content);

// Auto-fill meta title if empty
if ($metaTitle === '') {
    $metaTitle = $title . ' | Xcentra Blog';
}

// Auto-fill meta description if empty
if ($metaDesc === '') {
    $metaDesc = truncate($excerpt ?: strip_tags($content), 160);
}

$pdo = getDB();

// Ensure slug uniqueness
$slugBase = $slug;
$slugCounter = 1;

while (true) {
    if ($id > 0) {
        // Editing: exclude current post from uniqueness check
        $stmt = $pdo->prepare('SELECT COUNT(*) FROM posts WHERE slug = ? AND id != ?');
        $stmt->execute([$slug, $id]);
    } else {
        $stmt = $pdo->prepare('SELECT COUNT(*) FROM posts WHERE slug = ?');
        $stmt->execute([$slug]);
    }

    if ($stmt->fetchColumn() == 0) {
        break;
    }

    $slugCounter++;
    $slug = $slugBase . '-' . $slugCounter;
}

try {
    if ($id > 0) {
        // UPDATE existing post
        // Check if we need to set published_at (first publish)
        $stmt = $pdo->prepare('SELECT published, published_at FROM posts WHERE id = ? LIMIT 1');
        $stmt->execute([$id]);
        $existing = $stmt->fetch();

        if (!$existing) {
            echo json_encode(['success' => false, 'error' => 'Post not found.']);
            exit;
        }

        $publishedAt = $existing['published_at'];

        // Set published_at on first publish
        if ($published && !$publishedAt) {
            $publishedAt = date('Y-m-d H:i:s');
        }

        $stmt = $pdo->prepare('
            UPDATE posts SET
                title = ?,
                slug = ?,
                category = ?,
                featured_image = ?,
                excerpt = ?,
                content = ?,
                published = ?,
                read_time = ?,
                meta_title = ?,
                meta_description = ?,
                og_image = ?,
                published_at = ?,
                updated_at = NOW()
            WHERE id = ?
        ');
        $stmt->execute([
            $title,
            $slug,
            $category,
            $featuredImage ?: null,
            $excerpt,
            $content,
            $published,
            $readTime,
            $metaTitle,
            $metaDesc,
            $featuredImage ?: null,
            $publishedAt,
            $id,
        ]);
    } else {
        // INSERT new post
        $publishedAt = $published ? date('Y-m-d H:i:s') : null;
        $authorId = $_SESSION['user_id'] ?? null;

        $stmt = $pdo->prepare('
            INSERT INTO posts (title, slug, category, featured_image, excerpt, content, published, read_time, meta_title, meta_description, og_image, author_id, published_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ');
        $stmt->execute([
            $title,
            $slug,
            $category,
            $featuredImage ?: null,
            $excerpt,
            $content,
            $published,
            $readTime,
            $metaTitle,
            $metaDesc,
            $featuredImage ?: null,
            $authorId,
            $publishedAt,
        ]);

        $id = (int)$pdo->lastInsertId();
    }

    // Regenerate sitemap
    regenerateSitemap();

    echo json_encode([
        'success' => true,
        'id' => $id,
        'slug' => $slug,
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Database error. Please try again.']);
}
