import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

const lanes = [
  {
    id: "01",
    name: "Collector",
    tagline: "Hold. Signal. Benefit.",
    description:
      "You hold Shojin or other canonical assets. You participate in governance signals and access holder-exclusive activations, airdrops, and event access.",
    expectations: [
      "Hold at least one canonical Kusho asset",
      "Participate in governance signal periods",
      "Respect the canon and community standards",
    ],
    timeToFirst: "Immediate — your NFT is your pass",
    cta: "Apply as Collector",
  },
  {
    id: "02",
    name: "Creator",
    tagline: "Produce. Submit. Earn.",
    description:
      "You create art, story, music, or media within the Kusho World. You submit for canon consideration. You earn reputation through recognized output and get credited in the official record.",
    expectations: [
      "Submit work through the official intake",
      "Respect character and lore boundaries",
      "Accept Core review as part of the process",
    ],
    timeToFirst: "First submission within 7 days of onboarding",
    cta: "Apply as Creator",
  },
  {
    id: "03",
    name: "Developer",
    tagline: "Build. License. Ship.",
    description:
      "You build apps, games, or tools on Kusho's IP layer. You use the builder license. You operate under defined commercial terms with clear revenue and rights structures.",
    expectations: [
      "Submit a scoped build proposal",
      "Accept the builder license terms",
      "Commit to milestone-based progress reporting",
    ],
    timeToFirst: "First milestone scoped within 14 days",
    cta: "Apply as Developer",
  },
  {
    id: "04",
    name: "Operator",
    tagline: "Lead. Coordinate. Amplify.",
    description:
      "You run community programs, platforms, or distribution nodes. You operate under Malaya Labs guidance with a clear mandate and defined scope.",
    expectations: [
      "Propose a program with scope and expected outcomes",
      "Accept reporting cadence requirements",
      "Align with Kusho messaging and brand standards",
    ],
    timeToFirst: "Program scope approved within 21 days",
    cta: "Apply as Operator",
  },
];

export default function GetInvolvedPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="pt-36 pb-20 max-w-7xl mx-auto px-6 w-full">
        <span className="font-heading text-[10px] tracking-[0.2em] uppercase text-white/35 border-l-2 border-[#FF6B2B] pl-3 mb-5 block w-fit">
          Get Involved
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mb-4">
              Your lane.<br />
              <span className="text-white/30">Your terms.</span>
            </h1>
          </div>
          <div>
            <p className="font-sans text-white/55 text-base leading-relaxed">
              Collector, creator, developer, or operator — there is a defined
              path for every kind of contribution. Clear expectations. Clear
              rights. Clear first step.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-t border-white/[0.05]" />

      {/* Time-to-first promise */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="border border-white/5 p-5 flex items-center gap-4">
          <Clock size={15} className="text-[#FF6B2B] flex-none" />
          <p className="font-sans text-white/55 text-sm">
            <span className="text-white">Time-to-first-contribution promise:</span>{" "}
            Every lane has a defined path to your first meaningful contribution
            within days of onboarding — not months.
          </p>
        </div>
      </section>

      {/* Lanes */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-12">
          <p className="label-section mb-3">— Contribution Lanes</p>
          <h2 className="font-heading text-3xl md:text-5xl">Choose your path.</h2>
        </div>
        <div className="flex flex-col divide-y divide-white/[0.06]">
          {lanes.map((lane) => (
            <div
              key={lane.id}
              className="py-10 grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {/* Lane ID + title */}
              <div>
                <p className="font-heading text-sm text-[#C9A84C]/50 mb-3">{lane.id}</p>
                <h3 className="font-heading text-3xl mb-1">{lane.name}</h3>
                <p className="font-sans text-white/30 text-xs">{lane.tagline}</p>
              </div>

              {/* Details */}
              <div>
                <p className="font-sans text-white/55 text-sm leading-relaxed mb-5">
                  {lane.description}
                </p>
                <p className="label-section mb-2">— Expectations</p>
                <ul className="flex flex-col gap-1.5">
                  {lane.expectations.map((e, i) => (
                    <li key={i} className="font-sans text-white/45 text-xs leading-relaxed flex items-start gap-2">
                      <span className="text-[#FF6B2B] mt-0.5 flex-none">—</span>
                      {e}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="flex flex-col justify-between">
                <div className="border border-white/5 p-4 mb-6">
                  <p className="label-section mb-1">— Time to First</p>
                  <p className="font-sans text-white/55 text-xs mt-2">{lane.timeToFirst}</p>
                </div>
                <Link href="#apply" className="btn-ku w-fit">
                  {lane.cta} <ArrowRight size={11} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Intake CTA */}
      <section id="apply" className="max-w-7xl mx-auto px-6 py-20">
        <div className="border border-[#FF6B2B]/15 p-10 md:p-16 text-center">
          <span className="font-heading text-[9px] tracking-[0.15em] uppercase text-emerald-400 block mb-6">
            Intake Open
          </span>
          <h2 className="font-heading text-3xl md:text-5xl mb-4">Ready to apply?</h2>
          <p className="font-sans text-white/40 max-w-md mx-auto mb-8 text-sm">
            Pick your lane above, then use the intake form to submit your
            application. Core reviews and responds within the published cadence.
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
            <Link href="/protocol" className="btn-ghost-ku">
              Read the Protocol →
            </Link>
          </div>
        </div>
      </section>

      {/* Docs link */}
      <section className="bg-[#060606] py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-sans text-white/30 text-sm">
              Want the full rules? IP rights, protocol mechanics, and canon guidelines live in the docs.
            </p>
            <Link href="/docs" className="btn-ghost-ku whitespace-nowrap">
              View Documentation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
