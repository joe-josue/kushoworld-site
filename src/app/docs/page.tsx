import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, ExternalLink } from "lucide-react";

const docSections = [
  {
    category: "Protocol",
    docs: [
      {
        title: "Contributor Protocol (Full)",
        description: "Complete rules for all contribution lanes — expectations, rights, and process.",
        tag: "Core Doc",
      },
      {
        title: "Canonization SOP",
        description: "Step-by-step operational procedure for how canon ratification works.",
        tag: "Process",
      },
      {
        title: "Reputation & Progression",
        description: "How contributor reputation is tracked, thresholds, and what it unlocks.",
        tag: "Mechanics",
      },
    ],
  },
  {
    category: "IP & Rights",
    docs: [
      {
        title: "IP Rights Matrix",
        description: "What rights each lane holds over what they produce. No ambiguity.",
        tag: "Legal",
      },
      {
        title: "Builder License Terms",
        description: "Commercial terms for developers building on Kusho IP. Revenue and attribution rules.",
        tag: "Legal",
      },
      {
        title: "Brand & Character Guardrails",
        description: "What you can and cannot do with Kusho characters in derivative work.",
        tag: "Brand",
      },
    ],
  },
  {
    category: "Operations",
    docs: [
      {
        title: "Enforcement & Dispute Process",
        description: "How IP violations and disputes are handled. Clear escalation paths.",
        tag: "Process",
      },
      {
        title: "Kusho World SoR (System of Record)",
        description: "The living canonical source of truth for all confirmed facts, entities, and decisions.",
        tag: "Reference",
      },
    ],
  },
];

const changelog = [
  {
    date: "2026-02-21",
    version: "SoR v0.2.0",
    summary: "Master System of Record initialized. Facts Register, Timeline, and Open Questions structured.",
  },
  {
    date: "2026-02-18",
    version: "Ops Init",
    summary: "Infrastructure initialized. OpenClaw setup with WSL2/Windows bridge and Compendium vault sync enabled.",
  },
  {
    date: "2025-Q4",
    version: "Guardians Deal",
    summary: "Post-hackathon deal with Sovrun signed. Kusho Guardians enters active development.",
  },
  {
    date: "2023-03",
    version: "Acquisition",
    summary: "Joe J. acquires Kusho World. Revival mission begins with stewardship-first posture.",
  },
];

const roadmapSignals = [
  { label: "Shojin V2 Migration", status: "In Progress" },
  { label: "Collectors Profile Platform", status: "In Progress" },
  { label: "Contributor Protocol Docs (Public)", status: "Coming" },
  { label: "Builder License v1 Formalization", status: "Coming" },
  { label: "Open Source Famions Asset Library", status: "Planned" },
  { label: "Governance Expansion", status: "Deferred — post treasury maturity" },
];

