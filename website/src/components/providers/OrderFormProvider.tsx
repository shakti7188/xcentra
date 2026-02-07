"use client";

import { createContext, useContext, useState, useCallback } from "react";
import OrderFormModal from "@/components/ui/OrderFormModal";

type CardType = "virtual" | "physical" | "premium";

interface OrderFormContextType {
  openOrderForm: (cardType?: CardType) => void;
  closeOrderForm: () => void;
}

const OrderFormContext = createContext<OrderFormContextType>({
  openOrderForm: () => {},
  closeOrderForm: () => {},
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

  const openOrderForm = useCallback((type: CardType = "physical") => {
    setCardType(type);
    setIsOpen(true);
  }, []);

  const closeOrderForm = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <OrderFormContext.Provider value={{ openOrderForm, closeOrderForm }}>
      {children}
      <OrderFormModal
        isOpen={isOpen}
        onClose={closeOrderForm}
        defaultCardType={cardType}
      />
    </OrderFormContext.Provider>
  );
}
