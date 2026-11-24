import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/data/site";

const body = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Bricolage_Grotesque({
  variable: "--font-display-face",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | DOT and Non-DOT Testing, Blood Draws, IV Therapy`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "DOT drug testing",
    "non-DOT drug testing",
    "annual blood draws",
    "insurance blood draws",
    "IV therapy",
    "mobile IV hydration",
    "IV drip menu",
    "blood draw services",
    "Safe Screen Logistics",
  ],
  openGraph: {
    title: `${site.name} | DOT and Non-DOT Testing, Blood Draws, IV Therapy`,
    description: site.description,
    type: "website",
    siteName: site.name,
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${geistMono.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
