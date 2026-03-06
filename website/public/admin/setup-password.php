<?php
/**
 * Xcentra Blog Admin — Password Setup
 * Run this script ONCE to set the admin password.
 * DELETE THIS FILE after use for security!
 */

require_once __DIR__ . '/../includes/db.php';

$message = '';
$messageType = '';
$success = false;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $password = $_POST['password'] ?? '';
    $confirmPassword = $_POST['confirm_password'] ?? '';
    $username = trim($_POST['username'] ?? 'admin');

    if ($password === '') {
        $message = 'Password cannot be empty.';
        $messageType = 'error';
    } elseif (strlen($password) < 8) {
        $message = 'Password must be at least 8 characters long.';
        $messageType = 'error';
    } elseif ($password !== $confirmPassword) {
        $message = 'Passwords do not match.';
        $messageType = 'error';
    } else {
        try {
            $pdo = getDB();
            $hash = password_hash($password, PASSWORD_DEFAULT);

            // Check if user exists
            $stmt = $pdo->prepare('SELECT id FROM users WHERE username = ? LIMIT 1');
            $stmt->execute([$username]);
            $existing = $stmt->fetch();

            if ($existing) {
                // Update existing user
                $stmt = $pdo->prepare('UPDATE users SET password_hash = ? WHERE username = ?');
                $stmt->execute([$hash, $username]);
                $message = 'Password updated successfully for "' . htmlspecialchars($username) . '".';
            } else {
                // Insert new user
                $stmt = $pdo->prepare('INSERT INTO users (username, password_hash, display_name) VALUES (?, ?, ?)');
                $stmt->execute([$username, $hash, ucfirst($username)]);
                $message = 'Admin user "' . htmlspecialchars($username) . '" created successfully.';
            }

            $messageType = 'success';
            $success = true;
        } catch (PDOException $e) {
            $message = 'Database error. Make sure you have run setup.sql first.';
            $messageType = 'error';
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Setup Password — Xcentra Blog Admin</title>
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

        .setup-container {
            width: 100%;
            max-width: 460px;
        }

        .setup-logo {
            text-align: center;
            margin-bottom: 40px;
        }

        .setup-logo-text {
            font-size: 24px;
            font-weight: 700;
            color: #ffffff;
        }

        .setup-logo-text span { color: #F5A623; }

        .setup-subtitle {
            color: #9ca3af;
            font-size: 14px;
            margin-top: 8px;
        }

        .setup-card {
            background: #1a1b23;
            border: 1px solid rgba(255, 255, 255, 0.06);
            border-radius: 16px;
            padding: 40px;
        }

        .setup-card h1 {
            font-size: 20px;
            font-weight: 600;
            color: #ffffff;
            margin-bottom: 8px;
        }

        .setup-card > p {
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

        .form-group input:focus { border-color: #F5A623; }
        .form-group input::placeholder { color: #6b7280; }

        .btn-setup {
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
            transition: background-color 0.2s ease;
            margin-top: 8px;
        }

        .btn-setup:hover { background: #e6991a; }

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

        .alert-success {
            background: rgba(16, 185, 129, 0.1);
            border: 1px solid rgba(16, 185, 129, 0.2);
            color: #34d399;
        }

        .alert-warning {
            background: rgba(245, 166, 35, 0.1);
            border: 1px solid rgba(245, 166, 35, 0.2);
            color: #F5A623;
        }

        .warning-box {
            background: rgba(239, 68, 68, 0.08);
            border: 1px solid rgba(239, 68, 68, 0.2);
            border-radius: 10px;
            padding: 16px;
            margin-top: 24px;
            font-size: 13px;
            color: #fca5a5;
            line-height: 1.5;
        }

        .warning-box strong { color: #f87171; }

        .login-link {
            display: block;
            text-align: center;
            margin-top: 24px;
            color: #F5A623;
            text-decoration: none;
            font-size: 14px;
        }

        .login-link:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <div class="setup-container">
        <div class="setup-logo">
            <div class="setup-logo-text">Xcentra<span>.</span></div>
            <div class="setup-subtitle">Admin Setup</div>
        </div>

        <div class="setup-card">
            <h1>Set Admin Password</h1>
            <p>Create or update the admin account password.</p>

            <?php if ($message): ?>
                <div class="alert alert-<?= $messageType ?>">
                    <?= $message ?>
                </div>
            <?php endif; ?>

            <?php if ($success): ?>
                <div class="alert alert-warning">
                    <strong>Important:</strong> Delete this file (setup-password.php) immediately for security!
                </div>
                <a href="/admin/login.php" class="login-link">Go to Login &rarr;</a>
            <?php else: ?>
                <form method="POST" action="/admin/setup-password.php">
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" id="username" name="username" value="admin" placeholder="admin">
                    </div>

                    <div class="form-group">
                        <label for="password">New Password</label>
                        <input type="password" id="password" name="password" required placeholder="Minimum 8 characters" minlength="8">
                    </div>

                    <div class="form-group">
                        <label for="confirm_password">Confirm Password</label>
                        <input type="password" id="confirm_password" name="confirm_password" required placeholder="Re-enter password" minlength="8">
                    </div>

                    <button type="submit" class="btn-setup">Set Password</button>
                </form>

                <div class="warning-box">
                    <strong>Security Warning:</strong> This file allows anyone to set the admin password. Delete it immediately after setting your password. Access it only during initial setup.
                </div>
            <?php endif; ?>
        </div>
    </div>
</body>
</html>
