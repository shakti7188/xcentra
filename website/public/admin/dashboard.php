<?php
/**
 * Xcentra Blog Admin — Dashboard
 */

require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/db.php';
require_once __DIR__ . '/../includes/functions.php';

requireAuth();

$pdo = getDB();

// Fetch stats
$totalPosts = $pdo->query("SELECT COUNT(*) FROM posts")->fetchColumn();
$publishedPosts = $pdo->query("SELECT COUNT(*) FROM posts WHERE published = 1")->fetchColumn();
$draftPosts = $pdo->query("SELECT COUNT(*) FROM posts WHERE published = 0")->fetchColumn();

// Fetch all posts for the table
$posts = $pdo->query("SELECT id, title, slug, category, published, published_at, created_at, updated_at FROM posts ORDER BY created_at DESC")->fetchAll();

$userName = getCurrentUserName();
$csrf = generateCSRF();

// Admin category badge colors (no Tailwind — pure CSS)
$categoryColors = [
    'Announcement' => ['bg' => 'rgba(245,166,35,0.12)', 'text' => '#F5A623'],
    'Industry'     => ['bg' => 'rgba(59,130,246,0.12)', 'text' => '#60a5fa'],
    'Education'    => ['bg' => 'rgba(16,185,129,0.12)', 'text' => '#34d399'],
    'Lifestyle'    => ['bg' => 'rgba(168,85,247,0.12)',  'text' => '#c084fc'],
    'Product'      => ['bg' => 'rgba(245,158,11,0.12)',  'text' => '#fbbf24'],
    'Regional'     => ['bg' => 'rgba(236,72,153,0.12)',  'text' => '#f472b6'],
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard — Xcentra Blog Admin</title>
    <meta name="robots" content="noindex, nofollow">
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/admin/assets/admin.css">
</head>
<body>
    <div class="admin-layout">
        <!-- Sidebar -->
        <aside class="sidebar">
            <div class="sidebar-logo">
                <span class="logo-text">Xcentra<span class="accent">.</span></span>
                <span class="logo-sub">Admin</span>
            </div>

            <nav class="sidebar-nav">
                <a href="/admin/dashboard.php" class="nav-item active">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                    Dashboard
                </a>
                <a href="/admin/post-editor.php" class="nav-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    New Post
                </a>
                <a href="/admin/dashboard.php" class="nav-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
                    All Posts
                </a>
            </nav>

            <div class="sidebar-footer">
                <a href="/admin/logout.php" class="nav-item logout-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                    Logout
                </a>
            </div>
        </aside>

        <!-- Main Content -->
        <main class="main-content">
            <!-- Top Bar -->
            <div class="top-bar">
                <div class="top-bar-left">
                    <h1>Dashboard</h1>
                    <span class="welcome-text">Welcome, <?= e($userName) ?></span>
                </div>
                <div class="top-bar-right">
                    <a href="/admin/post-editor.php" class="btn btn-primary">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        New Post
                    </a>
                </div>
            </div>

            <!-- Stats Cards -->
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-label">Total Posts</div>
                    <div class="stat-value"><?= (int)$totalPosts ?></div>
                </div>
                <div class="stat-card">
                    <div class="stat-label">Published</div>
                    <div class="stat-value stat-published"><?= (int)$publishedPosts ?></div>
                </div>
                <div class="stat-card">
                    <div class="stat-label">Drafts</div>
                    <div class="stat-value stat-drafts"><?= (int)$draftPosts ?></div>
                </div>
            </div>

            <!-- Posts Table -->
            <div class="card">
                <div class="card-header">
                    <h2>All Posts</h2>
                </div>
                <div class="table-wrapper">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php if (empty($posts)): ?>
                                <tr>
                                    <td colspan="5" class="empty-state">No posts yet. <a href="/admin/post-editor.php">Create your first post</a>.</td>
                                </tr>
                            <?php else: ?>
                                <?php foreach ($posts as $post):
                                    $catColor = $categoryColors[$post['category']] ?? ['bg' => 'rgba(107,114,128,0.12)', 'text' => '#9ca3af'];
                                    $date = $post['published_at'] ? formatDate($post['published_at']) : formatDate($post['created_at']);
                                ?>
                                <tr id="post-row-<?= (int)$post['id'] ?>">
                                    <td>
                                        <div class="post-title-cell">
                                            <span class="post-title"><?= e($post['title']) ?></span>
                                            <span class="post-slug">/blog/<?= e($post['slug']) ?>/</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span class="badge" style="background: <?= $catColor['bg'] ?>; color: <?= $catColor['text'] ?>;">
                                            <?= e($post['category']) ?>
                                        </span>
                                    </td>
                                    <td>
                                        <?php if ($post['published']): ?>
                                            <span class="badge badge-published">Published</span>
                                        <?php else: ?>
                                            <span class="badge badge-draft">Draft</span>
                                        <?php endif; ?>
                                    </td>
                                    <td class="date-cell"><?= e($date) ?></td>
                                    <td>
                                        <div class="action-buttons">
                                            <a href="/admin/post-editor.php?id=<?= (int)$post['id'] ?>" class="btn-action btn-edit" title="Edit">
                                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                            </a>
                                            <button type="button" class="btn-action btn-delete" title="Delete" onclick="deletePost(<?= (int)$post['id'] ?>, '<?= e(addslashes($post['title'])) ?>')">
                                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <?php endforeach; ?>
                            <?php endif; ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    </div>

    <script>
    function deletePost(id, title) {
        if (!confirm('Are you sure you want to delete "' + title + '"? This action cannot be undone.')) {
            return;
        }

        fetch('/admin/post-delete.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: id,
                csrf_token: '<?= e($csrf) ?>'
            })
        })
        .then(r => r.json())
        .then(data => {
            if (data.success) {
                const row = document.getElementById('post-row-' + id);
                if (row) {
                    row.style.transition = 'opacity 0.3s ease';
                    row.style.opacity = '0';
                    setTimeout(() => row.remove(), 300);
                }
                // Update stats
                setTimeout(() => location.reload(), 500);
            } else {
                alert('Error: ' + (data.error || 'Failed to delete post.'));
            }
        })
        .catch(() => {
            alert('Network error. Please try again.');
        });
    }
    </script>
</body>
</html>
