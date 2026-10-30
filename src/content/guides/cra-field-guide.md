---
title: "A Field Guide to OSS Tools for CRA Readiness"
description: "The open source ecosystem already contains the building blocks regulated manufacturers need to meet their CRA obligations. Here is how each one fits."
layout: explainer
updated: 2026-06-12
authors: [revanite]
tags: [cra, gemara, osps-baseline, privateer]
aliases: [/cra/field-guide]
---

The [2026 CRA Awareness and Readiness Report](/blog/cra-readiness-gap-2026) makes clear that the practical gap between policy and implementation is the largest barrier to compliance. The projects below address that gap directly. Revanite contributors are active in each of these projects, and our commercial platform [Meridian](https://meridian.revanite.io) is built on top of the same stack so that regulated firms can adopt continuous CRA compliance without vendor lock-in or the need to re-invent the underlying tooling.

## Machine-Readable Policy

Machine-readable policy is the connective tissue between regulatory text and automated evaluation. The CRA's reliance on harmonized standards under Article 19 makes this connective tissue load-bearing.

### Gemara

A logical model and schemas that describe the categories of compliance activities, how they interact, and the structures that enable automated interoperability between them.

Gemara allows organizations to express control catalogs, threats, and assessment requirements as machine-readable artifacts that connect high-level regulatory guidance to concrete, automated evaluations. The schemas and SDK are publicly used by FINOS, OpenSSF, LFX Insights, Revanite's Privateer project, and Red Hat's ComplyTime project.

**How it helps with the CRA.** Gemara is the schema layer underneath the OpenSSF's upcoming *CRA Baseline for Manufacturers* and *CRA Baseline for Open Source Consumers*. With Gemara, manufacturers can attach CRA assessment requirements directly to risk assessments and automated evaluations, enabling end-to-end automated governance and audit programs rather than ad hoc spreadsheets.

[gemara.openssf.org →](https://gemara.openssf.org/)

## Security Hygiene Baselines

Once the schema is in place, manufacturers need a credible, widely-adopted body of requirements to point at. These baselines describe what “secure-by-design” looks like for an open source project — which is exactly what manufacturers must demonstrate for the dependencies they ship.

### OpenSSF OSPS Baseline

A minimum definition of security requirements for an open source project, scaled to its maturity level.

The Open Source Project Security Baseline (OSPS Baseline) describes proper security hygiene for risk mitigation within an open source project. It is referenced as a core requirement by OpenSSF and FINOS, used by the Linux Foundation's LFX Insights platform to evaluate the health of more than 20,000 repositories, and was [named by GitHub as one of the year's most influential open source projects](https://github.blog/open-source/maintainers/this-years-most-influential-open-source-projects/).

**How it helps with the CRA.** The OSPS Baseline is used by the OpenSSF's upcoming *CRA Baseline for Manufacturers* and *CRA Baseline for Open Source Consumers*, and it is also referenced by Germany's [BSI-TR-03185-2 technical guidance](https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TR03185/BSI-TR-03185-2.html). While it doesn't fully cover CRA requirements alone, this detailed control catalog provides a foundation upon which other CRA-specific solutions can be built.

[baseline.openssf.org →](https://baseline.openssf.org/)

## Automated Evaluation

Catalogs and baselines only deliver compliance value if they are continuously evaluated. The Privateer ecosystem is purpose-built to evaluate resources against Gemara-structured assessment requirements.

### Privateer

A plugin-driven evaluation engine that reads Gemara control catalogs and produces structured compliance results.

Privateer integrates with Gemara control catalogs — such as the OSPS Baseline and the FINOS CCC catalogs — to automatically evaluate resources against codified assessment requirements. Plugins extend Privateer to new resource types, and results are emitted as Gemara-structured data so they can flow into downstream reporting, attestation, and audit workflows.

**How it helps with the CRA.** Privateer is the engine that turns CRA-aligned policy into continuous, automated checks against the resources a manufacturer actually ships. That makes it possible to produce the kind of auditable evidence the CRA's due-diligence and reporting obligations require, on every change, without manual collection.

[privateerproj.com →](https://privateerproj.com/)

### OSPS Baseline Scanner (Privateer plugin)

A Privateer plugin designed specifically for the evaluation of GitHub repositories against the OSPS Baseline.

The [pvtr-github-repo-scanner](https://github.com/ossf/pvtr-github-repo-scanner) evaluates GitHub repositories against the OSPS Baseline and the other baselines that build on it. The same plugin powers LFX Insights' health evaluation of more than 20,000 Linux Foundation repositories, and it is also available as a GitHub Action for in-house use.

**How it helps with the CRA.** When the CRA Baselines for Manufacturers and Open Source Consumers are published, the scanner is the most direct way to evaluate a manufacturer's own repositories — and those of the upstream projects they depend on — against those baselines on every commit, inside the same CI pipeline they already operate.

[GitHub Action · OSPS Baseline Scanner →](https://github.com/marketplace/actions/open-source-project-security-baseline-scanner)

## Domain-Specific Control Catalogs

Beyond horizontal baselines, regulated industries need control catalogs that speak the language of the services they actually deploy. The CCC project provides those catalogs and the plugins to evaluate them, with a financial-grade bar that translates well to other regulated sectors.

### FINOS Common Cloud Controls (CCC)

A collection of community-driven Gemara control catalogs and Privateer plugins focused on establishing financial-grade security baselines for public and private cloud services.

CCC describes consistent controls for compliant public cloud deployments in the financial services sector. After adopting the Gemara schema, CCC released a reusable core set of threats, control objectives, and assessment requirements that subsequent service-specific catalogs reference directly. Validation projects such as Prowler and Privateer already integrate the catalogs.

**How it helps with the CRA.** Mostly as a next step. Cloud services sit largely outside the CRA's scope — SaaS is not covered, and cloud offerings fall chiefly under NIS2 and DORA instead. But the readiness work is the same shape: once your CRA program runs on Gemara catalogs and automated evaluation, CCC extends that machinery to the cloud estate those adjacent regulations govern, with a community-maintained library of controls rather than each organization authoring its own from scratch.

[ccc.finos.org →](https://ccc.finos.org/)

## Automated Governance Maturity

The final piece is organizational maturity. Even the best tooling under-delivers if the governance program around it is still manual, point-in-time, and disconnected from engineering systems.

### CNCF Automated Governance Maturity Model (AGMM)

A checklist guide for enterprises that are elevating their GRC programs toward continuous, automated auditability.

Authored across multiple industries through CNCF TAG Security, the AGMM gives organizations a structured way to assess how mature their automated governance practices are, and where to invest next. It was also the conceptual seed for the Gemara project.

**How it helps with the CRA.** The level of automated auditability the CRA demands — continuous vulnerability handling, SBOM accuracy, supply-chain transparency, and timely reporting — is exactly what the AGMM's higher tiers describe. Use it as the roadmap for the GRC program that the rest of these tools plug into.

[tag-security.cncf.io · AGMM →](https://tag-security.cncf.io/community/resources/automated-governance-maturity-model/)

## Putting It Together

These projects are independent, open source, and designed to interoperate. A manufacturer can adopt them piecemeal — for example, dropping the OSPS Baseline scanner into a CI pipeline tomorrow — or assemble them into a single continuous compliance program over time.

For firms that want the latter without staffing the integration work in-house, our commercial platform [Meridian](https://meridian.revanite.io) composes these projects into an end-to-end CRA-readiness workflow, with the same standards and schemas underneath so nothing is proprietary or locked in.

For the data behind the urgency, see our summary of the [2026 CRA Awareness and Readiness Report →](/blog/cra-readiness-gap-2026)