export default function DocsPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="pt-36 pb-20 max-w-7xl mx-auto px-6 w-full">
        <Badge
          variant="outline"
          className="border-[#FF6B2B]/40 text-[#FF6B2B] bg-[#FF6B2B]/5 text-[10px] tracking-widest uppercase mb-5"
        >
          Docs
        </Badge>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-none mb-4">
              Transparency.
              <br />
              <span className="text-white/30">Depth.</span>
            </h1>
          </div>
          <div>
            <p className="text-white/50 text-base leading-relaxed">
              The Docs hub is where the full rules live. Main site gives you
              summaries and intent. Docs give you the operational detail.
            </p>
          </div>
        </div>
      </section>

      <Separator className="bg-white/5" />

      {/* SoR Link */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-[#0d0d0d] border border-[#FF6B2B]/10 p-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-[#FF6B2B] text-[10px] tracking-widest uppercase mb-1">
              System of Record
            </p>
            <p className="text-white/70 text-sm">
              The Kusho World SoR is the living canonical source of truth —
              facts, decisions, timelines, and open questions.
            </p>
          </div>
          <a
            href="https://github.com/kushoworld"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-none inline-flex items-center gap-2 border border-white/10 text-white/50 text-[10px] tracking-widest uppercase px-4 py-2.5 hover:border-white/20 hover:text-white transition-colors"
          >
            View SoR
            <ExternalLink size={10} />
          </a>
        </div>
      </section>

      {/* Doc Sections */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-12">
          <p className="text-[#FF6B2B] text-[10px] tracking-widest uppercase mb-3">
            Documentation
          </p>
          <h2 className="text-3xl font-bold">Full rules. Full context.</h2>
        </div>
        <div className="flex flex-col gap-12">
          {docSections.map((section, i) => (
            <div key={i}>
              <p className="text-white/30 text-[10px] tracking-widest uppercase mb-4">
                {section.category}
              </p>
              <div className="flex flex-col gap-px bg-white/5">
                {section.docs.map((doc, j) => (
                  <div
                    key={j}
                    className="bg-[#080808] p-6 flex items-center justify-between gap-4 hover:bg-[#0d0d0d] transition-colors group cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <Badge
                        variant="outline"
                        className="border-white/10 text-white/30 text-[9px] tracking-widest uppercase flex-none mt-0.5"
                      >
                        {doc.tag}
                      </Badge>
                      <div>
                        <p className="text-white/80 text-sm font-medium mb-1">
                          {doc.title}
                        </p>
                        <p className="text-white/30 text-xs leading-relaxed">
                          {doc.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex-none opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight size={14} className="text-white/40" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-white/20 text-xs mt-6">
          Full documentation is being formalized. Most docs are in private
          draft. Public versions will be linked here as they are cleared for
          external publishing.
        </p>
      </section>

      {/* Changelog */}
      <section className="bg-[#060606] py-20 mt-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-[#FF6B2B] text-[10px] tracking-widest uppercase mb-3">
              Changelog
            </p>
            <h2 className="text-3xl font-bold">What changed.</h2>
          </div>
          <div className="flex flex-col gap-px bg-white/5">
            {changelog.map((entry, i) => (
              <div key={i} className="bg-[#060606] p-6 flex gap-6">
                <div className="flex-none w-28">
                  <p className="text-white/20 text-xs font-mono">{entry.date}</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs font-medium mb-1">
                    {entry.version}
                  </p>
                  <p className="text-white/30 text-sm">{entry.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Signals */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="text-[#FF6B2B] text-[10px] tracking-widest uppercase mb-3">
            Roadmap Signals
          </p>
          <h2 className="text-3xl font-bold">What&apos;s coming.</h2>
        </div>
        <div className="flex flex-col gap-px bg-white/5">
          {roadmapSignals.map((item, i) => (
            <div
              key={i}
              className="bg-[#080808] p-5 flex items-center justify-between"
            >
              <p className="text-white/60 text-sm">{item.label}</p>
              <Badge
                variant="outline"
                className={`text-[9px] tracking-widest uppercase border-white/10 ${
                  item.status === "In Progress"
                    ? "text-[#FF6B2B] border-[#FF6B2B]/30"
                    : item.status === "Coming"
                    ? "text-white/50"
                    : "text-white/20"
                }`}
              >
                {item.status}
              </Badge>
            </div>
          ))}
        </div>
        <p className="text-white/20 text-xs mt-4">
          Roadmap is milestone-based. No date promises.
        </p>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="border border-white/5 p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              Questions not answered here?
            </h2>
            <p className="text-white/40 text-sm max-w-sm">
              Join the community on Discord. The Core team is active and
              responds to qualified questions.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://discord.gg/kushoworld"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF6B2B] text-white text-xs tracking-widest uppercase px-6 py-3 hover:bg-[#e85a1f] transition-colors"
            >
              Join Discord
              <ArrowRight size={12} />
            </a>
            <Link
              href="/protocol"
              className="inline-flex items-center gap-2 border border-white/15 text-white/60 text-xs tracking-widest uppercase px-6 py-3 hover:border-white/30 hover:text-white transition-colors"
            >
              Protocol Overview
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
