import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const contributorPaths = [
  {
    label: "Contribute to Canon",
    desc: "Submit storylines, locations, characters, and art. Work passes through Core review. If it earns ratification, it becomes part of the official record — and you are credited as a canonical contributor.",
    examples: ["Fan-fiction that becomes canon", "Character designs adopted into the universe", "Locations and lore expansions"],
  },
  {
    label: "Build on the Foundation",
    desc: "Products, services, experiences, games — built on Kusho IP through defined builder paths with clear commercial terms. You build it, you run it, you share in the upside.",
    examples: ["Apps and tools using the IP layer", "Merchandise and apparel lines", "Interactive experiences and games"],
  },
  {
    label: "Advanced Contributors",
    desc: "Infrastructure, platforms, film, print comics, merchandising, large-ticket IP projects. These require direct coordination with the Labs team.",
    examples: ["Film and animation production", "Platform and infrastructure builds", "Publishing and licensing partnerships"],
  },
];

const lanes = [
  {
    id: "01",
    name: "Collector",
    tagline: "Hold. Signal. Benefit.",
    desc: "Hold canonical Kusho assets. Participate in governance signals, holder-exclusive activations, and airdrops. Your NFT is your pass.",
    timeToFirst: "Immediate",
  },
  {
    id: "02",
    name: "Creator",
    tagline: "Produce. Submit. Earn.",
    desc: "Create art, story, music, or media within the world. Submit for canon consideration. Earn reputation through recognized output.",
    timeToFirst: "7 days",
  },
  {
    id: "03",
    name: "Developer",
    tagline: "Build. License. Ship.",
    desc: "Build apps, games, or tools on Kusho's IP layer. Use the builder license. Operate under defined commercial terms.",
    timeToFirst: "14 days",
  },
  {
    id: "04",
    name: "Operator",
    tagline: "Lead. Coordinate. Amplify.",
    desc: "Run community programs, platforms, or distribution nodes. Coordinate under Labs guidance with clear scope and mandate.",
    timeToFirst: "21 days",
  },
];

const canonizationSteps = [
  {
    title: "Propose",
    body: "Submit a proposal through the defined intake. Include scope, intent, and how it fits existing canon.",
  },
  {
    title: "Review",
    body: "Core evaluates alignment with Kusho's IP and canon principles. Feedback is provided within the published cadence.",
  },
  {
    title: "Prove",
    body: "Contributor executes the proposal. Community and Core observe. Quality and alignment are assessed.",
  },
  {
    title: "Ratify",
    body: "Core ratifies what becomes permanent canon. Contributor earns reputation and recognized contributor status.",
  },
];

