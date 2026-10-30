---
title: "A Starting Point for CRA Readiness"
description: "The most useful CRA resources are not ours — they live with the European Commission, the OpenSSF, and the Linux Foundation. This page is a curated set of pointers to those sources, alongside the open source projects we contribute to."
layout: explainer
date: 2026-06-10     # first commit of CRAResourcesPage.tsx, 6ce7b5f
updated: 2026-10-30  # BSI TR-03185 link
authors: [revanite]
tags: [cra]
aliases: [/cra/resources]
---

## The regulation

- [Regulation (EU) 2024/2847](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847) — The official text of the Cyber Resilience Act on EUR-Lex (CELEX: 32024R2847).

## Research

- [2026 CRA Awareness and Readiness Report](https://www.linuxfoundation.org/research/cra-readiness-2026) — The Linux Foundation Research study Revanite co-sponsored, drawing on 843 survey respondents and a security analysis of more than 12,000 open source projects.
- [Our summary of the 2026 LF research](/blog/cra-readiness-gap-2026) — The headline findings and what they mean for the ecosystem.

## OpenSSF CRA initiatives

- [OpenSSF EU Cyber Resilience Act page](https://openssf.org/public-policy/eu-cyber-resilience-act/) — OpenSSF's central hub for CRA-related policy work, working groups, and guidance materials.
- [OpenSSF ORBIT Launchpad](https://github.com/ossf/orbit-launchpad) — The working group developing the *CRA Baseline for Manufacturers* alongside the *CRA Baseline for Open Source Consumers*.

## Open source projects for compliance

For full context on how each project fits the CRA compliance picture, start with our [Field Guide](/guides/cra-field-guide).

- [OpenSSF OSPS Baseline](https://baseline.openssf.org/) — A minimum-bar set of security practices for open source projects, designed to be assessable.
- [Gemara](https://gemara.openssf.org/) — Schemas and SDK for expressing control catalogs, threats, and assessment requirements as machine-readable artifacts.
- [OSPS Baseline Scanner](https://github.com/ossf/pvtr-github-repo-scanner) — A Privateer plugin that evaluates GitHub repositories against the OSPS Baseline.
- [CNCF Automated Governance Maturity Model (AGMM)](https://tag-security.cncf.io/community/resources/automated-governance-maturity-model/) — A maturity model for organizations elevating their GRC programs toward continuous, automated auditability.

## Other guidance

- [BSI TR-03185](https://www.bsi.bund.de/dok/TR-03185-en) — The German Federal Office for Information Security's technical guideline on the secure software lifecycle. Its second part covers open source software; it was published separately as TR-03185-2 and is now part of the single TR-03185 document.

This page is a starting point, not an exhaustive bibliography. The 2026 CRA Awareness and Readiness Report's Resources section lists additional OpenSSF training, working-group communications, and Linux Foundation materials — see [the report](https://www.linuxfoundation.org/research/cra-readiness-2026) for the fuller list.
