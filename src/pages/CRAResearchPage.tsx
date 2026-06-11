import React from "react";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const REPORT_PDF = "/research/lfr_2026_cra_awareness_report_060826.pdf";
const REPORT_TITLE = "2026 CRA Awareness and Readiness Report";
const FEATURED_IMAGE = "/research/featured-gradient-light.png";

type SectionProps = {
  kicker: string;
  title: string;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ kicker, title, children }) => (
  <section style={{ marginTop: "4rem", marginBottom: "2.5rem" }}>
    <div className="cra-article">
      <span className="cra-kicker">{kicker}</span>
      <h2 className="cra-section-title">{title}</h2>
    </div>
    {children}
  </section>
);

const Paragraph: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="cra-article">
    <p
      style={{
        fontSize: "1.125rem",
        lineHeight: 1.75,
        color: "#2a2e35",
        margin: "0 0 1.25rem"
      }}
    >
      {children}
    </p>
  </div>
);

type InfographicProps = {
  src: string;
  alt: string;
};

const Infographic: React.FC<InfographicProps> = ({ src, alt }) => (
  <figure
    style={{
      margin: 0,
      borderRadius: "0.5rem",
      overflow: "hidden",
      boxShadow:
        "0 1px 2px rgba(20, 25, 30, 0.08), 0 6px 18px rgba(20, 25, 30, 0.08)",
      background: "#001a33"
    }}
  >
    <img
      src={src}
      alt={alt}
      loading="lazy"
      style={{
        display: "block",
        width: "100%",
        height: "auto"
      }}
    />
  </figure>
);

const InfographicGrid: React.FC<{ children: React.ReactNode }> = ({
  children
}) => (
  <div className="cra-article-wide" style={{ marginBottom: "1.5rem" }}>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "1.25rem"
      }}
    >
      {children}
    </div>
  </div>
);

