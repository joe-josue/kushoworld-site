import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const products = [
  { name: "Mithikal", kind: "Creative Studio", href: "https://studio.mithikal.com", external: true, status: "Live" },
  { name: "Kusho Web Shop", kind: "Apparel & Merch", href: "https://shop.kushoworld.com", external: true, status: "Live" },
  { name: "Kusho Guardians", kind: "Onchain Game", href: "/products", external: false, status: "Live" },
  { name: "Collectors Profile", kind: "Onchain Identity", href: "/products", external: false, status: "Coming" },
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
            src="/assets/Shojin Portal Full.jpg"
            alt="Kusho World"
            fill
            className="object-cover object-bottom"
            priority
            quality={95}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 pt-48 w-full">
          <div className="max-w-xl">
            <span className="font-heading text-[13px] tracking-[0.18em] uppercase text-white/40 border-l-2 border-[#FF6B2B] pl-3 mb-6 block">
              Kusho World — Filipino-Founded Anime IP
            </span>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mb-7">
              Freedom is not given,<br />it is taken.
            </h1>
            <p className="font-sans text-white/60 text-base leading-relaxed max-w-md mb-10">
              A multiverse adventure of revolution and self-discovery — rooted
              in Filipino mythology, built in public.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Link href="/world" className="btn-ku">
                Explore the World <ArrowRight size={13} />
              </Link>
              <Link href="#expand" className="btn-ghost-ku">
                Get Involved →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ SHINSEKAI — THE WORLD ══════════ */}
      <section className="relative overflow-hidden" style={{ minHeight: "70vh" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/10b karmic_night_animated.gif"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/30 to-[#080808]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/70 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col justify-center" style={{ minHeight: "70vh" }}>
          <p className="label-section mb-5">— Shinsekai, 2120</p>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mb-8 max-w-3xl">
            The Philippines has been renamed.
            <br />
            <em className="not-italic text-white/30">The gods are locked away.</em>
          </h2>
          <div className="max-w-xl flex flex-col gap-4">
            <p className="font-sans text-white/55 text-base leading-relaxed">
              Three generations have grown up under a colonial flag. The old songs
              are banned. The sacred groves burned to build citadels. Technology
              and magic fused into a single instrument of control. But the land
              remembers. The realms remember.
            </p>
            <p className="font-sans text-white/35 text-sm leading-relaxed">
              And now, the people are starting to remember too. The Shojin — the
              revolutionary resistance — are fighting to take back what was erased.
            </p>
          </div>
          <div className="mt-10">
            <Link href="/world" className="btn-ghost-ku">
              Enter the World →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ PULL QUOTE ══════════ */}
      <section className="bg-[#060606] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-display text-3xl md:text-5xl text-white/70 leading-[1.1] mb-6">
            &ldquo;Before the Colonists came, we knew the world as it truly was.
            The wind carried whispers from the mountains, the rivers flowed
            with memories from the sea.&rdquo;
          </p>
          <p className="font-sans text-white/20 text-xs tracking-widest uppercase">
            — Manong Pantas
          </p>
        </div>
      </section>

      {/* ══════════ THE SHOJIN ══════════ */}
      <section className="relative overflow-hidden bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="label-section mb-5">— The Shojin</p>
              <h2 className="font-heading text-4xl md:text-5xl leading-tight mb-6">
                The revolutionary people.
              </h2>
              <p className="font-sans text-white/55 text-base leading-relaxed mb-4">
                The Shojin are not a single organization but a movement — the
                collective resistance of a people who refused to let their world
                be erased. Warriors. Scholars. Rebels. They remember the old
                names and fight under new ones.
              </p>
              <p className="font-sans text-white/30 text-sm leading-relaxed mb-8">
                On-chain, the Shojin are the identity artifacts from which all
                Kusho World canon radiates — the foundation everything is
                built on.
              </p>
              <Link href="/world" className="btn-ghost-ku">
                Explore the Shojin →
              </Link>
            </div>

            {/* Manga art collage */}
            <div className="grid grid-cols-5 grid-rows-2 gap-1.5 h-[360px] md:h-[420px]">
              <div className="relative col-span-3 row-span-1 overflow-hidden panel-border">
                <Image src="/assets/Rambulan.png" alt="Rambulan" fill className="object-cover object-top" />
              </div>
              <div className="relative col-span-2 row-span-2 overflow-hidden panel-border">
                <Image src="/assets/Meeting.png" alt="The Shojin" fill className="object-cover object-top" />
              </div>
              <div className="relative col-span-3 row-span-1 overflow-hidden panel-border">
                <Image src="/assets/07 kouncil_launch.png" alt="Kouncil" fill className="object-cover object-center" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ FAMIONS ══════════ */}
      <section className="relative overflow-hidden bg-[#0e0e18]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Settlement scene — floating animated characters */}
            <div className="order-2 md:order-1 relative">
              <div
                className="relative mx-auto"
                style={{
                  width: "clamp(320px, 48vw, 520px)",
                  aspectRatio: "1 / 1",
                  animation: "islandFloat 8s ease-in-out infinite",
                }}
              >
                {/* Settlement island base */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/famion-settlement.png"
                  alt="Famions Settlement"
                  className="absolute inset-0 w-full h-full object-contain"
                />

                {/* Adarna — left, slow gentle bob */}
                <div className="absolute" style={{ left: "14%", bottom: "36%", width: "72px" }}>
                  <div
                    className="relative block w-full"
                    style={{
                      animation: "famionCharEnter 0.7s ease-out 0.4s both, famionFloatA 5.2s ease-in-out infinite 1.2s",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/assets/famion-adarna.png"
                      alt="Adarna"
                      className="w-full h-auto block"
                      style={{ filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.35))" }}
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/assets/famion-adarna-blink.png"
                      alt=""
                      className="absolute inset-0 w-full h-full object-contain object-bottom"
                      style={{ animation: "famionBlink 4.8s ease-in-out infinite 2.1s" }}
                    />
                  </div>
                </div>

                {/* Duwende — center, paces left/right */}
                <div className="absolute" style={{ left: "40%", bottom: "30%", width: "72px" }}>
                  <div
                    className="relative block w-full"
                    style={{
                      animation: "famionCharEnter 0.7s ease-out 0.55s both, famionFloatB 7.5s ease-in-out infinite 1.4s",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/assets/famion-duwende.png"
                      alt="Duwende"
                      className="w-full h-auto block"
                      style={{ filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.35))" }}
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/assets/famion-duwende-blink.png"
                      alt=""
                      className="absolute inset-0 w-full h-full object-contain object-bottom"
                      style={{ animation: "famionBlink 6.2s ease-in-out infinite 0.7s" }}
                    />
                  </div>
                </div>

                {/* Sundo — right, faster smaller bob, flipped */}
                <div className="absolute" style={{ left: "62%", bottom: "37%", width: "72px", transform: "scaleX(-1)" }}>
                  <div
                    className="relative block w-full"
                    style={{
                      animation: "famionCharEnter 0.7s ease-out 0.7s both, famionFloatC 4.4s ease-in-out infinite 0.8s",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/assets/famion-sundo.png"
                      alt="Sundo"
                      className="w-full h-auto block"
                      style={{ filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.35))" }}
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/assets/famion-sundo-blink.png"
                      alt=""
                      className="absolute inset-0 w-full h-full object-contain object-bottom"
                      style={{ animation: "famionBlink 3.9s ease-in-out infinite 4.2s" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <p className="label-section mb-5">— Famions</p>
              <h2 className="font-heading text-4xl md:text-5xl leading-tight mb-6">
                Spirit creatures from<br />between realms.
              </h2>
              <p className="font-sans text-white/55 text-base leading-relaxed mb-4">
                Famions are companion spirits tied to the boundary between
                realms — forests, mountains, darkness, dreams. Ancient Filipinos
                bonded with them through ritual. Partnership, not domestication.
                The Colonists banned it. The Seishi rediscovered it.
              </p>
              <p className="font-sans text-white/30 text-sm leading-relaxed mb-8">
                Outside the lore, Famions are the bridge to mainstream culture —
                expressive, viral, and rooted in the world. 40K+ TikTok audience
                and growing.
              </p>
              <Link href="/world" className="btn-ghost-ku">
                Meet the Famions →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ IN MOTION ══════════ */}
      <section className="bg-[#080808] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="label-section mb-10">— In Motion</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { src: "/assets/09b karmic_points_animated.gif", label: "Karmic Points" },
              { src: "/assets/10b karmic_night_animated.gif", label: "Karmic Night" },
              { src: "/assets/KarmicRise 2.GIF", label: "Karmic Rise" },
              { src: "/assets/Storymap Cypher.gif", label: "Storymap Cypher" },
            ].map((item, i) => (
              <div key={i} className="relative aspect-video overflow-hidden group bg-black panel-border">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
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
            THE OLD WORLD<br />IS WAKING UP.
          </p>
        </div>
      </section>

      {/* ══════════ EXPAND THE UNIVERSE ══════════ */}
      <section id="expand" className="relative overflow-hidden bg-[#080808] py-24">
        <div className="absolute inset-0 opacity-8">
          <Image src="/assets/09a karmic_points.png" alt="" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-transparent to-[#080808]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="label-section mb-5">— Get Involved</p>
              <h2 className="font-heading text-4xl md:text-5xl leading-tight mb-5">
                Expand the universe.
              </h2>
              <p className="font-sans text-white/55 text-base leading-relaxed mb-4">
                Contribute storylines, locations, and characters with real roads
                to becoming official — or build products, services, and
                experiences on top of the foundation.
              </p>
              <p className="font-sans text-white/30 text-sm leading-relaxed mb-10">
                The protocol defines how contribution works: clear expectations,
                clear rights, and a path from first submission to canon status.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <Link href="/get-involved" className="btn-ku">
                  Learn More <ArrowRight size={13} />
                </Link>
                <Link href="/docs" className="btn-ghost-ku">
                  Documentation →
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              {[
                { label: "Contribute to Canon", desc: "Submit storylines, characters, and art. If it earns ratification, it becomes part of the official record." },
                { label: "Build on the Foundation", desc: "Products, experiences, games — built on Kusho IP through defined builder paths with clear terms." },
                { label: "Advanced Contributors", desc: "Film, print comics, infrastructure, large-ticket projects — get in touch directly." },
              ].map((path, i) => (
                <div key={i} className="panel-border p-7">
                  <h3 className="font-heading text-lg text-white/85 mb-2">{path.label}</h3>
                  <p className="font-sans text-white/45 text-sm leading-relaxed">{path.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ PRODUCTS ══════════ */}
      <section className="bg-[#060606] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="label-section mb-3">— Products</p>
              <h2 className="font-heading text-3xl md:text-4xl">What the ecosystem has shipped.</h2>
            </div>
            <Link href="/products" className="btn-ghost-ku hidden md:flex">
              View All →
            </Link>
          </div>

          <div className="flex flex-col divide-y divide-white/[0.06]">
            {products.map((p, i) => (
              <div key={i} className="py-5 flex items-center justify-between gap-4 group">
                <div className="flex items-center gap-6">
                  <span className="font-heading text-sm text-white/20 flex-none w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-heading text-lg text-white/80 group-hover:text-white transition-colors">
                      {p.name}
                    </p>
                    <p className="font-sans text-white/30 text-xs">{p.kind}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  {p.status === "Live" ? (
                    <span className="font-heading text-[9px] tracking-[0.15em] uppercase text-emerald-400">● Live</span>
                  ) : (
                    <span className="font-heading text-[9px] tracking-[0.15em] uppercase text-white/25">◌ Coming</span>
                  )}
                  {p.external ? (
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className="btn-ghost-ku">
                      Visit <ArrowUpRight size={10} />
                    </a>
                  ) : (
                    <Link href={p.href} className="btn-ghost-ku">
                      Details <ArrowRight size={10} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 md:hidden">
            <Link href="/products" className="btn-ghost-ku">
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ LABS ══════════ */}
      <section className="bg-[#080808] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="md:col-span-3 relative h-72 md:h-auto overflow-hidden panel-border">
              <Image
                src="/assets/SHO Agent.jpg"
                alt="Malaya Labs"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#080808]/50 md:to-[#080808]" />
            </div>

            <div className="md:col-span-2 flex flex-col justify-center py-6 md:py-0 md:pl-4">
              <p className="label-section mb-4">— Labs</p>
              <h2 className="font-heading text-3xl md:text-5xl leading-tight mb-5">
                Malaya Labs.<br />
                <span className="text-white/45">Lean by design.</span>
              </h2>
              <p className="font-sans text-white/55 text-sm leading-relaxed mb-8">
                The operating entity behind Kusho. Strategy, execution, product
                incubation, and ecosystem stewardship — done with discipline and
                minimal overhead.
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

      {/* ══════════ CONTACT / SOCIAL ══════════ */}
      <section className="relative overflow-hidden bg-[#060606] py-24">
        <div className="absolute inset-0 opacity-10">
          <Image src="/assets/Shojin Portal Full.jpg" alt="" fill className="object-cover object-top" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#060606] to-[#060606]/95" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="label-section mb-5">— Find Us</p>
              <h2 className="font-heading text-4xl md:text-5xl leading-tight mb-6">
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
