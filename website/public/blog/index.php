<?php
/**
 * Xcentra Blog — Listing Page
 * Displays all published blog posts in a responsive grid
 */

require_once __DIR__ . '/../includes/functions.php';
require_once __DIR__ . '/../includes/db.php';

// Fetch published posts
$pdo = getDB();
$stmt = $pdo->query("SELECT slug, title, excerpt, featured_image, category, read_time, published_at FROM posts WHERE published = 1 ORDER BY published_at DESC");
$posts = $stmt->fetchAll();

// Page SEO
$pageTitle = 'Blog | Xcentra — Insights & Updates';
$pageDescription = 'Latest insights, guides, and updates from Xcentra. Learn about stablecoin spending, crypto cards, borderless payments, and digital finance.';
$canonicalPath = '/blog/';
$ogImage = '/images/og/home.jpg';

include __DIR__ . '/../includes/template-header.php';
?>

<!-- Hero Section -->
<section class="relative bg-bg-primary overflow-hidden pt-32 pb-16">
  <div class="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 text-center">
    <div style="opacity:1;transform:none">
      <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-accent/10 text-accent mb-6 tracking-wide uppercase">Blog</span>
    </div>
    <div style="opacity:1;transform:none">
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-text-primary mb-6">
        Insights & <span class="gradient-text">Updates</span>
      </h1>
    </div>
    <div style="opacity:1;transform:none">
      <p class="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
        Explore the latest in stablecoin spending, digital finance, and borderless payments. Stay ahead with Xcentra.
      </p>
    </div>
  </div>
</section>

<!-- Blog Grid -->
<section class="bg-bg-light py-16">
  <div class="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
    <?php if (empty($posts)): ?>
      <div class="text-center py-16">
        <p class="text-text-muted text-lg">No blog posts yet. Check back soon!</p>
      </div>
    <?php else: ?>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <?php foreach ($posts as $i => $post): ?>
          <article style="opacity:1;transform:none">
            <a href="/blog/<?= e($post['slug']) ?>/" class="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <!-- Image -->
              <div class="relative h-[200px] overflow-hidden">
                <?php if ($post['featured_image']): ?>
                  <img
                    src="<?= e($post['featured_image']) ?>"
                    alt="<?= e($post['title']) ?>"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="<?= $i < 3 ? 'eager' : 'lazy' ?>"
                  />
                <?php else: ?>
                  <div class="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <span class="text-gray-400 text-sm">No image</span>
                  </div>
                <?php endif; ?>
                <!-- Category Badge -->
                <span class="absolute top-4 left-4 inline-block px-3 py-1 rounded-full text-xs font-semibold <?= getCategoryClass($post['category']) ?>">
                  <?= e($post['category']) ?>
                </span>
              </div>

              <!-- Content -->
              <div class="p-6">
                <!-- Meta -->
                <div class="flex items-center gap-3 mb-3 text-text-muted text-xs">
                  <span class="flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
                    <?= formatDate($post['published_at']) ?>
                  </span>
                  <span class="flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/></svg>
                    <?= e($post['read_time']) ?>
                  </span>
                </div>

                <!-- Title -->
                <h2 class="text-lg font-semibold text-text-dark mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  <?= e($post['title']) ?>
                </h2>

                <!-- Excerpt -->
                <p class="text-sm text-text-muted leading-relaxed mb-4 line-clamp-3">
                  <?= e($post['excerpt']) ?>
                </p>

                <!-- CTA -->
                <span class="inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-2.5 transition-all">
                  Read Article
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </div>
            </a>
          </article>
        <?php endforeach; ?>
      </div>
    <?php endif; ?>
  </div>
</section>

<?php include __DIR__ . '/../includes/template-footer.php'; ?>
