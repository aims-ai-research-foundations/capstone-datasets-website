---
layout: page
title: About
description: What this catalogue is, how datasets are chosen, and how to use it when supervising capstone projects
breadcrumb: true
---

## What this site is

Capstone Datasets is a curated catalogue of datasets for capstone projects in the **AI Research Foundations** programme. It is built for lecturers and teaching assistants at partner universities in Nigeria, Ghana, Kenya, and South Africa who supervise students through the programme's final project.

Finding a good dataset is often the hardest part of starting a capstone. This catalogue does that work in advance: every entry has been checked for open licensing, working access, and relevance to the African contexts students will be working in.

## How to use it

- **[Browse by course]({{ '/courses/' | relative_url }})** — every dataset is mapped to the courses it supports, so you can point students to data that matches where they are in the curriculum.
- **[Filter the catalogue]({{ '/datasets/' | relative_url }})** — by country, difficulty, or course, or search by language or task (try "Yoruba" or "sentiment").
- **Open a dataset page** — each has a Colab-ready quickstart snippet, project ideas at three difficulty levels, ethics notes, and a link to the canonical source.

## What makes a dataset suitable

Every dataset listed here meets five criteria:

1. **Clear license** — open enough for educational use
2. **Verified access** — the source links work and are publicly reachable
3. **Complete metadata** — languages, countries, tasks, size, and format documented
4. **Ethical review** — known biases and limitations stated on the card
5. **Course mapping** — aligned to at least one course in the curriculum

Responsible AI is part of the selection, not an afterthought. The ethics notes on each card are written to give you concrete discussion points for supervision — bias in web-crawled corpora, consent in speech data, representativeness of benchmarks.

## The capstone project

The capstone asks students to act as independent researchers: identify a tangible problem, curate data ethically, choose and train a model, align it, and make it deployable in real-world conditions. The programme encourages projects with impact in the African context:

| Area | Example applications |
|------|---------------------|
| **Low-resource language translation** | Models for Yoruba, Swahili, Twi — preserving cultural heritage |
| **Agricultural intelligence** | Crop yield prediction, plant disease identification |
| **Healthcare diagnostics** | Disease diagnosis optimised for mobile devices |
| **Climate resilience** | Weather prediction, flood risk analysis |
| **Financial inclusion** | Credit scoring for unbanked populations |
| **Education** | Personalised learning tools for African students |

## Data hosting policy

This website is a **catalogue, not a hosting service**. We link to canonical sources — Hugging Face, Zenodo, government portals, research repositories — so students always get the latest version, the original licence terms apply, and dataset creators receive proper attribution.

## Contact

- Open an issue on our [GitHub repository](https://github.com/aims-ai-research-foundations/capstone-datasets-website)
- Email the AIMS team at [ai-research-foundations@aims.ac.za](mailto:ai-research-foundations@aims.ac.za)

Site metadata, code, and documentation are MIT-licensed. Individual datasets carry their own licences, shown on each dataset page.
