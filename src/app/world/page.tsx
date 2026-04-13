import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";

const lore = [
  {
    title: "Shojin",
    subtitle: "The Flagship Collection",
    body: "5,555 characters born on-chain. The Shojin are the core identity artifacts of Kusho World — the cultural anchors from which all canon radiates. V2 migration brings upgraded art, reworked traits, and new chain direction.",
    badge: "Flagship",
  },
  {
    title: "Famions",
    subtitle: "The Distribution Engine",
    body: "Companion characters with cultural reach. Famions are the bridge between mainstream culture and the Kusho ecosystem — lightweight, expressive, and viral by design. 40K+ TikTok audience and growing.",
    badge: "Companion Brand",
  },
  {
    title: "Guardians",
    subtitle: "The Onchain Operators",
    body: "Kusho Guardians are autonomous NFT familiars with ERC-6551 independent wallets. Born from the YGG Playfest Hackathon, they now anchor an onchain MMO-lite with Sovrun backing.",
    badge: "Game Layer",
  },
];

const principles = [
  {
    number: "01",
    title: "Canon is earned, not claimed.",
    body: "What becomes official Kusho World canon must pass through Core review and ratification. Community proposals are welcome — Core decides.",
  },
  {
    number: "02",
    title: "Community expands the edges.",
    body: "Builders, creators, and collectors contribute to the universe. They can propose, create, and prove. Core curates what becomes permanent.",
  },
  {
    number: "03",
    title: "IP compounds over time.",
    body: "Each character, story, and product adds to a shared cultural asset. The Kusho IP grows more valuable as more builders participate with clear rights.",
  },
  {
    number: "04",
    title: "Filipino roots. Global reach.",
    body: "Kusho was founded to put the Philippines on-chain. The cultural DNA is Filipino. The ambition is universal.",
  },
];

export default function WorldPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/Shojin Portal Cinematic.jpg"
            alt="Kusho World"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-[#080808]/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-40 w-full">
          <Badge
            variant="outline"
            className="border-[#FF6B2B]/40 text-[#FF6B2B] bg-[#FF6B2B]/5 text-[10px] tracking-widest uppercase mb-5"
          >
            World
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-none mb-4">
            The Universe.
          </h1>
          <p className="text-white/50 text-base max-w-xl leading-relaxed">
            A living IP ecosystem built on Filipino culture, anime aesthetics,
            and a community that earns its way into canon.
          </p>
        </div>
      </section>

      {/* Thesis */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-[#FF6B2B] text-[10px] tracking-widest uppercase mb-4">
            What Kusho Is
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            More than a collection.
            <br />
            <span className="text-white/30">A compounding loop.</span>
          </h2>
          <p className="text-white/50 leading-relaxed text-lg mb-4">
            Kusho World is a Filipino-founded Anime x Culture IP ecosystem that
            started from a PFP collection and is being rebuilt into a broader
            brand and builder network.
          </p>
          <p className="text-white/40 leading-relaxed">
            IP attracts builders and audiences. Builders create products and
            content. Products create distribution and revenue. Revenue funds
            treasury resilience and new execution. The loop compounds.
          </p>
        </div>
      </section>

      <Separator className="bg-white/5" />

      {/* Character Universes */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="text-[#FF6B2B] text-[10px] tracking-widest uppercase mb-3">
            Character Universes
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Meet the world.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {lore.map((item, i) => (
            <div key={i} className="bg-[#080808] p-8">
              <Badge
                variant="outline"
                className="border-[#FF6B2B]/30 text-[#FF6B2B] text-[9px] tracking-widest uppercase mb-5"
              >
                {item.badge}
              </Badge>
              <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
              <p className="text-white/30 text-xs tracking-wide mb-4">
                {item.subtitle}
              </p>
              <p className="text-white/50 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Character visual */}
      <section className="relative py-20 bg-[#060606] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-[#FF6B2B] text-[10px] tracking-widest uppercase mb-4">
                Shojin V2
              </p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
                The flagship
                <br />
                <span className="text-white/30">evolves.</span>
              </h2>
              <p className="text-white/50 leading-relaxed mb-4">
                The Shojin V2 migration brings upgraded art, reworked traits,
                and new chain direction into the Sovrun ecosystem on Hyperliquid.
                V1 holders burn to claim V2 — gas only, as baseline.
              </p>
              <p className="text-white/30 text-sm leading-relaxed mb-8">
                Final migration dates, contract addresses, and advanced
                trait mechanics are in progress. Follow universe updates for
                announcements.
              </p>
              <Link
                href="/get-involved"
                className="inline-flex items-center gap-2 bg-[#FF6B2B] text-white text-xs tracking-widest uppercase px-6 py-3 hover:bg-[#e85a1f] transition-colors"
              >
                Follow Updates
                <ArrowRight size={12} />
              </Link>
            </div>
            <div className="order-1 md:order-2 grid grid-cols-2 gap-3">
              <div className="relative aspect-[3/4] border border-white/5 overflow-hidden">
                <Image
                  src="/assets/Datu.png"
                  alt="Datu"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-3">
                  <p className="text-white text-xs font-medium">Datu</p>
                </div>
              </div>
              <div className="relative aspect-[3/4] border border-white/5 overflow-hidden">
                <Image
                  src="/assets/Reed.png"
                  alt="Reed"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-3">
                  <p className="text-white text-xs font-medium">Reed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Canon Principles */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="text-[#FF6B2B] text-[10px] tracking-widest uppercase mb-3">
            Canon Principles
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            What is official.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {principles.map((p, i) => (
            <div key={i} className="bg-[#080808] p-8">
              <p className="text-[#FF6B2B]/50 text-xs font-mono mb-4">
                {p.number}
              </p>
              <h3 className="text-lg font-semibold mb-3">{p.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GIF panels */}
      <section className="py-20 bg-[#060606]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-[#FF6B2B] text-[10px] tracking-widest uppercase mb-3">
              In Motion
            </p>
            <h2 className="text-3xl font-bold">The world, animated.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: "/assets/09b karmic_points_animated.gif", label: "Karmic Points" },
              { src: "/assets/10b karmic_night_animated.gif", label: "Karmic Night" },
              { src: "/assets/KarmicRise 2.GIF", label: "Karmic Rise" },
              { src: "/assets/Storymap Cypher.gif", label: "Storymap Cypher" },
            ].map((item, i) => (
              <div key={i} className="relative aspect-square overflow-hidden border border-white/5 group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-xs">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Follow the universe.
        </h2>
        <p className="text-white/40 max-w-md mx-auto mb-8">
          Universe updates, V2 migration news, and new canon drops — stay
          connected to Kusho World.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/get-involved"
            className="inline-flex items-center gap-2 bg-[#FF6B2B] text-white text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-[#e85a1f] transition-colors"
          >
            Get Involved
            <ArrowRight size={12} />
          </Link>
          <Link
            href="/protocol"
            className="inline-flex items-center gap-2 border border-white/15 text-white/60 text-xs tracking-widest uppercase px-8 py-3.5 hover:border-white/30 hover:text-white transition-colors"
          >
            Read the Protocol
          </Link>
        </div>
      </section>
    </div>
  );
}
