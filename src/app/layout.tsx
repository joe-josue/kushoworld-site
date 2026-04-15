import type { Metadata } from "next";
import { Anton, Bebas_Neue, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const antonFont = Anton({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const bebasFont = Bebas_Neue({
  variable: "--font-heading",
  weight: "400",
  subsets: ["latin"],
});

const interFont = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kusho World — Filipino-Founded Anime x Culture IP",
  description:
    "Kusho World is a Filipino-founded Anime x Culture IP ecosystem. Core-directed canon with protocol-powered expansion.",
  openGraph: {
    title: "Kusho World",
    description: "Core-directed canon with protocol-powered expansion.",
    siteName: "Kusho World",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${antonFont.variable} ${bebasFont.variable} ${interFont.variable} ${monoFont.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#080808] text-white">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
