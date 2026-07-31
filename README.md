<div align="center">

# Are You Donkey?

**A single-file Dunning-Kruger quizlet that plots your confidence vs. your actual score — so you can see exactly where you land.**

![Version](https://img.shields.io/badge/version-3.3.0-00D4C8)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black)
![HTML](https://img.shields.io/badge/-HTML-E34F26?logo=html5&logoColor=white)
![License](https://img.shields.io/badge/license-AGPLv3%20%2F%20Commercial-00D4C8.svg)

</div>

---

## What it does

Are You Donkey? quizzes you on a topic of your choice, but makes you self-rate your own expertise *before* you see a single question. After 25 multiple-choice questions — drawn from five difficulty tiers, elementary through postdoctoral — it plots your actual score against your self-rating on the Dunning-Kruger curve. The result tells you whether you're sitting on Mt. Stupid, descending into the Valley of Despair, climbing the Slope of Enlightenment, or settled on the Plateau. No backend, no build step, no install: it's a static HTML file and a plain JS question bank.

## Features

- **Pre-quiz self-rating (0–10)** before any questions are revealed, eliminating anchoring bias
- **14 topics**, 100 questions each (1,400 total): Astronomy, Business, Gaming, General Science, Geography, Internet Meme Culture, Law, Math & Statistics, Music Theory, Personal Finance, Photography, Popular Culture, Web Development, World History
- **Tiered difficulty** — 5 questions drawn randomly per tier (elementary → postdoctoral), always presented in ascending order; answer order shuffled on every attempt
- **30-second countdown timer** per question with a live progress bar; timeout auto-advances and locks in whatever was selected
- **Dunning-Kruger curve plot** with a written verdict, score-by-difficulty-tier breakdown, specific calibration insights (weakest tier, timeouts, confidence gap), and a "what to do next" recommendation
- **Confetti burst** on results
- **Export results as PNG** to share
- Zero dependencies, zero build step — open `index.html` in a browser and go

## Tech Stack

| Layer | Choice |
|---|---|
| Frontend | Single-file HTML (inline CSS + JS) + `questions.js` question bank |
| Hosting | Zeabur static site (auto-detected, no config required) |

## Quick Start

```bash
git clone https://github.com/TheBooleanJulian/are-you-donkey
cd are-you-donkey
# No install needed — open index.html directly in a browser
open index.html
```

`questions.js` must sit alongside `index.html` in the same folder (loaded via `<script src="questions.js">`).

To serve locally over HTTP instead:

```bash
npx serve .
```

## Project Structure

```
are-you-donkey/
|-- index.html                              # Entire app: markup, inline CSS, inline JS
|-- questions.js                            # Question bank — 1,400 questions across 14 topics
|-- scripts/check-answer-length.js          # Lints questions.js for the "longest answer wins" tell
|-- .github/workflows/question-bank-lint.yml # Runs the linter above on every push/PR that touches questions.js
|-- LICENSE
`-- COMMERCIAL-LICENSE.md
```

## Deployment

Static site deployed on Zeabur — connect the repo in the Zeabur dashboard and deploy. No `package.json`, no build step, no configuration files required; Zeabur's static-site detection picks it up automatically.

## Status / Roadmap

**Done**

- [x] 14 topics, 1,400 questions across five difficulty tiers
- [x] Pre-quiz self-rating (0–10) and Dunning-Kruger curve plotting
- [x] Per-question countdown timer with auto-advance on timeout
- [x] Results breakdown by difficulty tier, calibration insights, PNG export
- [x] Question bank extracted to standalone `questions.js` file
- [x] No question in the bank has a correct answer more than 1.1x longer than the longest wrong option — the "longest answer wins" tell is gone project-wide
- [x] Automated linting for the question bank (`scripts/check-answer-length.js`), wired into GitHub Actions to catch future answer-length regressions automatically on every push/PR

**Planned / Suggestions**

- No test coverage present — a simple sanity-check script to validate `questions.js` structure (question count per topic, required fields) would catch regressions
- Question bank is AI-generated and not independently fact-checked; a review or flagging mechanism would improve accuracy over time
- CI currently only lints answer-length balance — extending it to lint HTML/JS more broadly (formatting, duplicate option text) would be a low-effort quality gate
- Add user profiles and saved progress so repeated attempts can be tracked over time
- Introduce custom topic packs, user-generated content, and import/export support
- Improve mobile polish and add offline support (a manifest + service worker would make this installable as a PWA)
- Add a "drill my weak tier" mode that re-quizzes only the difficulty tier a user scored worst on
- Add a shareable results permalink (encode topic/score/confidence in a URL) as a lighter-weight alternative to the PNG export
- Accessibility pass: keyboard support for the confidence slider and timer, and screen-reader labeling for the SVG curve and countdown
- A results-scoped question ID or seed would make a specific quiz attempt reproducible for sharing/debugging
- Difficulty filters (e.g. postdoc-only mode) and mastery-based progression, as a lighter alternative to full retakes
- Translations of the UI and, longer-term, localized question banks
- Grow the project with community contributions and new question sets

## Changelog

Summarised from commit history and versioning notes, most recent first.

- **v3.3.0** — Finished the answer-length cleanup: the remaining 1,090 questions where the correct answer was more than 1.1x longer than the longest wrong option were fixed (correct answer tightened or a wrong option naturally elaborated, question by question). Added `scripts/check-answer-length.js`, a linter enforcing that ratio, and a GitHub Actions workflow that runs it on every push/PR touching `questions.js` so future question additions can't reintroduce the "longest answer wins" tell.
- **v3.2.0** — Further cleanup of the answer-length "tell": on the remaining 141 questions where the correct answer was ≥3x longer than every wrong option, the correct answer was shortened or a wrong option was lengthened (whichever kept the question most natural). No question with that large a length gap remains in the bank.
- **v3.1.0** — Extracted question bank from `index.html` into a standalone `questions.js` file; self-rating scale widened from 1–10 to 0–10 to allow a "never encountered it" floor; added attribution disclosing that questions were AI-generated by Claude (Anthropic) and haven't been independently fact-checked
- **v3.0.0** — Rebranded to "Are you donkey? A Dunning-Kruger quizlet"; added 30-second per-question countdown timer with live progress bar and auto-advance on timeout; topics sorted alphabetically with icons; full Dunning-Kruger curve plot, verdict, tier breakdown, and PNG export added
- **v2.0.0** — Added 10 new topics (Math & Statistics, Photography, Business, Geography, Astronomy, Law, Music Theory, Popular Culture, Internet Meme Culture, Gaming), bringing the total to 14 topics and 1,400 questions; packaged for GitHub/Zeabur deployment
- **v1.8.0** — Expanded every topic's question bank from 25 to 100 questions (20 per difficulty tier); each quiz attempt now randomly samples 5 questions per tier instead of using a fixed set, so repeat attempts vary
- **v1.7.0** — Answer options are now shuffled per question, per attempt, so the correct answer's position can't be memorized
- **v1.6.0** — Increased visibility of the topic name and raw score (e.g. "18 / 25 correct") on the results page
- **v1.5.0** — Gap stat is now color-coded: red for a positive gap (overestimate), green for a negative gap (underestimate)
- **v1.4.0** — Gap stat now displays with a `%` sign for consistency with the Actual Score and Self-Rated stats
- **v1.3.0** — Added an explanatory note clarifying gap sign: negative = underestimate, positive = overestimate
- **v1.2.0** — Expanded quiz length from 8 to 25 questions per topic, with difficulty spanning elementary to postdoctoral level
- **v1.1.0** — Swapped the Dunning-Kruger curve's color gradient to red (low competence) → green (high competence) for more intuitive reading
- **v1.0.0** — Initial release: 4 topics (Science, History, Finance, Web Dev), 8 questions each, self-rating slider, and an SVG-plotted Dunning-Kruger curve with zone classification (Mt. Stupid, Valley of Despair, Slope of Enlightenment, Plateau)

## License

This project is dual licensed.

- **Community Edition** — [GNU Affero General Public License v3 (AGPLv3)](LICENSE). Free to use, modify, and self-host. If you distribute a modified version or run it as a network service, you must make the corresponding source available.
- **Commercial License** — for organisations that want to embed, modify, or distribute this software without AGPLv3's obligations. See [COMMERCIAL-LICENSE.md](COMMERCIAL-LICENSE.md).

## Feedback

Found any bugs or got any feedback? Submit them at this form: https://forms.gle/qRCimSyoosWyNwXdA

---

<div align="center">
<sub>Built by <a href="https://github.com/TheBooleanJulian">@TheBooleanJulian</a></sub>
</div>