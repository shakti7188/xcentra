import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Privacy Policy | Xcentra",
  description: "Xcentra Privacy Policy — how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-bg-primary pt-32 pb-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-text-secondary">Last updated: February 2026</p>
        </div>
      </section>

      <SectionWrapper theme="light">
        <div className="max-w-3xl mx-auto prose prose-lg prose-gray">
          <div className="space-y-8 text-text-muted leading-relaxed">
            <div>
              <h2 className="text-2xl font-semibold text-text-dark mb-4">
                1. Information We Collect
              </h2>
              <p>
                We collect information you provide directly to us, such as when
                you create an account, make a transaction, or contact us. This
                includes your name, email address, phone number, identity
                verification documents, and transaction history.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-text-dark mb-4">
                2. How We Use Your Information
              </h2>
              <p>
                We use the information we collect to provide, maintain, and
                improve our services, process transactions, send notifications,
                and comply with regulatory requirements including KYC and AML
                obligations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-text-dark mb-4">
                3. Data Security
              </h2>
              <p>
                We implement industry-standard security measures including
                encryption, secure data storage, and regular security audits to
                protect your personal and financial information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-text-dark mb-4">
                4. Data Sharing
              </h2>
              <p>
                We do not sell your personal information. We may share data with
                trusted partners necessary for processing transactions,
                regulatory compliance, and fraud prevention.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-text-dark mb-4">
                5. Your Rights
              </h2>
              <p>
                You have the right to access, correct, or delete your personal
                data. You can also opt out of marketing communications. Contact
                us at privacy@xcentra.com for any data-related requests.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-text-dark mb-4">
                6. Contact
              </h2>
              <p>
                For privacy-related questions, please contact us at
                privacy@xcentra.com.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
