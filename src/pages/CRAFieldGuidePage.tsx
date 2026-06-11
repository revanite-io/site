import React from "react";
import { Link } from "react-router-dom";

type SectionProps = {
  kicker: string;
  title: string;
  intro?: React.ReactNode;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ kicker, title, intro, children }) => (
  <section style={{ marginTop: "4rem", marginBottom: "1.5rem" }}>
    <div className="cra-article">
      <span className="cra-kicker">{kicker}</span>
      <h2 className="cra-section-title">{title}</h2>
      {intro && (
        <p
          style={{
            fontSize: "1.125rem",
            lineHeight: 1.75,
            color: "#2a2e35",
            margin: "0 0 1.5rem"
          }}
        >
          {intro}
        </p>
      )}
    </div>
    {children}
  </section>
);

type ProjectCardProps = {
  name: string;
  tagline: React.ReactNode;
  homepage: string;
  homepageLabel: string;
  body: React.ReactNode;
  craRole: React.ReactNode;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  tagline,
  homepage,
  homepageLabel,
  body,
  craRole
}) => (
  <article
    style={{
      maxWidth: "680px",
      margin: "0 auto 2rem",
      padding: "1.75rem 2rem",
      background: "#ffffff",
      border: "1px solid #e3dccc",
      borderLeft: "4px solid #0a8aa0",
      borderRadius: "0.4rem",
      boxShadow: "0 1px 2px rgba(20, 25, 30, 0.04)"
    }}
  >
    <h3
      style={{
        margin: "0 0 0.6rem",
        fontSize: "1.6rem",
        color: "#1a1d22"
      }}
    >
      {name}
    </h3>
    <p
      style={{
        color: "#5a6068",
        fontStyle: "italic",
        marginTop: 0,
        marginBottom: "1.1rem",
        lineHeight: 1.55,
        fontSize: "1.05rem"
      }}
    >
      {tagline}
    </p>
    <p
      style={{
        color: "#2a2e35",
        lineHeight: 1.75,
        marginTop: 0,
        marginBottom: "1.1rem",
        fontSize: "1.075rem"
      }}
    >
      {body}
    </p>
    <p
      style={{
        color: "#2a2e35",
        lineHeight: 1.75,
        marginTop: 0,
        marginBottom: "1rem",
        fontSize: "1.075rem"
      }}
    >
      <strong style={{ color: "#0a6b7d" }}>
        How it helps with the CRA.&nbsp;
      </strong>
      {craRole}
    </p>
    <a
      href={homepage}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        fontFamily: "var(--cra-sans)",
        fontSize: "0.92rem",
        fontWeight: 600,
        letterSpacing: "0.01em"
      }}
    >
      {homepageLabel} →
    </a>
  </article>
);

