<?php
/**
 * Xcentra Blog — Template Footer
 *
 * Closes </main> and outputs the full footer matching the existing Next.js design.
 * Requires config.php and functions.php to be loaded before including this file.
 */
?>
</main>

<footer class="bg-bg-primary border-t border-border-dark">
  <div class="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">

    <!-- Main Footer -->
    <div class="grid grid-cols-2 gap-8 py-16 md:grid-cols-5">

      <!-- Brand Column -->
      <div class="col-span-2 md:col-span-1">
        <div class="mb-4">
          <img
            src="<?php echo e(SITE_LOGO_WHITE); ?>"
            alt="<?php echo e(SITE_NAME); ?>"
            width="280"
            height="80"
            class="h-14 sm:h-16 w-auto"
          />
        </div>
        <p class="text-sm text-text-secondary leading-relaxed mb-6">
          The borderless digital finance platform. Spend stablecoins like everyday money.
        </p>
        <div class="flex gap-3">
          <!-- Instagram -->
          <a href="https://www.instagram.com/xcentraofficial/" target="_blank" rel="noopener noreferrer nofollow" class="flex h-9 w-9 items-center justify-center rounded-lg border border-border-dark text-text-secondary hover:text-accent hover:border-accent/30 transition-colors">
            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <!-- LinkedIn -->
          <a href="https://www.linkedin.com/company/xcentra/" target="_blank" rel="noopener noreferrer nofollow" class="flex h-9 w-9 items-center justify-center rounded-lg border border-border-dark text-text-secondary hover:text-accent hover:border-accent/30 transition-colors">
            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <!-- Facebook -->
          <a href="https://www.facebook.com/profile.php?id=61587907153019" target="_blank" rel="noopener noreferrer nofollow" class="flex h-9 w-9 items-center justify-center rounded-lg border border-border-dark text-text-secondary hover:text-accent hover:border-accent/30 transition-colors">
            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <!-- Twitter / X -->
          <a href="https://x.com/Xcentraofficial" target="_blank" rel="noopener noreferrer nofollow" class="flex h-9 w-9 items-center justify-center rounded-lg border border-border-dark text-text-secondary hover:text-accent hover:border-accent/30 transition-colors">
            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
          </a>
        </div>
      </div>

      <!-- Products -->
      <div>
        <h3 class="text-sm font-semibold text-text-primary mb-4">Products</h3>
        <ul class="space-y-3">
          <li><a href="/cards/" class="text-sm text-text-secondary hover:text-text-primary transition-colors">Global Cards</a></li>
          <li><a href="/white-label/" class="text-sm text-text-secondary hover:text-text-primary transition-colors">B2B Services</a></li>
          <li><a href="/global-payouts/" class="text-sm text-text-secondary hover:text-text-primary transition-colors">Global Payouts</a></li>
          <li><a href="/global-usd-account/" class="text-sm text-text-secondary hover:text-text-primary transition-colors">USD Account</a></li>
          <li><a href="/merchant-ecosystem/" class="text-sm text-text-secondary hover:text-text-primary transition-colors">Merchant Ecosystem</a></li>
        </ul>
      </div>

      <!-- Company -->
      <div>
        <h3 class="text-sm font-semibold text-text-primary mb-4">Company</h3>
        <ul class="space-y-3">
          <li><a href="/about/" class="text-sm text-text-secondary hover:text-text-primary transition-colors">About</a></li>
          <li><a href="/roadmap/" class="text-sm text-text-secondary hover:text-text-primary transition-colors">Roadmap</a></li>
          <li><a href="/blog/" class="text-sm text-text-secondary hover:text-text-primary transition-colors">Blog</a></li>
          <li><a href="/contact/" class="text-sm text-text-secondary hover:text-text-primary transition-colors">Contact</a></li>
        </ul>
      </div>

      <!-- Resources -->
      <div>
        <h3 class="text-sm font-semibold text-text-primary mb-4">Resources</h3>
        <ul class="space-y-3">
          <li><a href="/whitepaper/" class="text-sm text-text-secondary hover:text-text-primary transition-colors">Whitepaper</a></li>
          <li><a href="/security/" class="text-sm text-text-secondary hover:text-text-primary transition-colors">Security</a></li>
          <li><a href="/how-it-works/" class="text-sm text-text-secondary hover:text-text-primary transition-colors">How It Works</a></li>
          <li><a href="/faq/" class="text-sm text-text-secondary hover:text-text-primary transition-colors">FAQ</a></li>
        </ul>
      </div>

      <!-- Legal -->
      <div>
        <h3 class="text-sm font-semibold text-text-primary mb-4">Legal</h3>
        <ul class="space-y-3">
          <li><a href="/legal/privacy-policy/" class="text-sm text-text-secondary hover:text-text-primary transition-colors">Privacy Policy</a></li>
          <li><a href="/legal/terms/" class="text-sm text-text-secondary hover:text-text-primary transition-colors">Terms of Service</a></li>
        </ul>
      </div>

    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-border-dark py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p class="text-sm text-text-secondary">
        &copy; <?php echo date('Y'); ?> <?php echo e(SITE_NAME); ?>. All rights reserved.
      </p>
      <p class="text-xs text-text-muted">
        Borderless spending. Real-world utility. Built for global citizens.
      </p>
    </div>

  </div>
</footer>

</body>
</html>
