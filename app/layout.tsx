import type { Metadata } from "next";
import { Sarala } from "next/font/google";
import "./globals.css";

const sarala = Sarala({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "LeadSync",
  description:
    "Effortlessly manage lead capture, CRM integration, and customer support with FutureLead's fully managed automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`w-screen ${sarala.className}`}>{children}</body>
    </html>
  );
}
