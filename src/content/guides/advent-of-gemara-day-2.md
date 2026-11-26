---
title: "December 2: CUE, YAML and JSON"
description: "The spec is written in CUE: definitions, required and optional fields, defaults and constraints. Users write YAML or JSON, and cue vet checks it against the definitions."
layout: explainer
date: 2026-12-02
authors: [revanite]
tags: [gemara, osps-baseline]
image: /images/advent-of-gemara.png
series: advent-of-gemara
day: 2
---

## Lesson

If you click over to the Gemara specification repo on GitHub, you’ll see a scattering of `.cue` files. These use CUE, a relatively new way to write specifications, which is similar to JSON Schema.

The Gemara project chose to adopt CUE for our specification because it works more natively with the Go ecosystem. CUE provides a command line interface that lets us export Go types to ensure that the `go-gemara` SDK remains closely coupled to the specification.

The CUE CLI also lets us publish the specification to the cue registry, where it can be used in verification without need for users to clone the source repo. Similar to any alternative we could have chosen, writing constraints into the specification makes the source hard to read and understand at times. To make things simpler, the Gemara project programatically converts the specification into pages on the project website.

As we hinted to on the previous page, there are a series of artifact types in the spec.

| Layer | Artifact type |
| -- | -- |
| Layer 1 | Guidance Catalog |
| Layer 1 | Vector Catalog |
| Layer 1 | Principle Catalog |
| Layer 2 | Capability Catalog |
| Layer 2 | Threat Catalog |
| Layer 2 | Control Catalog |
| Layer 3 | Risk Catalog |
| Layer 3 | Policy |
| Layer 5 | Evaluation Log |
| Layer 6 | Enforcement Log |
| Layer 7 | Audit Log |
| Any layer | Lexicon |
| Any layer | Mapping Document |

Every type in the table belongs to a layer except the last two. Layer 4 has no artifact of its own, because it’s the sensitive activity itself: the thing the other layers describe and measure. Lexicons and mapping documents can be used at any layer, to define terms and to connect one artifact to another.

Each type is defined in its own `.cue` file, and the top of each file marks its status as stable or experimental. The audit log we discussed yesterday is still experimental, for example, while capability, threat and control catalogs and evaluation logs are stable.

### Writing YAML and JSON

You never have to write CUE to use Gemara. You write YAML or JSON, and CUE checks it against the definitions.

Here’s where recommendations live inside an audit log, written in YAML. Each item in that list is one #Recommendation:

```yaml
recommendations:
  - id: REC-01
    text: Require signed commits on all release branches.
    required: true
```

And here’s the same thing in JSON:

```json
{
  "recommendations": [{
    "id": "REC-01",
    "text": "Require signed commits on all release branches.",
    "required": true
  }]
}
```

### Checking with cue vet

Now, you’re not gonna check a single recommendation on its own. You’ll check the whole file it lives in. Once you’ve installed CUE v0.15.1 or later, run `cue vet` with the definition for the whole document, plus your file:

```yaml vet=#AuditLog
metadata:
  id: strimzi-osps-audit-2026-12
  type: AuditLog
  gemara-version: v1.6.0
  version: 1.0.0
  date: 2026-12-02T09:00:00Z
  description: Audit of strimzi-kafka-operator against the OSPS Baseline at maturity level 2.
  author:
    id: advent-auditor
    name: Advent Auditor
    type: Human
  mapping-references:
    - id: osps-baseline-2026-08
      title: Open Source Project Security Baseline
      version: 2026-08
    - id: strimzi-evaluation
      title: Privateer evaluation of strimzi-kafka-operator
      version: 1.3.1-20261125T123436Z
      url: https://grc.store/strimzi/strimzi-kafka-operator-osps-baseline-2026-08/versions/1.3.1-20261125T123436Z
target:
  id: strimzi/strimzi-kafka-operator
  name: strimzi/strimzi-kafka-operator
  type: Software
  version: 1.3.1
summary: Most maturity level 2 requirements pass. Secret scanning and required status checks could not be confirmed and need follow-up.
criteria:
  - reference-id: osps-baseline-2026-08
results:
  - id: RES-01
    title: Secret scanning could not be confirmed
    type: Observation
    description: The evaluator could not observe secret scanning with its token, and the project does not declare it in Security Insights.
    criteria-reference:
      reference-id: osps-baseline-2026-08
      entries:
        - reference-id: OSPS-BR-07.01
    evidence:
      - id: EV-01
        type: EvaluationLog
        collected-at: 2026-11-25T12:35:11Z
        source:
          reference-id: strimzi-evaluation
          entry-id: OSPS-BR-07.01
    recommendations:
      - id: REC-01
        text: Declare secret scanning in the project's Security Insights file, or give the evaluator a token that can read it.
        required: true
```

<a href="/advent-of-gemara/audit.yaml" download>Download `audit.yaml`</a>

```sh
cue vet -c -d '#AuditLog' github.com/gemaraproj/gemara@latest audit.yaml
```

The `-d` flag names the definition, and `github.com/gemaraproj/gemara@latest` pulls the spec from the CUE registry, so you don’t need to clone the repo. If the file is valid, `cue vet` prints nothing. If it isn’t, it tells you which field failed and why.

To see what CUE fills in for you, run `cue export` with the same arguments and `--out yaml`. A recommendation that leaves out `required` comes back with `required: false`.

## Challenge

An auditor reviewed strimzi-kafka-operator against the OSPS Baseline and wrote up the results as an audit log. When they ran `cue vet` on it before publishing, it was rejected.

Their evidence is real: [Privateer’s evaluation of strimzi-kafka-operator](https://grc.store/strimzi/strimzi-kafka-operator-osps-baseline-2026-08/versions/1.3.1-20261125T123436Z), published on [grc.store](https://grc.store). <a href="/advent-of-gemara/rejected-audit.yaml" download>Download `rejected-audit.yaml`</a> and check it against the audit log definition:

```sh
cue vet -c -d '#AuditLog' github.com/gemaraproj/gemara@latest rejected-audit.yaml
```

### Part 1

Fix the audit log until `cue vet` prints nothing. Some errors only show up once the ones in front of them are fixed, so keep running it.

### Part 2

The evaluation log marks some requirements as Needs Review, which means a person has to look at them before anyone can call them passed or failed. The auditor wrote up some of those, but not all. Open the evaluation log on [grc.store](https://grc.store) and compare it with the audit. How many requirements marked Needs Review does the audit not cover yet?

<form data-answer="4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a" class="not-prose mt-6 flex max-w-md flex-wrap items-center gap-3">
  <label for="day-2-answer" class="w-full text-sm font-semibold">Your answer</label>
  <input id="day-2-answer" name="answer" inputmode="numeric" autocomplete="off" required class="flex-1 rounded-lg border border-[var(--color-line-strong)] bg-[var(--color-bg)] px-3 py-2" />
  <button type="submit" class="rounded-lg bg-[var(--color-accent)] px-4 py-2 font-semibold text-[var(--color-accent-fg)] hover:opacity-90">Check</button>
  <p role="status" aria-live="polite" class="w-full text-sm text-[var(--color-muted)]"></p>
</form>
