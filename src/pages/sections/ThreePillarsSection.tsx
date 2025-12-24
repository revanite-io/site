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
          title="Main Section Title"
          subtitle="Subtitle Text"
          paragraphs={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
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
            title="Pillar One"
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          />
          <PillarCard
            title="Pillar Two"
            description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <PillarCard
            title="Pillar Three"
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
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

