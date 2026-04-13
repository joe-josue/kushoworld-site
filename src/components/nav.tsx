"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/world", label: "World" },
  { href: "/protocol", label: "Protocol" },
  { href: "/products", label: "Products" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/labs", label: "Labs" },
  { href: "/docs", label: "Docs" },
];

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "nav-blur border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-white font-semibold tracking-widest text-sm uppercase hover:opacity-70 transition-opacity"
        >
          KUSHO<span className="text-[#FF6B2B]">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-xs tracking-widest uppercase transition-colors duration-200",
                pathname === link.href
                  ? "text-white"
                  : "text-white/40 hover:text-white/80"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/get-involved"
            className="text-xs tracking-widest uppercase bg-[#FF6B2B] text-white px-4 py-2 hover:bg-[#e85a1f] transition-colors"
          >
            Join
          </Link>
        </div>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="md:hidden text-white/60 hover:text-white transition-colors">
            <Menu size={20} />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-[#0a0a0a] border-l border-white/5 w-72"
          >
            <div className="flex flex-col gap-1 mt-12">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-sm tracking-widest uppercase py-3 px-4 transition-colors",
                    pathname === link.href
                      ? "text-white bg-white/5"
                      : "text-white/40 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-6 px-4">
                <Link
                  href="/get-involved"
                  onClick={() => setOpen(false)}
                  className="block text-center text-xs tracking-widest uppercase bg-[#FF6B2B] text-white px-4 py-3 hover:bg-[#e85a1f] transition-colors"
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