export const CRAFieldGuidePage: React.FC = () => {
  return (
    <article>
      <header
        className="cra-article"
        style={{ paddingTop: "2.5rem", paddingBottom: "1.5rem" }}
      >
        <span className="cra-kicker">Field Guide</span>
        <h1
          style={{
            margin: "0 0 1.25rem",
            fontSize: "3rem",
            letterSpacing: "-0.015em",
            lineHeight: 1.1
          }}
        >
          A Field Guide to OSS Tools for CRA Readiness
        </h1>
        <p
          className="cra-lede"
          style={{
            margin: "0 0 1.25rem",
            color: "#3a3f47"
          }}
        >
          The open source ecosystem already contains the building blocks
          regulated manufacturers need to meet their CRA obligations. Here is
          how each one fits.
        </p>
      </header>

      <div
        className="cra-article"
        style={{
          borderTop: "1px solid #d8cfb9",
          paddingTop: "2rem"
        }}
      >
        <p
          style={{
            fontSize: "1.125rem",
            lineHeight: 1.75,
            color: "#2a2e35",
            margin: 0
          }}
        >
          The{" "}
          <Link to="/cra">2026 CRA Awareness and Readiness Report</Link> makes
          clear that the practical gap between policy and implementation is
          the largest barrier to compliance. The projects below address that
          gap directly. Revanite contributors are active in each of these
          projects, and our commercial platform{" "}
          <a
            href="https://meridian.revanite.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meridian
          </a>{" "}
          is built on top of the same stack so that regulated firms can adopt
          continuous CRA compliance without vendor lock-in or the need to
          re-invent the underlying tooling.
        </p>
      </div>

      <Section
        kicker="I. A Stable Foundation"
        title="Machine-Readable Policy"
        intro="Machine-readable policy is the connective tissue between regulatory text and automated evaluation. The CRA's reliance on harmonized standards under Article 19 makes this connective tissue load-bearing."
      >
        <ProjectCard
          name="Gemara"
          tagline="A logical model and schemas that describe the categories of compliance activities, how they interact, and the structures that enable automated interoperability between them."
          homepage="https://gemara.openssf.org/"
          homepageLabel="gemara.openssf.org"
          body={
            <>
              Gemara allows organizations to express control catalogs, threats,
              and assessment requirements as machine-readable artifacts that
              connect high-level regulatory guidance to concrete, automated
              evaluations. The schemas and SDK are publicly used by FINOS,
              OpenSSF, LFX Insights, Revanite's Privateer project, and Red
              Hat's ComplyTime project.
            </>
          }
          craRole={
            <>
              Gemara is the schema layer underneath the OpenSSF's upcoming{" "}
              <em>CRA Baseline for Manufacturers</em> and{" "}
              <em>CRA Baseline for Open Source Consumers</em>. With Gemara,
              manufacturers can attach CRA assessment requirements directly to
              risk assessments and automated evaluations, enabling end-to-end
              automated governance and audit programs rather than ad hoc
              spreadsheets.
            </>
          }
        />
      </Section>

      <Section
        kicker="II. Clear Requirements"
        title="Security Hygiene Baselines"
        intro={
          <>
            Once the schema is in place, manufacturers need a credible,
            widely-adopted body of requirements to point at. These baselines
            describe what “secure-by-design” looks like for an open
            source project — which is exactly what manufacturers must
            demonstrate for the dependencies they ship.
          </>
        }
      >
        <ProjectCard
          name="OpenSSF OSPS Baseline"
          tagline="A minimum definition of security requirements for an open source project, scaled to its maturity level."
          homepage="https://baseline.openssf.org/"
          homepageLabel="baseline.openssf.org"
          body={
            <>
              The Open Source Project Security Baseline (OSPS Baseline)
              describes proper security hygiene for risk mitigation within an
              open source project. It is referenced as a core requirement by
              OpenSSF and FINOS, used by the Linux Foundation's LFX Insights
              platform to evaluate the health of more than 20,000 repositories,
              and was{" "}
              <a
                href="https://github.blog/open-source/maintainers/this-years-most-influential-open-source-projects/"
                target="_blank"
                rel="noopener noreferrer"
              >
                named by GitHub as one of the year's most influential open
                source projects
              </a>
              .
            </>
          }
          craRole={
            <>
              The OSPS Baseline is used by the OpenSSF's upcoming{" "}
              <em>CRA Baseline for Manufacturers</em> and{" "}
              <em>CRA Baseline for Open Source Consumers</em>, and it is also
              referenced by Germany's{" "}
              <a
                href="https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TR03185/BSI-TR-03185-2.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                BSI-TR-03185-2 technical guidance
              </a>
              . That dual adoption gives manufacturers a single set of
              requirements they can point at to evidence due diligence over the
              open source components in their products.
            </>
          }
        />
      </Section>

      <Section
        kicker="III. Confirmation"
        title="Automated Evaluation"
        intro="Catalogs and baselines only deliver compliance value if they are continuously evaluated. The Privateer ecosystem is purpose-built to evaluate resources against Gemara-structured assessment requirements."
      >
        <ProjectCard
          name="Privateer"
          tagline="A plugin-driven evaluation engine that reads Gemara control catalogs and produces structured compliance results."
          homepage="https://privateerproj.com/"
          homepageLabel="privateerproj.com"
          body={
            <>
              Privateer integrates with Gemara control catalogs — such as
              the OSPS Baseline and the FINOS CCC catalogs — to
              automatically evaluate resources against codified assessment
              requirements. Plugins extend Privateer to new resource types, and
              results are emitted as Gemara-structured data so they can flow
              into downstream reporting, attestation, and audit workflows.
            </>
          }
          craRole={
            <>
              Privateer is the engine that turns CRA-aligned policy into
              continuous, automated checks against the resources a manufacturer
              actually ships. That makes it possible to produce the kind of
              auditable evidence the CRA's due-diligence and reporting
              obligations require, on every change, without manual collection.
            </>
          }
        />

        <ProjectCard
          name="OSPS Baseline Scanner (Privateer plugin)"
          tagline="A Privateer plugin designed specifically for the evaluation of GitHub repositories against the OSPS Baseline."
          homepage="https://github.com/marketplace/actions/open-source-project-security-baseline-scanner"
          homepageLabel="GitHub Action · OSPS Baseline Scanner"
          body={
            <>
              The{" "}
              <a
                href="https://github.com/ossf/pvtr-github-repo-scanner"
                target="_blank"
                rel="noopener noreferrer"
              >
                pvtr-github-repo-scanner
              </a>{" "}
              evaluates GitHub repositories against the OSPS Baseline and the
              other baselines that build on it. The same plugin powers LFX
              Insights' health evaluation of more than 20,000 Linux Foundation
              repositories, and it is also available as a GitHub Action for
              in-house use.
            </>
          }
          craRole={
            <>
              When the CRA Baselines for Manufacturers and Open Source
              Consumers are published, the scanner is the most direct way to
              evaluate a manufacturer's own repositories — and those of
              the upstream projects they depend on — against those
              baselines on every commit, inside the same CI pipeline they
              already operate.
            </>
          }
        />
      </Section>

      <Section
        kicker="IV. Dive Deeper"
        title="Domain-Specific Control Catalogs"
        intro="Beyond horizontal baselines, regulated industries need control catalogs that speak the language of the services they actually deploy. The CCC project provides those catalogs and the plugins to evaluate them, with a financial-grade bar that translates well to other regulated sectors."
      >
        <ProjectCard
          name="FINOS Common Cloud Controls (CCC)"
          tagline="A collection of community-driven Gemara control catalogs and Privateer plugins focused on establishing financial-grade security baselines for public and private cloud services."
          homepage="https://ccc.finos.org/"
          homepageLabel="ccc.finos.org"
          body={
            <>
              CCC describes consistent controls for compliant public cloud
              deployments in the financial services sector. After adopting the
              Gemara schema, CCC released a reusable core set of threats,
              control objectives, and assessment requirements that subsequent
              service-specific catalogs reference directly. Validation projects
              such as Prowler and Privateer already integrate the catalogs.
            </>
          }
          craRole={
            <>
              For SaaS and cloud-delivered products that must demonstrate
              stringent security configuration to satisfy CRA essential
              cybersecurity requirements, CCC supplies an off-the-shelf
              community-maintained library of controls and the plugins to
              evaluate them — rather than each manufacturer authoring
              their own from scratch.
            </>
          }
        />
      </Section>

      <Section
        kicker="V. Assess Your Progress"
        title="Automated Governance Maturity"
        intro="The final piece is organizational maturity. Even the best tooling under-delivers if the governance program around it is still manual, point-in-time, and disconnected from engineering systems."
      >
        <ProjectCard
          name="CNCF Automated Governance Maturity Model (AGMM)"
          tagline="A checklist guide for enterprises that are elevating their GRC programs toward continuous, automated auditability."
          homepage="https://tag-security.cncf.io/community/resources/automated-governance-maturity-model/"
          homepageLabel="tag-security.cncf.io · AGMM"
          body={
            <>
              Authored across multiple industries through CNCF TAG Security,
              the AGMM gives organizations a structured way to assess how
              mature their automated governance practices are, and where to
              invest next. It was also the conceptual seed for the Gemara
              project.
            </>
          }
          craRole={
            <>
              The level of automated auditability the CRA demands —
              continuous vulnerability handling, SBOM accuracy, supply-chain
              transparency, and timely reporting — is exactly what the
              AGMM's higher tiers describe. Use it as the roadmap for the GRC
              program that the rest of these tools plug into.
            </>
          }
        />
      </Section>

      <Section kicker="In closing" title="Putting It Together">
        <div className="cra-article">
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.75,
              color: "#2a2e35",
              margin: "0 0 1.25rem"
            }}
          >
            These projects are independent, open source, and designed to
            interoperate. A manufacturer can adopt them piecemeal — for
            example, dropping the OSPS Baseline scanner into a CI pipeline
            tomorrow — or assemble them into a single continuous
            compliance program over time.
          </p>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.75,
              color: "#2a2e35",
              margin: "0 0 1.25rem"
            }}
          >
            For firms that want the latter without staffing the integration
            work in-house, our commercial platform{" "}
            <a
              href="https://meridian.revanite.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Meridian
            </a>{" "}
            composes these projects into an end-to-end CRA-readiness workflow,
            with the same standards and schemas underneath so nothing is
            proprietary or locked in.
          </p>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.75,
              color: "#2a2e35",
              margin: 0
            }}
          >
            For the data behind the urgency, see our summary of the{" "}
            <Link to="/cra">
              2026 CRA Awareness and Readiness Report →
            </Link>
          </p>
        </div>
      </Section>
    </article>
  );
};
