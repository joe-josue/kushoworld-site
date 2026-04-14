import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
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
    status: "Coming Soon",
  },
  {
    name: "Kusho Guardians",
    kind: "Onchain Game",
    desc: "An MMO-lite built around autonomous NFT companions with independent wallets. Started as a hackathon project. Now backed by Sovrun in the Hyperliquid ecosystem.",
    img: "/assets/BBG-SUMMON-1.png",
    isGif: false,
    href: "/products",
    external: false,
    status: "Live",
  },
];

const lanes = [
  { id: "Collector", desc: "Hold canonical assets. Participate in activations and governance signals." },
  { id: "Creator", desc: "Produce work within the world. Submit for canon consideration." },
  { id: "Developer", desc: "Build apps and tools on the IP layer under a defined license." },
  { id: "Operator", desc: "Run programs, platforms, or distribution nodes with a clear mandate." },
];

const socials = [
  { label: "X / Twitter", href: "https://twitter.com/kushoworld" },
  { label: "Discord", href: "https://discord.gg/kushoworld" },
  { label: "TikTok (Famions)", href: "https://tiktok.com/@familiarsworld" },
  { label: "Medium / Blog", href: "https://medium.com/@kushoworld" },
  { label: "GitHub", href: "https://github.com/kushoworld" },
];

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="flex flex-col">

      {/* ══════════════════════════════════════
          HERO — THE WORLD
      ══════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        {/* Full-bleed cinematic */}
        <div className="absolute inset-0">
          <Image
            src="/assets/Shojin Portal Cinematic.jpg"
            alt="Kusho World"
            fill
            className="object-cover object-center scale-[1.02]"
            priority
            quality={95}
          />
          {/* Dark taper from bottom, subtle left tint */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 pt-48 w-full">
          <div className="max-w-xl">
            <p className="text-white/40 text-xs tracking-widest uppercase mb-6">
              Kusho World — Filipino-Founded Anime IP
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-7">
              A world being
              <br />
              built in public.
            </h1>
            <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-md mb-10">
              Kusho started as a 5,555-character collection in 2022. It has grown
              into an IP ecosystem with its own protocol, studio, and builder
              community. The work is ongoing and the world is open.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/world"
                className="inline-flex items-center gap-2.5 bg-white text-black text-xs tracking-widest uppercase px-6 py-3 font-medium hover:bg-white/88 transition-colors"
              >
                Explore the World
                <ArrowRight size={12} />
              </Link>
              <Link
                href="#contribute"
                className="inline-flex items-center gap-2.5 border border-white/15 text-white/60 text-xs tracking-widest uppercase px-6 py-3 hover:text-white hover:border-white/30 transition-colors"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WORLD — CHARACTER STRIP
      ══════════════════════════════════════ */}
      <section className="bg-[#080808]">
        {/* Wide image — Shojin characters, scroll-able strip */}
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
          <p className="text-white/25 text-[10px] tracking-widest uppercase mb-2">The Universe</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-3">
            Characters, lore,
            <br />
            and a community that earns its place.
          </h2>
          <p className="text-white/40 text-sm md:text-base leading-relaxed max-w-lg mb-12">
            The Shojin are the canonical core. Famions are the cultural engine.
            Together they form a universe where what you contribute can become
            part of the official record.
          </p>
        </div>

        {/* Horizontal character showcase — wide */}
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
                  <p className="absolute bottom-4 left-4 text-white/70 text-xs tracking-wide">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Fade right edge */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#080808] to-transparent pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-10 pb-20">
          <Link
            href="/world"
            className="inline-flex items-center gap-2 text-white/40 text-[10px] tracking-widest uppercase hover:text-white transition-colors"
          >
            Enter the World
            <ArrowRight size={10} />
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROTOCOL
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#060606]">
        {/* Wide background art — karmic night */}
        <div className="relative h-[500px] md:h-[640px] w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/10b karmic_night_animated.gif"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/30 to-[#060606]/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060606] via-[#060606]/20 to-transparent" />

          {/* Text over image */}
          <div className="absolute inset-0 flex flex-col justify-end max-w-7xl mx-auto px-6 pb-16">
            <p className="text-white/25 text-[10px] tracking-widest uppercase mb-4">Protocol</p>
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-5 max-w-2xl">
              Core holds the canon.
              <br />
              <span className="text-white/40">The community shapes the edges.</span>
            </h2>
            <p className="text-white/45 text-sm md:text-base leading-relaxed max-w-lg mb-8">
              Kusho operates on a participation model, not a speculation model.
              There are four defined lanes for contributing — each with real
              expectations, real rights, and a path to being part of the
              official record.
            </p>
            <Link
              href="/protocol"
              className="inline-flex items-center gap-2 text-white/40 text-[10px] tracking-widest uppercase hover:text-white transition-colors w-fit"
            >
              Read the Protocol
              <ArrowRight size={10} />
            </Link>
          </div>
        </div>

        {/* Protocol pillars — below the image */}
        <div className="max-w-7xl mx-auto px-6 pb-20 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/5">
            {[
              { step: "Propose", desc: "Submit a contribution scoped within Kusho's IP and lore." },
              { step: "Review", desc: "Core evaluates alignment. Feedback within the published cadence." },
              { step: "Prove", desc: "Execute the contribution. Community and Core observe." },
              { step: "Ratify", desc: "Core ratifies what becomes permanent. Reputation is earned." },
            ].map((s, i) => (
              <div key={i} className="bg-[#060606] p-7">
                <p className="text-white/15 text-3xl font-bold mb-3 font-mono">
                  0{i + 1}
                </p>
                <p className="text-white/70 text-sm font-medium mb-2">{s.step}</p>
                <p className="text-white/35 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PRODUCTS
      ══════════════════════════════════════ */}
      <section className="bg-[#080808] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-white/25 text-[10px] tracking-widest uppercase mb-3">Products</p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-3">
            What the ecosystem
            <br />
            has shipped.
          </h2>
          <p className="text-white/40 text-sm md:text-base leading-relaxed max-w-lg mb-14">
            Each product in Kusho&apos;s orbit exists because someone built it.
            These are live, in progress, or close enough to matter.
          </p>

          {/* Products — alternating wide + narrow layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {products.map((p, i) => (
              <div key={i} className="group bg-[#080808] flex flex-col">
                {/* Image */}
                <div className="relative h-64 md:h-80 overflow-hidden">
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
                  <div className="absolute top-4 left-4">
                    <span
                      className={`text-[9px] tracking-widest uppercase px-2.5 py-1 border ${
                        p.status === "Live"
                          ? "border-emerald-500/40 text-emerald-400 bg-emerald-500/5"
                          : "border-white/15 text-white/30"
                      }`}
                    >
                      {p.status}
                    </span>
                  </div>
                </div>

                {/* Copy */}
                <div className="p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <p className="text-white/25 text-[10px] tracking-widest uppercase mb-1">
                      {p.kind}
                    </p>
                    <h3 className="text-xl font-semibold mb-3">{p.name}</h3>
                    <p className="text-white/45 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                  {p.href !== "#" && (
                    <div className="mt-7">
                      {p.external ? (
                        <a
                          href={p.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-white/35 text-[10px] tracking-widest uppercase hover:text-white transition-colors"
                        >
                          Visit {p.name}
                          <ArrowUpRight size={10} />
                        </a>
                      ) : (
                        <Link
                          href={p.href}
                          className="inline-flex items-center gap-2 text-white/35 text-[10px] tracking-widest uppercase hover:text-white transition-colors"
                        >
                          Learn More
                          <ArrowRight size={10} />
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Apparel wide banner */}
          <div className="mt-px bg-white/5">
            <div className="bg-[#080808] grid grid-cols-1 md:grid-cols-3 gap-px">
              <div className="md:col-span-2 relative h-64 md:h-96 overflow-hidden group">
                <Image
                  src="/assets/apparel_2.jpg"
                  alt="Kusho Apparel"
                  fill
                  className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/60 to-transparent" />
              </div>
              <div className="bg-[#080808] flex flex-col gap-3 p-7 justify-end">
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src="/assets/bbg_merch_1.png"
                    alt="BBG Merch"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src="/assets/skullboi_merch_1.png"
                    alt="Skullboi Merch"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTRIBUTE / GET INVOLVED
      ══════════════════════════════════════ */}
      <section id="contribute" className="relative overflow-hidden bg-[#060606] py-24">
        {/* Wide art background */}
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/assets/09a karmic_points.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#060606] via-transparent to-[#060606]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-white/25 text-[10px] tracking-widest uppercase mb-4">
                Get Involved
              </p>
              <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-5">
                There are real ways
                <br />
                to participate here.
              </h2>
              <p className="text-white/45 text-sm md:text-base leading-relaxed mb-5">
                Not vague invitations — four structured lanes, each with defined
                expectations and rights. Collectors, creators, developers, and
                operators all have a place, and all have a clear path to their
                first contribution.
              </p>
              <p className="text-white/30 text-sm leading-relaxed mb-10">
                Full protocol docs, IP rights matrix, and builder license terms
                live in the documentation hub.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/get-involved"
                  className="inline-flex items-center gap-2.5 bg-[#FF6B2B] text-white text-xs tracking-widest uppercase px-6 py-3 hover:bg-[#e85a1f] transition-colors"
                >
                  Choose Your Lane
                  <ArrowRight size={12} />
                </Link>
                <Link
                  href="/docs"
                  className="inline-flex items-center gap-2.5 border border-white/12 text-white/50 text-xs tracking-widest uppercase px-6 py-3 hover:border-white/25 hover:text-white transition-colors"
                >
                  Documentation
                </Link>
              </div>
            </div>

            {/* Lanes */}
            <div className="flex flex-col gap-px bg-white/5">
              {lanes.map((lane, i) => (
                <div key={i} className="bg-[#060606] px-6 py-5 flex items-start gap-4">
                  <span className="text-[#FF6B2B]/40 text-xs font-mono mt-0.5 flex-none">
                    0{i + 1}
                  </span>
                  <div>
                    <p className="text-white/70 text-sm font-medium mb-1">
                      {lane.id}
                    </p>
                    <p className="text-white/35 text-xs leading-relaxed">
                      {lane.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          LABS
      ══════════════════════════════════════ */}
      <section className="bg-[#080808] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-white/5">
            {/* Wide image panel */}
            <div className="md:col-span-3 relative h-72 md:h-auto overflow-hidden">
              <Image
                src="/assets/SHO Agent.jpg"
                alt="Malaya Labs"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#080808]/60 md:to-[#080808]" />
            </div>

            {/* Copy panel */}
            <div className="md:col-span-2 bg-[#080808] p-10 flex flex-col justify-center">
              <p className="text-white/25 text-[10px] tracking-widest uppercase mb-4">
                Labs
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold leading-tight mb-5">
                Malaya Labs.
                <br />
                <span className="text-white/30">Lean by design.</span>
              </h2>
              <p className="text-white/45 text-sm leading-relaxed mb-4">
                Malaya Labs is the operating entity behind Kusho. Strategy,
                execution, product incubation, and ecosystem stewardship — done
                with discipline and minimal overhead.
              </p>
              <p className="text-white/25 text-xs leading-relaxed mb-8">
                If you want to collaborate, build a partnership, or bring
                something into the ecosystem, the Labs team is the right door.
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://twitter.com/kushoworld"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/35 text-[10px] tracking-widest uppercase hover:text-white transition-colors w-fit"
                >
                  Start a Collaboration
                  <ArrowUpRight size={10} />
                </a>
                <Link
                  href="/labs"
                  className="inline-flex items-center gap-2 text-white/25 text-[10px] tracking-widest uppercase hover:text-white/50 transition-colors w-fit"
                >
                  Learn About Labs
                  <ArrowRight size={10} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MOTION / WORLD RECAP
      ══════════════════════════════════════ */}
      <section className="bg-[#060606] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-white/25 text-[10px] tracking-widest uppercase mb-10">
            In Motion
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
            {[
              { src: "/assets/09b karmic_points_animated.gif", label: "Karmic Points" },
              { src: "/assets/10b karmic_night_animated.gif", label: "Karmic Night" },
              { src: "/assets/KarmicRise 2.GIF", label: "Karmic Rise" },
              { src: "/assets/Storymap Cypher.gif", label: "Storymap Cypher" },
            ].map((item, i) => (
              <div
                key={i}
                className="relative aspect-square overflow-hidden group bg-black"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-600"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white/70 text-xs">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACT / SOCIAL
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#080808] py-24">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/assets/Shojin Portal Cinematic.jpg"
            alt=""
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] to-[#080808]/95" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="text-white/25 text-[10px] tracking-widest uppercase mb-5">
                Find Us
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
                The world is open.
                <br />
                <span className="text-white/30">
                  Come find out how it works.
                </span>
              </h2>
              <p className="text-white/40 text-sm leading-relaxed max-w-sm">
                Follow along on X, join the Discord, or read the longer-form
                writing on Medium. Whatever your pace, there&apos;s a way in.
              </p>
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex flex-col gap-1">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-4 border-b border-white/5 hover:border-white/15 transition-colors"
                  >
                    <span className="text-white/50 text-sm group-hover:text-white transition-colors">
                      {s.label}
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="text-white/20 group-hover:text-white/60 transition-colors"
                    />
                  </a>
                ))}
                {/* News/Blog */}
                <a
                  href="https://medium.com/@kushoworld"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-4 border-b border-white/5 hover:border-white/15 transition-colors"
                >
                  <span className="text-white/50 text-sm group-hover:text-white transition-colors">
                    News &amp; Updates
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="text-white/20 group-hover:text-white/60 transition-colors"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
