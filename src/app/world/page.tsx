import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const lore = [
  {
    title: "Shojin",
    subtitle: "The Canonical Core",
    body: "In Shinsekai 2120, the Shojin are the revolutionary people — warriors, scholars, and rebels from a future Philippines that refused to be erased. On-chain, they are the identity artifacts from which all Kusho World canon radiates. The cultural anchors. The official record.",
    tag: "Flagship",
  },
  {
    title: "Famions",
    subtitle: "The Cultural Engine",
    body: "Spirit creatures from the boundary between realms. Ancient Filipinos bonded with Famions through ritual — partnership, not domestication. The Colonists banned it. The Seishi rediscovered it. Famions are the bridge between the Kusho universe and mainstream culture: expressive, viral, and tied to the world by blood.",
    tag: "Companion Brand",
  },
  {
    title: "Guardians",
    subtitle: "The Onchain Operators",
    body: "Autonomous NFT familiars with ERC-6551 independent wallets. Born from the YGG Playfest Hackathon — won ₱220K, secured a deal with Sovrun in the Hyperliquid ecosystem. An MMO-lite where the creatures have their own economies. Prompt-to-play. Player-driven.",
    tag: "Game Layer",
  },
];

const principles = [
  {
    title: "Canon is earned, not claimed.",
    body: "What becomes official Kusho World canon must pass through Core review and ratification. Community proposals are welcome — Core decides. This is not a democracy of lore.",
  },
  {
    title: "Community expands the edges.",
    body: "Builders, creators, and collectors contribute to the universe. They can propose, create, and prove. Core curates what becomes permanent. The edges grow outward from the center.",
  },
  {
    title: "IP compounds over time.",
    body: "Each character, story, and product adds to a shared cultural asset. The Kusho IP grows more valuable as more builders participate with clear rights — because the world itself gets richer.",
  },
  {
    title: "Filipino roots. Global reach.",
    body: "Kusho is a universe rooted in Filipino mythology, language, and history. The DNA is specific. The ambition is universal. Shinsekai is not a metaphor — it is a mirror.",
  },
];

