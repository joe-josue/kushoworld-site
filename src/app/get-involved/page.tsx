import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
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
        <Badge
          variant="outline"
          className="border-[#FF6B2B]/40 text-[#FF6B2B] bg-[#FF6B2B]/5 text-[10px] tracking-widest uppercase mb-5"
        >
          Get Involved
        </Badge>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-none mb-4">
              Your lane.
              <br />
              <span className="text-white/30">Your terms.</span>
            </h1>
          </div>
          <div>
            <p className="text-white/50 text-base leading-relaxed">
              Collector, creator, developer, or operator — there is a defined
              path for every kind of contribution. Clear expectations. Clear
              rights. Clear first step.
            </p>
          </div>
        </div>
      </section>

      <Separator className="bg-white/5" />

      {/* Time-to-first promise */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-[#0d0d0d] border border-white/5 p-6 flex items-center gap-4">
          <Clock size={16} className="text-[#FF6B2B] flex-none" />
          <p className="text-white/60 text-sm">
            <span className="text-white font-medium">Time-to-first-contribution promise:</span>{" "}
            Every lane has a defined path to your first meaningful contribution
            within days of onboarding — not months.
          </p>
        </div>
      </section>

      {/* Lanes */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-12">
          <p className="text-[#FF6B2B] text-[10px] tracking-widest uppercase mb-3">
            Contribution Lanes
          </p>
          <h2 className="text-3xl font-bold">Choose your path.</h2>
        </div>
        <div className="flex flex-col gap-px bg-white/5">
          {lanes.map((lane) => (
            <div
              key={lane.id}
              className="bg-[#080808] p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 hover:bg-[#0d0d0d] transition-colors"
            >
              {/* Lane ID + title */}
              <div>
                <p className="text-[#FF6B2B]/40 text-xs font-mono mb-3">
                  {lane.id}
                </p>
                <h3 className="text-2xl font-bold mb-1">{lane.name}</h3>
                <p className="text-white/30 text-xs tracking-wide">
                  {lane.tagline}
                </p>
              </div>

              {/* Details */}
              <div>
                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  {lane.description}
                </p>
                <div>
                  <p className="text-white/20 text-[10px] tracking-widest uppercase mb-2">
                    Expectations
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {lane.expectations.map((e, i) => (
                      <li
                        key={i}
                        className="text-white/40 text-xs leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-[#FF6B2B] mt-0.5 flex-none">—</span>
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col justify-between">
                <div className="bg-white/3 border border-white/5 p-4 mb-6">
                  <p className="text-white/20 text-[10px] tracking-widest uppercase mb-1">
                    Time to First
                  </p>
                  <p className="text-white/60 text-xs">{lane.timeToFirst}</p>
                </div>
                <Link
                  href="#apply"
                  className="inline-flex items-center gap-2 bg-[#FF6B2B] text-white text-xs tracking-widest uppercase px-5 py-3 hover:bg-[#e85a1f] transition-colors w-fit"
                >
                  {lane.cta}
                  <ArrowRight size={11} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Intake form CTA */}
      <section
        id="apply"
        className="max-w-7xl mx-auto px-6 py-20"
      >
        <div className="border border-[#FF6B2B]/20 bg-[#FF6B2B]/3 p-10 md:p-16 text-center">
          <Badge
            variant="outline"
            className="border-[#FF6B2B]/40 text-[#FF6B2B] bg-transparent text-[10px] tracking-widest uppercase mb-6"
          >
            Intake Open
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to apply?
          </h2>
          <p className="text-white/40 max-w-md mx-auto mb-8 text-sm">
            Pick your lane above, then use the intake form to submit your
            application. Core reviews and responds within the published cadence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://discord.gg/kushoworld"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF6B2B] text-white text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-[#e85a1f] transition-colors"
            >
              Join via Discord
              <ArrowRight size={12} />
            </a>
            <Link
              href="/protocol"
              className="inline-flex items-center gap-2 border border-white/15 text-white/60 text-xs tracking-widest uppercase px-8 py-3.5 hover:border-white/30 hover:text-white transition-colors"
            >
              Read the Protocol
            </Link>
          </div>
        </div>
      </section>

      {/* Protocol link */}
      <section className="bg-[#060606] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-sm">
              Want the full rules? Contribution mechanics, IP rights, and
              canon guidelines live in the docs.
            </p>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 text-white/40 text-[10px] tracking-widest uppercase hover:text-white transition-colors whitespace-nowrap"
            >
              View Documentation
              <ArrowRight size={10} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
