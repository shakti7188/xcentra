<?php
/**
 * Xcentra Blog Admin — Logout
 */

require_once __DIR__ . '/../includes/auth.php';

destroySession();
header('Location: /admin/login.php');
exit;
