import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SpeakUp AI",
  description: "AI Speaking Coach research platform for Grade 8–9 EFL learners",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
