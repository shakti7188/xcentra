<?php
/**
 * Xcentra Blog Admin — Rebuild Sitemap
 * Regenerates the sitemap.xml from published posts.
 * Returns JSON response.
 */

require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/db.php';
require_once __DIR__ . '/../includes/functions.php';

requireAuth();

header('Content-Type: application/json');

try {
    $result = regenerateSitemap();

    if ($result) {
        echo json_encode(['success' => true, 'message' => 'Sitemap regenerated successfully.']);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'error' => 'Failed to write sitemap.xml.']);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Error regenerating sitemap.']);
}
