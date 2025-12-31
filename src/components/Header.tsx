import React from "react";
import { Link, useLocation } from "react-router-dom";
import logoImage from "../assets/images/logo-transparent.png";

export const Header: React.FC = () => {
  const location = useLocation();

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
          Continuous Compliance Monitoring
        </p>
        <nav
          style={{
            display: "flex",
            gap: "var(--gf-space-md)",
            alignItems: "center",
            marginTop: "var(--gf-space-md)"
          }}
        >
          <Link
            to="/"
            style={{
              color: "var(--gf-color-text)",
              textDecoration: "none",
              padding: "0.5rem 1rem",
              borderRadius: "var(--gf-radius-lg)",
              transition: "background-color 0.2s",
              backgroundColor: location.pathname === "/" ? "var(--gf-color-accent-soft)" : "transparent"
            }}
            onMouseEnter={(e) => {
              if (location.pathname !== "/") {
                e.currentTarget.style.backgroundColor = "var(--gf-color-accent-soft)";
              }
            }}
            onMouseLeave={(e) => {
              if (location.pathname !== "/") {
                e.currentTarget.style.backgroundColor = "transparent";
              }
            }}
          >
            Home
          </Link>
          <div
            style={{
              color: "var(--gf-color-text)",
              padding: "0.5rem 1rem",
              borderRadius: "var(--gf-radius-lg)",
              opacity: 0.6,
              cursor: "not-allowed",
              pointerEvents: "none"
            }}
          >
            Apply
          </div>
        </nav>
      </section>
    </header>
  );
};

