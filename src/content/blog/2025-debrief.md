---
title: "2025 Retrospective from the Founder"
description: "Eddie Knight's look back at 2025: keynotes, the OSPS Baseline and Gemara in the OpenSSF, FINOS Common Cloud Controls and CALM, and what comes next for Revanite."
date: 2025-12-31     # the letter's own send date; first committed to the site 2026-01-04
updated: 2026-10-30  # notes on the January plans, Security Insights site, two moved links
authors: [eddie]
tags: [news, osps-baseline, gemara, cra]
aliases: [/2025-debrief]
---

![On stage for Keynote at KubeCon London](https://hs-243073831.f.hubspotstarter-na2.net/hub/243073831/hubfs/a1744057244303.png?upscale=true&width=1200&upscale=true&name=a1744057244303.png)

*Editor's note, October 30, 2026: the letter is unchanged apart from short updates on the plans it made for January (the FINOS lifecycle, Gemara v1, the Security Insights site) and two links that have moved.*

*This letter was sent out as a personal update from our Founder, Eddie Knight, on December 31, 2025. You can get a summary of this letter and navigate all of the reference material in "chat" format [here](https://notebooklm.google.com/notebook/741eb365-98c7-4809-b4f5-230c390871c2).*

This year it feels like I've had more open loops than the entire Marvel Cinematic Universe, and I owe a huge thanks to the folks who have pressed through to help close out some pretty sweet deliverables this year.

I've been honored with two major keynotes and several other speaking engagements, launched two major open source projects in the OpenSSF, revamped the FINOS project lifecycle, and developed new integrations for existing projects — among a lot of other things that happened in 2025.

As all these seemingly divergent efforts progress, we're drawing nearer to a flashpoint — which will become increasingly clear as I share detailed updates on each of the efforts below. The greater ecosystem is shifting in a unified direction that will unlock an evolution in GRC Engineering and Continuous Compliance Monitoring that has been isolated to theory for years.

## Supporting Projects at CNCF

This year has been an interesting one for my work in the CNCF, with several items to highlight:

-   Led by Brandt Keller, we managed to push the [*Automated Governance Maturity Model*](https://www.cncf.io/blog/2025/05/05/announcing-the-automated-governance-maturity-model/) across the finish line. It drew on learnings from authors in a variety of industries, and served as the inspiration for what would become the *Gemara* project (more on that below).
-   I flew to KubeCon in London to give a [keynote](https://www.youtube.com/watch?v=661OcBuwRq8) with Mike Lieberman at a conference with more than 10,000 people. We gave a high level walkthrough of the European Union's *Cyber Resilience Act*, focusing on understanding the different personas it impact, and why it's not as scary as it looks.
-   At the same event, I led four [*Security Slam*](https://www.cncf.io/reports/security-slam-2025/) workshops alongside maintainers from Flux, OpenTelemetry, Meshery, and OSCAL Compass. This was a successful pilot of the OSPS Baseline and the automation we would later integrate into LFX Insights — the official Linux Foundation tooling.
-   All Technical Advisory Groups were restructured by the TOC this year. During the reorg, I helped refine the governance documentation, and during the leadership shift I was able to transition from TAG Chair to Technical Lead. I was also asked to give a presentation on the updated structure in a [talk at KubeCon Atlanta](https://www.youtube.com/watch?v=661OcBuwRq8&t=59s)

## FINOS Leading Implementation

![Receiving the FINOS Award](https://hs-243073831.f.hubspotstarter-na2.net/hub/243073831/hubfs/finos-award-1.jpeg?upscale=true&width=520&upscale=true&name=finos-award-1.jpeg)

I'm thankful to FINOS for honoring me with the [*Outstanding Leadership Award*](https://www.linkedin.com/posts/finosfoundation_finos-opensource-osff2025-ugcPost-7389284562515791872-zjxn?rcm=ACoAAA74N58BpptYZTd082wJo44dpA81AQ_HT_w) this year!

If you're familiar with the Fintech Open Source Foundation, you'll know that this group of open source hooligans has near-mystical foresight regarding the best practices and technologies that are later adopted by the rest of the world.

As Chair of the FINOS [Technical Oversight Committee](https://www.finos.org/technical-oversight-committee) (TOC), and member of the [Governing Board](https://www.finos.org/governing-board), I've been able to observe and contribute to a swath of different initiatives, especially those related to the secure deployment of cloud and AI systems.

There are three big workstreams I'd like to highlight:

### FINOS Lifecycle Revamp

*The lifecycle is designed to help users easily determine which projects are appropriate for their use and to give maintainers a roadmap for progressing their projects.*

A bit of a pet project, but one I'm quite excited about… The FINOS project ecosystem has been operating for some time using the processes and standards that were written when the foundation was first initialized, with some ad hoc improvements over time.

After 12 months of deliberation and countless revisions, the TOC and FINOS Staff have produced new guidance for projects which reflect the modern state of the foundation and align it with reference structures such as the CNCF's project lifecycle and the OSPS Baseline. Now that all the documentation updates are wrapping up, you can expect a formal announcement in January! *(Update: FINOS [announced the updated lifecycle](https://www.finos.org/blog/updated-finos-project-lifecycle) on March 30, 2026.)*

### CCC Core Catalog

*FINOS [Common Cloud Controls](http://ccc.finos.org/) (FINOS CCC) is an open standard project that describes consistent controls for compliant public cloud deployments in the financial services sector.*

![ccc-1](https://hs-243073831.f.hubspotstarter-na2.net/hub/243073831/hubfs/ccc-1.png?upscale=true&width=600&upscale=true&name=ccc-1.png)

This project has been perpetually bogged down by re-work and a pursuit of perfection — but it can't be avoided due to the regulatory impact of the project on its end users.

After adoption of the Gemara schema to express the control catalogs, the CCC project was able to release a core set of reusable threats, control objectives, and assessment requirements which can be referenced to accelerate the creation of subsequent catalogs. (More about Gemara below)

There is still lots of *social* work to be done before the project can release service-specific control catalogs that are approved for use in financial services institutions, but a lot of great progress has already been made. It's already paid off by streamlining the integration of *assessment requirements* to validation projects such as [Prowler](https://prowler.com/) and [Privateer](https://privateerproj.com/), as well as in-house solutions demonstrated on stage by our friends at Hitachi.

Rob Moffat has done a phenomenal job coordinating all of these parallel workstreams to ensure consistent progress!

### CALM + CCC

*The [Common Architecture Language Model](http://calm.finos.org/) (CALM) is a specification for defining system architectures in a machine and human-readable format.*

It's been a year or so since Karl Moll and I had a design session theorizing the value of aligning these two FINOS projects, and this year it's started to become a reality.

CCC, which we discussed above, is a project dedicated to the standardization of cloud infrastructure — both compliance definitions and tools. Meanwhile, the CALM is an ecosystem of technologies related to the standardized expression of system architectures.

As CCC has contributed its philosophies and schemas to the Gemara project (more on that below), the integration points with CALM have become clear: All that's needed to harness the full value of both projects is to write your machine-readable architectures in CALM and then reference the identifiers for control objectives or assessment requirements for the respective services.

A huge credit is due to Matt Bain and Jim Gough for their ongoing work leading the CALM project and pursuing the integration with CCC this year.

## OpenSSF Leading Standardization

We have three standardization projects within the OpenSSF which are bridging the work done to support projects in the CNCF and the implementations in FINOS. The OpenSSF is a very unique organization, with a heavy emphasis on collaboration and community building, but it also has some amazing projects and standards that are helping raise the bar for open source security.

![](https://hs-243073831.f.hubspotstarter-na2.net/hub/243073831/hubfs/Screenshot%202025-12-31%20at%204.58.02%20PM.png?upscale=true&width=320&upscale=true&name=Screenshot%202025-12-31%20at%204.58.02%20PM.png)

I've been part of the OpenSSF community for a few years at this point, and I highly appreciate the [Golden Egg](https://openssf.org/press-release/2025/08/28/openssf-celebrates-global-momentum-ai-ml-security-initiatives-and-golden-egg-award-winners-at-community-day-europe/) recognition that was given at the Amsterdam OpenSSF Community Day!

As some of my work has progressed, we launched the [ORBIT Working Group](https://github.com/ossf/wg-orbit) to coordinate efforts among the "Interoperable" projects, such as these below.

### OSPS Baseline

*The Open Source Project Security Baseline is designed to act as a minimum definition of requirements for a project relative to its maturity level.*

![osps-baseline](https://hs-243073831.f.hubspotstarter-na2.net/hub/243073831/hubfs/osps-baseline.png?upscale=true&width=460&upscale=true&name=osps-baseline.png)

I had high hopes when the [idea for Baseline](https://www.sonatype.com/blog/behind-the-baseline-reflecting-on-the-launch-of-the-open-source-project-security-baseline) came to me last year, looking to create a security hygiene standard that could be used by FINOS, CNCF, and the OpenSSF. What I didn't expect was for some of the smartest [people](https://github.com/ossf/security-baseline/blob/main/governance/MAINTAINERS.md) in the OSS ecosystem to help elevate the quality of the project, or for the OpenSSF leadership team to rally around the project, bringing visibility to an international stage.

Here are a few times I was flown somewhere this year to talk about Baseline or its ecosystem:

-   VulnCon25. [Merging Security and Compliance: Perspectives on Emerging Regulations and Best Practices](https://www.youtube.com/watch?v=H-7CKqjRH14)
-   Open Source Summit EU. [Keynote: All Your Base Are Belong to Us](https://www.youtube.com/watch?v=rgztBgJY-as)
-   OpenSSF Community Day. [Keynote: Improving Security Data With ORBIT](https://www.youtube.com/watch?v=o3IlJcduG70)

Adolfo "Puerco" Garcia Veytia has had an especially poignant way of presenting the concept to audiences around the world, culminating in an [epic keynote](https://www.youtube.com/watch?v=OdGxWBK8Jpc) alongside Stacey Potter in Atlanta.

Following the official first release in February, the Baseline became part of the core project requirements for both OpenSSF and FINOS, and much more. It's been referenced in what feels like dozens of conference talks, it's the leading resource for the German government's [BSI-TR-03185-2](https://www.bsi.bund.de/dok/TR-03185-en), and — thanks to the scanner we built using Privateer — it's being used by the Linux Foundation's LFX Insights platform to determine the health of over 20,000 open source project repositories.

Baseline was also referenced by GitHub as one of the [Most Influential Projects of 2025](https://github.blog/open-source/maintainers/this-years-most-influential-open-source-projects/#open-source-project-security-baseline-ospsb-raising-the-bar)! If your project is hosted on that platform, use the [GitHub Action for OSPS Baseline](https://github.com/revanite-io/osps-baseline-action) to run the same scans as LFX insights in your own CI pipeline.

### Security Insights

*Security Insights provides a mechanism for projects to report information about their security in a machine-processable way.*

We've had our annual round of updates for the Security Insights Specification over the past week!

This year I've focused the SI updates on documentation improvements, instead of major schema changes. The adoption rate has increased now that it is a core part of the Privateer plugin adopted by LFX, and a repeated piece of feedback pertains to the need for more robust documentation surrounding the project.

![security-insights-logo](https://hs-243073831.f.hubspotstarter-na2.net/hub/243073831/hubfs/security-insights-logo.png?upscale=true&width=500&upscale=true&name=security-insights-logo.png)

As soon as folks return to the office following the New Year celebrations to push through the DNS changes, you'll see a lovely new site at [security-insights.openssf.org](https://security-insights.openssf.org/). *(Update: the site is live.)*

Users can also use the new form on LFX Insights for a guided creation process!

We'll also no longer ship a PDF alongside the git releases: I previously crafted that by hand in Google Drive, but now the CI will auto-generate the latest release docs to be published on the website.

### Gemara

*Gemara provides a logical model to describe the categories of compliance activities, how they interact, and the schemas to enable automated interoperability between them.*

This project has had a wild year. In January it was only a sliver of an idea coming from lessons learned while writing control catalogs for CCC and the Baseline.

![gemara-transparent](https://hs-243073831.f.hubspotstarter-na2.net/hub/243073831/hubfs/gemara-transparent.png?upscale=true&width=320&upscale=true&name=gemara-transparent.png)

With a lot of dedication from Jenn Power and Travis Truman, the project development moved faster than logistics could keep up. It was being used by both FINOS and OpenSSF before it even received its official name on May 26th.

Now we're nearing a v1 release in January! *(Update: [Gemara v1.0.0](https://github.com/gemaraproj/gemara/releases/tag/v1.0.0) was released on April 10, 2026.)* Project contributors Hannah Braswell and Sonu Preetam have made great contributions to help deliver a [documentation website](https://gemara.openssf.org/) for the project which includes an open source "Lexicon" of GRC terms and Architecture Decision Records to help elucidate the decisions that brought us to where we are today.

The Gemara schemas and SDK are now being publicly used by FINOS, OpenSSF, LFX Insights, Revanite's Privateer project, and Red Hat's ComplyTime project. It's also serving as the entire foundation for the things we're building at Revanite.

## Revanite

Pulling together all of the aforementioned learnings, technologies, and standards, Jason Meridth and I are crafting a completely new way for businesses to approach compliance and security topics. This is the flashpoint drawing near.

As part of our participation in the [Antler](https://www.antler.co/) program, we moved from hypothesis to gathering interest from more than 10 high profile enterprises. In fact, we've needed to start qualifying design partners to allow participation in our prototyping phase!

Throughout 2025 we battle-tested the theories and hardened the approaches by creating fully open-sourced and independent lifecycles for every element. In 2026 we expect to continue working with major design partners to help each build out hyper-resilient GRC Engineering and Policy-as-Code practices that become increasingly efficient as they scale.

With Gemara as the backbone for Policy-as-Code, FINOS CCC as the gateway to community-maintained control catalogs, and CALM as the critical intersection for engineering alignment, and demonstrated success through the massive LFX Insights + OSPS Baseline integration — the only step remaining is to roll out the Revanite automation platform.

### The Platform Prototype

![Screenshot 2025-12-31 at 5.25.43 PM](https://hs-243073831.f.hubspotstarter-na2.net/hub/243073831/hubfs/Screenshot%202025-12-31%20at%205.25.43%20PM.png?upscale=true&width=600&upscale=true&name=Screenshot%202025-12-31%20at%205.25.43%20PM.png)

Our new prototype supports GRC teams creation of machine-readable by aligning high-level guidelines and technology-specific objectives through to the configuration of security tools based on the relevant context.

Have you ever wondered how you can relate the [AI Governance Framework](https://air-governance-framework.finos.org/) to a security tool like [Sonatype Guide](https://www.sonatype.com/products/sonatype-guide)? We're constantly thinking about things like that — and asking how the solutions can be automated for organizations with anywhere from 10 to 10,000 developers.

We built Privateer as the "best in class" for Gemara-compatible evaluation tooling, and we can apply the same principles to integrate any tools that support Gemara structured data as inputs and outputs.

![Screenshot 2025-12-31 at 5.29.05 PM](https://hs-243073831.f.hubspotstarter-na2.net/hub/243073831/hubfs/Screenshot%202025-12-31%20at%205.29.05%20PM.png?upscale=true&width=600&upscale=true&name=Screenshot%202025-12-31%20at%205.29.05%20PM.png)

We're also working with our partners at [ControlPlane](https://control-plane.io/) to build out a GitOps-driven infrastructure and application deployment pipeline that can snap into your CALM+CCC ecosystem to reduce manual steps in change management.

When connected to the Privateer ecosystem and the secure-by-default IaC registry that we've primed with support from [Krumware](https://krum.io/), the Revanite Platform can enable GRC and security teams to define acceptance requirements, engineers to deploy pre-approved infrastructure, and application developers to ship fully compliant code to production without ever being forced to chase down control authors and schedule a meeting to figure out security and compliance requirements.

If this sounds interesting, send me an email to discuss pre-seed investment opportunities.

## Closing on a Personal Note

![Screenshot 2025-12-31 at 5.47.01 PM](https://hs-243073831.f.hubspotstarter-na2.net/hub/243073831/hubfs/Screenshot%202025-12-31%20at%205.47.01%20PM.png?upscale=true&width=360&upscale=true&name=Screenshot%202025-12-31%20at%205.47.01%20PM.png)

I can't express enough gratitude for all of the support this year. We've accomplished a ton of awesome stuff, and I've still been at home enough to watch my son hit some awesome reading, counting, and coordination milestones before he hit his third birthday.

On a good day, he can even write the first three letters of his name!

People I have immense respect and admiration for have joined me to look beyond the horizon and imagine a future where any firm — regardless of size or budget — can consistently secure their software to the world's highest standards.

At the same time, I've found reminders tucked in pockets weeks or months after I made a promise to send an email or open a PR. I realize that I have at times failed to follow-through on some "smaller" commitments this year. In spite of all the wins we've seen, I've still dropped the ball more times than I care to admit.

Please feel encouraged to reach out to me if you know of something I've neglected, so I can close out any open loops going into the new year.

![Screenshot 2025-12-31 at 5.48.12 PM](https://hs-243073831.f.hubspotstarter-na2.net/hub/243073831/hubfs/Screenshot%202025-12-31%20at%205.48.12%20PM.png?upscale=true&width=420&upscale=true&name=Screenshot%202025-12-31%20at%205.48.12%20PM.png)

I recently set restrictions on my public calendar, and limited the number of design partners for Revanite, but I need to tighten the belt even more.

In 2026, I'll bolster my personal boundaries by setting up a sort of "pay wall" for certain advisory activities that I've always been happy to provide — such as supporting the development of enterprise open source engagement plans or GRC Engineering strategies.

That doesn't impact any OSS maintainer support, of course. You can find a bit more about that on my new [personal site](https://eddieknight.dev/). My hope is that by limiting my number of commitments, I'll be able to continue providing high impact support in the places it's most needed.

Thanks for joining me in this wild debrief of 2025, and thanks for being a part of it all along the way. This has been a massive year, and it's well worth celebrating.

And as always… Remember to take a walk in nature, spend time with your family, and protect the things that matter most.

Godspeed my friends!

**Eddie Knight**
