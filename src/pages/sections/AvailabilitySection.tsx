import React from "react";
import { TextSection } from "../../components/TextSection";
import { ListSection } from "../../components/ListSection";
import { CTACard } from "../../components/CTACard";
import { AffiliationsSection } from "../../components/AffiliationsSection";

export const AvailabilitySection: React.FC = () => {
  return (
    <>
      {/* Availability Notice Section */}
      <TextSection
        paragraphs={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ]}
        textShadow={true}
        maxWidth="1000px"
      />
      <ListSection
        items={[
          <><strong>List Item One:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</>,
          <><strong>List Item Two:</strong> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</>,
        ]}
        textShadow={true}
        maxWidth="1000px"
      />
      {/* OSS Strategy CTA Section */}
      <CTACard
        id="oss-cta"
        title="Call to Action Title One"
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

