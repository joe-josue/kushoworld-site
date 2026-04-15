import Link from "next/link";
import { ArrowRight } from "lucide-react";

const lanes = [
  {
    id: "01",
    name: "Collector",
    description:
      "Hold Shojin or other canonical assets. Participate in governance signals and access holder-exclusive activations.",
    action: "Apply as Collector",
  },
  {
    id: "02",
    name: "Creator",
    description:
      "Produce art, story, or media within Kusho World. Submit for canon consideration. Earn reputation through recognized output.",
    action: "Apply as Creator",
  },
  {
    id: "03",
    name: "Developer",
    description:
      "Build apps, games, or tools on Kusho's IP layer. Use the builder license. Operate under defined commercial terms.",
    action: "Apply as Developer",
  },
  {
    id: "04",
    name: "Operator",
    description:
      "Run community programs, platforms, or distribution nodes. Coordinate under Malaya Labs guidance with clear scope.",
    action: "Apply as Operator",
  },
];

const steps = [
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

export default function ProtocolPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="pt-36 pb-20 max-w-7xl mx-auto px-6 w-full">
        <span className="font-heading text-[10px] tracking-[0.2em] uppercase text-white/35 border-l-2 border-[#FF6B2B] pl-3 mb-5 block w-fit">
          Protocol
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mb-4">
              Participation
              <br />
              <span className="text-white/30">by design.</span>
            </h1>
          </div>
          <div>
            <p className="font-sans text-white/55 text-base leading-relaxed">
              Core directs canon. Community expands the edges. The protocol
              defines how contribution is structured, earned, and ratified —
              with clear rights at every step.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-t border-white/[0.05]" />

      {/* Summary */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="panel-border p-8 md:col-span-2">
            <p className="label-section mb-4">— Protocol Summary</p>
            <p className="font-heading text-2xl md:text-3xl text-white/90 mb-4 leading-tight">
              &ldquo;Core directs canon. Community expands the edges.&rdquo;
            </p>
            <p className="font-sans text-white/45 leading-relaxed text-sm">
              Kusho World operates through defined participation lanes. Each lane
              carries clear expectations, a clear path to contribution, and
              defined rights over what is produced. Nothing is vague. Nothing is
              left to assumption.
            </p>
          </div>
          <div className="panel-border p-8 flex flex-col justify-between">
            <div>
              <p className="label-section mb-3">— Authority</p>
              <p className="font-sans text-white/60 text-sm leading-relaxed mt-3">
                Kusho Core ratifies what becomes canon. Community can propose
                and prove. Core decides.
              </p>
            </div>
            <div className="mt-8">
              <Link href="/docs" className="btn-ghost-ku">
                Read Full Protocol Docs <ArrowRight size={10} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contribution Lanes */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-12">
          <p className="label-section mb-3">— Contribution Lanes</p>
          <h2 className="font-heading text-3xl md:text-5xl">Choose your path.</h2>
        </div>
        <div className="flex flex-col divide-y divide-white/[0.06]">
          {lanes.map((lane) => (
            <div
              key={lane.id}
              className="py-8 grid grid-cols-1 md:grid-cols-[80px_1fr_auto] gap-6 items-start group"
            >
              <p className="font-heading text-sm text-[#C9A84C]/50">{lane.id}</p>
              <div>
                <h3 className="font-heading text-2xl mb-2">{lane.name}</h3>
                <p className="font-sans text-white/45 text-sm leading-relaxed">
                  {lane.description}
                </p>
              </div>
              <Link href="/get-involved" className="btn-ghost-ku whitespace-nowrap mt-1">
                {lane.action} <ArrowRight size={10} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Reputation */}
      <section className="py-20 bg-[#060606] mt-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="label-section mb-3">— Reputation & Progression</p>
            <h2 className="font-heading text-3xl md:text-5xl">Contribution compounds.</h2>
          </div>
          <div className="max-w-2xl">
            <p className="font-sans text-white/55 leading-relaxed mb-4">
              Kusho tracks contributor reputation across lanes. As contributions
              are reviewed, proved, and ratified, contributors gain recognized
              standing within the ecosystem.
            </p>
            <p className="font-sans text-white/30 leading-relaxed text-sm">
              Detailed reputation mechanics, thresholds, and progression rules
              live in the full protocol documentation. The main site gives you
              enough to orient — the docs give you the full picture.
            </p>
            <div className="mt-8">
              <Link href="/docs" className="btn-ghost-ku">
                Open Protocol Docs <ArrowRight size={11} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Canonization Flow */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="label-section mb-3">— Canonization Flow</p>
          <h2 className="font-heading text-3xl md:text-5xl">How it works.</h2>
        </div>
        <div className="flex flex-col divide-y divide-white/[0.06]">
          {steps.map((step, i) => (
            <div key={i} className="grid grid-cols-[60px_1fr] gap-8 py-8 group">
              <div className="text-right">
                <span className="font-display text-5xl text-white/[0.07] leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <p className="font-heading text-2xl text-white/85 mb-2 group-hover:text-[#C9A84C] transition-colors">
                  {step.title}
                </p>
                <p className="font-sans text-white/45 text-sm leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="border border-[#FF6B2B]/15 p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl mb-2">
              Ready to contribute?
            </h2>
            <p className="font-sans text-white/40 text-sm max-w-md">
              Pick your lane and start the intake. First contribution within
              your first week.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/get-involved" className="btn-ku">
              Join Contributor Flow <ArrowRight size={12} />
            </Link>
            <Link href="/docs" className="btn-ghost-ku">
              Open Full Docs →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
