# Anjana Sivanandan

**Software Engineer & Independent Researcher** · Singapore

I build high-throughput financial systems by day and chase open questions in
quantum machine learning and quantum search algorithms in my own time. My
background spans compiler engineering, distributed systems, and applied
research - with a Gold Award-winning research project, a TechRxiv preprint,
and ongoing independent work toward journal publication.

**Right now:** building mission-critical transaction infrastructure at
Singapore's Land Transport Authority, and researching quantum-classical
hybrid models for music information retrieval and entropy-aware encodings
for Grover's search.

- Email: [anjana@sivanandan.com](anjana@sivanandan.com)
- LinkedIn: [linkedin.com/in/AnjanaSi](https://linkedin.com/in/AnjanaSi)
- GitHub: [github.com/SAnjana](https://github.com/SAnjana)
- ORCID: [0009-0004-4081-9472](https://orcid.org/0009-0004-4081-9472)

> The full site - timeline, research, publications, skills, and awards -
> normally lives at [anjana.sivanandan.com](https://anjana.sivanandan.com).
> This section is a fallback: if a deploy is ever broken, the essentials
> still read fine here on GitHub.

## Timeline

-- **Software Engineer → Senior Software Engineer**, Land Transport Authority,
  Singapore (Jan 2024 - present) - transforming a high-frequency financial
  TPS backend handling over S$2B/year.
- **Entropy-Aware Encoding for Quantum Search**, independent research
  (Dec 2025 - present) - Huffman-inspired encoding as a probabilistic prior
  for Grover's search.
- **Quantum Music Information Retrieval**, independent research
  (Nov 2025 - present) - classical/quantum ML on song popularity; manuscript
  in preparation for the ICTer Journal.
- **PG Certificate in Big Data Analytics**, Robert Gordon University, UK
  (2021 – 2024).
- **Systems Analyst, Site Reliability Engineering**, Central Provident Fund
  Board, Singapore (Aug 2023 – Dec 2023).
- **Software Engineer — Compilers**, WSO2, Sri Lanka (Mar 2020 – Jun 2023) —
  core contributor to the open-source Ballerina language compiler.
- **Academic Research Intern**, University of Colombo School of Computing
  (Sep 2018 – Feb 2019) — Gold Award, National ICT Awards Sri Lanka (2021).
- **BSc (Hons.) in Computer Science**, University of Colombo School of
  Computing (2016 – 2020).

## Publications

-- *A Consortium Lending System with Open Banking for Retail Loans* -
  [TechRxiv preprint](https://doi.org/10.36227/techrxiv.176784333.38716895/v1)
  (2026)
- *Popularity Analysis of Songs Using Acoustic Features via Classical and
  Quantum Machine Learning* — manuscript in preparation, ICTer Journal
- *Collaborative Lending With Open Banking and Smart Contracts* — InnovBank
  2020 (Bronze Award)

## Awards & honours

Gold Award, National ICT Awards (NBQSA) Sri Lanka (2020) · Bronze Award,
InnovBank International Symposium of Innovative Banking (2020) · Winner,
"LetMeHack" Inter-University API Development Hackathon (2018) · Award
Winner, University of Colombo Best Software Product Competition (2018)

---

## Development

This repo is the source for the site above: Next.js (App Router, static
export), TypeScript, and Tailwind CSS, deployed to GitHub Pages via GitHub
Actions on every push to `main`.

### Structure

- `src/lib/data.ts` — all site content (profile, timeline, research,
  publications, awards, skills). Edit this file to update what's shown on
  the site **and** re-sync the fallback sections above.
- `src/components/` — one component per section (hero, about, timeline,
  research, skills, awards, header, footer).
- `src/app/` — root layout (fonts, metadata, theme init script) and the
  single page that assembles the sections.
- `public/images/` — hero illustration, avatar crops, and the Open Graph
  card, generated from `Ref-Docs/Anj-Img.png` via
  `scripts/generate-brand-assets.py`.

### Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

### Building

```bash
npm run build
```

Produces a static export in `out/` (`output: "export"` in `next.config.ts`).

If `npm ci` ever fails in CI with an out-of-sync lockfile error, run
`npm install` locally (regenerates `package-lock.json`) and commit the
updated lockfile.

### Deployment

`.github/workflows/deploy.yml` builds the site and publishes `out/` to
GitHub Pages using `actions/deploy-pages`. This requires the repository's
**Settings → Pages → Source** to be set to **GitHub Actions** (one-time
setup). The custom domain is preserved via `public/CNAME`, which is copied
into the export automatically.

### Regenerating brand assets

If the source photo/illustration changes, regenerate the favicon, avatar
crops, and Open Graph image:

```bash
python3 scripts/generate-brand-assets.py
```

Requires Pillow (`pip install pillow`) and expects the source image at
`../Ref-Docs/Anj-Img.png` relative to this repo.
