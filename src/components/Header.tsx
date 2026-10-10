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
          Automated Governance at Scale
        </p>
      </section>
    </header>
  );
};

