import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "Kusho Guardians",
    tagline: "Onchain MMO-Lite",
    status: "Live",
    description:
      "Autonomous ERC-6551 NFT Familiars with independent wallets. Built on an open-source foundation with modular land/habitat systems, player-driven economies, and composable NFT interoperability. Backed by Sovrun in the Hyperliquid ecosystem.",
    highlight:
      "YGG Playfest Hackathon winner — ₱220,000 prize. Post-hackathon deal with Sovrun.",
    img: "/assets/BBG-SUMMON-1.png",
    cta: "Try Guardians",
    ctaHref: "/get-involved",
  },
  {
    name: "Collectors Profile",
    tagline: "Onchain Identity",
    status: "In Progress",
    description:
      "A Kusho World collectors profile platform. Verify your holdings, showcase your Shojin, track your contributor reputation, and connect your onchain identity to the Kusho ecosystem.",
    highlight:
      "Purpose-built for holders who want a canonical profile layer.",
    img: "/assets/mockup.png",
    cta: "Join Waitlist",
    ctaHref: "/get-involved",
  },
  {
    name: "Mithikal",
    tagline: "World System Platform",
    status: "Incubated",
    description:
      "Evolved from a manga-producer concept into a world system of record platform. Mithikal is the infrastructure layer for managing canon, IP, and lore at ecosystem scale. Currently in incubation under Malaya Labs.",
    highlight:
      "Experimental. Adjacent to Kusho. The infrastructure for canon at scale.",
    img: "/assets/Storymap Cypher.gif",
    cta: "Partner with Team",
    ctaHref: "/labs",
  },
];

const roadmap = [
  {
    label: "Live",
    color: "bg-green-500",
    items: ["Kusho Guardians (Sovrun deal active)", "Famions TikTok distribution"],
  },
  {
    label: "In Progress",
    color: "bg-[#FF6B2B]",
    items: ["Shojin V2 migration", "Collectors Profile platform", "Post-migration activations"],
  },
  {
    label: "Next",
    color: "bg-white/20",
    items: ["Guardians progression mechanics", "Open Source Famions Asset Library", "Builder license formalization"],
  },
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="pt-36 pb-20 max-w-7xl mx-auto px-6 w-full">
        <Badge
          variant="outline"
          className="border-[#FF6B2B]/40 text-[#FF6B2B] bg-[#FF6B2B]/5 text-[10px] tracking-widest uppercase mb-5"
        >
          Products
        </Badge>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-none mb-4">
              Shipped.
              <br />
              <span className="text-white/30">Proven.</span>
            </h1>
          </div>
          <div>
            <p className="text-white/50 text-base leading-relaxed">
              Products in the Kusho ecosystem earn their place through
              execution. Every product here has shipped, is shipping, or is
              incubated under Malaya Labs with a clear mandate.
            </p>
          </div>
        </div>
      </section>

      <Separator className="bg-white/5" />

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col gap-px bg-transparent">
        {products.map((product, i) => (
          <div
            key={i}
            className="bg-[#0a0a0a] border border-white/5 p-8 md:p-12 grid grid-cols-1 md:grid-cols-5 gap-10 items-center"
          >
            <div className="md:col-span-3">
              <div className="flex items-center gap-3 mb-5">
                <Badge
                  variant="outline"
                  className="border-[#FF6B2B]/30 text-[#FF6B2B] text-[9px] tracking-widest uppercase"
                >
                  {product.status}
                </Badge>
                <span className="text-white/20 text-[10px] tracking-widest uppercase">
                  {product.tagline}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {product.name}
              </h2>
              <p className="text-white/50 leading-relaxed mb-4">
                {product.description}
              </p>
              <p className="text-white/25 text-sm italic mb-8">
                {product.highlight}
              </p>
              <Link
                href={product.ctaHref}
                className="inline-flex items-center gap-2 bg-white text-black text-xs tracking-widest uppercase px-6 py-3 hover:bg-white/90 transition-colors"
              >
                {product.cta}
                <ArrowRight size={12} />
              </Link>
            </div>
            <div className="md:col-span-2 relative">
              <div className="relative aspect-square overflow-hidden border border-white/5">
                {product.img.endsWith(".gif") ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={product.img}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Roadmap */}
      <section className="py-20 bg-[#060606]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-[#FF6B2B] text-[10px] tracking-widest uppercase mb-3">
              Roadmap Signals
            </p>
            <h2 className="text-3xl font-bold">
              What&apos;s live. What&apos;s next.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {roadmap.map((stage, i) => (
              <div key={i} className="bg-[#060606] p-8">
                <div className="flex items-center gap-2 mb-5">
                  <div className={`w-1.5 h-1.5 rounded-full ${stage.color}`} />
                  <p className="text-white/50 text-[10px] tracking-widest uppercase">
                    {stage.label}
                  </p>
                </div>
                <ul className="flex flex-col gap-3">
                  {stage.items.map((item, j) => (
                    <li key={j} className="text-white/60 text-sm leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-white/20 text-xs mt-4">
            Roadmap is milestone-based, not date-based. Shipping quality over
            hitting calendar targets.
          </p>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="border border-white/5 p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Build on Kusho.
            </h2>
            <p className="text-white/40 text-sm max-w-md">
              Apps, games, and tools can be built on top of Kusho IP through
              defined builder paths. Talk to the product team.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 bg-[#FF6B2B] text-white text-xs tracking-widest uppercase px-6 py-3 hover:bg-[#e85a1f] transition-colors"
            >
              Try Products
              <ArrowRight size={12} />
            </Link>
            <Link
              href="/labs"
              className="inline-flex items-center gap-2 border border-white/15 text-white/60 text-xs tracking-widest uppercase px-6 py-3 hover:border-white/30 hover:text-white transition-colors"
            >
              Partner with Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
