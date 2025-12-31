import React from "react";
import { TextSection } from "../../components/TextSection";
import { PillarCard } from "../../components/PillarCard";
import { CTACard } from "../../components/CTACard";

export const ThreePillarsSection: React.FC = () => {
  return (
    <>
      {/* Three Pillars Section */}
      <section
        id="three-pillars"
        style={{
          marginBottom: "var(--gf-space-xl)",
          marginTop: "var(--gf-space-xl)",
        }}
      >
        <TextSection
          title="Engineering as Collaboration"
          subtitle="Define, Build, Monitor"
          paragraphs={[
            "Engineering can—and should—be a collaborative activity between GRC/Security, engineers, and auditors. When every handoff is automated, teams work together seamlessly from the start. As automation increases, collaboration becomes progressively easier, transforming compliance from a bottleneck into a competitive advantage. Our platform automates these handoffs, making it easier for all three groups to work together effectively."
          ]}
          centered={true}
          textShadow={true}
          maxWidth="900px"
          lastParagraphMargin="var(--gf-space-xl)"
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--gf-space-lg)"
          }}
        >
          <PillarCard
            title="Define"
            description="GRC/Security, engineers, and auditors collaborate to define policies, requirements, and standards. Automated handoffs eliminate friction in the initial alignment phase—no more lost requirements or miscommunication. The result: faster alignment, fewer misunderstandings, and everyone starts from the same foundation."
          />
          <PillarCard
            title="Build"
            description="Automation makes the build phase easier for GRC/Security, engineers, and auditors. Automated checks during development keep all three groups aligned in real-time, eliminating the need for manual reviews and rework. The result: real-time alignment, reduced rework, and faster delivery without compliance delays."
          />
          <PillarCard
            title="Monitor"
            description="Automated monitoring makes collaboration progressively easier for GRC/Security, engineers, and auditors. All three groups benefit from the same automated insights in real-time, eliminating information silos and manual reporting. The result: proactive collaboration instead of reactive audits, with continuous compliance as a natural part of operations."
          />
        </div>
      </section>

      {/* GRC CTA Section */}
      <CTACard
        id="grc-cta"
        title="Call to Action Title Two"
        paragraphs={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ]}
        buttonText="Button Text"
        buttonDisabled={true}
      />
    </>
  );
};