export default function GetInvolvedPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/09a karmic_points.png"
            alt=""
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-[#080808]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-40 w-full">
          <span className="font-heading text-[10px] tracking-[0.2em] uppercase text-white/35 border-l-2 border-[#FF6B2B] pl-3 mb-5 block w-fit">
            Get Involved
          </span>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mb-5">
            Expand the universe.
          </h1>
          <p className="font-sans text-white/70 text-lg md:text-xl max-w-lg leading-relaxed mb-3">
            Turn fan-fiction into canon — monetize the success.
          </p>
          <p className="font-sans text-white/40 text-sm max-w-lg leading-relaxed">
            Story universes should not be locked into one creator&apos;s canon.
            The world is open to contributors who build with intent and earn
            their place in the record.
          </p>
        </div>
      </section>

      {/* The Proposition + Inspiration Engine */}
      <section className="bg-[#060606] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="label-section mb-5">— The Proposition</p>
              <h2 className="font-heading text-4xl md:text-6xl leading-tight mb-6">
                Create. Build. Earn.
              </h2>
              <p className="font-sans text-white/55 text-base leading-relaxed mb-4">
                Contribute storylines, locations, and characters with real roads
                to becoming official. Build products, services, and experiences
                on top of the foundation. With any success in what is created,
                you monetize alongside us.
              </p>
              <p className="font-sans text-white/30 text-sm leading-relaxed mb-8">
                Not a promise — a protocol. Clear rights, clear terms, clear
                path from first contribution to canon status.
              </p>
              <Link href="/docs" className="btn-ghost-ku">
                Full Documentation →
              </Link>
            </div>

            {/* Inspiration Engine */}
            <div className="flex flex-col">
              <p className="label-section mb-6">— The Inspiration Engine</p>
              {[
                { step: "Inspiration", desc: "The world, the lore, the art — the seed that starts the cycle.", accent: true },
                { step: "Innovation", desc: "Storylines, products, experiences built on the universe foundation." },
                { step: "Value", desc: "Revenue, recognition, and canon status for what works and endures." },
                { step: "Inspiration", desc: "Success breeds new ambition. The loop compounds. The world grows.", accent: true },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6 py-5 border-b border-white/[0.06] last:border-b-0">
                  <div className="flex-none w-8 text-right">
                    <span className={`font-display text-3xl leading-none select-none ${item.accent ? "text-[#FF6B2B]/30" : "text-white/[0.07]"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <p className={`font-heading text-xl mb-1.5 ${item.accent ? "text-[#FF6B2B]/80" : "text-white/80"}`}>
                      {item.step}
                    </p>
                    <p className="font-sans text-white/40 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contributor Paths */}
      <section className="bg-[#080808] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="label-section mb-3">— How to Contribute</p>
            <h2 className="font-heading text-3xl md:text-5xl mb-3">Three paths in.</h2>
            <p className="font-sans text-white/40 text-sm max-w-lg">
              Each path has defined terms, clear expectations, and a real route
              to ownership and revenue.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {contributorPaths.map((path, i) => (
              <div key={i} className="panel-border p-8 flex flex-col">
                <h3 className="font-heading text-xl text-white/90 mb-3">{path.label}</h3>
                <p className="font-sans text-white/50 text-sm leading-relaxed mb-6">
                  {path.desc}
                </p>
                <div className="mt-auto">
                  <p className="font-heading text-[9px] tracking-[0.15em] uppercase text-white/20 mb-3">
                    Examples
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {path.examples.map((ex, j) => (
                      <li key={j} className="font-sans text-white/35 text-xs leading-relaxed flex items-start gap-2">
                        <span className="text-[#FF6B2B]/50 mt-0.5 flex-none">—</span>
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-t border-white/[0.05]" />

      {/* Contribution Lanes */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="label-section mb-3">— Contribution Lanes</p>
          <h2 className="font-heading text-3xl md:text-5xl">Choose your lane.</h2>
        </div>
        <div className="flex flex-col divide-y divide-white/[0.06]">
          {lanes.map((lane) => (
            <div
              key={lane.id}
              className="py-8 grid grid-cols-1 md:grid-cols-[80px_1fr_auto] gap-6 items-start group"
            >
              <p className="font-heading text-sm text-[#C9A84C]/50">{lane.id}</p>
              <div>
                <h3 className="font-heading text-2xl mb-1">{lane.name}</h3>
                <p className="font-sans text-white/30 text-xs mb-3">{lane.tagline}</p>
                <p className="font-sans text-white/50 text-sm leading-relaxed">
                  {lane.desc}
                </p>
              </div>
              <div className="flex flex-col items-end gap-3">
                <span className="font-heading text-[9px] tracking-[0.15em] uppercase text-white/20">
                  Time to first: {lane.timeToFirst}
                </span>
                <Link href="#apply" className="btn-ghost-ku whitespace-nowrap">
                  Apply <ArrowRight size={10} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Canonization Flow — from protocol */}
      <section className="bg-[#060606] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="label-section mb-3">— The Protocol</p>
              <h2 className="font-heading text-3xl md:text-5xl mb-5">How canon gets made.</h2>
              <p className="font-sans text-white/55 text-sm leading-relaxed mb-4">
                Core directs canon. Community expands the edges. The protocol
                defines how contribution is structured, earned, and ratified —
                with clear rights at every step.
              </p>
              <div className="panel-border p-6 mt-6">
                <p className="label-section mb-3">— Authority</p>
                <p className="font-sans text-white/55 text-sm leading-relaxed">
                  Three layers: Canon (Core-ratified), Sandbox (community
                  experiments), and Bridge (the path between). Core decides what
                  crosses.
                </p>
              </div>
            </div>

            <div className="flex flex-col divide-y divide-white/[0.06]">
              {canonizationSteps.map((step, i) => (
                <div key={i} className="grid grid-cols-[50px_1fr] gap-6 py-7 group">
                  <div className="text-right">
                    <span className="font-display text-4xl text-white/[0.07] leading-none select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <p className="font-heading text-xl text-white/85 mb-2 group-hover:text-[#C9A84C] transition-colors">
                      {step.title}
                    </p>
                    <p className="font-sans text-white/45 text-sm leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For Advanced Contributors */}
      <section className="bg-[#080808] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="md:col-span-3 relative h-64 md:h-auto overflow-hidden panel-border">
              <Image
                src="/assets/SHO Agent.jpg"
                alt="Advanced Contributors"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#080808]/50 md:to-[#080808]" />
            </div>
            <div className="md:col-span-2 flex flex-col justify-center py-6 md:py-0 md:pl-4">
              <p className="label-section mb-4">— Advanced Contributors</p>
              <h2 className="font-heading text-3xl md:text-4xl leading-tight mb-5">
                Bigger ambitions?
                <br />
                <span className="text-white/30">Talk to us directly.</span>
              </h2>
              <p className="font-sans text-white/55 text-sm leading-relaxed mb-8">
                Film, print comics, merchandising, infrastructure, platforms —
                large-ticket IP projects that require direct coordination with
                the Labs team. If you are bringing real resources and a real
                vision, we want to hear it.
              </p>
              <a
                href="https://twitter.com/kushoworld"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-ku w-fit"
              >
                Reach Out <ArrowUpRight size={11} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section id="apply" className="max-w-7xl mx-auto px-6 py-24">
        <div className="border border-[#FF6B2B]/15 p-10 md:p-16 text-center">
          <span className="font-heading text-[9px] tracking-[0.15em] uppercase text-emerald-400 block mb-6">
            Intake Open
          </span>
          <h2 className="font-heading text-3xl md:text-5xl mb-4">Ready to expand the universe?</h2>
          <p className="font-sans text-white/40 max-w-md mx-auto mb-8 text-sm">
            Pick your lane, submit your application, and start contributing.
            Core reviews and responds within the published cadence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://discord.gg/kushoworld"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ku"
            >
              Join via Discord <ArrowRight size={12} />
            </a>
            <Link href="/docs" className="btn-ghost-ku">
              Full Documentation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
