import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const nav = [
  { href: "/world", label: "World" },
  { href: "/protocol", label: "Protocol" },
  { href: "/products", label: "Products" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/labs", label: "Labs" },
  { href: "/docs", label: "Docs" },
];

const social = [
  { href: "https://twitter.com/kushoworld", label: "Twitter / X" },
  { href: "https://discord.gg/kushoworld", label: "Discord" },
  { href: "https://tiktok.com/@familiarsworld", label: "TikTok" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#060606] mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <p className="text-white font-semibold tracking-widest text-sm uppercase mb-3">
              KUSHO<span className="text-[#FF6B2B]">.</span>
            </p>
            <p className="text-white/40 text-xs leading-relaxed max-w-xs">
              Filipino-founded Anime x Culture IP ecosystem. Core-directed
              canon with protocol-powered expansion.
            </p>
          </div>

          {/* Pages */}
          <div>
            <p className="text-white/30 text-[10px] tracking-widest uppercase mb-4">
              Pages
            </p>
            <div className="flex flex-col gap-2">
              {nav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/40 text-xs tracking-wide hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-white/30 text-[10px] tracking-widest uppercase mb-4">
              Community
            </p>
            <div className="flex flex-col gap-2">
              {social.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 text-xs tracking-wide hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-white/5" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-[11px] tracking-wide">
            © 2026 Kusho World. All rights reserved.
          </p>
          <p className="text-white/20 text-[11px] tracking-wide">
            Operated by Malaya Labs
          </p>
        </div>
      </div>
    </footer>
  );
}
