import React from "react";

interface TwoColumnSectionProps {
  imageUrl: string;
  imageAlt: string;
  content: React.ReactNode;
  imageLeft?: boolean;
  imageWidth?: number;
  leftColumnRatio?: number; // e.g., 8 for 8/12, 7 for 7/12, etc.
  rightColumnRatio?: number; // e.g., 4 for 4/12, 5 for 5/12, etc.
  backgroundColor?: string;
}

export const TwoColumnSection: React.FC<TwoColumnSectionProps> = ({
  imageUrl,
  imageAlt,
  content,
  imageLeft = true,
  imageWidth,
  leftColumnRatio = 8,
  rightColumnRatio = 4,
  backgroundColor = "var(--gf-debrief-section-bg)"
}) => {
  const containerStyle: React.CSSProperties = {
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor,
    padding: "10px 0"
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
    fontSize: "16px"
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
            style={{
              ...imageStyle,
              ...(imageWidth && { width: `${imageWidth}px` })
            }}
          />
        </div>
        <div className="two-column-content" style={contentColumnStyle}>
          {content}
        </div>
      </div>
    </div>
  );
};

