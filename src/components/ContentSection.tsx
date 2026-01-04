import React from "react";

interface ContentSectionProps {
  backgroundColor?: string;
  children: React.ReactNode;
  padding?: string;
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  backgroundColor = "var(--gf-debrief-section-bg)",
  children,
  padding = "10px 20px"
}) => {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor,
        padding
      }}
    >
      {children}
    </div>
  );
};

