import React from "react";

interface TwoColumnSectionProps {
  imageUrl: string;
  imageAlt: string;
  content: React.ReactNode;
  backgroundColor?: string;
  padding?: string;
}

export const TwoColumnSection: React.FC<TwoColumnSectionProps> = ({
  imageUrl,
  imageAlt,
  content,
  backgroundColor = "var(--gf-debrief-section-bg)",
  padding = "0"
}) => {
  // Hardcoded values: image always on right, consistent ratios and width
  const imageLeft = false;
  const leftColumnRatio = 7;
  const rightColumnRatio = 5;
  const imageWidth = 250;

  const containerStyle: React.CSSProperties = {
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor,
    padding
  };

  const columnsContainerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: imageLeft ? "row" : "row-reverse",
    gap: "0",
    alignItems: "flex-start"
  };

  const imageColumnStyle: React.CSSProperties = {
    flex: `0 0 ${(rightColumnRatio / 12) * 100}%`,
    padding: "10px 20px 10px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };

  const contentColumnStyle: React.CSSProperties = {
    flex: `0 0 ${(leftColumnRatio / 12) * 100}%`,
    padding: "0px 20px"
  };

  const imageStyle: React.CSSProperties = {
    maxWidth: "100%",
    height: "auto",
    outline: "none",
    textDecoration: "none",
    fontSize: "16px",
    width: `${imageWidth}px`
  };

  return (
    <div style={containerStyle}>
      <div
        className="two-column-container"
        style={{
          ...columnsContainerStyle,
          flexWrap: "wrap"
        }}
      >
        <div className="two-column-image" style={imageColumnStyle}>
          <img
            src={imageUrl}
            alt={imageAlt}
            style={imageStyle}
          />
        </div>
        <div className="two-column-content" style={contentColumnStyle}>
          {content}
        </div>
      </div>
    </div>
  );
};

