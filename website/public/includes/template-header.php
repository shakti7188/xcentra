<?php
/**
 * Xcentra Blog — Template Header
 *
 * Outputs <!DOCTYPE html> through <main>.
 * Requires config.php and functions.php to be loaded before including this file.
 *
 * Expected PHP variables:
 *   $pageTitle       — <title> tag content
 *   $pageDescription — meta description
 *   $canonicalPath   — canonical URL path (e.g., "/blog/slug/")
 *   $ogTitle         — Open Graph title (optional, defaults to $pageTitle)
 *   $ogDescription   — OG description (optional, defaults to $pageDescription)
 *   $ogImage         — OG image URL (optional)
 *   $ogType          — OG type (optional, defaults to "website")
 *   $publishedTime   — article:published_time for article type (optional)
 *   $extraHead       — extra HTML to inject in <head>, e.g. JSON-LD schemas (optional)
 */

// Defaults for optional variables
if (!isset($ogTitle))       $ogTitle       = $pageTitle;
if (!isset($ogDescription)) $ogDescription = $pageDescription;
if (!isset($ogImage))       $ogImage       = '';
if (!isset($ogType))        $ogType        = 'website';
if (!isset($publishedTime)) $publishedTime = '';
if (!isset($extraHead))     $extraHead     = '';
?>
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />

<!-- Font preload -->
<link rel="preload" href="/_next/static/media/<?php echo e(FONT_FILE); ?>" as="font" type="font/woff2" crossorigin />

<!-- Next.js CSS -->
<link rel="stylesheet" href="/_next/static/chunks/<?php echo e(CSS_FILE_1); ?>" />
<link rel="stylesheet" href="/_next/static/chunks/<?php echo e(CSS_FILE_2); ?>" />

<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=<?php echo e(GA_ID); ?>"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','<?php echo e(GA_ID); ?>');</script>

<!-- EmailOctopus -->
<script async src="https://eocampaign1.com/form/ee70c730-2054-11f1-8349-df6c900e72ed.js" data-form="ee70c730-2054-11f1-8349-df6c900e72ed"></script>

<!-- SEO -->
<title><?php echo e($pageTitle); ?></title>
<meta name="description" content="<?php echo e($pageDescription); ?>" />
<link rel="canonical" href="<?php echo e(SITE_URL . $canonicalPath); ?>" />
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

<!-- Open Graph -->
<meta property="og:type" content="<?php echo e($ogType); ?>" />
<meta property="og:site_name" content="<?php echo e(SITE_NAME); ?>" />
<meta property="og:title" content="<?php echo e($ogTitle); ?>" />
<meta property="og:description" content="<?php echo e($ogDescription); ?>" />
<meta property="og:url" content="<?php echo e(SITE_URL . $canonicalPath); ?>" />
<?php if ($ogImage): ?>
<meta property="og:image" content="<?php echo e($ogImage); ?>" />
<?php endif; ?>
<?php if ($ogType === 'article' && $publishedTime): ?>
<meta property="article:published_time" content="<?php echo e($publishedTime); ?>" />
<?php endif; ?>

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="<?php echo e($ogTitle); ?>" />
<meta name="twitter:description" content="<?php echo e($ogDescription); ?>" />
<?php if ($ogImage): ?>
<meta name="twitter:image" content="<?php echo e($ogImage); ?>" />
<?php endif; ?>

<!-- Favicons -->
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />

<!-- JSON-LD: Organization -->
<script type="application/ld+json"><?php echo organizationSchema(); ?></script>

<!-- JSON-LD: WebSite -->
<script type="application/ld+json"><?php echo websiteSchema(); ?></script>

<?php if ($extraHead) echo $extraHead . "\n"; ?>
</head>
<body class="<?php echo e(FONT_CLASS); ?> antialiased">

