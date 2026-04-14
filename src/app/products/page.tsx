import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const products = [
  {
    name: "Mithikal",
    kind: "Creative Studio",
    status: "Live",
    description:
      "An anime and manga studio built inside the Kusho ecosystem. Mithikal is producing original IP, narrative infrastructure, and world-building tools — designed for the long game, not the next drop cycle.",
    note: "The studio behind some of the Kusho World's most recognized visual output.",
    img: "/assets/Storymap Cypher.gif",
    isGif: true,
    href: "https://studio.mithikal.com",
    external: true,
    ctaLabel: "Visit studio.mithikal.com",
  },
  {
    name: "Kusho Web Shop",
    kind: "Apparel & Collectibles",
    status: "Live",
    description:
      "Streetwear and collectibles rooted in Kusho World characters. Wearable canon — designed in-house, shipped to holders and fans. BBG, Skullboi, and more.",
    note: "Each piece is an artifact from the world, not just a branded item.",
    img: "/assets/apparel_1.jpg",
    isGif: false,
    href: "https://shop.kushoworld.com",
    external: true,
    ctaLabel: "Visit the Shop",
  },
  {
    name: "Collectors Profile",
    kind: "Onchain Identity Layer",
    status: "Coming Soon",
    description:
      "A profile layer for Kusho holders — verify your assets, surface your contributor history, and carry your identity across the ecosystem. Your holdings, your record, your presence.",
    note: "Built for Shojin holders and contributors who want a canonical digital identity.",
    img: "/assets/mockup.png",
    isGif: false,
    href: null,
    external: false,
    ctaLabel: null,
  },
  {
    name: "Kusho Guardians",
    kind: "Onchain Game",
    status: "Live",
    description:
      "An MMO-lite built around autonomous NFT familiars with ERC-6551 independent wallets. Started as a YGG Playfest Hackathon project, won ₱220,000, and secured a deal with Sovrun in the Hyperliquid ecosystem.",
    note: "Prompt-to-play mechanics. Modular land systems. Player-driven economies.",
    img: "/assets/BBG-SUMMON-1.png",
    isGif: false,
    href: "/get-involved",
    external: false,
    ctaLabel: "Learn More",
  },
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="pt-36 pb-16 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div>
            <p className="text-white/25 text-[10px] tracking-widest uppercase mb-4">
              Products
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-4">
              What the ecosystem
              <br />
              has shipped.
            </h1>
          </div>
          <div>
            <p className="text-white/45 text-base leading-relaxed">
              Every product here exists because someone inside or adjacent to
              Kusho World built it and kept building. No vaporware, no
              placeholder slides.
            </p>
          </div>
        </div>
      </section>

      <Separator className="bg-white/5" />

      {/* Products — alternating layout */}
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col gap-16">
        {products.map((product, i) => (
          <div
            key={i}
            className={`grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 ${
              i % 2 === 1 ? "md:direction-rtl" : ""
            }`}
          >
            {/* Image */}
            <div
              className={`relative h-72 md:h-96 overflow-hidden group bg-black ${
                i % 2 === 1 ? "md:order-2" : ""
              }`}
            >
              <div className="absolute top-4 left-4 z-10">
                <span
                  className={`text-[9px] tracking-widest uppercase px-2.5 py-1 border ${
                    product.status === "Live"
                      ? "border-emerald-500/40 text-emerald-400 bg-emerald-500/5"
                      : "border-white/15 text-white/30 bg-black/30"
                  }`}
                >
                  {product.status}
                </span>
              </div>
              {product.isGif ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
              ) : (
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
              )}
            </div>

            {/* Copy */}
            <div
              className={`bg-[#080808] p-10 md:p-14 flex flex-col justify-center ${
                i % 2 === 1 ? "md:order-1" : ""
              }`}
            >
              <p className="text-white/25 text-[10px] tracking-widest uppercase mb-2">
                {product.kind}
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                {product.name}
              </h2>
              <p className="text-white/45 text-sm leading-relaxed mb-3">
                {product.description}
              </p>
              <p className="text-white/20 text-xs leading-relaxed italic mb-10">
                {product.note}
              </p>
              {product.ctaLabel && product.href && (
                product.external ? (
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white/12 text-white/50 text-[10px] tracking-widest uppercase px-5 py-2.5 hover:border-white/25 hover:text-white transition-colors w-fit"
                  >
                    {product.ctaLabel}
                    <ArrowUpRight size={10} />
                  </a>
                ) : (
                  <Link
                    href={product.href}
                    className="inline-flex items-center gap-2 border border-white/12 text-white/50 text-[10px] tracking-widest uppercase px-5 py-2.5 hover:border-white/25 hover:text-white transition-colors w-fit"
                  >
                    {product.ctaLabel}
                    <ArrowRight size={10} />
                  </Link>
                )
              )}
              {product.status === "Coming Soon" && (
                <p className="text-white/20 text-xs tracking-wide">
                  Announcement coming. Follow on X for updates.
                </p>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Apparel gallery — wide */}
      <section className="bg-[#060606] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-white/25 text-[10px] tracking-widest uppercase mb-8">
            Kusho Apparel
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-white/5">
            <div className="md:col-span-2 relative h-64 md:h-96 overflow-hidden group">
              <Image
                src="/assets/apparel_2.jpg"
                alt="Apparel"
                fill
                className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
              />
            </div>
            {[
              "/assets/bbg_merch_1.png",
              "/assets/bbg_merch_3.png",
              "/assets/skullboi_merch_2.png",
              "/assets/skullboi_merch_3.png",
            ].map((src, i) => (
              <div key={i} className="relative h-64 md:h-96 overflow-hidden group bg-black">
                <Image
                  src={src}
                  alt="Kusho Merch"
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
            ))}
          </div>
          <div className="mt-6">
            <a
              href="https://shop.kushoworld.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/10 text-white/40 text-[10px] tracking-widest uppercase px-5 py-2.5 hover:border-white/20 hover:text-white transition-colors"
            >
              Visit the Shop
              <ArrowUpRight size={10} />
            </a>
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="border border-white/5 p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              Want to build on Kusho?
            </h2>
            <p className="text-white/35 text-sm max-w-md leading-relaxed">
              Apps, games, and tools can be built within the Kusho IP ecosystem
              through defined builder paths. Reach the product and Labs team.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 bg-[#FF6B2B] text-white text-[10px] tracking-widest uppercase px-6 py-3 hover:bg-[#e85a1f] transition-colors"
            >
              Builder Lane
              <ArrowRight size={11} />
            </Link>
            <Link
              href="/labs"
              className="inline-flex items-center gap-2 border border-white/12 text-white/50 text-[10px] tracking-widest uppercase px-6 py-3 hover:border-white/25 hover:text-white transition-colors"
            >
              Malaya Labs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
