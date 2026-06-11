import React from "react";
import { Link } from "react-router-dom";

const REPORT_PDF = "/research/lfr_2026_cra_awareness_report_060826.pdf";

type ItemProps = {
  link: React.ReactNode;
  description: React.ReactNode;
};

const Item: React.FC<ItemProps> = ({ link, description }) => (
  <li style={{ marginBottom: "1.1rem" }}>
    {link} — {description}
  </li>
);

const ext = (href: string, label: string) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{ fontWeight: 600 }}
  >
    {label}
  </a>
);

type ResourceSectionProps = {
  title: string;
  intro?: React.ReactNode;
  children: React.ReactNode;
};

const ResourceSection: React.FC<ResourceSectionProps> = ({
  title,
  intro,
  children
}) => (
  <section style={{ marginTop: "3rem", marginBottom: "1.5rem" }}>
    <div className="cra-article">
      <h2 className="cra-section-title">{title}</h2>
      {intro && (
        <p
          style={{
            fontSize: "1.125rem",
            lineHeight: 1.75,
            color: "#2a2e35",
            margin: "0 0 1.25rem"
          }}
        >
          {intro}
        </p>
      )}
      <ul
        style={{
          paddingLeft: "1.25rem",
          margin: 0,
          fontSize: "1.075rem",
          lineHeight: 1.7,
          color: "#2a2e35"
        }}
      >
        {children}
      </ul>
    </div>
  </section>
);

export const CRAResourcesPage: React.FC = () => {
  return (
    <article>
      <header
        className="cra-article"
        style={{ paddingTop: "2.5rem", paddingBottom: "1.5rem" }}
      >
        <span className="cra-kicker">Resources</span>
        <h1
          style={{
            margin: "0 0 1.25rem",
            fontSize: "3rem",
            letterSpacing: "-0.015em",
            lineHeight: 1.1
          }}
        >
          A Starting Point for CRA Readiness
        </h1>
        <p
          className="cra-lede"
          style={{
            margin: "0 0 1.25rem",
            color: "#3a3f47"
          }}
        >
          The most useful CRA resources are not ours — they live with the
          European Commission, the OpenSSF, and the Linux Foundation. This
          page is a curated set of pointers to those sources, alongside the
          open source projects we contribute to.
        </p>
      </header>

      <ResourceSection title="The regulation">
        <Item
          link={ext(
            "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847",
            "Regulation (EU) 2024/2847"
          )}
          description="The official text of the Cyber Resilience Act on EUR-Lex (CELEX: 32024R2847)."
        />
      </ResourceSection>

      <ResourceSection title="Research">
        <Item
          link={ext(REPORT_PDF, "2026 CRA Awareness and Readiness Report")}
          description="The Linux Foundation Research study Revanite co-sponsored, drawing on 843 survey respondents and a security analysis of more than 12,000 open source projects."
        />
        <Item
          link={
            <Link to="/cra" style={{ fontWeight: 600 }}>
              Our summary of the 2026 LF research
            </Link>
          }
          description="The headline findings and what they mean for the ecosystem."
        />
      </ResourceSection>

      <ResourceSection title="OpenSSF CRA initiatives">
        <Item
          link={ext(
            "https://openssf.org/public-policy/eu-cyber-resilience-act/",
            "OpenSSF EU Cyber Resilience Act page"
          )}
          description="OpenSSF's central hub for CRA-related policy work, working groups, and guidance materials."
        />
        <Item
          link={ext(
            "https://github.com/ossf/orbit-launchpad",
            "OpenSSF ORBIT Launchpad"
          )}
          description={
            <>
              The working group developing the{" "}
              <em>CRA Baseline for Manufacturers</em> alongside the{" "}
              <em>CRA Baseline for Open Source Consumers</em>.
            </>
          }
        />
      </ResourceSection>

      <ResourceSection
        title="Open source projects for compliance"
        intro={
          <>
            For full context on how each project fits the CRA compliance
            picture, start with our{" "}
            <Link to="/cra/field-guide">Field Guide</Link>.
          </>
        }
      >
        <Item
          link={ext("https://baseline.openssf.org/", "OpenSSF OSPS Baseline")}
          description="A minimum-bar set of security practices for open source projects, designed to be assessable."
        />
        <Item
          link={ext("https://gemara.openssf.org/", "Gemara")}
          description="Schemas and SDK for expressing control catalogs, threats, and assessment requirements as machine-readable artifacts."
        />
        <Item
          link={ext(
            "https://github.com/ossf/pvtr-github-repo-scanner",
            "OSPS Baseline Scanner"
          )}
          description="A Privateer plugin that evaluates GitHub repositories against the OSPS Baseline."
        />
        <Item
          link={ext(
            "https://tag-security.cncf.io/community/resources/automated-governance-maturity-model/",
            "CNCF Automated Governance Maturity Model (AGMM)"
          )}
          description="A maturity model for organizations elevating their GRC programs toward continuous, automated auditability."
        />
      </ResourceSection>

      <ResourceSection title="Other guidance">
        <Item
          link={ext(
            "https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TR03185/BSI-TR-03185-2.html",
            "BSI TR-03185-2"
          )}
          description="The German Federal Office for Information Security's technical guideline on the secure software lifecycle for open source software."
        />
      </ResourceSection>

      <ResourceSection title="Revanite">
        <Item
          link={ext("https://meridian.revanite.io", "Meridian")}
          description="Our commercial platform composing the open source projects above into an end-to-end CRA-readiness workflow."
        />
      </ResourceSection>

      <div
        className="cra-article"
        style={{
          marginTop: "3rem",
          marginBottom: "2rem",
          paddingTop: "1.5rem",
          borderTop: "1px solid #d8cfb9"
        }}
      >
        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.7,
            color: "#5a6068",
            margin: 0
          }}
        >
          This page is a starting point, not an exhaustive bibliography. The
          2026 CRA Awareness and Readiness Report's Resources section lists
          additional OpenSSF training, working-group communications, and
          Linux Foundation materials — see{" "}
          <a href={REPORT_PDF} target="_blank" rel="noopener noreferrer">
            the report PDF
          </a>{" "}
          for the fuller list.
        </p>
      </div>
    </article>
  );
};
