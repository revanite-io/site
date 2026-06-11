import React from "react";
import { Link, NavLink } from "react-router-dom";
import logoImage from "../assets/images/logo-transparent.png";

const navLinks: { to: string; label: string }[] = [
  { to: "/cra", label: "Research" },
  { to: "/cra/field-guide", label: "Field Guide" },
  { to: "/cra/resources", label: "Resources" }
];

export const CRANav: React.FC = () => {
  return (
    <header
      className="cra-nav"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(246, 241, 231, 0.92)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderBottom: "1px solid #e3dccc"
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0.75rem 1.5rem",
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          flexWrap: "wrap"
        }}
      >
        <Link
          to="/"
          aria-label="Revanite home"
          style={{
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
            textDecoration: "none"
          }}
        >
          <img
            src={logoImage}
            alt="Revanite"
            style={{
              height: "40px",
              width: "auto",
              objectFit: "contain",
              filter: "brightness(0)"
            }}
          />
        </Link>

        <nav
          aria-label="CRA pages"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
            flexWrap: "wrap",
            flex: 1
          }}
        >
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/cra"}
              style={({ isActive }) => ({
                color: isActive ? "#0a6b7d" : "#3a3f47",
                textDecoration: "none",
                padding: "0.4rem 0.85rem",
                borderRadius: "0.5rem",
                fontSize: "0.95rem",
                fontWeight: isActive ? 600 : 500,
                background: isActive ? "rgba(10, 138, 160, 0.12)" : "transparent",
                transition: "background-color 0.15s, color 0.15s"
              })}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <a
          href="https://meridian.revanite.io"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#0a3540",
            textDecoration: "none",
            padding: "0.5rem 1.1rem",
            borderRadius: "0.5rem",
            backgroundColor: "#FFFFFF",
            border: "1px solid #0a8aa0",
            fontWeight: 600,
            fontSize: "0.95rem",
            whiteSpace: "nowrap",
            transition: "box-shadow 0.2s, transform 0.2s"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 4px 14px rgba(10, 138, 160, 0.35)";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Meridian →
        </a>
      </div>
    </header>
  );
};
