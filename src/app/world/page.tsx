import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const realms = [
  { name: "Kaluwalhatian", meaning: "The Heavens", desc: "The divine realm. Eternal light. Where Bathala once watched over everything." },
  { name: "Kagubatan", meaning: "The Forests", desc: "Enchanted forests, teeming with life. Home of the Sprite Familiars — protectors of the green." },
  { name: "Kabundukan", meaning: "The Mountains", desc: "Ancient mountains reaching toward the skies. The Duwende — wise earth spirits — originate here." },
  { name: "Kadiliman", meaning: "The Darkness", desc: "The shadow realm. Home of the Sundo — spirits that guide or misguide souls through the threshold." },
  { name: "Kadamgo", meaning: "The Realm of Dreams", desc: "Origin of hidden truths. The mythical Adarna, with its healing song, was born in this place." },
  { name: "Kawalan", meaning: "The Kusho World", desc: "The hidden tenth realm. The Void. Whoever controls Kawalan controls everything. This is the prize." },
];

const principles = [
  {
    title: "Canon is earned, not claimed.",
    body: "What becomes official must pass through Core review and ratification. Community proposals are welcome — Core decides. This is not a democracy of lore.",
  },
  {
    title: "Community expands the edges.",
    body: "Builders, creators, and collectors contribute to the universe. They can propose, create, and prove. Core curates what becomes permanent.",
  },
  {
    title: "IP compounds over time.",
    body: "Each character, story, and product adds to a shared cultural asset. The world itself gets richer with every contribution that earns its place.",
  },
  {
    title: "Filipino roots. Global reach.",
    body: "Kusho is rooted in Filipino mythology, language, and history. The DNA is specific. The ambition is universal. Shinsekai is not a metaphor — it is a mirror.",
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
            Kusho World is a Filipino mythic-tech fusion narrative set in
            Shinsekai 2120 — a dystopian future where advanced technology
            and magic are the same thing, and a resistance called the Shojin
            is fighting to remember who they were before the world was renamed.
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

      {/* Pull Quote */}
      <section className="bg-[#060606] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-display text-3xl md:text-5xl text-white/70 leading-[1.1] mb-6">
            &ldquo;Then they came. With their ships and their machines and their
            new name for our home. &lsquo;Shinsekai,&rsquo; they called it.
            As if we were nothing before them.&rdquo;
          </p>
          <p className="font-sans text-white/20 text-xs tracking-widest uppercase">
            — Manong Pantas, The Prologue
          </p>
        </div>
      </section>

      {/* Shinsekai Setting */}
      <section className="relative overflow-hidden" style={{ minHeight: "60vh" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/10b karmic_night_animated.gif"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-[#080808]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/70 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <p className="label-section mb-5">— The Setting</p>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mb-8 max-w-2xl">
            Shinsekai, 2120.
          </h2>
          <div className="max-w-2xl flex flex-col gap-5">
            <p className="font-sans text-white/55 text-base leading-relaxed">
              Eighty-two years of Colonist rule. The Republic of the Philippines
              is a memory kept alive only by whispered stories and forbidden songs.
              Advanced technology and magic coexist — because in Shinsekai, they
              were always the same thing.
            </p>
            <p className="font-sans text-white/40 text-sm leading-relaxed">
              The nation is divided into six corporate-military zones. NeoManila
              is the impoverished capital. Mindanao is the only region that kept
              its name — because even the Colonists couldn&apos;t break it.
              Underground tunnels and forgotten pre-war infrastructure connect
              what remains. These are the Shojin&apos;s lifelines.
            </p>
            <p className="font-sans text-white/25 text-sm leading-relaxed">
              The Colonists&apos; technology was never truly theirs. It is
              Kapangyarihan — the Realm of Magic — channeled through circuits
              instead of ritual. Their greatest weapons are built on tech they
              reverse-engineered from relics they do not understand.
            </p>
          </div>
        </div>
      </section>

      {/* The 10 Realms */}
      <section className="bg-[#080808] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="label-section mb-3">— Cosmology</p>
            <h2 className="font-heading text-3xl md:text-5xl mb-3">The 10 Realms.</h2>
            <p className="font-sans text-white/40 text-sm max-w-lg">
              Nine interconnected realms and a hidden tenth — the Kusho World —
              that holds the fabric of all existence together.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04]">
            {realms.map((realm, i) => (
              <div key={i} className="bg-[#080808] p-8">
                <p className="font-heading text-[9px] tracking-[0.15em] uppercase text-[#C9A84C]/40 mb-4">
                  Realm {String(i === 5 ? 10 : [1, 3, 5, 7, 9, 10][i]).padStart(2, "0")}
                </p>
                <h3 className="font-heading text-xl mb-1">{realm.name}</h3>
                <p className="font-sans text-white/30 text-xs tracking-wide mb-3">{realm.meaning}</p>
                <p className="font-sans text-white/50 text-sm leading-relaxed">{realm.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Shojin — narrative editorial */}
      <section className="bg-[#060606] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="label-section mb-5">— The Shojin</p>
              <h2 className="font-heading text-3xl md:text-5xl leading-tight mb-5">
                The revolutionary people.
              </h2>
              <p className="font-sans text-white/55 leading-relaxed mb-4">
                The Shojin are not a single organization but a movement — the
                collective resistance of a people who refused to forget. Within
                them, the Seishi are the elite: Datu, who leads with water and
                grief. Protacio, who writes weapons into existence. Leonor, who
                heals what the Colonists tried to break. And Mika — the
                protagonist — searching for her captured sister and fighting for
                a freedom she has never known.
              </p>
              <p className="font-sans text-white/30 text-sm leading-relaxed mb-8">
                The first revolution failed. Betrayal from within. The Midnight
                Strike crushed them. Two years later, the survivors regrouped.
                Smaller. Smarter. More disciplined. This is where the story
                begins.
              </p>
              <Link href="/get-involved" className="btn-ghost-ku">
                Join the Resistance →
              </Link>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden panel-border">
              <Image
                src="/assets/k_ramen_blue_people.jpg"
                alt="The Shojin"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060606]/50 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Famions — narrative editorial */}
      <section className="bg-[#080808] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] overflow-hidden panel-border order-2 md:order-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/Storymap Cypher.gif"
                alt="Famions"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/50 via-transparent to-transparent" />
            </div>
            <div className="order-1 md:order-2">
              <p className="label-section mb-5">— Famions</p>
              <h2 className="font-heading text-3xl md:text-5xl leading-tight mb-5">
                Spirit creatures from<br />between realms.
              </h2>
              <p className="font-sans text-white/55 leading-relaxed mb-4">
                Each Famion is tied to a specific realm — Sprites from the
                forests, Duwende from the mountains, Sundo from the darkness,
                Adarna from the realm of dreams. Ancient Filipinos bonded with
                them through ritual. Partnership, not domestication.
              </p>
              <p className="font-sans text-white/30 text-sm leading-relaxed mb-4">
                The Colonists banned Famion bonding. Classified them as
                &ldquo;anomalous fauna.&rdquo; The Seishi rediscovered the bond
                through Manong Pantas and his relics. In the story, Famions are
                the first sign that the old world is still alive.
              </p>
              <p className="font-sans text-white/30 text-sm leading-relaxed">
                Outside the lore, Famions are the cultural bridge. Expressive.
                Viral. 40K+ TikTok audience and growing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* V2 Migration */}
      <section className="relative py-20 bg-[#060606] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
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
            <div className="relative aspect-[3/4] overflow-hidden panel-border">
              <Image
                src="/assets/mr666.png"
                alt="Shojin V2"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060606]/50 via-transparent to-transparent" />
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

      {/* Art in Motion */}
      <section className="py-20 bg-[#060606]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="label-section mb-10">— In Motion</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: "/assets/09b karmic_points_animated.gif", label: "Karmic Points" },
              { src: "/assets/10b karmic_night_animated.gif", label: "Karmic Night" },
              { src: "/assets/KarmicRise 2.GIF", label: "Karmic Rise" },
              { src: "/assets/IMG_6424.GIF", label: "Famion" },
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
              marked the shift: from collection to IP ecosystem.
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
          <Link href="/docs" className="btn-ghost-ku">
            Documentation →
          </Link>
        </div>
      </section>
    </div>
  );
}