export default function WorldPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/Shojin Portal Full.jpg"
            alt="Kusho World"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-[#080808]/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-40 w-full">
          <span className="font-heading text-[10px] tracking-[0.2em] uppercase text-white/35 border-l-2 border-[#FF6B2B] pl-3 mb-5 block w-fit">
            World
          </span>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mb-4">
            The Universe.
          </h1>
          <p className="font-sans text-white/60 text-base max-w-xl leading-relaxed">
            Shinsekai, 2120. The Philippines renamed. The gods locked away.
            Three generations raised under a colonial flag — and a resistance
            that refused to let the old world die.
          </p>
        </div>
      </section>

      {/* Thesis */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <p className="label-section mb-4">— What Kusho Is</p>
          <h2 className="font-heading text-3xl md:text-5xl leading-tight mb-6">
            A revolution. An ecosystem.
            <br />
            <span className="text-white/30">A compounding loop.</span>
          </h2>
          <p className="font-sans text-white/60 leading-relaxed text-base md:text-lg mb-4">
            Kusho World is a Filipino-founded Anime x Culture IP ecosystem.
            The story lives in Shinsekai 2120 — a dystopian future where advanced
            technology and magic are the same thing, and a resistance called the
            Shojin is fighting to remember who they were before the world was renamed.
          </p>
          <p className="font-sans text-white/40 leading-relaxed">
            IP attracts builders and audiences. Builders create products and
            content. Products create distribution and revenue. The loop
            compounds — and the world gets richer with every contribution that
            earns its place in the canon.
          </p>
        </div>
      </section>

      <hr className="border-t border-white/[0.05]" />

      {/* Lore Pull Quote */}
      <section className="bg-[#060606] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-display text-3xl md:text-5xl text-white/80 leading-[1.1] mb-6">
              &ldquo;Before the Colonists came, we knew the world as it truly was.
              The realms breathed alongside us — the wind carried whispers
              from the mountains, the rivers flowed with memories from the sea.&rdquo;
            </p>
            <p className="font-sans text-white/25 text-xs tracking-widest uppercase">
              — Manong Pantas, narration
            </p>
          </div>
        </div>
      </section>

      {/* Character Universes */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="label-section mb-3">— Character Universes</p>
          <h2 className="font-heading text-3xl md:text-5xl">Meet the world.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {lore.map((item, i) => (
            <div key={i} className="panel-border p-8">
              <span className="font-heading text-[9px] tracking-[0.15em] uppercase text-[#C9A84C]/60 block mb-5">
                {item.tag}
              </span>
              <h3 className="font-heading text-2xl mb-1">{item.title}</h3>
              <p className="font-sans text-white/30 text-xs tracking-wide mb-4">{item.subtitle}</p>
              <p className="font-sans text-white/55 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Setting teaser */}
      <section className="bg-[#080808] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="md:col-span-1">
              <p className="label-section mb-4">— The Setting</p>
              <h2 className="font-heading text-3xl md:text-4xl leading-tight">
                Shinsekai, 2120.
              </h2>
            </div>
            <div className="md:col-span-2 flex flex-col gap-5">
              <p className="font-sans text-white/55 text-sm leading-relaxed">
                The Philippines was renamed eighty-two years ago. Three generations
                have been born under the Colonist flag. Their technology — built on
                stolen knowledge from the Realm of Magic — fused ancient Filipino
                mysticism with cybernetics. What the Colonists call advanced science,
                the old world called prayer.
              </p>
              <p className="font-sans text-white/30 text-sm leading-relaxed">
                The cosmology spans 10 realms — Kaluwalhatian (the Heavens),
                Kagubatan (the Forests), Kadiliman (the Darkness), Kadamgo
                (Dreams) — and a hidden tenth, the Kusho World, that holds the
                fabric of all existence together. Whoever controls Kawalan
                controls everything.
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                {["9 Realms + The Void", "Shinsekai 2120", "Filipino Mythic-Tech", "Revolution Arc"].map((tag) => (
                  <span key={tag} className="font-heading text-[9px] tracking-[0.15em] uppercase text-white/25 border border-white/10 px-3 py-1.5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Character visual */}
      <section className="relative py-20 bg-[#060606] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="label-section mb-4">— Shojin V2</p>
              <h2 className="font-heading text-3xl md:text-5xl leading-tight mb-5">
                The flagship evolves.
              </h2>
              <p className="font-sans text-white/55 leading-relaxed mb-4">
                The Shojin V2 migration brings upgraded art, reworked traits,
                and new chain direction into the Sovrun ecosystem on Hyperliquid.
                V1 holders burn to claim V2 — gas only, as baseline. The
                characters evolve with the story.
              </p>
              <p className="font-sans text-white/30 text-sm leading-relaxed mb-8">
                Final migration dates, contract addresses, and trait mechanics
                are in progress. Follow universe updates for announcements.
              </p>
              <Link href="/get-involved" className="btn-ku">
                Follow Updates <ArrowRight size={12} />
              </Link>
            </div>
            <div className="order-1 md:order-2 grid grid-cols-2 gap-3">
              <div className="relative aspect-[3/4] panel-border overflow-hidden">
                <Image src="/assets/Datu.png" alt="Datu" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-3">
                  <p className="font-heading text-[11px] tracking-[0.1em] uppercase text-white/70">Datu</p>
                </div>
              </div>
              <div className="relative aspect-[3/4] panel-border overflow-hidden">
                <Image src="/assets/Reed.png" alt="Reed" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-3">
                  <p className="font-heading text-[11px] tracking-[0.1em] uppercase text-white/70">Reed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Canon Principles */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="label-section mb-3">— Canon Principles</p>
          <h2 className="font-heading text-3xl md:text-5xl">What is official.</h2>
        </div>
        <div className="flex flex-col divide-y divide-white/[0.06]">
          {principles.map((p, i) => (
            <div key={i} className="grid grid-cols-[48px_1fr] gap-6 py-7 group">
              <div className="text-right">
                <span className="font-display text-4xl text-white/[0.07] leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <p className="font-heading text-xl text-white/85 mb-2 group-hover:text-[#C9A84C] transition-colors">
                  {p.title}
                </p>
                <p className="font-sans text-white/45 text-sm leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GIF panels */}
      <section className="py-20 bg-[#060606]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="label-section mb-10">— In Motion</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: "/assets/09b karmic_points_animated.gif", label: "Karmic Points" },
              { src: "/assets/10b karmic_night_animated.gif", label: "Karmic Night" },
              { src: "/assets/KarmicRise 2.GIF", label: "Karmic Rise" },
              { src: "/assets/Storymap Cypher.gif", label: "Storymap Cypher" },
            ].map((item, i) => (
              <div key={i} className="relative aspect-square overflow-hidden panel-border group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="font-heading text-[11px] tracking-[0.1em] uppercase text-white/70">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <hr className="border-t border-white/[0.05] mb-20" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="label-section mb-4">— About the Origin</p>
            <h2 className="font-heading text-3xl md:text-4xl leading-tight mb-5">
              Where Kusho came from.
            </h2>
            <p className="font-sans text-white/55 text-sm leading-relaxed mb-4">
              Kusho World began as a 5,555-character genesis PFP collection.
              In 2023, Joe J. acquired the project with a stewardship-first
              mandate — less speculation, more world-building. The acquisition
              marked a shift: from collection to IP ecosystem.
            </p>
            <p className="font-sans text-white/30 text-sm leading-relaxed">
              The Shojin genesis holders remain the canonical core. Everything
              built since — the protocol, the studio, the game, the apparel —
              exists because the foundation was worth building on.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            {[
              { year: "2022", event: "Kusho World genesis collection launches. 5,555 Shojin on-chain." },
              { year: "2023", event: "Joe J. acquires Kusho World. Stewardship-first revival begins." },
              { year: "2024", event: "Mithikal studio launched. Guardians wins YGG Playfest Hackathon." },
              { year: "2025", event: "Sovrun deal signed. Guardians enters active development. Famions reach 40K+ TikTok." },
              { year: "2026", event: "Shojin V2 migration in progress. Collectors Profile in development." },
            ].map((item, i) => (
              <div key={i} className="flex gap-8 items-start">
                <p className="font-mono text-white/20 text-xs flex-none w-10 mt-0.5">{item.year}</p>
                <p className="font-sans text-white/50 text-sm leading-relaxed">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="font-heading text-3xl md:text-5xl mb-4">Follow the universe.</h2>
        <p className="font-sans text-white/40 max-w-md mx-auto mb-8 text-sm">
          Universe updates, V2 migration news, and new canon drops.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/get-involved" className="btn-ku">
            Get Involved <ArrowRight size={12} />
          </Link>
          <Link href="/protocol" className="btn-ghost-ku">
            Read the Protocol →
          </Link>
        </div>
      </section>
    </div>
  );
}