<!-- Navbar -->
<header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-bg-primary/95 backdrop-blur-md border-b border-border-dark">
  <nav class="mx-auto flex max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-16 py-4">

    <!-- Logo -->
    <a href="/" class="flex items-center">
      <img
        src="<?php echo e(SITE_LOGO_WHITE); ?>"
        alt="<?php echo e(SITE_NAME); ?>"
        width="280"
        height="80"
        class="h-14 sm:h-16 w-auto"
      />
    </a>

    <!-- Desktop Navigation -->
    <div class="hidden lg:flex items-center gap-1">

      <!-- Home -->
      <a href="/" class="px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-white/5">Home</a>

      <!-- Products Dropdown -->
      <div class="relative group">
        <button class="flex items-center gap-1 px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-white/5">
          Products
          <svg class="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </button>
        <div class="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
          <div class="bg-[#111118] border border-border-dark rounded-xl p-2 min-w-[200px] shadow-xl shadow-black/40">
            <a href="/cards/" class="block px-4 py-2.5 text-sm text-text-secondary hover:text-text-primary hover:bg-white/5 rounded-lg transition-colors">Global Cards</a>
            <a href="/white-label/" class="block px-4 py-2.5 text-sm text-text-secondary hover:text-text-primary hover:bg-white/5 rounded-lg transition-colors">B2B Services</a>
            <a href="/global-payouts/" class="block px-4 py-2.5 text-sm text-text-secondary hover:text-text-primary hover:bg-white/5 rounded-lg transition-colors">Global Payouts</a>
            <a href="/global-usd-account/" class="block px-4 py-2.5 text-sm text-text-secondary hover:text-text-primary hover:bg-white/5 rounded-lg transition-colors">USD Account</a>
            <a href="/merchant-ecosystem/" class="block px-4 py-2.5 text-sm text-text-secondary hover:text-text-primary hover:bg-white/5 rounded-lg transition-colors">Merchant Ecosystem</a>
          </div>
        </div>
      </div>

      <!-- Other nav links -->
      <a href="/how-it-works/" class="px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-white/5">How It Works</a>
      <a href="/security/" class="px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-white/5">Security</a>
      <a href="/whitepaper/" class="px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-white/5">Whitepaper</a>
      <a href="/roadmap/" class="px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-white/5">Roadmap</a>
      <a href="/faq/" class="px-4 py-2 text-sm text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-white/5">FAQ</a>
    </div>

    <!-- Desktop CTA -->
    <div class="hidden lg:flex items-center gap-3">
      <a href="/cards/" class="inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 bg-accent text-black font-bold hover:bg-accent-light shadow-lg shadow-accent/20 px-5 py-2.5 text-sm">
        Get Xcentra Card
      </a>
    </div>

    <!-- Mobile Hamburger -->
    <button
      id="mobile-menu-btn"
      class="lg:hidden p-2 text-text-primary"
      aria-label="Open menu"
    >
      <svg id="menu-icon-open" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
      <svg id="menu-icon-close" class="h-6 w-6 hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
    </button>
  </nav>

  <!-- Mobile Menu Overlay -->
  <div id="mobile-menu" class="lg:hidden hidden bg-bg-primary border-t border-border-dark overflow-y-auto" style="height:calc(100vh - 72px);">
    <div class="px-4 py-6 space-y-2">

      <!-- Home -->
      <a href="/" class="block px-4 py-3 text-text-secondary hover:text-text-primary transition-colors rounded-lg">Home</a>

      <!-- Products (with toggle) -->
      <div>
        <button class="mobile-dropdown-btn flex w-full items-center justify-between px-4 py-3 text-text-secondary hover:text-text-primary transition-colors rounded-lg" data-target="mobile-products">
          Products
          <svg class="h-4 w-4 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </button>
        <div id="mobile-products" class="hidden pl-4">
          <a href="/cards/" class="block px-4 py-2.5 text-sm text-text-secondary hover:text-text-primary">Global Cards</a>
          <a href="/white-label/" class="block px-4 py-2.5 text-sm text-text-secondary hover:text-text-primary">B2B Services</a>
          <a href="/global-payouts/" class="block px-4 py-2.5 text-sm text-text-secondary hover:text-text-primary">Global Payouts</a>
          <a href="/global-usd-account/" class="block px-4 py-2.5 text-sm text-text-secondary hover:text-text-primary">USD Account</a>
          <a href="/merchant-ecosystem/" class="block px-4 py-2.5 text-sm text-text-secondary hover:text-text-primary">Merchant Ecosystem</a>
        </div>
      </div>

      <!-- Other nav links -->
      <a href="/how-it-works/" class="block px-4 py-3 text-text-secondary hover:text-text-primary transition-colors rounded-lg">How It Works</a>
      <a href="/security/" class="block px-4 py-3 text-text-secondary hover:text-text-primary transition-colors rounded-lg">Security</a>
      <a href="/whitepaper/" class="block px-4 py-3 text-text-secondary hover:text-text-primary transition-colors rounded-lg">Whitepaper</a>
      <a href="/roadmap/" class="block px-4 py-3 text-text-secondary hover:text-text-primary transition-colors rounded-lg">Roadmap</a>
      <a href="/faq/" class="block px-4 py-3 text-text-secondary hover:text-text-primary transition-colors rounded-lg">FAQ</a>

      <!-- Mobile CTA -->
      <div class="pt-4 space-y-3 border-t border-border-dark">
        <a href="/cards/" class="inline-flex w-full items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 bg-black text-white hover:bg-gray-800 shadow-lg shadow-black/15 hover:shadow-black/30 px-7 py-3.5 text-base">
          Get Xcentra Card
        </a>
      </div>
    </div>
  </div>
</header>

<!-- Mobile Menu Toggle Script -->
<script>
(function(){
  var btn=document.getElementById('mobile-menu-btn');
  var menu=document.getElementById('mobile-menu');
  var iconOpen=document.getElementById('menu-icon-open');
  var iconClose=document.getElementById('menu-icon-close');
  btn.addEventListener('click',function(){
    var open=menu.classList.toggle('hidden');
    iconOpen.classList.toggle('hidden');
    iconClose.classList.toggle('hidden');
    document.body.style.overflow=open?'':'hidden';
    btn.setAttribute('aria-label',open?'Open menu':'Close menu');
  });
  document.querySelectorAll('.mobile-dropdown-btn').forEach(function(b){
    b.addEventListener('click',function(){
      var t=document.getElementById(b.getAttribute('data-target'));
      t.classList.toggle('hidden');
      var svg=b.querySelector('svg');
      svg.style.transform=t.classList.contains('hidden')?'':'rotate(180deg)';
    });
  });
  menu.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click',function(){
      menu.classList.add('hidden');
      iconOpen.classList.remove('hidden');
      iconClose.classList.add('hidden');
      document.body.style.overflow='';
    });
  });
})();
</script>

<main>
