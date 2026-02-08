"use client";

import { DemoModalProvider } from "@/components/common/DemoModalContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <DemoModalProvider>{children}</DemoModalProvider>;
}
