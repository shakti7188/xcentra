-- Xcentra Blog Admin — Database Setup
-- Run this SQL in phpMyAdmin on your cPanel

CREATE DATABASE IF NOT EXISTS `xcentra_blog` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `xcentra_blog`;

-- Users table
CREATE TABLE IF NOT EXISTS `users` (
    `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(50) NOT NULL UNIQUE,
    `password_hash` VARCHAR(255) NOT NULL,
    `display_name` VARCHAR(100) NOT NULL DEFAULT 'Admin',
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `last_login` TIMESTAMP NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Blog posts table
CREATE TABLE IF NOT EXISTS `posts` (
    `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `slug` VARCHAR(255) NOT NULL UNIQUE,
    `title` VARCHAR(255) NOT NULL,
    `excerpt` TEXT NOT NULL,
    `content` LONGTEXT NOT NULL,
    `featured_image` VARCHAR(500) DEFAULT NULL,
    `category` ENUM('Announcement','Industry','Education','Lifestyle','Product','Regional') NOT NULL DEFAULT 'Announcement',
    `read_time` VARCHAR(20) DEFAULT '5 min read',
    `published` TINYINT(1) NOT NULL DEFAULT 0,
    `meta_title` VARCHAR(255) DEFAULT NULL,
    `meta_description` VARCHAR(320) DEFAULT NULL,
    `og_image` VARCHAR(500) DEFAULT NULL,
    `author_id` INT UNSIGNED DEFAULT NULL,
    `published_at` DATETIME DEFAULT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX `idx_published` (`published`),
    INDEX `idx_category` (`category`),
    INDEX `idx_published_at` (`published_at` DESC),
    FOREIGN KEY (`author_id`) REFERENCES `users`(`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert default admin user (password: XcentraAdmin2026!)
-- CHANGE THIS PASSWORD after first login!
INSERT INTO `users` (`username`, `password_hash`, `display_name`) VALUES
('admin', '$2y$10$YJGxJ8Q5ZQ1x5K5K5K5K5OHqKqKqKqKqKqKqKqKqKqKqKqKqKqKqK', 'Admin');
-- Note: The hash above is a placeholder. Run the setup-password.php script to set the real password.
