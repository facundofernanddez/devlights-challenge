"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";

interface TotalPriceTypes {
  totalPrice: number;
  setTotalPrice: Dispatch<SetStateAction<number>>;
}

export const TotalPriceContext = createContext<TotalPriceTypes>({
  totalPrice: 0,
  setTotalPrice: () => {},
});

export default function TotalPriceProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  if (totalPrice < 0) {
    setTotalPrice(0);
  }

  return (
    <TotalPriceContext.Provider value={{ totalPrice, setTotalPrice }}>
      {children}
    </TotalPriceContext.Provider>
  );
}
