import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
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
        <Badge
          variant="outline"
          className="border-[#FF6B2B]/40 text-[#FF6B2B] bg-[#FF6B2B]/5 text-[10px] tracking-widest uppercase mb-5"
        >
          Labs
        </Badge>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-none mb-4">
              Malaya Labs.
            </h1>
          </div>
          <div>
            <p className="text-white/50 text-base leading-relaxed">
              Malaya Labs is the operating entity behind Kusho World. Lean by
              design. Documentation-first. Stewardship over speculation.
            </p>
          </div>
        </div>
      </section>

      <Separator className="bg-white/5" />

      {/* Mandate */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          <div className="bg-[#080808] p-10">
            <p className="text-[#FF6B2B] text-[10px] tracking-widest uppercase mb-4">
              Mandate
            </p>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-5">
              Steward first.
              <br />
              <span className="text-white/30">Execute always.</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-4">
              Malaya Labs is the steward and operator responsible for Kusho
              strategy and execution continuity. The structure is intentionally
              lean — documentation discipline and clear systems are the force
              multipliers.
            </p>
            <p className="text-white/30 text-sm leading-relaxed">
              Operations are structured to survive market cycles without
              requiring speculative outcomes. Priorities are sequenced based on
              operating maturity, not external pressure.
            </p>
          </div>
          <div className="bg-[#080808] p-10">
            <p className="text-[#FF6B2B] text-[10px] tracking-widest uppercase mb-4">
              Operating Model
            </p>
            <div className="flex flex-col gap-5">
              {[
                "Prioritize roadmap under constrained resources",
                "Maintain execution rhythm across product, content, and community",
                "Protect external messaging quality and claim integrity",
                "Keep treasury strategy tied to real operating needs",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#FF6B2B]/50 text-xs mt-0.5 flex-none">
                    —
                  </span>
                  <p className="text-white/50 text-sm leading-relaxed">{item}</p>
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
            <p className="text-[#FF6B2B] text-[10px] tracking-widest uppercase mb-3">
              Capabilities
            </p>
            <h2 className="text-3xl font-bold">What we do.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {capabilities.map((cap, i) => (
              <div key={i} className="bg-[#060606] p-8">
                <h3 className="text-lg font-semibold mb-3">{cap.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{cap.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Paths */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="text-[#FF6B2B] text-[10px] tracking-widest uppercase mb-3">
            Collaboration
          </p>
          <h2 className="text-3xl font-bold">
            Partner pathways.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {partnerPaths.map((path, i) => (
            <div key={i} className="bg-[#080808] p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-3">{path.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  {path.description}
                </p>
                <p className="text-white/25 text-xs italic">{path.fit}</p>
              </div>
              <Link
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 border border-white/10 text-white/50 text-[10px] tracking-widest uppercase px-4 py-2.5 hover:border-white/20 hover:text-white transition-colors w-fit"
              >
                {path.cta}
                <ArrowRight size={10} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-16">
        <div className="border border-white/5 p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Start a conversation.
            </h2>
            <p className="text-white/40 text-sm max-w-md">
              Partnership calls, collaboration proposals, and builder inquiries.
              Reach the Labs team directly.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://twitter.com/kushoworld"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF6B2B] text-white text-xs tracking-widest uppercase px-6 py-3 hover:bg-[#e85a1f] transition-colors"
            >
              Start Collaboration
              <ArrowRight size={12} />
            </a>
            <a
              href="https://discord.gg/kushoworld"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/15 text-white/60 text-xs tracking-widest uppercase px-6 py-3 hover:border-white/30 hover:text-white transition-colors"
            >
              Request Partnership Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
