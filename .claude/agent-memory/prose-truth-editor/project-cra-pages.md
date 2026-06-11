---
name: project-cra-pages
description: CRA section of the Revanite site — audience, tone, confirmed accurate claims, open issues, and recurring editorial pitfalls
metadata:
  type: project
---

## Pages in scope

- `/cra` — CRAResearchPage.tsx (landing/research summary)
- `/cra/field-guide` — CRAOpenSourcePage.tsx (OSS tools field guide)
- `/cra/resources` — CRAResourcesPage.tsx (curated link page)
- `/cra/*` — CRALayout.tsx (shell), CRANav.tsx (sticky nav)
- CRAManufacturersPage.tsx and CRAStewardsPage.tsx were deleted from the site prior to final review.

**Audience:** Regulated manufacturers and open source stewards who need to understand or act on EU CRA obligations. Technically literate but not necessarily legal experts.

**Tone target:** Journalistic / practitioner — not marketing copy.

---

## CRA timeline facts (verified against report PDF and CRA text)

- 11 June 2026: Conformity Assessment Body notification provisions take effect
- 11 September 2026: Manufacturers must begin reporting actively exploited vulnerabilities and severe security incidents
- 11 December 2027: Regulation applies in full

---

## Statistics confirmed accurate against the 2026 LF CRA Awareness and Readiness Report PDF

- 843 survey respondents — confirmed (p.5, p.6)
- 12,863 projects in the LFX security posture analysis — confirmed (Figure 20, p.21 and p.23)
- "more than 12,000" used as the rounded figure in body text — consistent with above
- 66% overall unfamiliarity — confirmed (Figure 1, p.7)
- 62% unfamiliarity in 2025 — confirmed (Figure 1, p.7)
- 72% US/Canada unfamiliarity — confirmed (Figure 2, p.8)
- 41% of CRA-aware orgs haven't determined applicability — confirmed (Figure 4, p.10)
- 34% correctly identify December 2027 — confirmed (Figure 4, p.10)
- 46% uncertain about deadlines — confirmed (Figure 4, p.10)
- 56% unaware of penalties — confirmed (Figure 4, p.10)
- 32% of manufacturers produce SBOMs for all products — confirmed (Figure 9, p.14)
- 51% passively rely on upstream for security fixes — confirmed (Figure 9, p.14)
- 41% of manufacturers expect full compliance by Dec 2027 — confirmed (Figure 11, p.15)
- 39% don't know when they'll comply — confirmed (Figure 11, p.15)
- 86 average private forks — confirmed (p.14)
- 5,160 labor hours — confirmed (p.14; 86 forks × 60 hrs/fork)
- $258,000 USD cost estimate — confirmed (p.14; based on $50/hr median Stack Overflow rate)
- Large orgs (5,000+ employees): 11,152 hours per cycle — confirmed (Figure 10, p.15)
- 394% YoY CVE increase in Q1 2026 — confirmed (p.24)
- High-severity up 811% — confirmed (p.24)
- Critical-severity up 136% — confirmed (p.24)
- 14,204 projects in the CVE/vulnerability analysis (Figure 21) — DIFFERENT from 12,863 (security posture). These are two distinct datasets.
- Spearman correlation 0.57 (org diversity vs CLOMonitor Security score) — confirmed (Figure 20, p.21/23)

---

## Key accuracy issues resolved in final review session

**14,000+ vs 12,863 — two distinct datasets (HIGH, still present):**
- CRAResearchPage infographic alt text (social-12.png, line 360): "across 14,000+ open source projects"
- CRAResearchPage body text (lines 369–370): "analysis of 12,863 projects"
- These are NOT the same dataset. Per the PDF: 14,204 projects used for the CVE/vulnerability trend analysis (Figure 21, p.24); 12,863 projects used for the security posture/org diversity analysis (Figure 20, p.21/23).
- The alt text on social-12.png correctly references 14,000+ for the CVE finding.
- The body text correctly references 12,863 for the correlation/security posture finding.
- These are accurately differentiated in body text but a reader scanning only the alt text for social-12 and then the body paragraph below it could conflate the two datasets. No change strictly required if the infographic accurately depicts the 14,204-project dataset, but the juxtaposition warrants a note.

**Large-org hours figure:** The research page says "exceeds 11,000 hours." The PDF says 11,152 for orgs with 5,000+ employees. "Exceeds 11,000" is accurate and appropriately rounded.

**$258,000 USD derivation:** Based on $50/hr median (Stack Overflow survey). The site does not disclose the labor rate, which a skeptical reader will notice. The report footnotes it. Site text uses "estimated at" which is adequate hedging but no footnote to the methodology.

**Article 13 citation:** Accurate for manufacturer security maintenance obligation.

**"CRA Baseline for Manufacturers" / "CRA Baseline for Open Source Consumers":** Consistently described as "upcoming" across all pages. Correct as of publication date.

**"The Alpha is open now" (Meridian):** Present-tense claim. Must be verified as true at time of publish. Appears in CRAResearchPage (line 455) and CRAOpenSourcePage (line 437).

**"Revanite sponsors maintainers on each of them"** (CRAOpenSourcePage, line 174): Covers Gemara, OSPS Baseline, Privateer, OSPS Baseline Scanner, FINOS CCC, AGMM — six projects. Claim is broad; not verifiable from the page alone. Flagged as medium-priority for internal verification.

**BSI TR-03185-2 description** (CRAResourcesPage): Described as guidance "for industrial control systems." The actual document scope is broader — it covers secure software development processes generally under the CRA, not limited to ICS. This is an inaccurate characterization.

**GDPR cookie-banner analogy:** Editorial framing that implies a settled extraterritorial precedent. Defensible as analogy but the GDPR's enforcement geography is still contested in some jurisdictions. Low risk, medium precision.

**"GitHub's Most Influential Projects of 2025"** (CRAOpenSourcePage, line 248, re: OSPS Baseline): Unverified from the PDF or the page itself. Needs external confirmation before publish.

**Gemara third-party adoption claim** (CRAOpenSourcePage, lines 204–206): "publicly used by FINOS, OpenSSF, LFX Insights, Revanite's Privateer project, and Red Hat's ComplyTime project." Not verifiable from this site. Must be confirmed by Revanite engineering/partnerships before publish.

---

## Recurring patterns / watch-list for future reviews

- Team tendency to present Revanite-created projects as more broadly adopted than can be verified from public sources
- "Upcoming" is the correct hedge for CRA Baselines — do not allow this to drift to present tense
- The two project counts (12,863 and 14,204) will keep being confused — they are distinct datasets with distinct purposes; always check context
- Any new Meridian feature claim should be treated as future-as-present until confirmed live
