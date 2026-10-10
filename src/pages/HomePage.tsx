import React from "react";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { PartnersSection } from "../components/PartnersSection";

const projects = [
  {
    name: "Gemara",
    role: "The model",
    body:
      "A machine-readable schema for controls, threats, policies and evidence, hosted by the OpenSSF. It is the shared language the rest of the stack speaks, and it already underpins FINOS Common Cloud Controls, the OSPS Baseline and LFX Insights.",
    links: [
      { label: "gemara.openssf.org", href: "https://gemara.openssf.org" },
      { label: "Source", href: "https://github.com/gemaraproj/gemara" }
    ]
  },
  {
    name: "Privateer",
    role: "The evaluator",
    body:
      "Runs community or private plugins against any software asset and writes the result as Gemara evidence. Plugin scaffolding is generated straight from a Gemara control catalog, so a new standard becomes a runnable check in minutes.",
    links: [
      { label: "privateerproj.com", href: "https://privateerproj.com" },
      { label: "Source", href: "https://github.com/privateerproj/privateer" }
    ]
  },
  {
    name: "grc.store",
    role: "The registry",
    live: true,
    body:
      "The public registry for compliance assets. Publish, sign and verify Gemara artifacts as OCI bundles: control catalogs, guidance, policies and the evaluation logs Privateer produces. Search it, pull from it, or publish your own.",
    links: [{ label: "grc.store", href: "https://grc.store" }]
  }
];

const founders = [
  {
    name: "Eddie Knight",
    title: "Co-founder",
    body:
      "Created the OSPS Baseline and Gemara. Chair of the FINOS Technical Oversight Committee, technical lead in the CNCF, and a long-time Linux Foundation maintainer and strategic advisor. Background includes Sonatype, Morgan Stanley and Bank of America.",
    links: [
      { label: "eddieknight.dev", href: "https://eddieknight.dev" },
      { label: "GitHub", href: "https://github.com/eddie-knight" }
    ]
  },
  {
    name: "Jason Meridth",
    title: "Co-founder",
    body:
      "Leads Privateer. Maintainer in the CNCF and OpenSSF communities. Background includes Chainguard, GitHub, Rackspace and Cisco.",
    links: [
      { label: "jmeridth.com", href: "https://jmeridth.com" },
      { label: "GitHub", href: "https://github.com/jmeridth" }
    ]
  }
];

const ExternalLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export const HomePage: React.FC = () => {
  useDocumentTitle("Revanite");
  return (
    <div className="home">
      <section className="home-intro" aria-labelledby="home-heading">
        <h1 id="home-heading">Compliance that machines can read.</h1>
        <p>
          Revanite builds and maintains the open source stack for GRC engineering: a shared data model,
          an evaluation engine, and a public registry. Each project stands on its own. Together they
          carry a control from the page it was written on to proof that it holds.
        </p>
      </section>

      <section className="home-pipeline" aria-label="The open source stack">
        <ol>
          {projects.map((p) => (
            <li key={p.name} className={`pipeline-card${p.live ? " is-live" : ""}`}>
              <p className="pipeline-role">{p.role}</p>
              <h2>
                {p.name}
                {p.live && <span className="pipeline-live">Now live</span>}
              </h2>
              <p>{p.body}</p>
              <p className="pipeline-links">
                {p.links.map((l) => (
                  <ExternalLink key={l.href} href={l.href}>
                    {l.label}
                  </ExternalLink>
                ))}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="home-founders" aria-labelledby="founders-heading">
        <h2 id="founders-heading">Founders</h2>
        <div>
          {founders.map((f) => (
            <article key={f.name}>
              <h3>{f.name}</h3>
              <p className="founder-title">{f.title}</p>
              <p>{f.body}</p>
              <p className="pipeline-links">
                {f.links.map((l) => (
                  <ExternalLink key={l.href} href={l.href}>
                    {l.label}
                  </ExternalLink>
                ))}
              </p>
            </article>
          ))}
        </div>
      </section>

      <PartnersSection />
    </div>
  );
};
