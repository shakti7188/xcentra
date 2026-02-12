"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Building2, Loader2 } from "lucide-react";

interface WhiteLabelFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WhiteLabelFormModal({
  isOpen,
  onClose,
}: WhiteLabelFormModalProps) {
  const [step, setStep] = useState<"form" | "success">("form");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    contact: "",
    email: "",
    phone: "",
  });
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setStep("form");
      setLoading(false);
      setFormData({ company: "", contact: "", email: "", phone: "" });
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

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
    await new Promise((resolve) => setTimeout(resolve, 1500));
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
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-[#111318] border border-white/10 shadow-2xl shadow-black/50"
          >
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
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                        <Building2 className="h-5 w-5 text-accent" />
                      </div>
                    </div>
                    <h2 className="text-2xl font-semibold text-white mb-2">
                      Launch Your White Label Card
                    </h2>
                    <p className="text-sm text-white/50 leading-relaxed">
                      Tell us about your business. Our team will reach out to
                      discuss how to launch your branded card program powered by
                      Xhavic blockchain.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="wl-company" className={labelClasses}>
                        Company Name <span className="text-accent">*</span>
                      </label>
                      <input
                        id="wl-company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, company: e.target.value }))
                        }
                        placeholder="e.g. Acme Finance"
                        className={inputClasses}
                      />
                    </div>

                    <div>
                      <label htmlFor="wl-contact" className={labelClasses}>
                        Contact Person <span className="text-accent">*</span>
                      </label>
                      <input
                        id="wl-contact"
                        type="text"
                        required
                        value={formData.contact}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, contact: e.target.value }))
                        }
                        placeholder="e.g. John Smith"
                        className={inputClasses}
                      />
                    </div>

                    <div>
                      <label htmlFor="wl-email" className={labelClasses}>
                        Business Email <span className="text-accent">*</span>
                      </label>
                      <input
                        id="wl-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, email: e.target.value }))
                        }
                        placeholder="john@company.com"
                        className={inputClasses}
                      />
                    </div>

                    <div>
                      <label htmlFor="wl-phone" className={labelClasses}>
                        Phone Number <span className="text-accent">*</span>
                      </label>
                      <input
                        id="wl-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, phone: e.target.value }))
                        }
                        placeholder="+1 (555) 000-0000"
                        className={inputClasses}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-xl bg-accent text-black font-bold py-4 text-sm hover:bg-accent-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-accent/20"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Inquiry"
                      )}
                    </button>

                    <p className="text-[11px] text-white/25 text-center leading-relaxed">
                      Our partnerships team will respond within 24-48 hours.
                      Your information is kept confidential.
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
                    We&apos;ll Be in Touch!
                  </h2>
                  <p className="text-white/50 text-sm leading-relaxed max-w-xs mx-auto mb-8">
                    Thank you for your interest in Xcentra White Label. Our
                    partnerships team will contact you within 24-48 hours.
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
