import React from "react";
import { Outlet } from "react-router-dom";
import { CRANav } from "./CRANav";

const lightThemeVars: React.CSSProperties = {
  // Override the global dark theme tokens so the existing components
  // (ContentSection, TextSection, etc.) render in a readable light style.
  "--gf-color-background": "#f6f1e7",
  "--gf-color-surface": "#ffffff",
  "--gf-color-surface-subtle": "#fbf6ec",
  "--gf-color-text": "#1a1d22",
  "--gf-color-text-subtle": "#5a6068",
  "--gf-color-accent": "#0a8aa0",
  "--gf-color-accent-soft": "rgba(10, 138, 160, 0.12)",
  "--gf-color-border-strong": "#d8cfb9",
  "--gf-color-button-text": "#0a3540",
  "--gf-shadow-surface":
    "0 1px 2px rgba(20, 25, 30, 0.06), 0 4px 12px rgba(20, 25, 30, 0.04)",
  "--gf-shadow-surface-strong":
    "0 2px 4px rgba(20, 25, 30, 0.08), 0 12px 32px rgba(20, 25, 30, 0.08)",
  "--gf-cyan-glow": "rgba(10, 138, 160, 0.3)",
  "--gf-glass-blur": "none",
  "--gf-debrief-section-bg": "transparent"
} as React.CSSProperties;

export const CRALayout: React.FC = () => {
  return (
    <div
      className="cra-layout"
      style={{
        ...lightThemeVars,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#f6f1e7",
        color: "#1a1d22",
        fontFamily: "var(--gf-font-body)"
      }}
    >
      <CRANav />
      <main
        style={{
          flex: 1,
          padding: "2rem 1.5rem 4rem",
          maxWidth: "100%"
        }}
      >
        <Outlet />
      </main>
      <footer
        style={{
          padding: "1.5rem",
          borderTop: "1px solid #e3dccc",
          background: "#efe8d8",
          color: "#5a6068",
          fontSize: "0.875rem",
          textAlign: "center"
        }}
      >
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} Revanite.
        </p>
        <p style={{ margin: "0.4rem 0 0", fontSize: "0.78rem" }}>
          For informational purposes. Not legal advice.
        </p>
      </footer>
    </div>
  );
};
