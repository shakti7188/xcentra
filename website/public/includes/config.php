<?php
/**
 * Xcentra Blog Admin — Configuration
 * Update these values for your cPanel environment
 */

// Database credentials (update for your cPanel)
define('DB_HOST', 'localhost');
define('DB_NAME', 'xcentra_blog');
define('DB_USER', 'xcentra_admin');
define('DB_PASS', 'CHANGE_THIS_PASSWORD');
define('DB_CHARSET', 'utf8mb4');

// Site configuration
define('SITE_URL', 'https://xcentra.io');
define('SITE_NAME', 'Xcentra');
define('SITE_DESCRIPTION', 'Spend USDC & USDT with Xcentra virtual & physical debit cards at 150M+ merchants worldwide. 0.5% flat fee, real-time conversion, 100+ countries.');
define('SITE_LOGO', '/images/logos/xcentra-logo.png');
define('SITE_LOGO_WHITE', '/images/logos/xcentra-logo-white.png');

// Next.js CSS/font asset hashes (update after each Next.js rebuild)
define('CSS_FILE_1', '5ff3024b79921687.css');
define('CSS_FILE_2', '7b77ed1f991072e9.css');
define('FONT_FILE', 'fba5a26ea33df6a3-s.p.1bbdebe6.woff2');
define('FONT_CLASS', 'plus_jakarta_sans_3a4a0966-module__QNOKPW__variable');

// Google Analytics
define('GA_ID', 'G-D6TT1LQY0G');

// Upload settings
define('UPLOAD_DIR', $_SERVER['DOCUMENT_ROOT'] . '/uploads/blog/');
define('UPLOAD_URL', '/uploads/blog/');
define('MAX_UPLOAD_SIZE', 5 * 1024 * 1024); // 5MB
define('ALLOWED_TYPES', ['image/jpeg', 'image/png', 'image/webp', 'image/gif']);
define('MAX_IMAGE_WIDTH', 1200);
define('JPEG_QUALITY', 85);

// Session settings
define('SESSION_TIMEOUT', 1800); // 30 minutes
define('MAX_LOGIN_ATTEMPTS', 5);
define('LOGIN_LOCKOUT_TIME', 900); // 15 minutes

// Category colors (matching Tailwind classes from the site)
define('CATEGORY_COLORS', [
    'Announcement' => 'bg-accent/10 text-accent',
    'Industry'     => 'bg-blue-500/10 text-blue-600',
    'Education'    => 'bg-emerald-500/10 text-emerald-600',
    'Lifestyle'    => 'bg-purple-500/10 text-purple-600',
    'Product'      => 'bg-amber-500/10 text-amber-600',
    'Regional'     => 'bg-pink-500/10 text-pink-600',
]);

// Static page URLs for sitemap (non-blog pages)
define('STATIC_PAGES', [
    ['url' => '/',                    'priority' => '1.0', 'changefreq' => 'weekly'],
    ['url' => '/about/',              'priority' => '0.8', 'changefreq' => 'monthly'],
    ['url' => '/cards/',              'priority' => '0.9', 'changefreq' => 'monthly'],
    ['url' => '/how-it-works/',       'priority' => '0.8', 'changefreq' => 'monthly'],
    ['url' => '/security/',           'priority' => '0.7', 'changefreq' => 'monthly'],
    ['url' => '/faq/',                'priority' => '0.8', 'changefreq' => 'monthly'],
    ['url' => '/contact/',            'priority' => '0.7', 'changefreq' => 'monthly'],
    ['url' => '/roadmap/',            'priority' => '0.7', 'changefreq' => 'monthly'],
    ['url' => '/whitepaper/',         'priority' => '0.7', 'changefreq' => 'monthly'],
    ['url' => '/white-label/',        'priority' => '0.8', 'changefreq' => 'monthly'],
    ['url' => '/global-payouts/',     'priority' => '0.7', 'changefreq' => 'monthly'],
    ['url' => '/global-usd-account/', 'priority' => '0.7', 'changefreq' => 'monthly'],
    ['url' => '/merchant-ecosystem/', 'priority' => '0.7', 'changefreq' => 'monthly'],
    ['url' => '/fees/',               'priority' => '0.7', 'changefreq' => 'monthly'],
    ['url' => '/legal/privacy-policy/', 'priority' => '0.3', 'changefreq' => 'yearly'],
    ['url' => '/legal/terms/',        'priority' => '0.3', 'changefreq' => 'yearly'],
]);
