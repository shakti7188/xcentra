"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, CreditCard, Smartphone, Crown, Loader2 } from "lucide-react";
import { submitToSheet } from "@/lib/submitForm";

type CardType = "virtual" | "physical" | "premium";

interface OrderFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCardType?: CardType;
}

const cardOptions: {
  value: CardType;
  label: string;
  description: string;
  icon: typeof CreditCard;
  accent: string;
}[] = [
  {
    value: "virtual",
    label: "Virtual Card",
    description: "Instant digital card for online spending",
    icon: Smartphone,
    accent: "border-blue-500/40 bg-blue-500/5",
  },
  {
    value: "physical",
    label: "Physical Card",
    description: "Premium card shipped to your door",
    icon: CreditCard,
    accent: "border-accent/40 bg-accent/5",
  },
  {
    value: "premium",
    label: "Premium Card",
    description: "Higher limits, priority support & rewards",
    icon: Crown,
    accent: "border-purple-500/40 bg-purple-500/5",
  },
];

const spendingRanges = [
  "Under $500",
  "$500 - $2,000",
  "$2,000 - $10,000",
  "$10,000+",
];

const topCountries = [
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Singapore",
  "Nigeria",
  "Philippines",
  "India",
  "Germany",
  "France",
  "Netherlands",
  "Indonesia",
  "Brazil",
  "Turkey",
  "Canada",
  "Australia",
  "Saudi Arabia",
  "South Africa",
  "Kenya",
  "Pakistan",
  "Malaysia",
  "Thailand",
  "Vietnam",
  "Mexico",
  "Colombia",
  "Egypt",
  "Japan",
  "South Korea",
  "Switzerland",
  "Sweden",
  "Norway",
  "Denmark",
  "Spain",
  "Italy",
  "Portugal",
  "Ireland",
  "Poland",
  "Czech Republic",
  "Austria",
  "Belgium",
  "Finland",
  "New Zealand",
  "Hong Kong",
  "Taiwan",
  "Chile",
  "Argentina",
  "Peru",
  "Ghana",
  "Tanzania",
  "Ethiopia",
  "Bangladesh",
];

