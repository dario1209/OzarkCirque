import type { Metadata } from "next";
import { Instrument_Serif, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CursorDot from "@/components/CursorDot";

const instrument = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument",
});

const hanken = Hanken_Grotesk({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-hanken",
});

export const metadata: Metadata = {
  title: {
    default: "Brittany Paul — Ozark Cirque",
    template: "%s — Ozark Cirque",
  },
  description:
    "Brittany Paul is a performing artist and aerial educator in Northwest Arkansas, founder of Ozark Cirque.",
  openGraph: {
    title: "Brittany Paul — Ozark Cirque",
    description:
      "Aerial performance, teaching, and writing from Northwest Arkansas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${instrument.variable} ${hanken.variable}`}>
      <body className="bg-ink text-cream antialiased">
      <CursorDot />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
      
    </html>
  );
}
