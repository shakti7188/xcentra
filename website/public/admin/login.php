<?php
/**
 * Xcentra Blog Admin — Login Page
 */

require_once __DIR__ . '/../includes/auth.php';

initSession();

// If already logged in, redirect to dashboard
if (isLoggedIn()) {
    header('Location: /admin/dashboard.php');
    exit;
}

$error = '';
$rateLimited = false;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $token = $_POST['csrf_token'] ?? '';
    if (!verifyCSRF($token)) {
        $error = 'Invalid request. Please try again.';
    } else {
        if (isRateLimited()) {
            $rateLimited = true;
        } else {
            $username = trim($_POST['username'] ?? '');
            $password = $_POST['password'] ?? '';

            if ($username === '' || $password === '') {
                $error = 'Please enter both username and password.';
            } elseif (attemptLogin($username, $password)) {
                header('Location: /admin/dashboard.php');
                exit;
            } else {
                if (isRateLimited()) {
                    $rateLimited = true;
                } else {
                    $error = 'Invalid username or password.';
                }
            }
        }
    }
}

$csrf = generateCSRF();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login — Xcentra Blog Admin</title>
    <meta name="robots" content="noindex, nofollow">
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
            font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
            background: #0A0B10;
            color: #e5e7eb;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .login-container {
            width: 100%;
            max-width: 420px;
        }

        .login-logo {
            text-align: center;
            margin-bottom: 40px;
        }

        .login-logo img {
            height: 36px;
            width: auto;
        }

        .login-logo-text {
            font-size: 24px;
            font-weight: 700;
            color: #ffffff;
            letter-spacing: -0.025em;
        }

        .login-logo-text span {
            color: #F5A623;
        }

        .login-subtitle {
            color: #9ca3af;
            font-size: 14px;
            margin-top: 8px;
        }

        .login-card {
            background: #1a1b23;
            border: 1px solid rgba(255, 255, 255, 0.06);
            border-radius: 16px;
            padding: 40px;
        }

        .login-card h1 {
            font-size: 20px;
            font-weight: 600;
            color: #ffffff;
            margin-bottom: 8px;
        }

        .login-card p {
            color: #9ca3af;
            font-size: 14px;
            margin-bottom: 32px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            font-size: 13px;
            font-weight: 500;
            color: #d1d5db;
            margin-bottom: 6px;
        }

        .form-group input {
            width: 100%;
            padding: 12px 16px;
            background: #0f1117;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            color: #e5e7eb;
            font-size: 15px;
            font-family: inherit;
            outline: none;
            transition: border-color 0.2s ease;
        }

        .form-group input:focus {
            border-color: #F5A623;
        }

        .form-group input::placeholder {
            color: #6b7280;
        }

        .btn-login {
            width: 100%;
            padding: 13px 24px;
            background: #F5A623;
            color: #0A0B10;
            border: none;
            border-radius: 10px;
            font-size: 15px;
            font-weight: 600;
            font-family: inherit;
            cursor: pointer;
            transition: background-color 0.2s ease, transform 0.1s ease;
            margin-top: 8px;
        }

        .btn-login:hover {
            background: #e6991a;
        }

        .btn-login:active {
            transform: scale(0.98);
        }

        .alert {
            padding: 12px 16px;
            border-radius: 10px;
            font-size: 14px;
            margin-bottom: 24px;
            line-height: 1.5;
        }

        .alert-error {
            background: rgba(239, 68, 68, 0.1);
            border: 1px solid rgba(239, 68, 68, 0.2);
            color: #fca5a5;
        }

        .alert-warning {
            background: rgba(245, 166, 35, 0.1);
            border: 1px solid rgba(245, 166, 35, 0.2);
            color: #F5A623;
        }

        .login-footer {
            text-align: center;
            margin-top: 24px;
            font-size: 13px;
            color: #6b7280;
        }

        .login-footer a {
            color: #F5A623;
            text-decoration: none;
        }

        .login-footer a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <div class="login-logo">
            <div class="login-logo-text">Xcentra<span>.</span></div>
            <div class="login-subtitle">Blog Administration</div>
        </div>

        <div class="login-card">
            <h1>Welcome back</h1>
            <p>Sign in to manage your blog content.</p>

            <?php if ($rateLimited): ?>
                <div class="alert alert-warning">
                    Too many failed attempts. Please wait <?= ceil(LOGIN_LOCKOUT_TIME / 60) ?> minutes before trying again.
                </div>
            <?php elseif ($error): ?>
                <div class="alert alert-error">
                    <?= e($error) ?>
                </div>
            <?php endif; ?>

            <form method="POST" action="/admin/login.php" autocomplete="on">
                <input type="hidden" name="csrf_token" value="<?= e($csrf) ?>">

                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="Enter your username" required autofocus autocomplete="username" value="<?= e($_POST['username'] ?? '') ?>">
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required autocomplete="current-password">
                </div>

                <button type="submit" class="btn-login" <?= $rateLimited ? 'disabled' : '' ?>>Sign In</button>
            </form>
        </div>

        <div class="login-footer">
            <a href="/">&larr; Back to Xcentra.io</a>
        </div>
    </div>
</body>
</html>
