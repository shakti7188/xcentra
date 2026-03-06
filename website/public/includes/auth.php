<?php
/**
 * Xcentra Blog Admin — Authentication & Session Management
 */

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/db.php';

// Start session with secure settings
function initSession(): void {
    if (session_status() === PHP_SESSION_NONE) {
        session_set_cookie_params([
            'lifetime' => SESSION_TIMEOUT,
            'path'     => '/admin/',
            'secure'   => true,
            'httponly'  => true,
            'samesite'  => 'Strict',
        ]);
        session_start();
    }
}

// Check if user is logged in
function isLoggedIn(): bool {
    initSession();
    if (!isset($_SESSION['user_id']) || !isset($_SESSION['last_activity'])) {
        return false;
    }
    // Check session timeout
    if (time() - $_SESSION['last_activity'] > SESSION_TIMEOUT) {
        destroySession();
        return false;
    }
    $_SESSION['last_activity'] = time();
    return true;
}

// Require authentication (redirect to login if not logged in)
function requireAuth(): void {
    if (!isLoggedIn()) {
        header('Location: /admin/login.php');
        exit;
    }
}

// Attempt login
function attemptLogin(string $username, string $password): bool {
    initSession();

    // Check rate limiting
    if (isRateLimited()) {
        return false;
    }

    $pdo = getDB();
    $stmt = $pdo->prepare('SELECT id, username, password_hash, display_name FROM users WHERE username = ? LIMIT 1');
    $stmt->execute([$username]);
    $user = $stmt->fetch();

    if ($user && password_verify($password, $user['password_hash'])) {
        // Successful login
        session_regenerate_id(true);
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];
        $_SESSION['display_name'] = $user['display_name'];
        $_SESSION['last_activity'] = time();
        $_SESSION['login_attempts'] = 0;

        // Update last login
        $stmt = $pdo->prepare('UPDATE users SET last_login = NOW() WHERE id = ?');
        $stmt->execute([$user['id']]);

        return true;
    }

    // Failed login - increment attempts
    $_SESSION['login_attempts'] = ($_SESSION['login_attempts'] ?? 0) + 1;
    $_SESSION['last_failed_login'] = time();
    return false;
}

// Check rate limiting
function isRateLimited(): bool {
    initSession();
    $attempts = $_SESSION['login_attempts'] ?? 0;
    $lastFailed = $_SESSION['last_failed_login'] ?? 0;

    if ($attempts >= MAX_LOGIN_ATTEMPTS) {
        if (time() - $lastFailed < LOGIN_LOCKOUT_TIME) {
            return true;
        }
        // Reset after lockout period
        $_SESSION['login_attempts'] = 0;
    }
    return false;
}

// Destroy session (logout)
function destroySession(): void {
    initSession();
    $_SESSION = [];
    if (ini_get('session.use_cookies')) {
        $params = session_get_cookie_params();
        setcookie(session_name(), '', time() - 42000,
            $params['path'], $params['domain'],
            $params['secure'], $params['httponly']
        );
    }
    session_destroy();
}

// Generate CSRF token
function generateCSRF(): string {
    initSession();
    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}

// Verify CSRF token
function verifyCSRF(string $token): bool {
    initSession();
    return isset($_SESSION['csrf_token']) && hash_equals($_SESSION['csrf_token'], $token);
}

// Output CSRF hidden input
function csrfField(): string {
    return '<input type="hidden" name="csrf_token" value="' . htmlspecialchars(generateCSRF()) . '">';
}

// Get current user display name
function getCurrentUserName(): string {
    initSession();
    return $_SESSION['display_name'] ?? 'Admin';
}
