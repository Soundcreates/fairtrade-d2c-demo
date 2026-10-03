import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brand Avenue | Fashion, Lifestyle & More",
  description: "Discover fashion, beauty and lifestyle across Brand Avenue stores and marketplace.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN" data-scroll-behavior="smooth"><body>{children}</body></html>;
}
