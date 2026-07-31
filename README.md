# Are you donkey? — A Dunning-Kruger quizlet

A single-file web app that quizzes you on a topic, asks you to self-rate your own expertise *before* you see a single question, then plots your actual score against your self-rating on the Dunning-Kruger curve — so you can see exactly where you land: Mt. Stupid, the Valley of Despair, the Slope of Enlightenment, or the Plateau.

No backend, no database, no build step. It's one static HTML file with inline CSS/JS.

## How it works

1. Read a short explainer on what the Dunning-Kruger effect actually is, with a reference curve.
2. Pick a topic (14 available, each with its own icon).
3. Rate your own authority on it, 1–10, before you see any questions.
4. Take a 25-question multiple-choice quiz, 30 seconds per question with a live countdown bar. Each attempt draws a fresh, randomized set of 5 questions from each of 5 difficulty tiers (elementary → high school → undergraduate → graduate → postdoctoral), always presented in ascending difficulty. Answer order is shuffled too, so nothing can be memorized. Running out of time locks in whatever was selected (or nothing) and auto-advances.
5. Get plotted on the Dunning-Kruger curve, with a written verdict on the gap between your confidence and your actual score (negative gap = you underestimate yourself; positive gap = you overestimate), a confetti burst, a score-by-difficulty-tier breakdown, a list of specific insights (weakest tier, timeouts, calibration), and a concrete "what to do next" recommendation.
6. Optionally export the results screen as a PNG to share.

## Topics

14 topics, 100 questions each (1,400 total), each spanning elementary through postdoctoral difficulty, listed alphabetically in the app:

Astronomy · Business · Gaming · General Science · Geography · Internet Meme Culture · Law · Math & Statistics · Music Theory · Personal Finance · Photography · Popular Culture · Web Development · World History

## Local use

Just open `index.html` in a browser. That's it.

## Deploying

### GitHub

```bash
git init
git add .
git commit -m "Are you donkey? v3.0.0"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

### Zeabur

This is a plain static site (a single `index.html`, no `package.json`, no build step), so Zeabur's static-site detection picks it up automatically — connect the repo in the Zeabur dashboard and deploy. No configuration files are required.

If you'd rather serve it from a Node/static preset explicitly, any static file server pointed at this folder works too (e.g. `npx serve .`).

## Versioning and changelog

Release numbers follow a simple semver-style convention based on the size of the work shipped:

- **Major**: structural changes to the quiz format, new topic model changes, or large product shifts.
- **Minor**: new features, quality-of-life improvements, or additional content.
- **Patch**: fixes, wording updates, and smaller polish changes.

### Changelog

| Version | Type | Changes |
|---|---|---|
| **3.0.0** | Major | Rebranded to "Are you donkey? A Dunning Kruger quizlet". Added a 30-second per-question timer with a decreasing time bar and countdown, auto-advancing on timeout. Topics are now sorted alphabetically and each has a relevant icon. Removed the repetitive per-topic "25 of 100 · elementary → postdoc" label from each button and replaced it with a single format note above the topic grid. Added a "What is the Dunning-Kruger effect?" explainer with a reference curve on the homepage. Massively expanded the results page: a score-by-difficulty-tier breakdown, a generated insights list (weakest/strongest tier, timeouts, confidence calibration), and a zone-specific "what to do next" action tip. Added a "Share results" button that exports the results screen as a PNG (via html2canvas). Added a confetti animation on quiz completion. Added a "Special thanks to" section on the homepage citing Kruger & Dunning (1999) and other credits. Added a "Built by Thebooleanjulian" footer across the app. Fixed an answer-length "tell": on the 95 questions where the correct answer was more than 3.5x longer than every wrong option (mostly verbose "What is X?" definitions), the correct answer was rewritten to a shorter phrase of comparable length so it can no longer be guessed by eye. |
| **2.0.0** | Major | Added 10 new topics — Math & Statistics, Photography, Business, Geography, Astronomy, Law, Music Theory, Popular Culture, Internet Meme Culture, and Gaming — bringing the total to 14 topics and 1,400 questions. Packaged for GitHub/Zeabur deployment with this README. |
| **1.8.0** | Minor | Expanded every topic's question bank from 25 to 100 questions (20 per difficulty tier). Each quiz attempt now randomly samples 5 questions per tier (25 total) instead of using a fixed set, so repeat attempts vary. |
| **1.7.0** | Minor | Answer options are now shuffled per question, per attempt, so the correct answer's position can't be memorized. |
| **1.6.0** | Minor | Increased visibility of the topic name and raw score (for example, "18 / 25 correct") on the results page. |
| **1.5.0** | Minor | Gap stat is now color-coded: red for a positive gap (overestimate), green for a negative gap (underestimate). |
| **1.4.0** | Patch | Gap stat now displays with a `%` sign for consistency with the Actual Score and Self-Rated stats. |
| **1.3.0** | Patch | Added an explanatory note clarifying gap sign: negative = underestimate, positive = overestimate. |
| **1.2.0** | Minor | Expanded quiz length from 8 to 25 questions per topic, with difficulty spanning elementary to postdoctoral level. |
| **1.1.0** | Patch | Swapped the Dunning-Kruger curve's color gradient to red (low competence) → green (high competence) for more intuitive reading. |
| **1.0.0** | Major | Initial release: 4 topics (Science, History, Finance, Web Dev), 8 questions each, self-rating slider, and an SVG-plotted Dunning-Kruger curve with zone classification (Mt. Stupid, Valley of Despair, Slope of Enlightenment, Plateau). |

## Future roadmap

Suggested next steps and ideas for the project:

- Add user profiles and saved progress so repeated attempts can be tracked over time.
- Introduce custom topic packs, user-generated content, and import/export support.
- Improve accessibility, mobile polish, and offline support for a better experience on phones and tablets.
- Add further challenge modes such as difficulty filters and mastery-based progression.
- Grow the project with community contributions, translations, and new question sets.
- Continue auditing and rewriting distractor/correct-answer lengths — the most extreme cases were fixed in 3.0.0, but milder length imbalances remain across the question bank.

## License

This project is dual licensed.

- **Community Edition** — [GNU Affero General Public License v3 (AGPLv3)](LICENSE). Free to use, modify, and self-host. If you distribute a modified version or run it as a network service, you must make the corresponding source available.
- **Commercial License** — for organizations that want to embed, modify, or distribute this software without AGPLv3's obligations. See [COMMERCIAL-LICENSE.md](COMMERCIAL-LICENSE.md).

## Feedback

Found any bugs or have feedback? Submit them at this form: https://forms.gle/qRCimSyoosWyNwXdA

## Design system

Dark void background, teal (`#00D4C8`) and gold (`#F5C842`) accents, Space Grotesk + JetBrains Mono typography — consistent with the rest of the design system this was built to match.

## Notes on the questions

Each topic's 100-question bank is hand-written and spans five difficulty tiers (20 questions each): elementary, high school, undergraduate, graduate, and postdoctoral/highly specialized. The postdoctoral tier intentionally reaches into genuine academic subfield territory (e.g. Schenkerian analysis for Music Theory, the CAP theorem for Web Dev, subaltern studies for History) so the "postdoc" label is earned rather than decorative.

## Credits

See the "Special thanks to" section in the app itself, which cites Kruger & Dunning's original 1999 research and the third-party fonts/libraries used.
