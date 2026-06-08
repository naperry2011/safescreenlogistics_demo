import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FluidDefs } from "@/components/fluid/fluid-defs";
import { DropletCursor } from "@/components/fluid/droplet-cursor";
import { site } from "@/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://safescreenlogistics.com"),
  title: {
    default: `${site.name} — Mobile IV Therapy & Wellness`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "IV therapy",
    "mobile IV hydration",
    "IV drip menu",
    "blood draw services",
    "Safe Screen Logistics",
  ],
  openGraph: {
    title: `${site.name} — Mobile IV Therapy & Wellness`,
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
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <FluidDefs />
        <DropletCursor />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
