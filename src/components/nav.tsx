"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const links = [
  { href: "/world", label: "World" },
  { href: "/protocol", label: "Protocol" },
  { href: "/products", label: "Products" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/labs", label: "Labs" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "nav-blur border-b border-white/[0.04]" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo — Anton display weight */}
        <Link
          href="/"
          className="font-display text-xl tracking-[0.05em] text-white hover:opacity-60 transition-opacity"
        >
          KUSHO
        </Link>

        {/* Desktop nav — Bebas Neue */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-heading text-[13px] tracking-[0.1em] uppercase transition-colors duration-200",
                pathname === link.href
                  ? "text-white"
                  : "text-white/35 hover:text-white/70"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right — quiet social link, no CTA button */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="https://medium.com/@kushoworld"
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading text-[11px] tracking-[0.12em] uppercase text-white/25 hover:text-white/60 transition-colors"
          >
            News
          </a>
          <a
            href="https://twitter.com/kushoworld"
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading text-[11px] tracking-[0.12em] uppercase text-white/25 hover:text-white/60 transition-colors"
          >
            X
          </a>
        </div>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="md:hidden text-white/50 hover:text-white transition-colors">
            <Menu size={18} />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-[#0a0a0a] border-l border-white/5 w-72"
          >
            <div className="flex flex-col mt-12">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "font-heading text-base tracking-[0.1em] uppercase py-4 px-6 border-b border-white/5 transition-colors",
                    pathname === link.href ? "text-white" : "text-white/35 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://medium.com/@kushoworld"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="font-heading text-base tracking-[0.1em] uppercase py-4 px-6 border-b border-white/5 text-white/25 hover:text-white transition-colors"
              >
                News
              </a>
              <div className="px-6 pt-8">
                <Link
                  href="/get-involved"
                  onClick={() => setOpen(false)}
                  className="btn-ku block text-center"
                >
                  Get Involved
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
