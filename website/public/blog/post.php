<?php
/**
 * Xcentra Blog — Individual Post Page
 * Renders a single blog post with full SEO
 */

require_once __DIR__ . '/../includes/functions.php';
require_once __DIR__ . '/../includes/db.php';

// Get slug from URL
$slug = isset($_GET['slug']) ? trim($_GET['slug']) : '';

if (empty($slug)) {
    header('Location: /blog/');
    exit;
}

// Fetch post
$pdo = getDB();
$stmt = $pdo->prepare("SELECT * FROM posts WHERE slug = ? AND published = 1 LIMIT 1");
$stmt->execute([$slug]);
$post = $stmt->fetch();

if (!$post) {
    http_response_code(404);
    $pageTitle = 'Post Not Found | Xcentra Blog';
    $pageDescription = 'The blog post you are looking for does not exist.';
    $canonicalPath = '/blog/';
    include __DIR__ . '/../includes/template-header.php';
    ?>
    <section class="bg-bg-primary pt-32 pb-16">
      <div class="mx-auto max-w-3xl px-6 sm:px-10 lg:px-16 text-center">
        <h1 class="text-4xl font-medium text-text-primary mb-4">Post Not Found</h1>
        <p class="text-text-secondary mb-8">The article you're looking for doesn't exist or has been removed.</p>
        <a href="/blog/" class="inline-flex items-center gap-2 text-accent hover:text-accent-dark transition-colors font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
          Back to Blog
        </a>
      </div>
    </section>
    <?php
    include __DIR__ . '/../includes/template-footer.php';
    exit;
}

// Page SEO
$pageTitle = $post['meta_title'] ?: $post['title'] . ' | Xcentra Blog';
$pageDescription = $post['meta_description'] ?: truncate($post['excerpt'], 160);
$canonicalPath = '/blog/' . $post['slug'] . '/';
$ogTitle = $post['title'];
$ogDescription = $post['excerpt'];
$ogImage = $post['og_image'] ?: $post['featured_image'];
$ogType = 'article';
$publishedTime = formatDateISO($post['published_at']);

// JSON-LD schemas for <head>
$extraHead = '<script type="application/ld+json">' . articleSchema($post) . '</script>' . "\n"
           . '<script type="application/ld+json">' . breadcrumbSchema($post['title'], $post['slug']) . '</script>';

include __DIR__ . '/../includes/template-header.php';
?>

<!-- Hero Section -->
<section class="relative bg-bg-primary overflow-hidden pt-32 pb-12">
  <div class="relative z-10 mx-auto max-w-4xl px-6 sm:px-10 lg:px-16">
    <!-- Back Link -->
    <div style="opacity:1;transform:none">
      <a class="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors mb-8" href="/blog/">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
        <span class="text-sm font-medium">Back to Blog</span>
      </a>
    </div>

    <!-- Meta -->
    <div style="opacity:1;transform:none">
      <div class="flex items-center gap-3 mb-4">
        <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold <?= getCategoryClass($post['category']) ?>">
          <?= e($post['category']) ?>
        </span>
        <span class="flex items-center gap-1.5 text-text-secondary text-xs">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
          <?= formatDate($post['published_at']) ?>
        </span>
        <span class="flex items-center gap-1.5 text-text-secondary text-xs">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/></svg>
          <?= e($post['read_time']) ?>
        </span>
      </div>
    </div>

    <!-- Title -->
    <div style="opacity:1;transform:none">
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-text-primary mb-6 leading-tight">
        <?= e($post['title']) ?>
      </h1>
    </div>

    <!-- Excerpt -->
    <div style="opacity:1;transform:none">
      <p class="text-lg text-text-secondary leading-relaxed">
        <?= e($post['excerpt']) ?>
      </p>
    </div>
  </div>
</section>

<!-- Featured Image -->
<?php if ($post['featured_image']): ?>
<section class="bg-bg-primary pb-12">
  <div class="mx-auto max-w-4xl px-6 sm:px-10 lg:px-16">
    <div style="opacity:1;transform:none">
      <div class="relative aspect-[16/9] rounded-2xl overflow-hidden">
        <img
          src="<?= e($post['featured_image']) ?>"
          alt="<?= e($post['title']) ?>"
          class="w-full h-full object-cover"
          loading="eager"
        />
      </div>
    </div>
  </div>
</section>
<?php endif; ?>

<!-- Article Content -->
<section class="bg-bg-light py-16">
  <div class="mx-auto max-w-3xl px-6 sm:px-10 lg:px-16">
    <article class="blog-article">
      <?= $post['content'] ?>
    </article>

    <!-- Back to Blog -->
    <div style="opacity:1;transform:none">
      <div class="mt-16 pt-8 border-t border-black/10">
        <a class="inline-flex items-center gap-2 text-accent hover:text-accent-dark transition-colors font-semibold" href="/blog/">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
          Back to All Articles
        </a>
      </div>
    </div>
  </div>
</section>

<style>
/* Blog article content styles — matches the Next.js blog design */
.blog-article h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-dark, #111827);
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  line-height: 1.3;
}
.blog-article h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-dark, #111827);
  margin-top: 2rem;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}
.blog-article p {
  color: var(--text-muted, #6B7280);
  font-size: 17px;
  line-height: 1.8;
  margin-bottom: 1.25rem;
}
.blog-article ul, .blog-article ol {
  color: var(--text-muted, #6B7280);
  font-size: 17px;
  line-height: 1.8;
  margin-bottom: 1.25rem;
  padding-left: 1.5rem;
}
.blog-article ul { list-style-type: disc; }
.blog-article ol { list-style-type: decimal; }
.blog-article li { margin-bottom: 0.5rem; }
.blog-article img {
  max-width: 100%;
  height: auto;
  border-radius: 0.75rem;
  margin: 2rem 0;
}
.blog-article a {
  color: var(--accent, #F5A623);
  text-decoration: none;
}
.blog-article a:hover {
  text-decoration: underline;
}
.blog-article blockquote {
  border-left: 4px solid var(--accent, #F5A623);
  padding-left: 1.5rem;
  font-style: italic;
  color: var(--text-muted, #6B7280);
  margin: 1.5rem 0;
}
.blog-article pre {
  background: #1a1b23;
  color: #e5e7eb;
  padding: 1rem 1.25rem;
  border-radius: 0.75rem;
  overflow-x: auto;
  margin: 1.5rem 0;
  font-size: 14px;
  line-height: 1.6;
}
.blog-article code {
  background: #f3f4f6;
  padding: 0.15rem 0.4rem;
  border-radius: 0.25rem;
  font-size: 0.9em;
}
.blog-article pre code {
  background: none;
  padding: 0;
}
.blog-article strong {
  color: var(--text-dark, #111827);
  font-weight: 600;
}
</style>

<?php include __DIR__ . '/../includes/template-footer.php'; ?>
