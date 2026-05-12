import React from "react";
import logoImage from "../assets/images/logo-transparent.png";

export const Header: React.FC = () => {
  return (
    <header
      className="site-header"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "var(--gf-space-xl)",
        width: "100%"
      }}
    >
      {/* Hero Section */}
      <section
        id="hero"
        style={{
          minHeight: "30vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <img
          src={logoImage}
          alt="Revanite"
          style={{
            maxWidth: "80%",
            maxHeight: "250px",
            height: "auto",
            marginBottom: 0,
            objectFit: "contain"
          }}
        />
        <p
          style={{
            fontSize: "2rem",
            color: "var(--gf-color-text-subtle)",
            marginTop: "0",
            marginBottom: "var(--gf-space-lg)",
          }}
        >
          Bridging Compliance, Engineering, and Security
        </p>
        <nav
          style={{
            display: "flex",
            gap: "var(--gf-space-md)",
            alignItems: "center",
            marginTop: "var(--gf-space-md)"
          }}
        >
          <a
            href="https://meridian.revanite.io"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--gf-color-text)",
              textDecoration: "none",
              padding: "0.5rem 1.5rem",
              borderRadius: "var(--gf-radius-lg)",
              backgroundColor: "var(--gf-color-accent-soft)",
              border: "1px solid var(--gf-color-accent)",
              cursor: "pointer",
              transition: "background-color 0.2s, box-shadow 0.2s",
              fontWeight: 600
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 12px var(--gf-color-accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Project Meridian Alpha is Now Open!
          </a>
        </nav>
      </section>
    </header>
  );
};

