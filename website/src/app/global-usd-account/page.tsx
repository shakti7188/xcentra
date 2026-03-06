import type { Metadata } from "next";
import USDAccountContent from "./USDAccountContent";

export const metadata: Metadata = {
  title: "Global USD Account | Xcentra — USD IBAN for Global Citizens",
  description:
    "Receive salary, client payments, and business transfers with a USD-denominated account number. Banking access for the world.",
  alternates: { canonical: "/global-usd-account/" },
};

export default function USDAccountPage() {
  return <USDAccountContent />;
}