export const CRAResearchPage: React.FC = () => {
  useDocumentTitle("The CRA Readiness Gap — Revanite");
  return (
    <article>
      {/* Masthead */}
      <header
        className="cra-article"
        style={{ paddingTop: "2.5rem", paddingBottom: "1.5rem" }}
      >
        <span className="cra-kicker">
          Linux Foundation Research · June 2026
        </span>
        <h1
          style={{
            margin: "0 0 1.25rem",
            fontSize: "3.25rem",
            letterSpacing: "-0.015em",
            lineHeight: 1.1
          }}
        >
          The CRA Readiness Gap
        </h1>
        <p
          className="cra-lede"
          style={{
            margin: "0 0 1.25rem",
            color: "#3a3f47"
          }}
        >
          Eighteen months out from the December 2027 compliance deadline,
          awareness of the EU Cyber Resilience Act has not improved —
          and manufacturers are still choosing the most expensive path to
          compliance.
        </p>
        <p className="cra-byline" style={{ margin: 0 }}>
          By the Revanite team · based on research by Adrienn Lawson,
          Linux Foundation
        </p>
      </header>

      {/* Featured image */}
      <div
        className="cra-article-wide"
        style={{ marginTop: "1rem", marginBottom: "3rem" }}
      >
        <figure
          style={{
            margin: 0,
            borderRadius: "0.75rem",
            overflow: "hidden",
            boxShadow:
              "0 2px 4px rgba(20, 25, 30, 0.08), 0 12px 36px rgba(20, 25, 30, 0.12)"
          }}
        >
          <img
            src={FEATURED_IMAGE}
            alt="Cover of the 2026 CRA Awareness and Readiness Report"
            style={{
              display: "block",
              width: "100%",
              height: "auto"
            }}
          />
        </figure>
      </div>

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
            margin: "0 0 1.25rem"
          }}
        >
          On June 9, Linux Foundation Research published the{" "}
          <a href={REPORT_PDF} target="_blank" rel="noopener noreferrer">
            {REPORT_TITLE}
          </a>
          . The study draws on a survey of 843 respondents and a security
          analysis of more than 12,000 open source projects to measure how the
          global software ecosystem is preparing for the European Union's Cyber
          Resilience Act.
        </p>
        <p
          style={{
            fontSize: "1.125rem",
            lineHeight: 1.75,
            color: "#2a2e35",
            margin: 0
          }}
        >
          Our founder, Eddie Knight, contributed an industry perspective featured inside
          the report, and we believe the data confirm what we have been
          hearing from manufacturers all year: awareness is not improving, the
          deadlines are real, and the most effective response is to invest in
          the open source projects you depend on.
        </p>
      </div>

      {/* Territorial scope callout */}
      <div
        className="cra-article"
        style={{ marginTop: "3rem", marginBottom: "0.5rem" }}
      >
        <aside
          style={{
            padding: "1.35rem 1.6rem",
            background: "rgba(10, 138, 160, 0.08)",
            borderLeft: "4px solid #0a8aa0",
            borderRadius: "0 0.4rem 0.4rem 0"
          }}
        >
          <span
            className="cra-kicker"
            style={{
              color: "#0a6b7d",
              marginBottom: "0.5rem",
              display: "block"
            }}
          >
            Yes, this applies to you
          </span>
          <p
            style={{
              margin: "0 0 0.85rem",
              fontSize: "1.2rem",
              lineHeight: 1.55,
              color: "#1a1d22",
              fontWeight: 600
            }}
          >
            The CRA reaches any product placed on the EU market — not
            wherever the manufacturer happens to be headquartered.
          </p>
          <p
            style={{
              margin: 0,
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "#2a2e35"
            }}
          >
            The same extraterritorial reach that pushed GDPR cookie-consent
            banners onto websites worldwide. If you ship software, firmware,
            or connected devices that reach customers inside the EU, you are
            in scope — whether you are based in San Francisco, São Paulo, or
            Singapore.
          </p>
        </aside>
      </div>

      <Section kicker="Section I" title="Awareness Is Not Improving">
        <Paragraph>
          The 2026 survey found that overall CRA awareness has not improved
          year over year, even though the regulation entered into force during
          the survey window — putting the December 2027 full-compliance
          deadline roughly 18 months out. Penalties for non-compliance can
          reach <strong>€15 million or 2.5% of global annual turnover</strong>,
          yet most respondents do not know this.
        </Paragraph>

        <InfographicGrid>
          <Infographic
            src="/research/infographics/social-01.png"
            alt="66% of respondents remain unfamiliar with the CRA, similar to the level in 2025 (62%), despite the regulation entering into force during the year."
          />
          <Infographic
            src="/research/infographics/social-02.png"
            alt="72% of US and Canadian respondents are unfamiliar with the CRA, despite needing to comply if selling products into the EU market."
          />
          <Infographic
            src="/research/infographics/social-03.png"
            alt="41% of organizations already familiar with the CRA have still not determined whether the regulation actually applies to them."
          />
          <Infographic
            src="/research/infographics/social-04.png"
            alt="Only 34% of respondents correctly identify December 2027 as the full compliance target year, while 46% remain uncertain about deadlines altogether."
          />
          <Infographic
            src="/research/infographics/social-05.png"
            alt="56% of respondents are unaware that non-compliance fines can reach €15 million or 2.5% of global annual turnover."
          />
        </InfographicGrid>
      </Section>

      <Section
        kicker="Section II"
        title="‘Consume and Forget’ Is Still Widespread"
      >
        <Paragraph>
          Beyond awareness, the report shows that manufacturers have made
          limited progress on the practices the CRA will demand. The CRA
          places responsibility for security maintenance squarely on
          manufacturers who integrate open source components into their
          products (CRA Article 13), but the data show the "consume and
          forget" posture is still widespread.
        </Paragraph>

        <InfographicGrid>
          <Infographic
            src="/research/infographics/social-06.png"
            alt="Only 32% of manufacturers produce SBOMs for all products, and 51% still passively rely on upstream projects for security fixes."
          />
          <Infographic
            src="/research/infographics/social-08.png"
            alt="Only 41% of manufacturers expect to be fully compliant by December 2027, while 39% do not know when they will be."
          />
        </InfographicGrid>
      </Section>

      <Section kicker="Section III" title="The Cost of Forking">
        <Paragraph>
          One of the most striking findings is the price tag attached to
          private-fork maintenance as a compliance workaround. The average
          organization maintains <strong>86 private forks</strong> of open
          source components, consuming roughly 5,160 labor hours —
          estimated at <strong>$258,000 USD</strong> — every release
          cycle. For organizations with more than 5,000 employees, that
          burden exceeds 11,000 hours per cycle.
        </Paragraph>

        <InfographicGrid>
          <Infographic
            src="/research/infographics/social-07.png"
            alt="Maintaining an average of 86 private forks costs organizations approximately $258,000 in labor every release cycle, which greatly scales with organization size."
          />
        </InfographicGrid>

        <Paragraph>
          The report's analysis suggests that as the December 2027 deadline
          approaches, upstream contribution may become the only financially
          rational path forward. Contributing fixes upstream and funding open
          source projects does not, by itself, appear to classify a
          manufacturer's engagement as commercial activity under the CRA — a
          distinction the European Commission's March 2026 draft guidance
          addresses directly, though that document has not yet been finalized.
        </Paragraph>

        <Paragraph>
          There is a related failure mode the cost numbers above don't
          capture: cloning open source projects at industrial scale and
          shipping them as closed-source compliance products without pushing
          fixes back upstream. The vendor checks every CRA-readiness box —
          SBOM, support contract, conformity assessment — but a repackager is
          a vendor, not a steward. The CRA's steward category exists
          precisely because the two roles are different. This pattern also
          concentrates compliance risk in a single repackaging pipeline,
          running counter to the next section's finding that contributor
          diversity is a strong predictor of project security. This is not a
          viable position. A compliance posture built on un-upstreamed forks
          relies on an upstream the buyer is actively starving — “consume,
          fork, monetize, walk away” undermines exactly the ecosystem the
          regulation depends on.
        </Paragraph>
      </Section>

      <Section
        kicker="Section IV"
        title="Vulnerabilities Are Surging — Upstream Investment Is the Lever"
      >
        <Paragraph>
          Analysis of more than 12,000 open source projects indexed on LFX
          shows a <strong>394% year-over-year increase</strong> in published
          CVEs in Q1 2026, with high-severity findings up 811% and
          critical-severity findings up 136%. The report attributes much of
          the surge to better detection — AI-assisted scanning, improved
          tooling, and CRA-prompted auditing — meaning the increase
          largely reflects expanding visibility into vulnerabilities already
          present in the components manufacturers depend on. The CRA's
          due-diligence obligations apply to that visible burden either way.
        </Paragraph>

        <InfographicGrid>
          <Infographic
            src="/research/infographics/social-12.png"
            alt="CVE discoveries surged 394% year-over-year in Q1 2026, with high-severity vulnerabilities up 811% across 14,000+ open source projects."
          />
          <Infographic
            src="/research/infographics/social-09.png"
            alt="Analysis of 12,863 projects shows the number of contributing organizations strongly predicts a project's security posture, making upstream investment a direct compliance strategy."
          />
        </InfographicGrid>

        <Paragraph>
          The vulnerability counts above draw on the LFX-indexed dataset; a
          separate analysis of 12,863 projects shows that the number of{" "}
          <strong>contributing organizations</strong> is a strong predictor of
          a project's security posture (Spearman correlation 0.57 with the
          CLOMonitor Security score). Diversifying upstream investment is, in
          effect, a compliance strategy.
        </Paragraph>
      </Section>

      {/* Reporting deadline callout */}
      <div
        className="cra-article"
        style={{ marginTop: "2rem", marginBottom: "0.5rem" }}
      >
        <aside
          style={{
            padding: "1.35rem 1.6rem",
            background: "rgba(10, 138, 160, 0.08)",
            borderLeft: "4px solid #0a8aa0",
            borderRadius: "0 0.4rem 0.4rem 0"
          }}
        >
          <span
            className="cra-kicker"
            style={{
              color: "#0a6b7d",
              marginBottom: "0.5rem",
              display: "block"
            }}
          >
            Earlier than you think
          </span>
          <p
            style={{
              margin: "0 0 0.85rem",
              fontSize: "1.2rem",
              lineHeight: 1.55,
              color: "#1a1d22",
              fontWeight: 600
            }}
          >
            The reporting clock starts before full compliance does.
          </p>
          <p
            style={{
              margin: 0,
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "#2a2e35"
            }}
          >
            Most CRA discussion focuses on the December 2027
            full-applicability deadline. Article 14's vulnerability and
            incident reporting obligations take effect earlier — on 11
            September 2026. From that date, manufacturers must notify ENISA
            and the relevant national CSIRT within 24 hours of becoming aware
            of an actively exploited vulnerability, with a follow-up within
            72 hours and a final report within 14 days of a corrective or
            mitigating measure becoming available. Severe incidents follow
            the same 24-hour and 72-hour windows with a final report within
            one month.
          </p>
        </aside>
      </div>

      <Section kicker="Section V" title="What This Means for Manufacturers">
        <Paragraph>
          Drawing on the report's findings, four concrete actions for
          manufacturers:
        </Paragraph>
        <div className="cra-article">
          <ul
            style={{
              paddingLeft: "1.25rem",
              margin: "0 0 1.5rem",
              fontSize: "1.125rem",
              lineHeight: 1.75,
              color: "#2a2e35"
            }}
          >
            <li style={{ marginBottom: "0.85rem" }}>
              <strong>Audit private forks</strong> and plan to contribute
              vulnerability fixes upstream. The targeted commitment required
              is well within reach for any organization already maintaining a
              fork.
            </li>
            <li style={{ marginBottom: "0.85rem" }}>
              <strong>Adopt operational toolkits</strong> that turn policy
              language into automated, auditable evaluations — SBOM
              templates, vulnerability disclosure workflows, compliance
              checklists scaled to organization size.
            </li>
            <li style={{ marginBottom: "0.85rem" }}>
              <strong>
                Invest in the open source projects you depend on.
              </strong>{" "}
              Organizational diversity is a strong predictor of project
              security, which makes upstream investment a direct investment in
              your own compliance posture.
            </li>
            <li>
              <strong>Engage with the standards work in flight</strong>{" "}
              — including the OpenSSF's upcoming{" "}
              <em>CRA Baseline for Manufacturers</em> and{" "}
              <em>CRA Baseline for Open Source Consumers</em>, both of which
              translate the regulation into machine-readable assessment
              requirements.
            </li>
          </ul>
        </div>
      </Section>

      <Section kicker="Section VI" title="How Revanite Is Helping">
        <Paragraph>
          Even as a small team, we have contributed several elements to the
          open source ecosystem that regulated manufacturers are now relying
          on for CRA readiness. We launched the OSPS Baseline,
          built an automated scanner to evaluate compliance with it, and
          created the Gemara project to streamline end-to-end machine-readable
          compliance workflows. We are now joining some of the largest players
          in the industry to help shape the emerging CRA Baseline for
          Manufacturers.
        </Paragraph>
        <Paragraph>
          Each of these projects has a direct role to play in helping
          regulated firms meet their CRA obligations — from secure
          development hygiene, through machine-readable policy, through
          automated evaluation and reporting.{" "}
          <Link to="/cra/field-guide">
            Read more about how the OSS projects we contribute to map to CRA
            obligations →
          </Link>
        </Paragraph>
        <Paragraph>
          For firms that want CRA compliance built on these projects without
          staffing the integration work in-house, our commercial platform is{" "}
          <a
            href="https://meridian.revanite.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meridian
          </a>
          .
        </Paragraph>
      </Section>

      {/* Closing CTA — PDF download */}
      <div
        className="cra-article-wide"
        style={{
          marginTop: "3rem",
          marginBottom: "2rem"
        }}
      >
        <figure style={{ margin: 0 }}>
          <a
            href={REPORT_PDF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read the full 2026 CRA Awareness and Readiness Report (PDF)"
            style={{
              display: "block",
              borderRadius: "0.75rem",
              overflow: "hidden",
              textDecoration: "none",
              boxShadow:
                "0 2px 4px rgba(20, 25, 30, 0.08), 0 12px 36px rgba(20, 25, 30, 0.12)",
              transition: "transform 0.2s, box-shadow 0.2s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 4px 8px rgba(20, 25, 30, 0.12), 0 18px 48px rgba(20, 25, 30, 0.18)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 2px 4px rgba(20, 25, 30, 0.08), 0 12px 36px rgba(20, 25, 30, 0.12)";
            }}
          >
            <img
              src="/research/cta-read-the-report.png"
              alt=""
              style={{ display: "block", width: "100%", height: "auto" }}
            />
          </a>
          <figcaption
            className="cra-byline"
            style={{
              margin: "0.75rem 0 0",
              textAlign: "center",
              fontSize: "0.85rem"
            }}
          >
            40 pages, PDF.
          </figcaption>
        </figure>
      </div>

      <div
        className="cra-article"
        style={{ marginTop: "1.5rem", marginBottom: "2rem" }}
      >
        <p
          className="cra-byline"
          style={{
            textAlign: "center",
            fontSize: "0.85rem",
            margin: 0,
            color: "#5a6068"
          }}
        >
          All images on this page © The Linux Foundation, used with
          attribution.
        </p>
      </div>
    </article>
  );
};
