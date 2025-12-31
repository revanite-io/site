import React from "react";
import { TextSection } from "../components/TextSection";
import { PartnersSection } from "../components/PartnersSection";

export const BioPage: React.FC = () => {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "var(--gf-space-xl)",
        width: "100%"
      }}
    >
      {/* Opening Narrative Section */}
      <TextSection
        paragraphs={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        ]}
        textShadow={true}
        maxWidth="1000px"
      />

      <PartnersSection />

      {/* Key Work Section */}
      <TextSection
        title="Section Title One"
        paragraphs={[
          <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</>
        ]}
        textShadow={true}
        maxWidth="1000px"
      />

      {/* Community & Policy Section */}
      <TextSection
        title="Section Title Two"
        paragraphs={[
          <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</>
        ]}
        textShadow={true}
        maxWidth="1000px"
      />

      {/* Career Evolution Section */}
      <TextSection
        title="Section Title Three"
        paragraphs={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        ]}
        textShadow={true}
        maxWidth="1000px"
      />

      {/* Philosophy & Future Section */}
      <TextSection
        title="Section Title Four"
        paragraphs={[
          <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</>,
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        ]}
        textShadow={true}
        maxWidth="1000px"
      />
    </div>
  );
};
