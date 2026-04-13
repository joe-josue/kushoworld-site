import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, ChevronDown } from "lucide-react";

const pillars = [
  {
    label: "World",
    title: "A living universe.",
    body: "Kusho is more than a collection. It is a canon-backed IP ecosystem where characters, lore, and community converge.",
    href: "/world",
  },
  {
    label: "Protocol",
    title: "Structured expansion.",
    body: "Core directs canon. Community expands the edges. Builders participate through defined lanes with clear rights.",
    href: "/protocol",
  },
  {
    label: "Products",
    title: "Shipped. Proven.",
    body: "From Kusho Guardians to Collectors Profile, every product in the ecosystem earns its place through execution.",
    href: "/products",
  },
];

const stats = [
  { value: "5,555", label: "Genesis Holders" },
  { value: "40K+", label: "Famions Reach" },
  { value: "2022", label: "Founded" },
  { value: "3", label: "Active Products" },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/Shojin Portal Cinematic.jpg"
            alt="Kusho World"
            fill
            className="object-cover object-center"
            priority
            quality={95}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-40 w-full">
          <div className="max-w-2xl">
            <Badge
              variant="outline"
              className="border-[#FF6B2B]/40 text-[#FF6B2B] bg-[#FF6B2B]/5 text-[10px] tracking-widest uppercase mb-6"
            >
              Filipino-Founded IP Ecosystem
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-6">
              Canon by
              <br />
              <span className="text-gradient-orange">design.</span>
            </h1>
            <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-lg mb-8">
              Kusho World is core-directed canon with protocol-powered
              expansion. Build with us through clear lanes and clear rights.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/world"
                className="inline-flex items-center gap-2 bg-white text-black text-xs tracking-widest uppercase px-6 py-3 font-medium hover:bg-white/90 transition-colors"
              >
                Explore the World
                <ArrowRight size={12} />
              </Link>
              <Link
                href="/get-involved"
                className="inline-flex items-center gap-2 border border-white/15 text-white/70 text-xs tracking-widest uppercase px-6 py-3 hover:border-white/30 hover:text-white transition-colors"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-30">
          <span className="text-[10px] tracking-widest uppercase text-white">
            Scroll
          </span>
          <ChevronDown size={14} className="text-white animate-bounce" />
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-white/30 text-[10px] tracking-widest uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thesis */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#FF6B2B] text-[10px] tracking-widest uppercase mb-4">
              The Thesis
            </p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Cultural relevance
              <br />
              <span className="text-white/30">is the moat.</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-4">
              Kusho was born from a 2022 NFT cycle and survived it. Today, it
              is a managed evolution from an initial collectible into a
              long-horizon IP ecosystem.
            </p>
            <p className="text-white/50 leading-relaxed mb-8">
              The long-term moat is not floor price mechanics. It is cultural
              distribution plus builder participation compounding over time.
            </p>
            <Link
              href="/protocol"
              className="inline-flex items-center gap-2 text-white/60 text-xs tracking-widest uppercase hover:text-white transition-colors"
            >
              Read the Protocol
              <ArrowRight size={12} />
            </Link>
          </div>
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <Image
                src="/assets/BBG-SUMMON-1.png"
                alt="Kusho Character"
                fill
                className="object-contain animate-float"
              />
              <div className="absolute inset-0 glow-orange pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      <Separator className="bg-white/5" />

      {/* Pillars */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-14">
          <p className="text-[#FF6B2B] text-[10px] tracking-widest uppercase mb-3">
            The Ecosystem
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Three pillars.
            <span className="text-white/30"> One universe.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {pillars.map((pillar, i) => (
            <Link key={i} href={pillar.href} className="group">
              <div className="bg-[#080808] p-8 h-full flex flex-col justify-between hover:bg-[#0d0d0d] transition-colors">
                <div>
                  <Badge
                    variant="outline"
                    className="border-white/10 text-white/30 text-[9px] tracking-widest uppercase mb-5"
                  >
                    {pillar.label}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-[#FF6B2B] text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore
                  <ArrowRight size={10} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Characters strip */}
      <section className="py-24 bg-[#060606]">
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <p className="text-[#FF6B2B] text-[10px] tracking-widest uppercase mb-3">
            The Universe
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Characters with canon.
          </h2>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 px-6 snap-x snap-mandatory">
          {[
            { src: "/assets/Datu.png", name: "Datu", type: "Shojin" },
            { src: "/assets/Reed.png", name: "Reed", type: "Shojin" },
            { src: "/assets/BBG V2.png", name: "BBG", type: "Guardian" },
            { src: "/assets/SHO Agent.jpg", name: "SHO Agent", type: "Operative" },
            { src: "/assets/dadas.png", name: "Dadas", type: "Familiar" },
          ].map((char, i) => (
            <div key={i} className="flex-none w-56 snap-start group">
              <div className="relative aspect-[3/4] bg-[#0d0d0d] border border-white/5 overflow-hidden">
                <Image
                  src={char.src}
                  alt={char.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 p-4">
                  <p className="text-white text-sm font-medium">{char.name}</p>
                  <p className="text-white/40 text-[10px] tracking-widest uppercase">
                    {char.type}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-8">
          <Link
            href="/world"
            className="inline-flex items-center gap-2 border border-white/10 text-white/50 text-xs tracking-widest uppercase px-5 py-2.5 hover:border-white/20 hover:text-white transition-colors"
          >
            Explore the World
            <ArrowRight size={11} />
          </Link>
        </div>
      </section>

      {/* Famions section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square max-w-sm overflow-hidden border border-white/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/KarmicRise 2.GIF"
              alt="Karmic Rise"
              className="w-full h-full object-cover"
              />
          </div>
          <div>
            <p className="text-[#FF6B2B] text-[10px] tracking-widest uppercase mb-4">
              Famions
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
              The top-of-funnel
              <br />
              <span className="text-white/30">engine.</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-6">
              Famions is Kusho&apos;s companion character brand — a lightweight,
              high-reach content surface that captures broad attention and
              converts it into ecosystem participation.
            </p>
            <p className="text-white/30 text-sm leading-relaxed mb-8">
              40,000+ TikTok audience. Viral content. A direct bridge between
              culture and canon.
            </p>
            <Link
              href="/world"
              className="inline-flex items-center gap-2 text-white/60 text-xs tracking-widest uppercase hover:text-white transition-colors"
            >
              Meet the Famions
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/Shojin Portal Cinematic.jpg"
            alt=""
            fill
            className="object-cover object-top opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/90 to-[#080808]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
          <Badge
            variant="outline"
            className="border-[#FF6B2B]/30 text-[#FF6B2B] bg-[#FF6B2B]/5 text-[10px] tracking-widest uppercase mb-6"
          >
            Get Involved
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-2xl mx-auto">
            Build with us.
            <br />
            <span className="text-white/30">On your terms.</span>
          </h2>
          <p className="text-white/50 text-base max-w-lg mx-auto mb-10">
            Collector, creator, developer, or operator — there is a lane for
            you. Clear expectations. Clear rights. Clear path.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 bg-[#FF6B2B] text-white text-xs tracking-widest uppercase px-8 py-3.5 font-medium hover:bg-[#e85a1f] transition-colors"
            >
              Choose Your Lane
              <ArrowRight size={12} />
            </Link>
            <Link
              href="/protocol"
              className="inline-flex items-center gap-2 border border-white/15 text-white/60 text-xs tracking-widest uppercase px-8 py-3.5 hover:border-white/30 hover:text-white transition-colors"
            >
              Read the Protocol
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
