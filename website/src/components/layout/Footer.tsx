import Link from "next/link";
import Image from "next/image";
import { footerNav } from "@/lib/constants/navigation";
import { Twitter, Linkedin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-border-dark">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        {/* Main Footer */}
        <div className="grid grid-cols-2 gap-8 py-16 md:grid-cols-5">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <Image
                src="/images/logos/xcentra-logo-white.png"
                alt="Xcentra"
                width={280}
                height={80}
                className="h-14 sm:h-16 w-auto"
              />
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              The borderless digital finance platform. Spend stablecoins like everyday money.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "https://www.instagram.com/xcentraofficial/" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/xcentra/" },
                { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61587907153019" },
                { icon: Twitter, href: "https://x.com/Xcentraofficial" },
              ].map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-dark text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">Products</h3>
            <ul className="space-y-3">
              {footerNav.products.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">Company</h3>
            <ul className="space-y-3">
              {footerNav.company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerNav.resources.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerNav.legal.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-dark py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-secondary">
            &copy; {new Date().getFullYear()} Xcentra. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            Borderless spending. Real-world utility. Built for global citizens.
          </p>
        </div>
      </div>
    </footer>
  );
}
