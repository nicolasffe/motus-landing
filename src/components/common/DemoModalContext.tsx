"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { DemoModal } from "@/components/common/DemoModal";

type DemoContext = {
  open: () => void;
  close: () => void;
  isOpen: boolean;
};

const DemoModalContext = createContext<DemoContext | undefined>(undefined);

export function DemoModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <DemoModalContext.Provider value={{ open, close, isOpen }}>
      {children}
      <DemoModal open={isOpen} onClose={close} />
    </DemoModalContext.Provider>
  );
}

export function useDemoModal() {
  const ctx = useContext(DemoModalContext);
  if (!ctx) {
    throw new Error("useDemoModal must be used within DemoModalProvider");
  }
  return ctx;
}
