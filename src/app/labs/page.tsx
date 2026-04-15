import Link from "next/link";
import { ArrowRight } from "lucide-react";

const capabilities = [
  {
    title: "IP Strategy & Canon Direction",
    body: "Defining what becomes official within Kusho World. Managing the balance between core authority and community participation.",
  },
  {
    title: "Product Incubation",
    body: "Taking concepts from idea to execution under constrained resources. Mithikal, Collectors Profile, and Guardians all originated here.",
  },
  {
    title: "Community Operations",
    body: "Running contributor programs, governance signals, and ecosystem communications with documentation discipline as the force multiplier.",
  },
  {
    title: "Builder Enablement",
    body: "Structuring builder licenses, managing partner onboarding, and ensuring external builders have clear rights and support.",
  },
];

const partnerPaths = [
  {
    title: "Collaboration Partner",
    description:
      "Co-create within the Kusho IP ecosystem. Bring creative, technical, or community capacity. Operate under a defined collaboration agreement.",
    fit: "Best for studios, individual creators, or adjacent IP owners.",
    cta: "Start Collaboration",
  },
  {
    title: "Technology Partner",
    description:
      "Build infrastructure, tooling, or platform integrations that support Kusho products. White-glove onboarding for partners with real technical depth.",
    fit: "Best for blockchain teams, game studios, or dev shops.",
    cta: "Request Tech Partnership",
  },
  {
    title: "Distribution Partner",
    description:
      "Amplify Kusho content, products, or events to your audience. Co-branded campaigns, cross-community activations, and attribution-tracked reach.",
    fit: "Best for communities, platforms, or media brands.",
    cta: "Explore Distribution",
  },
];

export default function LabsPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="pt-36 pb-20 max-w-7xl mx-auto px-6 w-full">
        <span className="font-heading text-[10px] tracking-[0.2em] uppercase text-white/35 border-l-2 border-[#FF6B2B] pl-3 mb-5 block w-fit">
          Labs
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div>
            <h1 className="font-display text-5xl md:text-7xl leading-[0.95] mb-4">
              Malaya Labs.
            </h1>
          </div>
          <div>
            <p className="font-sans text-white/55 text-base leading-relaxed">
              Malaya Labs is the operating entity behind Kusho World. Lean by
              design. Documentation-first. Stewardship over speculation.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-t border-white/[0.05]" />

      {/* Mandate */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="panel-border p-10">
            <p className="label-section mb-4">— Mandate</p>
            <h2 className="font-heading text-3xl md:text-4xl leading-tight mb-5 mt-2">
              Steward first.
              <br />
              <span className="text-white/30">Execute always.</span>
            </h2>
            <p className="font-sans text-white/55 leading-relaxed mb-4 text-sm">
              Malaya Labs is the steward and operator responsible for Kusho
              strategy and execution continuity. The structure is intentionally
              lean — documentation discipline and clear systems are the force
              multipliers.
            </p>
            <p className="font-sans text-white/30 text-sm leading-relaxed">
              Operations are structured to survive market cycles without
              requiring speculative outcomes. Priorities are sequenced based on
              operating maturity, not external pressure.
            </p>
          </div>
          <div className="panel-border p-10">
            <p className="label-section mb-4">— Operating Model</p>
            <div className="flex flex-col gap-5 mt-2">
              {[
                "Prioritize roadmap under constrained resources",
                "Maintain execution rhythm across product, content, and community",
                "Protect external messaging quality and claim integrity",
                "Keep treasury strategy tied to real operating needs",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#FF6B2B]/50 text-xs mt-0.5 flex-none">—</span>
                  <p className="font-sans text-white/55 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-[#060606] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="label-section mb-3">— Capabilities</p>
            <h2 className="font-heading text-3xl md:text-5xl">What we do.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {capabilities.map((cap, i) => (
              <div key={i} className="panel-border p-8">
                <h3 className="font-heading text-xl mb-3">{cap.title}</h3>
                <p className="font-sans text-white/45 text-sm leading-relaxed">{cap.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Paths */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="label-section mb-3">— Collaboration</p>
          <h2 className="font-heading text-3xl md:text-5xl">Partner pathways.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {partnerPaths.map((path, i) => (
            <div key={i} className="panel-border p-8 flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-2xl mb-3">{path.title}</h3>
                <p className="font-sans text-white/55 text-sm leading-relaxed mb-4">
                  {path.description}
                </p>
                <p className="font-sans text-white/25 text-xs italic">{path.fit}</p>
              </div>
              <a
                href="https://discord.gg/kushoworld"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-ku mt-8 w-fit"
              >
                {path.cta} <ArrowRight size={10} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-16">
        <div className="border border-[#FF6B2B]/15 p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl mb-2">
              Start a conversation.
            </h2>
            <p className="font-sans text-white/40 text-sm max-w-md">
              Partnership calls, collaboration proposals, and builder inquiries.
              Reach the Labs team directly.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://twitter.com/kushoworld"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ku"
            >
              Start Collaboration <ArrowRight size={12} />
            </a>
            <a
              href="https://discord.gg/kushoworld"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-ku"
            >
              Request Partnership Call →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
