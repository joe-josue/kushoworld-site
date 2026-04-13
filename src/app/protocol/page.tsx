import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
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
    n: "1",
    title: "Propose",
    body: "Submit a proposal through the defined intake. Include scope, intent, and how it fits existing canon.",
  },
  {
    n: "2",
    title: "Review",
    body: "Core evaluates alignment with Kusho's IP and canon principles. Feedback is provided within the published cadence.",
  },
  {
    n: "3",
    title: "Prove",
    body: "Contributor executes the proposal. Community and Core observe. Quality and alignment are assessed.",
  },
  {
    n: "4",
    title: "Ratify",
    body: "Core ratifies what becomes permanent canon. Contributor earns reputation and recognized contributor status.",
  },
];

export default function ProtocolPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="pt-36 pb-20 max-w-7xl mx-auto px-6 w-full">
        <Badge
          variant="outline"
          className="border-[#FF6B2B]/40 text-[#FF6B2B] bg-[#FF6B2B]/5 text-[10px] tracking-widest uppercase mb-5"
        >
          Protocol
        </Badge>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-none mb-4">
              Participation
              <br />
              by design.
            </h1>
          </div>
          <div>
            <p className="text-white/50 text-base leading-relaxed">
              Core directs canon. Community expands the edges. The protocol
              defines how contribution is structured, earned, and ratified —
              with clear rights at every step.
            </p>
          </div>
        </div>
      </section>

      <Separator className="bg-white/5" />

      {/* Summary */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          <div className="bg-[#080808] p-8 md:col-span-2">
            <p className="text-[#FF6B2B] text-[10px] tracking-widest uppercase mb-4">
              Protocol Summary
            </p>
            <p className="text-xl md:text-2xl font-semibold leading-relaxed text-white/90 mb-4">
              &ldquo;Core directs canon. Community expands the edges.&rdquo;
            </p>
            <p className="text-white/40 leading-relaxed">
              Kusho World operates through defined participation lanes. Each lane
              carries clear expectations, a clear path to contribution, and
              defined rights over what is produced. Nothing is vague. Nothing is
              left to assumption.
            </p>
          </div>
          <div className="bg-[#080808] p-8 flex flex-col justify-between">
            <div>
              <p className="text-white/30 text-[10px] tracking-widest uppercase mb-3">
                Authority
              </p>
              <p className="text-white/70 text-sm leading-relaxed">
                Kusho Core ratifies what becomes canon. Community can propose
                and prove. Core decides.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 text-[#FF6B2B] text-[10px] tracking-widest uppercase hover:opacity-70 transition-opacity"
              >
                Read Full Protocol Docs
                <ArrowRight size={10} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contribution Lanes */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-12">
          <p className="text-[#FF6B2B] text-[10px] tracking-widest uppercase mb-3">
            Contribution Lanes
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Choose your path.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {lanes.map((lane) => (
            <div
              key={lane.id}
              className="bg-[#080808] p-8 flex flex-col justify-between group hover:bg-[#0d0d0d] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <p className="text-[#FF6B2B]/40 text-xs font-mono">{lane.id}</p>
                  <Badge
                    variant="outline"
                    className="border-white/10 text-white/30 text-[9px] tracking-widest uppercase"
                  >
                    {lane.name}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-3">{lane.name}</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {lane.description}
                </p>
              </div>
              <Link
                href="/get-involved"
                className="mt-8 inline-flex items-center gap-2 text-white/30 text-[10px] tracking-widest uppercase hover:text-[#FF6B2B] transition-colors"
              >
                {lane.action}
                <ArrowRight size={10} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Reputation */}
      <section className="py-20 bg-[#060606] mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-[#FF6B2B] text-[10px] tracking-widest uppercase mb-3">
              Reputation & Progression
            </p>
            <h2 className="text-3xl font-bold">Contribution compounds.</h2>
          </div>
          <div className="max-w-2xl">
            <p className="text-white/50 leading-relaxed mb-4">
              Kusho tracks contributor reputation across lanes. As contributions
              are reviewed, proved, and ratified, contributors gain recognized
              standing within the ecosystem.
            </p>
            <p className="text-white/30 leading-relaxed text-sm">
              Detailed reputation mechanics, thresholds, and progression rules
              live in the full protocol documentation. The main site gives you
              enough to orient — the docs give you the full picture.
            </p>
            <div className="mt-8">
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 border border-white/10 text-white/50 text-xs tracking-widest uppercase px-5 py-2.5 hover:border-white/20 hover:text-white transition-colors"
              >
                Open Protocol Docs
                <ArrowRight size={11} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Canonization Flow */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="text-[#FF6B2B] text-[10px] tracking-widest uppercase mb-3">
            Canonization Flow
          </p>
          <h2 className="text-3xl font-bold">How it works.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/5">
          {steps.map((step, i) => (
            <div key={i} className="bg-[#080808] p-8">
              <p className="text-4xl font-bold text-white/5 mb-4">{step.n}</p>
              <h3 className="text-lg font-semibold mb-3 text-[#FF6B2B]">
                {step.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="border border-white/5 p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Ready to contribute?
            </h2>
            <p className="text-white/40 text-sm max-w-md">
              Pick your lane and start the intake. First contribution within
              your first week.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 bg-[#FF6B2B] text-white text-xs tracking-widest uppercase px-6 py-3 hover:bg-[#e85a1f] transition-colors"
            >
              Join Contributor Flow
              <ArrowRight size={12} />
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 border border-white/15 text-white/60 text-xs tracking-widest uppercase px-6 py-3 hover:border-white/30 hover:text-white transition-colors"
            >
              Open Full Docs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
