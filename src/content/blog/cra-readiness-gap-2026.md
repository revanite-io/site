---
title: "The CRA Readiness Gap"
description: "Eighteen months out from the December 2027 compliance deadline, awareness of the EU Cyber Resilience Act has not improved — and manufacturers are still choosing the most expensive path to compliance."
date: 2026-06-10     # first commit of CRAResearchPage.tsx, 6ce7b5f
updated: 2026-06-11  # last content commit, bf7742f
authors: [revanite]
tags: [cra, osps-baseline, gemara]
image: /research/featured-gradient-light.png
aliases: [/cra]
---

<p class="kicker">Linux Foundation Research · June 2026</p>

*By the Revanite team · based on research by Adrienn Lawson, Linux Foundation*

![Cover of the 2026 CRA Awareness and Readiness Report](/research/featured-gradient-light.png)

On June 9, Linux Foundation Research published the [2026 CRA Awareness and Readiness Report](https://www.linuxfoundation.org/research/cra-readiness-2026). The study draws on a survey of 843 respondents and a security analysis of more than 12,000 open source projects to measure how the global software ecosystem is preparing for the European Union's Cyber Resilience Act.

Our founder, Eddie Knight, contributed an industry perspective featured inside the report, and we believe the data confirm what we have been hearing from manufacturers all year: awareness is not improving, the deadlines are real, and the most effective response is to invest in the open source projects you depend on.

<aside class="callout">

**Yes, this applies to you.** The CRA reaches any product placed on the EU market — not wherever the manufacturer happens to be headquartered.

The same extraterritorial reach that pushed GDPR cookie-consent banners onto websites worldwide. If you ship software, firmware, or connected devices that reach customers inside the EU, you are in scope — whether you are based in San Francisco, São Paulo, or Singapore.

</aside>

<p class="kicker">Section I</p>

## Awareness Is Not Improving

The 2026 survey found that overall CRA awareness has not improved year over year, even though the regulation entered into force during the survey window — putting the December 2027 full-compliance deadline roughly 18 months out. Penalties for non-compliance can reach **€15 million or 2.5% of global annual turnover**, yet most respondents do not know this.

<div class="figure-grid">
  <img src="/research/infographics/social-01.png" alt="66% of respondents remain unfamiliar with the CRA, similar to the level in 2025 (62%), despite the regulation entering into force during the year." loading="lazy" />
  <img src="/research/infographics/social-02.png" alt="72% of US and Canadian respondents are unfamiliar with the CRA, despite needing to comply if selling products into the EU market." loading="lazy" />
  <img src="/research/infographics/social-03.png" alt="41% of organizations already familiar with the CRA have still not determined whether the regulation actually applies to them." loading="lazy" />
  <img src="/research/infographics/social-04.png" alt="Only 34% of respondents correctly identify December 2027 as the full compliance target year, while 46% remain uncertain about deadlines altogether." loading="lazy" />
  <img src="/research/infographics/social-05.png" alt="56% of respondents are unaware that non-compliance fines can reach €15 million or 2.5% of global annual turnover." loading="lazy" />
</div>

<p class="kicker">Section II</p>

## ‘Consume and Forget’ Is Still Widespread

Beyond awareness, the report shows that manufacturers have made limited progress on the practices the CRA will demand. The CRA places responsibility for security maintenance squarely on manufacturers who integrate open source components into their products (CRA Article 13), but the data show the "consume and forget" posture is still widespread.

<div class="figure-grid">
  <img src="/research/infographics/social-06.png" alt="Only 32% of manufacturers produce SBOMs for all products, and 51% still passively rely on upstream projects for security fixes." loading="lazy" />
  <img src="/research/infographics/social-08.png" alt="Only 41% of manufacturers expect to be fully compliant by December 2027, while 39% do not know when they will be." loading="lazy" />
</div>

<p class="kicker">Section III</p>

## The Cost of Forking

One of the most striking findings is the price tag attached to private-fork maintenance as a compliance workaround. The average organization maintains **86 private forks** of open source components, consuming roughly 5,160 labor hours — estimated at **$258,000 USD** — every release cycle. For organizations with more than 5,000 employees, that burden exceeds 11,000 hours per cycle.

<div class="figure-grid">
  <img src="/research/infographics/social-07.png" alt="Maintaining an average of 86 private forks costs organizations approximately $258,000 in labor every release cycle, which greatly scales with organization size." loading="lazy" />
</div>

The report's analysis suggests that as the December 2027 deadline approaches, upstream contribution may become the only financially rational path forward. Contributing fixes upstream and funding open source projects does not, by itself, appear to classify a manufacturer's engagement as commercial activity under the CRA — a distinction the European Commission's March 2026 draft guidance addresses directly, though that document has not yet been finalized.

There is a related failure mode the cost numbers above don't capture: cloning open source projects at industrial scale and shipping them as closed-source compliance products without pushing fixes back upstream. The vendor checks every CRA-readiness box — SBOM, support contract, conformity assessment — but a repackager is a vendor, not a steward. The CRA's steward category exists precisely because the two roles are different. This pattern also concentrates compliance risk in a single repackaging pipeline, running counter to the next section's finding that contributor diversity is a strong predictor of project security. This is not a viable position. A compliance posture built on un-upstreamed forks relies on an upstream the buyer is actively starving — “consume, fork, monetize, walk away” undermines exactly the ecosystem the regulation depends on.

<p class="kicker">Section IV</p>

## Vulnerabilities Are Surging — Upstream Investment Is the Lever

Analysis of more than 12,000 open source projects indexed on LFX shows a **394% year-over-year increase** in published CVEs in Q1 2026, with high-severity findings up 811% and critical-severity findings up 136%. The report attributes much of the surge to better detection — AI-assisted scanning, improved tooling, and CRA-prompted auditing — meaning the increase largely reflects expanding visibility into vulnerabilities already present in the components manufacturers depend on. The CRA's due-diligence obligations apply to that visible burden either way.

<div class="figure-grid">
  <img src="/research/infographics/social-12.png" alt="CVE discoveries surged 394% year-over-year in Q1 2026, with high-severity vulnerabilities up 811% across 14,000+ open source projects." loading="lazy" />
  <img src="/research/infographics/social-09.png" alt="Analysis of 12,863 projects shows the number of contributing organizations strongly predicts a project's security posture, making upstream investment a direct compliance strategy." loading="lazy" />
</div>

The vulnerability counts above draw on the LFX-indexed dataset; a separate analysis of 12,863 projects shows that the number of **contributing organizations** is a strong predictor of a project's security posture (Spearman correlation 0.57 with the CLOMonitor Security score). Diversifying upstream investment is, in effect, a compliance strategy.

<aside class="callout">

**Earlier than you think.** The reporting clock starts before full compliance does.

Most CRA discussion focuses on the December 2027 full-applicability deadline. Article 14's vulnerability and incident reporting obligations take effect earlier — on 11 September 2026. From that date, manufacturers must notify ENISA and the relevant national CSIRT within 24 hours of becoming aware of an actively exploited vulnerability, with a follow-up within 72 hours and a final report within 14 days of a corrective or mitigating measure becoming available. Severe incidents follow the same 24-hour and 72-hour windows with a final report within one month.

</aside>

<p class="kicker">Section V</p>

## What This Means for Manufacturers

Drawing on the report's findings, four concrete actions for manufacturers:

-   **Audit private forks** and plan to contribute vulnerability fixes upstream. The targeted commitment required is well within reach for any organization already maintaining a fork.
-   **Adopt operational toolkits** that turn policy language into automated, auditable evaluations — SBOM templates, vulnerability disclosure workflows, compliance checklists scaled to organization size.
-   **Invest in the open source projects you depend on.** Organizational diversity is a strong predictor of project security, which makes upstream investment a direct investment in your own compliance posture.
-   **Engage with the standards work in flight** — including the OpenSSF's upcoming *CRA Baseline for Manufacturers* and *CRA Baseline for Open Source Consumers*, both of which translate the regulation into machine-readable assessment requirements.

<p class="kicker">Section VI</p>

## How Revanite Is Helping

Even as a small team, we have contributed several elements to the open source ecosystem that regulated manufacturers are now relying on for CRA readiness. We launched the OSPS Baseline, built an automated scanner to evaluate compliance with it, and created the Gemara project to streamline end-to-end machine-readable compliance workflows. We are now joining some of the largest players in the industry to help shape the emerging CRA Baseline for Manufacturers.

Each of these projects has a direct role to play in helping regulated firms meet their CRA obligations — from secure development hygiene, through machine-readable policy, through automated evaluation and reporting. [Read more about how the OSS projects we contribute to map to CRA obligations →](/guides/cra-field-guide)

For firms that want CRA compliance built on these projects without staffing the integration work in-house, our commercial platform is [Meridian](https://meridian.revanite.io).

[![Read the full 2026 CRA Awareness and Readiness Report on linuxfoundation.org](/research/cta-read-the-report.png)](https://www.linuxfoundation.org/research/cra-readiness-2026)

*40 pages, PDF.*

*All images on this page © The Linux Foundation, used with attribution.*
