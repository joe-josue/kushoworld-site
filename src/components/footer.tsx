import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const pages = [
  { href: "/world", label: "World" },
  { href: "/protocol", label: "Protocol" },
  { href: "/products", label: "Products" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/labs", label: "Labs" },
  { href: "/docs", label: "Docs" },
];

const products: { href: string; label: string; external?: boolean }[] = [
  { href: "https://studio.mithikal.com", label: "Mithikal", external: true },
  { href: "https://shop.kushoworld.com", label: "Web Shop", external: true },
  { href: "/products", label: "Collectors Profile" },
  { href: "/products", label: "Kusho Guardians" },
];

const social: { href: string; label: string }[] = [
  { href: "https://twitter.com/kushoworld", label: "X / Twitter" },
  { href: "https://discord.gg/kushoworld", label: "Discord" },
  { href: "https://tiktok.com/@familiarsworld", label: "TikTok — Famions" },
  { href: "https://medium.com/@kushoworld", label: "Medium — News" },
  { href: "https://github.com/kushoworld", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.05] bg-[#060606]">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto] gap-12 mb-14">
          {/* Brand — gets more weight */}
          <div>
            <Link
              href="/"
              className="font-display text-3xl text-white hover:opacity-60 transition-opacity block mb-5"
            >
              KUSHO
            </Link>
            <p className="font-sans text-white/30 text-xs leading-relaxed max-w-xs mb-3">
              Filipino-founded Anime x Culture IP. Core-directed canon with
              protocol-powered expansion.
            </p>
            <p className="font-sans text-white/15 text-[11px]">
              Operated by Malaya Labs
            </p>
          </div>

          {/* Pages */}
          <div>
            <p className="label-section mb-4">— Pages</p>
            <div className="flex flex-col gap-3">
              {pages.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-white/35 text-xs hover:text-white/70 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <p className="label-section mb-4">— Products</p>
            <div className="flex flex-col gap-3">
              {products.map((p) =>
                p.external ? (
                  <a
                    key={p.href}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-sans text-white/35 text-xs hover:text-white/70 transition-colors"
                  >
                    {p.label}
                    <ArrowUpRight size={10} className="opacity-40" />
                  </a>
                ) : (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="font-sans text-white/35 text-xs hover:text-white/70 transition-colors"
                  >
                    {p.label}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="label-section mb-4">— Community</p>
            <div className="flex flex-col gap-3">
              {social.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-sans text-white/35 text-xs hover:text-white/70 transition-colors"
                >
                  {s.label}
                  <ArrowUpRight size={10} className="opacity-40" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.04] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-sans text-white/15 text-[11px]">
            © 2026 Kusho World. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/docs" className="font-sans text-white/15 text-[11px] hover:text-white/35 transition-colors">
              Documentation
            </Link>
            <Link href="/protocol" className="font-sans text-white/15 text-[11px] hover:text-white/35 transition-colors">
              Protocol
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
