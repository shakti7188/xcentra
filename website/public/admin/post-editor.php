<?php
/**
 * Xcentra Blog Admin — Post Editor (Create / Edit)
 */

require_once __DIR__ . '/../includes/auth.php';
require_once __DIR__ . '/../includes/db.php';
require_once __DIR__ . '/../includes/functions.php';

requireAuth();

$pdo = getDB();
$csrf = generateCSRF();
$userName = getCurrentUserName();

// Determine mode: create or edit
$postId = isset($_GET['id']) ? (int)$_GET['id'] : 0;
$post = null;
$isEdit = false;

if ($postId > 0) {
    $stmt = $pdo->prepare('SELECT * FROM posts WHERE id = ? LIMIT 1');
    $stmt->execute([$postId]);
    $post = $stmt->fetch();
    if (!$post) {
        header('Location: /admin/dashboard.php');
        exit;
    }
    $isEdit = true;
}

$categories = ['Announcement', 'Industry', 'Education', 'Lifestyle', 'Product', 'Regional'];
$pageTitle = $isEdit ? 'Edit Post' : 'New Post';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= e($pageTitle) ?> — Xcentra Blog Admin</title>
    <meta name="robots" content="noindex, nofollow">
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/admin/assets/admin.css">
    <script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/6/tinymce.min.js" referrerpolicy="origin"></script>
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
                <a href="/admin/dashboard.php" class="nav-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                    Dashboard
                </a>
                <a href="/admin/post-editor.php" class="nav-item <?= !$isEdit ? 'active' : '' ?>">
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
                    <h1><?= e($pageTitle) ?></h1>
                    <span class="welcome-text"><?= $isEdit ? 'Editing: ' . e(truncate($post['title'], 50)) : 'Create a new blog post' ?></span>
                </div>
                <div class="top-bar-right">
                    <a href="/admin/dashboard.php" class="btn btn-secondary">Cancel</a>
                    <button type="button" class="btn btn-primary" id="btn-save" onclick="savePost()">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
                        Save Post
                    </button>
                </div>
            </div>

            <!-- Save notification -->
            <div id="save-notification" class="notification" style="display: none;"></div>

            <!-- Editor Form -->
            <div class="editor-grid">
                <!-- Main Column -->
                <div class="editor-main">
                    <!-- Title -->
                    <div class="card">
                        <div class="form-group">
                            <label for="post-title">Title</label>
                            <input type="text" id="post-title" class="input input-large" placeholder="Enter post title..." value="<?= $isEdit ? e($post['title']) : '' ?>">
                        </div>

                        <div class="form-row">
                            <div class="form-group flex-1">
                                <label for="post-slug">Slug</label>
                                <div class="input-prefix-group">
                                    <span class="input-prefix">/blog/</span>
                                    <input type="text" id="post-slug" class="input" placeholder="auto-generated-from-title" value="<?= $isEdit ? e($post['slug']) : '' ?>">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="post-category">Category</label>
                                <select id="post-category" class="input">
                                    <?php foreach ($categories as $cat): ?>
                                        <option value="<?= e($cat) ?>" <?= ($isEdit && $post['category'] === $cat) ? 'selected' : '' ?>><?= e($cat) ?></option>
                                    <?php endforeach; ?>
                                </select>
                            </div>
                        </div>
                    </div>

                    <!-- Featured Image -->
                    <div class="card">
                        <div class="form-group">
                            <label>Featured Image</label>
                            <div class="image-upload-area" id="image-upload-area">
                                <div id="image-preview" class="image-preview" style="<?= ($isEdit && $post['featured_image']) ? '' : 'display:none;' ?>">
                                    <img id="preview-img" src="<?= $isEdit && $post['featured_image'] ? e($post['featured_image']) : '' ?>" alt="Preview">
                                    <button type="button" class="btn-remove-image" onclick="removeImage()">&times;</button>
                                </div>
                                <div id="image-upload-prompt" class="upload-prompt" style="<?= ($isEdit && $post['featured_image']) ? 'display:none;' : '' ?>">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                                    <span>Click to upload or drag and drop</span>
                                    <span class="upload-hint">JPEG, PNG, WebP, or GIF (max 5MB)</span>
                                </div>
                                <input type="file" id="image-file" accept="image/jpeg,image/png,image/webp,image/gif" style="display:none;">
                            </div>
                            <input type="hidden" id="featured-image-url" value="<?= $isEdit && $post['featured_image'] ? e($post['featured_image']) : '' ?>">
                        </div>
                    </div>

                    <!-- Excerpt -->
                    <div class="card">
                        <div class="form-group">
                            <label for="post-excerpt">Excerpt</label>
                            <textarea id="post-excerpt" class="input" rows="3" maxlength="300" placeholder="Brief summary of the post (max 300 characters)..."><?= $isEdit ? e($post['excerpt']) : '' ?></textarea>
                            <div class="char-counter"><span id="excerpt-count"><?= $isEdit ? mb_strlen($post['excerpt']) : 0 ?></span>/300</div>
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="card">
                        <div class="form-group">
                            <label for="post-content">Content</label>
                            <textarea id="post-content"><?= $isEdit ? e($post['content']) : '' ?></textarea>
                        </div>
                    </div>

                    <!-- SEO Section -->
                    <div class="card">
                        <div class="card-header collapsible" onclick="toggleSEO()">
                            <h2>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                SEO Settings
                            </h2>
                            <svg class="chevron" id="seo-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </div>
                        <div id="seo-body" class="card-body-collapsible" style="display: none;">
                            <div class="form-group">
                                <label for="meta-title">Meta Title</label>
                                <input type="text" id="meta-title" class="input" placeholder="Auto-generated from title" value="<?= $isEdit && $post['meta_title'] ? e($post['meta_title']) : '' ?>">
                                <div class="input-hint">Leave blank to auto-generate: "Title | Xcentra Blog"</div>
                            </div>
                            <div class="form-group">
                                <label for="meta-description">Meta Description</label>
                                <textarea id="meta-description" class="input" rows="2" placeholder="Auto-generated from excerpt"><?= $isEdit && $post['meta_description'] ? e($post['meta_description']) : '' ?></textarea>
                                <div class="input-hint">Leave blank to auto-generate from excerpt (max 160 chars).</div>
                            </div>

                            <!-- Google Preview -->
                            <div class="seo-preview">
                                <div class="seo-preview-label">Google Search Preview</div>
                                <div class="seo-preview-box">
                                    <div class="seo-preview-title" id="seo-preview-title"><?= $isEdit ? e($post['meta_title'] ?: $post['title'] . ' | Xcentra Blog') : 'Post Title | Xcentra Blog' ?></div>
                                    <div class="seo-preview-url" id="seo-preview-url"><?= SITE_URL ?>/blog/<?= $isEdit ? e($post['slug']) : '...' ?>/</div>
                                    <div class="seo-preview-desc" id="seo-preview-desc"><?= $isEdit ? e($post['meta_description'] ?: truncate($post['excerpt'], 160)) : 'Post excerpt will appear here...' ?></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Sidebar Column -->
                <div class="editor-sidebar">
                    <!-- Publish Settings -->
                    <div class="card">
                        <div class="card-header">
                            <h2>Publish</h2>
                        </div>
                        <div class="card-body">
                            <div class="publish-toggle">
                                <label class="toggle-switch">
                                    <input type="checkbox" id="post-published" <?= ($isEdit && $post['published']) ? 'checked' : '' ?>>
                                    <span class="toggle-slider"></span>
                                </label>
                                <span class="toggle-label" id="publish-label"><?= ($isEdit && $post['published']) ? 'Published' : 'Draft' ?></span>
                            </div>

                            <?php if ($isEdit): ?>
                                <div class="publish-meta">
                                    <div class="publish-meta-item">
                                        <span class="meta-label">Created:</span>
                                        <span class="meta-value"><?= e(formatDate($post['created_at'])) ?></span>
                                    </div>
                                    <?php if ($post['published_at']): ?>
                                    <div class="publish-meta-item">
                                        <span class="meta-label">Published:</span>
                                        <span class="meta-value"><?= e(formatDate($post['published_at'])) ?></span>
                                    </div>
                                    <?php endif; ?>
                                    <div class="publish-meta-item">
                                        <span class="meta-label">Updated:</span>
                                        <span class="meta-value"><?= e(formatDate($post['updated_at'])) ?></span>
                                    </div>
                                </div>
                            <?php endif; ?>

                            <button type="button" class="btn btn-primary btn-full" onclick="savePost()">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
                                Save Post
                            </button>
                        </div>
                    </div>

                    <!-- Quick Tips -->
                    <div class="card">
                        <div class="card-header">
                            <h2>Quick Tips</h2>
                        </div>
                        <div class="card-body">
                            <ul class="tips-list">
                                <li>Use H2 and H3 headings for structure</li>
                                <li>Keep excerpts under 300 characters</li>
                                <li>Featured images should be at least 1200px wide</li>
                                <li>SEO fields auto-fill if left blank</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>

    <script>
    // Post ID (0 for new)
    const postId = <?= $postId ?>;
    const csrfToken = '<?= e($csrf) ?>';
    let slugManuallyEdited = <?= ($isEdit && $post['slug']) ? 'true' : 'false' ?>;

    // ===== TinyMCE Init =====
    tinymce.init({
        selector: '#post-content',
        height: 500,
        menubar: false,
        plugins: 'lists link image blockquote code table wordcount',
        toolbar: 'undo redo | formatselect | bold italic underline | h2 h3 h4 | bullist numlist | link image blockquote | code | removeformat',
        block_formats: 'Paragraph=p; Heading 2=h2; Heading 3=h3; Heading 4=h4',
        content_style: `
            @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
            body {
                font-family: 'Plus Jakarta Sans', sans-serif;
                font-size: 16px;
                line-height: 1.7;
                color: #e5e7eb;
                background: #0f1117;
                padding: 16px;
                max-width: 100%;
            }
            h2 { font-size: 24px; font-weight: 700; margin-top: 32px; margin-bottom: 12px; color: #ffffff; }
            h3 { font-size: 20px; font-weight: 600; margin-top: 24px; margin-bottom: 8px; color: #ffffff; }
            h4 { font-size: 18px; font-weight: 600; margin-top: 20px; margin-bottom: 8px; color: #ffffff; }
            p { margin-bottom: 16px; }
            a { color: #F5A623; }
            blockquote { border-left: 3px solid #F5A623; padding-left: 16px; margin: 16px 0; color: #9ca3af; font-style: italic; }
            img { max-width: 100%; height: auto; border-radius: 8px; }
            ul, ol { margin-bottom: 16px; padding-left: 24px; }
            li { margin-bottom: 4px; }
            code { background: rgba(245,166,35,0.1); padding: 2px 6px; border-radius: 4px; font-size: 14px; }
            pre { background: #1a1b23; padding: 16px; border-radius: 8px; overflow-x: auto; }
        `,
        skin: 'oxide-dark',
        content_css: 'dark',
        images_upload_handler: function (blobInfo, progress) {
            return new Promise(function (resolve, reject) {
                var formData = new FormData();
                formData.append('file', blobInfo.blob(), blobInfo.filename());

                var xhr = new XMLHttpRequest();
                xhr.open('POST', '/admin/upload.php');

                xhr.upload.onprogress = function (e) {
                    progress(e.loaded / e.total * 100);
                };

                xhr.onload = function () {
                    if (xhr.status !== 200) {
                        reject('Upload failed: ' + xhr.status);
                        return;
                    }
                    var json = JSON.parse(xhr.responseText);
                    if (json.location) {
                        resolve(json.location);
                    } else {
                        reject('Upload error: ' + (json.error || 'Unknown'));
                    }
                };

                xhr.onerror = function () {
                    reject('Network error during upload.');
                };

                xhr.send(formData);
            });
        },
        promotion: false,
        branding: false,
    });

    // ===== Slug Auto-generation =====
    document.getElementById('post-title').addEventListener('blur', function () {
        const slugField = document.getElementById('post-slug');
        if (!slugManuallyEdited || slugField.value.trim() === '') {
            slugField.value = slugifyJS(this.value);
        }
        updateSEOPreview();
    });

    document.getElementById('post-slug').addEventListener('input', function () {
        slugManuallyEdited = this.value.trim() !== '';
        updateSEOPreview();
    });

    function slugifyJS(text) {
        return text
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/[\s-]+/g, '-')
            .replace(/^-+|-+$/g, '')
            .substring(0, 100);
    }

    // ===== Excerpt Character Counter =====
    document.getElementById('post-excerpt').addEventListener('input', function () {
        document.getElementById('excerpt-count').textContent = this.value.length;
        updateSEOPreview();
    });

    // ===== Featured Image Upload =====
    const uploadArea = document.getElementById('image-upload-area');
    const imageFileInput = document.getElementById('image-file');

    document.getElementById('image-upload-prompt').addEventListener('click', function () {
        imageFileInput.click();
    });

    uploadArea.addEventListener('dragover', function (e) {
        e.preventDefault();
        this.classList.add('dragover');
    });

    uploadArea.addEventListener('dragleave', function () {
        this.classList.remove('dragover');
    });

    uploadArea.addEventListener('drop', function (e) {
        e.preventDefault();
        this.classList.remove('dragover');
        if (e.dataTransfer.files.length) {
            uploadImage(e.dataTransfer.files[0]);
        }
    });

    imageFileInput.addEventListener('change', function () {
        if (this.files.length) {
            uploadImage(this.files[0]);
        }
    });

    function uploadImage(file) {
        if (file.size > 5 * 1024 * 1024) {
            showNotification('File is too large. Maximum size is 5MB.', 'error');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        const prompt = document.getElementById('image-upload-prompt');
        prompt.innerHTML = '<span class="upload-hint">Uploading...</span>';

        fetch('/admin/upload.php', { method: 'POST', body: formData })
            .then(r => r.json())
            .then(data => {
                if (data.location) {
                    document.getElementById('featured-image-url').value = data.location;
                    document.getElementById('preview-img').src = data.location;
                    document.getElementById('image-preview').style.display = '';
                    prompt.style.display = 'none';
                } else {
                    showNotification('Upload failed: ' + (data.error || 'Unknown error'), 'error');
                    resetUploadPrompt();
                }
            })
            .catch(() => {
                showNotification('Network error during upload.', 'error');
                resetUploadPrompt();
            });
    }

    function removeImage() {
        document.getElementById('featured-image-url').value = '';
        document.getElementById('image-preview').style.display = 'none';
        document.getElementById('image-upload-prompt').style.display = '';
        resetUploadPrompt();
        imageFileInput.value = '';
    }

    function resetUploadPrompt() {
        const prompt = document.getElementById('image-upload-prompt');
        prompt.style.display = '';
        prompt.innerHTML = `
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
            <span>Click to upload or drag and drop</span>
            <span class="upload-hint">JPEG, PNG, WebP, or GIF (max 5MB)</span>
        `;
    }

    // ===== SEO Preview =====
    function toggleSEO() {
        const body = document.getElementById('seo-body');
        const chevron = document.getElementById('seo-chevron');
        if (body.style.display === 'none') {
            body.style.display = '';
            chevron.style.transform = 'rotate(180deg)';
        } else {
            body.style.display = 'none';
            chevron.style.transform = '';
        }
    }

    function updateSEOPreview() {
        const title = document.getElementById('post-title').value || 'Post Title';
        const slug = document.getElementById('post-slug').value || '...';
        const excerpt = document.getElementById('post-excerpt').value || 'Post excerpt will appear here...';
        const metaTitle = document.getElementById('meta-title').value || title + ' | Xcentra Blog';
        const metaDesc = document.getElementById('meta-description').value || excerpt.substring(0, 160);

        document.getElementById('seo-preview-title').textContent = metaTitle;
        document.getElementById('seo-preview-url').textContent = '<?= SITE_URL ?>/blog/' + slug + '/';
        document.getElementById('seo-preview-desc').textContent = metaDesc;
    }

    document.getElementById('meta-title').addEventListener('input', updateSEOPreview);
    document.getElementById('meta-description').addEventListener('input', updateSEOPreview);

    // ===== Publish Toggle =====
    document.getElementById('post-published').addEventListener('change', function () {
        document.getElementById('publish-label').textContent = this.checked ? 'Published' : 'Draft';
    });

    // ===== Save Post =====
    function savePost() {
        const btn = document.getElementById('btn-save');
        btn.disabled = true;
        btn.innerHTML = 'Saving...';

        // Sync TinyMCE
        tinymce.triggerSave();

        const data = {
            csrf_token: csrfToken,
            id: postId || undefined,
            title: document.getElementById('post-title').value.trim(),
            slug: document.getElementById('post-slug').value.trim(),
            category: document.getElementById('post-category').value,
            featured_image: document.getElementById('featured-image-url').value,
            excerpt: document.getElementById('post-excerpt').value.trim(),
            content: document.getElementById('post-content').value,
            published: document.getElementById('post-published').checked ? 1 : 0,
            meta_title: document.getElementById('meta-title').value.trim(),
            meta_description: document.getElementById('meta-description').value.trim(),
        };

        if (!data.title) {
            showNotification('Please enter a post title.', 'error');
            btn.disabled = false;
            btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg> Save Post';
            return;
        }

        fetch('/admin/post-save.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
        .then(r => r.json())
        .then(result => {
            if (result.success) {
                showNotification('Post saved successfully!', 'success');
                setTimeout(() => {
                    window.location.href = '/admin/dashboard.php';
                }, 1000);
            } else {
                showNotification('Error: ' + (result.error || 'Failed to save post.'), 'error');
                btn.disabled = false;
                btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg> Save Post';
            }
        })
        .catch(() => {
            showNotification('Network error. Please try again.', 'error');
            btn.disabled = false;
            btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg> Save Post';
        });
    }

    // ===== Notification =====
    function showNotification(message, type) {
        const el = document.getElementById('save-notification');
        el.textContent = message;
        el.className = 'notification notification-' + type;
        el.style.display = '';
        setTimeout(() => { el.style.display = 'none'; }, 5000);
    }
    </script>
</body>
</html>
