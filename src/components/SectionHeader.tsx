import React from "react";

interface SectionHeaderProps {
  title: string;
  backgroundColor?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  backgroundColor = "#0086ff"
}) => {
  return (
    <div
      style={{
        backgroundColor,
        padding: "10px 20px",
        marginBottom: 0
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto"
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "28px",
            lineHeight: "191%",
            color: "#ffffff"
          }}
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