export default function OrderFormModal({
  isOpen,
  onClose,
  defaultCardType = "physical",
}: OrderFormModalProps) {
  const [step, setStep] = useState<"form" | "success">("form");
  const [loading, setLoading] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardType>(defaultCardType);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    spending: "",
    referral: "",
  });
  const modalRef = useRef<HTMLDivElement>(null);

  // Reset when opened
  useEffect(() => {
    if (isOpen) {
      setStep("form");
      setLoading(false);
      setSelectedCard(defaultCardType);
      setFormData({ name: "", email: "", country: "", spending: "", referral: "" });
    }
  }, [isOpen, defaultCardType]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await submitToSheet({
      type: "Card Order",
      name: formData.name,
      email: formData.email,
      cardType: selectedCard,
      country: formData.country,
      spending: formData.spending,
      referral: formData.referral,
    });
    setLoading(false);
    setStep("success");
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const inputClasses =
    "w-full rounded-xl bg-white/[0.06] border border-white/10 px-4 py-3.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/30 transition-all duration-200";

  const labelClasses = "block text-sm font-medium text-white/70 mb-2";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-[#111318] border border-white/10 shadow-2xl shadow-black/50"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-all"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <AnimatePresence mode="wait">
              {step === "form" ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-8"
                >
                  {/* Header */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                        <CreditCard className="h-5 w-5 text-accent" />
                      </div>
                    </div>
                    <h2 className="text-2xl font-semibold text-white mb-2">
                      Reserve Your Xcentra Card
                    </h2>
                    <p className="text-sm text-white/50 leading-relaxed">
                      Be among the first to spend stablecoins anywhere. Join the
                      waitlist and we&apos;ll notify you when your card is ready.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Card Type Selection */}
                    <div>
                      <label className={labelClasses}>
                        Preferred Card Type <span className="text-accent">*</span>
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {cardOptions.map((option) => {
                          const Icon = option.icon;
                          const isSelected = selectedCard === option.value;
                          return (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => setSelectedCard(option.value)}
                              className={`relative rounded-xl p-3 text-center transition-all duration-200 border ${
                                isSelected
                                  ? option.accent + " ring-1 ring-accent/20"
                                  : "border-white/8 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]"
                              }`}
                            >
                              <Icon
                                className={`h-5 w-5 mx-auto mb-1.5 ${
                                  isSelected
                                    ? "text-accent"
                                    : "text-white/40"
                                }`}
                              />
                              <p
                                className={`text-[11px] font-semibold ${
                                  isSelected ? "text-white" : "text-white/60"
                                }`}
                              >
                                {option.label}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Full Name */}
                    <div>
                      <label htmlFor="name" className={labelClasses}>
                        Full Name <span className="text-accent">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, name: e.target.value }))
                        }
                        placeholder="e.g. Alex Johnson"
                        className={inputClasses}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className={labelClasses}>
                        Email Address <span className="text-accent">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, email: e.target.value }))
                        }
                        placeholder="you@example.com"
                        className={inputClasses}
                      />
                    </div>

                    {/* Country */}
                    <div>
                      <label htmlFor="country" className={labelClasses}>
                        Country of Residence <span className="text-accent">*</span>
                      </label>
                      <select
                        id="country"
                        required
                        value={formData.country}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            country: e.target.value,
                          }))
                        }
                        className={`${inputClasses} ${
                          !formData.country ? "text-white/30" : ""
                        }`}
                      >
                        <option value="" disabled>
                          Select your country
                        </option>
                        {topCountries.map((c) => (
                          <option key={c} value={c} className="bg-[#1a1d24] text-white">
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Monthly Spending (Optional) */}
                    <div>
                      <label htmlFor="spending" className={labelClasses}>
                        Expected Monthly Spend{" "}
                        <span className="text-white/30 font-normal">(optional)</span>
                      </label>
                      <select
                        id="spending"
                        value={formData.spending}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            spending: e.target.value,
                          }))
                        }
                        className={`${inputClasses} ${
                          !formData.spending ? "text-white/30" : ""
                        }`}
                      >
                        <option value="" className="bg-[#1a1d24] text-white/30">
                          Select a range
                        </option>
                        {spendingRanges.map((range) => (
                          <option
                            key={range}
                            value={range}
                            className="bg-[#1a1d24] text-white"
                          >
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Referral Code (Optional) */}
                    <div>
                      <label htmlFor="referral" className={labelClasses}>
                        Referral Code{" "}
                        <span className="text-white/30 font-normal">(optional)</span>
                      </label>
                      <input
                        id="referral"
                        type="text"
                        value={formData.referral}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            referral: e.target.value,
                          }))
                        }
                        placeholder="Enter code if you have one"
                        className={inputClasses}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-xl bg-accent text-black font-bold py-4 text-sm hover:bg-accent-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-accent/20"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        "Join the Waitlist"
                      )}
                    </button>

                    <p className="text-[11px] text-white/25 text-center leading-relaxed">
                      By submitting, you agree to receive updates from Xcentra.
                      We respect your privacy and will never share your data.
                    </p>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 text-center py-16"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      delay: 0.1,
                    }}
                    className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="h-8 w-8 text-accent" />
                  </motion.div>
                  <h2 className="text-2xl font-semibold text-white mb-3">
                    You&apos;re on the List!
                  </h2>
                  <p className="text-white/50 text-sm leading-relaxed max-w-xs mx-auto mb-8">
                    Thanks for your interest in Xcentra. We&apos;ll reach out
                    soon with early access details and next steps.
                  </p>
                  <button
                    onClick={onClose}
                    className="rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 px-8 py-3 text-sm font-medium transition-all"
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
