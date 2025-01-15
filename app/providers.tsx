"use client";

import { ThemeProvider } from "next-themes";
import { DayPickerProvider } from "react-day-picker";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <DayPickerProvider initialProps={{}}>
        {children}
      </DayPickerProvider>
    </ThemeProvider>
  );
}