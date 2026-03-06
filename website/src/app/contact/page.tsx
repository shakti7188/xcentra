import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact | Xcentra — Get in Touch",
  description:
    "Contact the Xcentra team for support, partnerships, or media inquiries. We are here to help 24/7.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return <ContactContent />;
}
