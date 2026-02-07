import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Terms of Service | Xcentra",
  description: "Xcentra Terms of Service — the rules governing use of our platform.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-bg-primary pt-32 pb-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-medium mb-4">
            Terms of Service
          </h1>
          <p className="text-text-secondary">Last updated: February 2026</p>
        </div>
      </section>

      <SectionWrapper theme="light">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 text-text-muted leading-relaxed">
            <div>
              <h2 className="text-2xl font-bold text-text-dark mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using Xcentra services, you agree to be bound by
                these Terms of Service. If you do not agree, please do not use
                our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-dark mb-4">
                2. Eligibility
              </h2>
              <p>
                You must be at least 18 years old and legally permitted to use
                financial services in your jurisdiction. You must complete our
                identity verification (KYC) process before using certain
                features.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-dark mb-4">
                3. Services
              </h2>
              <p>
                Xcentra provides stablecoin-powered debit cards, currency
                conversion services, and related financial tools. Services are
                subject to availability in your region.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-dark mb-4">
                4. Fees
              </h2>
              <p>
                Transaction fees and other charges are disclosed before each
                transaction. Current fee schedule: 0.5% conversion fee per
                transaction. Fee schedules may change with advance notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-dark mb-4">
                5. Prohibited Uses
              </h2>
              <p>
                You may not use Xcentra for illegal activities, money
                laundering, terrorist financing, sanctions evasion, or any other
                prohibited purpose. We reserve the right to suspend accounts
                that violate these terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-dark mb-4">
                6. Limitation of Liability
              </h2>
              <p>
                Xcentra provides services on an &ldquo;as is&rdquo; basis. We
                are not liable for losses due to market fluctuations, third-party
                service failures, or circumstances beyond our control.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-dark mb-4">
                7. Contact
              </h2>
              <p>
                For questions about these terms, contact us at legal@xcentra.com.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
