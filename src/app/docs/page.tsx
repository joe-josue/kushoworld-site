import Link from "next/link";
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

function statusSpan(status: string) {
  if (status === "In Progress") {
    return (
      <span className="font-heading text-[9px] tracking-[0.12em] uppercase text-[#FF6B2B]">
        In Progress
      </span>
    );
  }
  if (status === "Coming") {
    return (
      <span className="font-heading text-[9px] tracking-[0.15em] uppercase text-white/25">
        ◌ Coming
      </span>
    );
  }
  return (
    <span className="font-heading text-[9px] tracking-[0.15em] uppercase text-white/20">
      {status}
    </span>
  );
}

export default function DocsPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="pt-36 pb-20 max-w-7xl mx-auto px-6 w-full">
        <span className="font-heading text-[10px] tracking-[0.2em] uppercase text-white/35 border-l-2 border-[#FF6B2B] pl-3 mb-5 block w-fit">
          Docs
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mb-4">
              Transparency.
              <br />
              <span className="text-white/30">Depth.</span>
            </h1>
          </div>
          <div>
            <p className="font-sans text-white/55 text-base leading-relaxed">
              The Docs hub is where the full rules live. Main site gives you
              summaries and intent. Docs give you the operational detail.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-t border-white/[0.05]" />

      {/* SoR Link */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="panel-border p-6 flex items-center justify-between gap-4">
          <div>
            <p className="label-section mb-1">— System of Record</p>
            <p className="font-sans text-white/60 text-sm mt-2">
              The Kusho World SoR is the living canonical source of truth —
              facts, decisions, timelines, and open questions.
            </p>
          </div>
          <a
            href="https://github.com/kushoworld"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-ku flex-none whitespace-nowrap"
          >
            View SoR <ExternalLink size={10} />
          </a>
        </div>
      </section>

      {/* Doc Sections */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-12">
          <p className="label-section mb-3">— Documentation</p>
          <h2 className="font-heading text-3xl md:text-5xl">Full rules. Full context.</h2>
        </div>
        <div className="flex flex-col gap-12">
          {docSections.map((section, i) => (
            <div key={i}>
              <p className="label-section mb-4">— {section.category}</p>
              <div className="flex flex-col divide-y divide-white/[0.06]">
                {section.docs.map((doc, j) => (
                  <div
                    key={j}
                    className="py-5 flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors group cursor-pointer px-2"
                  >
                    <div className="flex items-start gap-5">
                      <span className="font-heading text-[9px] tracking-[0.15em] uppercase text-[#C9A84C]/60 flex-none mt-0.5 w-16">
                        {doc.tag}
                      </span>
                      <div>
                        <p className="font-sans text-white/75 text-sm font-medium mb-1">
                          {doc.title}
                        </p>
                        <p className="font-sans text-white/30 text-xs leading-relaxed">
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
        <p className="font-sans text-white/20 text-xs mt-8">
          Full documentation is being formalized. Most docs are in private
          draft. Public versions will be linked here as they are cleared for
          external publishing.
        </p>
      </section>

      {/* Changelog */}
      <section className="bg-[#060606] py-20 mt-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="label-section mb-3">— Changelog</p>
            <h2 className="font-heading text-3xl md:text-5xl">What changed.</h2>
          </div>
          <div className="flex flex-col divide-y divide-white/[0.06]">
            {changelog.map((entry, i) => (
              <div key={i} className="py-5 flex gap-8">
                <div className="flex-none w-28">
                  <p className="font-mono text-white/20 text-xs">{entry.date}</p>
                </div>
                <div>
                  <p className="font-heading text-sm text-white/60 mb-1">{entry.version}</p>
                  <p className="font-sans text-white/35 text-sm leading-relaxed">{entry.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Signals */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="label-section mb-3">— Roadmap Signals</p>
          <h2 className="font-heading text-3xl md:text-5xl">What&apos;s coming.</h2>
        </div>
        <div className="flex flex-col divide-y divide-white/[0.06]">
          {roadmapSignals.map((item, i) => (
            <div key={i} className="py-5 flex items-center justify-between gap-4">
              <p className="font-sans text-white/60 text-sm">{item.label}</p>
              {statusSpan(item.status)}
            </div>
          ))}
        </div>
        <p className="font-sans text-white/20 text-xs mt-5">
          Roadmap is milestone-based. No date promises.
        </p>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="border border-[#FF6B2B]/15 p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl mb-2">
              Questions not answered here?
            </h2>
            <p className="font-sans text-white/40 text-sm max-w-sm">
              Join the community on Discord. The Core team is active and
              responds to qualified questions.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://discord.gg/kushoworld"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ku"
            >
              Join Discord <ArrowRight size={12} />
            </a>
            <Link href="/protocol" className="btn-ghost-ku">
              Protocol Overview →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
