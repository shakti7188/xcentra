"use client";

import { createContext, useContext, useState, useCallback } from "react";
import OrderFormModal from "@/components/ui/OrderFormModal";
import WhiteLabelFormModal from "@/components/ui/WhiteLabelFormModal";

type CardType = "virtual" | "physical" | "premium";

interface OrderFormContextType {
  openOrderForm: (cardType?: CardType) => void;
  closeOrderForm: () => void;
  openWhiteLabelForm: () => void;
  closeWhiteLabelForm: () => void;
}

const OrderFormContext = createContext<OrderFormContextType>({
  openOrderForm: () => {},
  closeOrderForm: () => {},
  openWhiteLabelForm: () => {},
  closeWhiteLabelForm: () => {},
});

export function useOrderForm() {
  return useContext(OrderFormContext);
}

export default function OrderFormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [cardType, setCardType] = useState<CardType>("physical");
  const [isWhiteLabelOpen, setIsWhiteLabelOpen] = useState(false);

  const openOrderForm = useCallback((type: CardType = "physical") => {
    setCardType(type);
    setIsOpen(true);
  }, []);

  const closeOrderForm = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openWhiteLabelForm = useCallback(() => {
    setIsWhiteLabelOpen(true);
  }, []);

  const closeWhiteLabelForm = useCallback(() => {
    setIsWhiteLabelOpen(false);
  }, []);

  return (
    <OrderFormContext.Provider
      value={{ openOrderForm, closeOrderForm, openWhiteLabelForm, closeWhiteLabelForm }}
    >
      {children}
      <OrderFormModal
        isOpen={isOpen}
        onClose={closeOrderForm}
        defaultCardType={cardType}
      />
      <WhiteLabelFormModal
        isOpen={isWhiteLabelOpen}
        onClose={closeWhiteLabelForm}
      />
    </OrderFormContext.Provider>
  );
}
