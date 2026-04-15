import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const products = [
  {
    name: "Mithikal",
    kind: "Creative Studio",
    desc: "An anime and manga studio built inside the Kusho ecosystem. Producing original IP, world-building tools, and narrative infrastructure for the long game.",
    img: "/assets/Storymap Cypher.gif",
    isGif: true,
    href: "https://studio.mithikal.com",
    external: true,
    status: "Live",
  },
  {
    name: "Kusho Web Shop",
    kind: "Apparel & Merch",
    desc: "Streetwear and collectibles rooted in Kusho World characters. Wearable canon — designed in-house, shipped to holders and fans.",
    img: "/assets/apparel_1.jpg",
    isGif: false,
    href: "https://shop.kushoworld.com",
    external: true,
    status: "Live",
  },
  {
    name: "Collectors Profile",
    kind: "Onchain Identity",
    desc: "A profile layer for Kusho holders — verify your assets, surface your contributor history, and carry your identity across the ecosystem.",
    img: "/assets/mockup.png",
    isGif: false,
    href: "#",
    external: false,
    status: "Coming",
  },
  {
    name: "Kusho Guardians",
    kind: "Onchain Game",
    desc: "An MMO-lite built around autonomous NFT companions with independent wallets. Hackathon winner. Now backed by Sovrun in the Hyperliquid ecosystem.",
    img: "/assets/BBG-SUMMON-1.png",
    isGif: false,
    href: "/products",
    external: false,
    status: "Live",
  },
];

const lanes = [
  { id: "01", name: "Collector", desc: "Hold canonical assets. Participate in activations and governance signals." },
  { id: "02", name: "Creator", desc: "Produce work within the world. Submit for canon consideration." },
  { id: "03", name: "Developer", desc: "Build apps and tools on the IP layer under a defined license." },
  { id: "04", name: "Operator", desc: "Run programs, platforms, or distribution nodes with a clear mandate." },
];

