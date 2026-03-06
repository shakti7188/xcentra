<?php
/**
 * Xcentra Blog Admin — Helper Functions
 */

require_once __DIR__ . '/config.php';

/**
 * Generate URL-friendly slug from title
 */
function slugify(string $text): string {
    $text = strtolower(trim($text));
    $text = preg_replace('/[^a-z0-9\s-]/', '', $text);
    $text = preg_replace('/[\s-]+/', '-', $text);
    $text = trim($text, '-');
    return substr($text, 0, 100);
}

/**
 * Calculate read time from HTML content
 */
function calculateReadTime(string $html): string {
    $text = strip_tags($html);
    $wordCount = str_word_count($text);
    $minutes = max(1, (int) ceil($wordCount / 200));
    return $minutes . ' min read';
}

/**
 * Sanitize HTML content from TinyMCE
 * Allows safe HTML tags only
 */
function sanitizeContent(string $html): string {
    $allowed = '<p><h2><h3><h4><strong><em><u><a><img><ul><ol><li><blockquote><br><span><div><figure><figcaption><pre><code>';
    $html = strip_tags($html, $allowed);

    // Remove any onclick, onload, etc. event handlers
    $html = preg_replace('/\s*on\w+\s*=\s*"[^"]*"/i', '', $html);
    $html = preg_replace('/\s*on\w+\s*=\s*\'[^\']*\'/i', '', $html);

    // Remove javascript: links
    $html = preg_replace('/href\s*=\s*"javascript:[^"]*"/i', 'href="#"', $html);

    return $html;
}

/**
 * Truncate text to a maximum length
 */
function truncate(string $text, int $maxLength = 160): string {
    $text = strip_tags($text);
    if (mb_strlen($text) <= $maxLength) return $text;
    return mb_substr($text, 0, $maxLength - 3) . '...';
}

/**
 * Format date for display (e.g., "Mar 1, 2026")
 */
function formatDate(string $datetime): string {
    $ts = strtotime($datetime);
    return $ts ? date('M j, Y', $ts) : $datetime;
}

/**
 * Format date for ISO 8601 (for SEO schemas)
 */
function formatDateISO(string $datetime): string {
    $ts = strtotime($datetime);
    return $ts ? date('c', $ts) : $datetime;
}

/**
 * Get category badge CSS class
 */
function getCategoryClass(string $category): string {
    $colors = CATEGORY_COLORS;
    return $colors[$category] ?? 'bg-gray-500/10 text-gray-600';
}

/**
 * Generate Article JSON-LD schema
 */
function articleSchema(array $post): string {
    $schema = [
        '@context' => 'https://schema.org',
        '@type' => 'Article',
        'headline' => $post['title'],
        'description' => $post['excerpt'],
        'image' => SITE_URL . ($post['og_image'] ?: $post['featured_image']),
        'datePublished' => formatDateISO($post['published_at']),
        'dateModified' => formatDateISO($post['updated_at']),
        'author' => [
            '@type' => 'Organization',
            'name' => SITE_NAME,
            'url' => SITE_URL,
        ],
        'publisher' => [
            '@type' => 'Organization',
            'name' => SITE_NAME,
            'logo' => [
                '@type' => 'ImageObject',
                'url' => SITE_URL . SITE_LOGO,
            ],
        ],
        'mainEntityOfPage' => [
            '@type' => 'WebPage',
            '@id' => SITE_URL . '/blog/' . $post['slug'] . '/',
        ],
    ];
    return json_encode($schema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
}

/**
 * Generate Breadcrumb JSON-LD schema
 */
function breadcrumbSchema(string $postTitle, string $postSlug): string {
    $schema = [
        '@context' => 'https://schema.org',
        '@type' => 'BreadcrumbList',
        'itemListElement' => [
            ['@type' => 'ListItem', 'position' => 1, 'name' => 'Home', 'item' => SITE_URL . '/'],
            ['@type' => 'ListItem', 'position' => 2, 'name' => 'Blog', 'item' => SITE_URL . '/blog/'],
            ['@type' => 'ListItem', 'position' => 3, 'name' => $postTitle, 'item' => SITE_URL . '/blog/' . $postSlug . '/'],
        ],
    ];
    return json_encode($schema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
}

/**
 * Generate Organization JSON-LD schema
 */
function organizationSchema(): string {
    $schema = [
        '@context' => 'https://schema.org',
        '@type' => 'Organization',
        'name' => SITE_NAME,
        'url' => SITE_URL,
        'description' => SITE_DESCRIPTION,
        'logo' => SITE_URL . SITE_LOGO,
        'sameAs' => [
            'https://www.instagram.com/xcentraofficial/',
            'https://www.linkedin.com/company/xcentra/',
            'https://www.facebook.com/profile.php?id=61587907153019',
            'https://x.com/Xcentraofficial',
        ],
        'contactPoint' => [
            '@type' => 'ContactPoint',
            'email' => 'support@xcentra.com',
            'contactType' => 'customer support',
            'availableLanguage' => 'English',
        ],
    ];
    return json_encode($schema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
}

/**
 * Generate WebSite JSON-LD schema
 */
function websiteSchema(): string {
    $schema = [
        '@context' => 'https://schema.org',
        '@type' => 'WebSite',
        'name' => SITE_NAME,
        'url' => SITE_URL,
        'description' => SITE_DESCRIPTION,
    ];
    return json_encode($schema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
}

/**
 * Escape HTML for safe output
 */
function e(string $str): string {
    return htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
}

/**
 * Regenerate sitemap.xml
 */
function regenerateSitemap(): bool {
    $pdo = getDB();
    $stmt = $pdo->query("SELECT slug, updated_at FROM posts WHERE published = 1 ORDER BY published_at DESC");
    $posts = $stmt->fetchAll();

    $xml = '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
    $xml .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n";

    // Static pages
    foreach (STATIC_PAGES as $page) {
        $xml .= "  <url>\n";
        $xml .= "    <loc>" . SITE_URL . $page['url'] . "</loc>\n";
        $xml .= "    <changefreq>" . $page['changefreq'] . "</changefreq>\n";
        $xml .= "    <priority>" . $page['priority'] . "</priority>\n";
        $xml .= "  </url>\n";
    }

    // Blog index
    $xml .= "  <url>\n";
    $xml .= "    <loc>" . SITE_URL . "/blog/</loc>\n";
    $xml .= "    <changefreq>weekly</changefreq>\n";
    $xml .= "    <priority>0.8</priority>\n";
    $xml .= "  </url>\n";

    // Blog posts
    foreach ($posts as $post) {
        $xml .= "  <url>\n";
        $xml .= "    <loc>" . SITE_URL . "/blog/" . $post['slug'] . "/</loc>\n";
        $xml .= "    <lastmod>" . date('Y-m-d', strtotime($post['updated_at'])) . "</lastmod>\n";
        $xml .= "    <changefreq>monthly</changefreq>\n";
        $xml .= "    <priority>0.6</priority>\n";
        $xml .= "  </url>\n";
    }

    $xml .= "</urlset>\n";

    $sitemapPath = $_SERVER['DOCUMENT_ROOT'] . '/sitemap.xml';
    return file_put_contents($sitemapPath, $xml) !== false;
}