const socials = [
  { label: "X / Twitter", href: "https://twitter.com/kushoworld" },
  { label: "Discord", href: "https://discord.gg/kushoworld" },
  { label: "TikTok — Famions", href: "https://tiktok.com/@familiarsworld" },
  { label: "Medium — News & Updates", href: "https://medium.com/@kushoworld" },
  { label: "GitHub", href: "https://github.com/kushoworld" },
];

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* ══════════ HERO ══════════ */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/Shojin Portal Cinematic.jpg"
            alt="Kusho World"
            fill
            className="object-cover object-center scale-[1.02]"
            priority
            quality={95}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 pt-48 w-full">
          <div className="max-w-xl">
            {/* Chapter mark label */}
            <span className="font-heading text-[10px] tracking-[0.2em] uppercase text-white/35 border-l-2 border-[#FF6B2B] pl-3 mb-6 block">
              Kusho World — Filipino-Founded Anime IP
            </span>
            {/* Anton display headline */}
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.95] mb-7">
              A world being<br />built in public.
            </h1>
            <p className="font-sans text-white/65 text-base md:text-lg leading-relaxed max-w-md mb-10">
              Kusho started as a 5,555-character collection in 2022. It has grown
              into an IP ecosystem with its own protocol, studio, and builder
              community. The work is ongoing and the world is open.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Link href="/world" className="btn-ku">
                Explore the World <ArrowRight size={13} />
              </Link>
              <Link href="#contribute" className="btn-ghost-ku">
                Get Involved →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ WORLD / CHARACTER STRIP ══════════ */}
      <section className="bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
          <p className="label-section mb-3">— The Universe</p>
          <h2 className="font-heading text-4xl md:text-6xl leading-tight mb-3">
            Characters, lore, and a community<br />that earns its place.
          </h2>
          <p className="font-sans text-white/60 text-sm md:text-base leading-relaxed max-w-lg mb-12">
            The Shojin are the canonical core. Famions are the cultural engine.
            Together they form a universe where what you contribute can become
            part of the official record.
          </p>
        </div>

        {/* Horizontal character strip */}
        <div className="relative">
          <div className="flex gap-3 overflow-x-auto px-6 pb-0 snap-x snap-mandatory">
            {[
              { src: "/assets/Shojin Portal Cinematic.jpg", label: "Shojin Portal", wide: true },
              { src: "/assets/Datu.png", label: "Datu" },
              { src: "/assets/Reed.png", label: "Reed" },
              { src: "/assets/BBG V2.png", label: "BBG" },
              { src: "/assets/dadas.png", label: "Dadas — Famion" },
              { src: "/assets/SHO Agent.jpg", label: "SHO Agent" },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex-none snap-start group overflow-hidden border border-white/5 ${
                  item.wide ? "w-[520px] md:w-[640px]" : "w-56 md:w-64"
                }`}
              >
                <div className="relative h-80 md:h-96">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <p className="absolute bottom-4 left-4 font-heading text-[11px] tracking-[0.1em] uppercase text-white/70">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#080808] to-transparent pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-10 pb-20">
          <Link href="/world" className="btn-ghost-ku">
            Enter the World →
          </Link>
        </div>
      </section>

      {/* ══════════ PROTOCOL ══════════ */}
      <section className="relative overflow-hidden bg-[#060606]">
        {/* Wide animated background */}
        <div className="relative h-[500px] md:h-[640px] w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/10b karmic_night_animated.gif"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/30 to-[#060606]/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060606] via-[#060606]/20 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-end max-w-7xl mx-auto px-6 pb-16">
            <span className="font-heading text-[10px] tracking-[0.2em] uppercase text-white/35 border-l-2 border-[#FF6B2B] pl-3 mb-5 block w-fit">
              Protocol
            </span>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mb-5 max-w-2xl">
              Core holds the canon.
              <br />
              <em className="not-italic text-white/50">The community shapes the edges.</em>
            </h2>
            <p className="font-sans text-white/65 text-sm md:text-base leading-relaxed max-w-lg mb-8">
              Kusho operates on a participation model, not a speculation model.
              Four defined lanes for contributing — each with real expectations,
              real rights, and a path to the official record.
            </p>
            <Link href="/protocol" className="btn-ghost-ku w-fit">
              Read the Protocol →
            </Link>
          </div>
        </div>

        {/* Protocol steps — vertical timeline */}
        <div className="max-w-7xl mx-auto px-6 pb-20 pt-4">
          <div className="flex flex-col divide-y divide-white/[0.06]">
            {[
              { step: "Propose", desc: "Submit a contribution scoped within Kusho's IP and lore." },
              { step: "Review", desc: "Core evaluates alignment. Feedback within the published cadence." },
              { step: "Prove", desc: "Execute the contribution. Community and Core observe." },
              { step: "Ratify", desc: "Core ratifies what becomes permanent. Reputation is earned." },
            ].map((s, i) => (
              <div key={i} className="grid grid-cols-[60px_1fr] gap-8 py-8 group">
                <div className="text-right">
                  <span className="font-display text-5xl text-white/[0.07] leading-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <p className="font-heading text-2xl text-white/85 mb-2 group-hover:text-[#C9A84C] transition-colors">
                    {s.step}
                  </p>
                  <p className="font-sans text-white/50 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ PRODUCTS ══════════ */}
      <section className="bg-[#080808] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="label-section mb-3">— Products</p>
          <h2 className="font-heading text-4xl md:text-6xl leading-tight mb-3">
            What the ecosystem has shipped.
          </h2>
          <p className="font-sans text-white/60 text-sm md:text-base leading-relaxed max-w-lg mb-14">
            Each product here exists because someone inside or adjacent to
            Kusho World built it and kept building.
          </p>

          {/* 2×2 product grid — real gap, no gap-px trick */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {products.map((p, i) => (
              <div key={i} className="group panel-border flex flex-col">
                {/* Image */}
                <div className="relative h-64 md:h-72 overflow-hidden bg-black">
                  <div className="absolute top-4 left-4 z-10">
                    {p.status === "Live" ? (
                      <span className="font-heading text-[9px] tracking-[0.15em] uppercase text-emerald-400">● Live</span>
                    ) : (
                      <span className="font-heading text-[9px] tracking-[0.15em] uppercase text-white/25">◌ Coming</span>
                    )}
                  </div>
                  {p.isGif ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    />
                  ) : (
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
                </div>

                {/* Copy */}
                <div className="p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <p className="label-section mb-2">{p.kind}</p>
                    <h3 className="font-heading text-2xl text-white mb-3">{p.name}</h3>
                    <p className="font-sans text-white/65 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                  {p.href !== "#" && (
                    <div className="mt-6">
                      {p.external ? (
                        <a href={p.href} target="_blank" rel="noopener noreferrer" className="btn-ghost-ku">
                          Visit {p.name} <ArrowUpRight size={11} />
                        </a>
                      ) : (
                        <Link href={p.href} className="btn-ghost-ku">
                          Learn More →
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Wide apparel banner */}
          <div className="mt-5 grain relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="md:col-span-2 relative h-64 md:h-80 overflow-hidden group panel-border">
                <Image
                  src="/assets/apparel_2.jpg"
                  alt="Kusho Apparel"
                  fill
                  className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/50 to-transparent" />
              </div>
              <div className="flex flex-col gap-5">
                <div className="relative h-[148px] overflow-hidden group panel-border">
                  <Image src="/assets/bbg_merch_1.png" alt="BBG Merch" fill className="object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                </div>
                <div className="relative h-[148px] overflow-hidden group panel-border">
                  <Image src="/assets/skullboi_merch_1.png" alt="Skullboi Merch" fill className="object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ VIDEO INTERSTITIAL ══════════ */}
      <section className="relative overflow-hidden grain" style={{ height: "55vh" }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          src="/assets/KarmicRiseVid.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-transparent to-[#080808]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/60 via-transparent to-[#080808]/60" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <p className="font-display text-5xl md:text-7xl text-white leading-[0.95]">
            SOMETHING IS<br />TAKING SHAPE.
          </p>
        </div>
      </section>

      {/* ══════════ CONTRIBUTE / GET INVOLVED ══════════ */}
      <section id="contribute" className="relative overflow-hidden bg-[#060606] py-24">
        <div className="absolute inset-0 opacity-15">
          <Image src="/assets/09a karmic_points.png" alt="" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#060606] via-transparent to-[#060606]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="label-section mb-4">— Get Involved</p>
              <h2 className="font-heading text-4xl md:text-6xl leading-tight mb-5">
                There are real ways<br />to participate here.
              </h2>
              <p className="font-sans text-white/60 text-sm md:text-base leading-relaxed mb-4">
                Not vague invitations — four structured lanes, each with defined
                expectations and rights. Collectors, creators, developers, and
                operators all have a place, and a clear path to their first
                contribution.
              </p>
              <p className="font-sans text-white/35 text-sm leading-relaxed mb-10">
                Full protocol docs, IP rights, and builder license terms live in
                the documentation hub.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <Link href="/get-involved" className="btn-ku">
                  Choose Your Lane <ArrowRight size={13} />
                </Link>
                <Link href="/docs" className="btn-ghost-ku">
                  Documentation →
                </Link>
              </div>
            </div>

            {/* Lanes — divide-y, no gap-px */}
            <div className="flex flex-col divide-y divide-white/[0.06]">
              {lanes.map((lane) => (
                <div key={lane.id} className="flex items-start gap-5 py-5">
                  <span className="font-heading text-sm text-[#C9A84C]/50 flex-none mt-0.5">
                    {lane.id}
                  </span>
                  <div>
                    <p className="font-heading text-lg text-white/80 mb-1">{lane.name}</p>
                    <p className="font-sans text-white/55 text-xs leading-relaxed">{lane.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ LABS ══════════ */}
      <section className="bg-[#080808] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Wide image panel */}
            <div className="md:col-span-3 relative h-72 md:h-auto overflow-hidden panel-border">
              <Image
                src="/assets/SHO Agent.jpg"
                alt="Malaya Labs"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#080808]/50 md:to-[#080808]" />
            </div>

            {/* Copy */}
            <div className="md:col-span-2 flex flex-col justify-center py-6 md:py-0 md:pl-4">
              <p className="label-section mb-4">— Labs</p>
              <h2 className="font-heading text-3xl md:text-5xl leading-tight mb-5">
                Malaya Labs.<br />
                <span className="text-white/45">Lean by design.</span>
              </h2>
              <p className="font-sans text-white/55 text-sm leading-relaxed mb-4">
                Malaya Labs is the operating entity behind Kusho. Strategy,
                execution, product incubation, and ecosystem stewardship — done
                with discipline and minimal overhead.
              </p>
              <p className="font-sans text-white/25 text-xs leading-relaxed mb-8">
                If you want to collaborate, build a partnership, or bring something
                into the ecosystem, the Labs team is the right door.
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://twitter.com/kushoworld"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-ku w-fit"
                >
                  Start a Collaboration <ArrowUpRight size={11} />
                </a>
                <Link href="/labs" className="btn-ghost-ku w-fit opacity-60 hover:opacity-100">
                  Learn About Labs →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ IN MOTION ══════════ */}
      <section className="bg-[#060606] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="label-section mb-10">— In Motion</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: "/assets/09b karmic_points_animated.gif", label: "Karmic Points" },
              { src: "/assets/10b karmic_night_animated.gif", label: "Karmic Night" },
              { src: "/assets/KarmicRise 2.GIF", label: "Karmic Rise" },
              { src: "/assets/Storymap Cypher.gif", label: "Storymap Cypher" },
            ].map((item, i) => (
              <div key={i} className="relative aspect-square overflow-hidden group bg-black panel-border">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="font-heading text-[11px] tracking-[0.1em] uppercase text-white/70">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CONTACT / SOCIAL ══════════ */}
      <section className="relative overflow-hidden bg-[#080808] py-24">
        <div className="absolute inset-0 opacity-10">
          <Image src="/assets/Shojin Portal Cinematic.jpg" alt="" fill className="object-cover object-top" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] to-[#080808]/95" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="label-section mb-5">— Find Us</p>
              <h2 className="font-heading text-4xl md:text-6xl leading-tight mb-6">
                The world is open.
                <br />
                <span className="text-white/45">
                  Come find out how it works.
                </span>
              </h2>
              <p className="font-sans text-white/40 text-sm leading-relaxed max-w-sm">
                Follow along on X, join the Discord, or read the longer-form
                writing on Medium. Whatever your pace, there&apos;s a way in.
              </p>
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex flex-col">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-4 border-b border-white/5 hover:border-white/15 transition-colors"
                  >
                    <span className="font-sans text-white/65 text-sm group-hover:text-white transition-colors">
                      {s.label}
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="text-white/20 group-hover:text-white/60 transition-colors"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
