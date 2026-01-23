# Capstone Datasets Website - Comprehensive Plan

## Africa AI Upskilling Initiative
### Datasets Portal for Capstone Projects

---

## 1. Executive Summary

This document outlines the comprehensive plan for building a **Capstone Datasets Website** to support the Africa AI Upskilling Initiative. The website will serve as a centralized portal for AI Champions, Teaching Assistants, and students across **Nigeria, Ghana, Kenya, and South Africa** to discover, access, and utilize curated datasets for their capstone projects.

**Key Statistics from Project Overview:**
- **30 Higher Educational Institutions (HEIs)** across 4 countries
- **146 AI Champions** (lecturers)
- **~31,000 students** over the project lifecycle
- **7 courses** based on Google DeepMind's AI Research Foundations Curriculum

---

## 2. Website Purpose & Goals

### 2.1 Primary Purpose
Provide a user-friendly, accessible platform for discovering and accessing datasets specifically curated for capstone projects in the AI Research Foundations program.

### 2.2 Goals
1. **Centralize Dataset Discovery**: Single source of truth for all capstone-relevant datasets
2. **Enable Africa-Focused AI Research**: Prioritize datasets relevant to African contexts, languages, and challenges
3. **Support All Skill Levels**: From beginner-friendly to advanced research datasets
4. **Ensure Accessibility**: Work on low-bandwidth connections, mobile-friendly
5. **Facilitate Capstone Success**: Clear documentation, code snippets, and project ideas
6. **Build Community**: Showcase successful projects, enable sharing

---

## 3. Target Audience

### Primary Users
| User Type | Count | Needs |
|-----------|-------|-------|
| **AI Champions** (Lecturers) | 146 | Curated datasets for teaching, project supervision guidance |
| **Teaching Assistants** | 146+ | Quick-start materials, hands-on examples |
| **STEM Students** | ~31,000 | Easy-to-use datasets, clear instructions, project inspiration |

### Geographic Distribution
| Country | HEIs | AI Champions | Students |
|---------|------|--------------|----------|
| Nigeria | 10 | 50 | 11,836 |
| South Africa | 10 | 50 | 7,440 |
| Kenya | 6 | 30 | 6,617 |
| Ghana | 4 | 16 | 5,087 |

---

## 4. Content Architecture

### 4.1 Dataset Categories

Based on the 7-course curriculum structure:

```
datasets/
├── 01-build-slm/              # Course 1: Build Your Own Small Language Model
│   ├── text-corpora/
│   ├── tokenization-data/
│   └── language-model-benchmarks/
├── 02-represent-data/         # Course 2: Represent Your Language Data
│   ├── embeddings/
│   ├── vector-datasets/
│   └── multilingual-data/
├── 03-neural-networks/        # Course 3: Design and Train Neural Networks
│   ├── classification/
│   ├── regression/
│   └── image-data/
├── 04-transformer/            # Course 4: Assemble Your Transformer Architecture
│   ├── attention-benchmarks/
│   ├── sequence-to-sequence/
│   └── pretrained-models/
├── 05-finetune/               # Course 5: Finetune Your Model
│   ├── domain-specific/
│   ├── task-specific/
│   └── few-shot-learning/
├── 06-accelerate/             # Course 6: Accelerate Your Model
│   ├── optimization-benchmarks/
│   ├── quantization-data/
│   └── edge-deployment/
└── 07-capstone/               # Course 7: Capstone Projects
    ├── healthcare/
    ├── agriculture/
    ├── finance/
    ├── education/
    ├── climate/
    ├── governance/
    └── language-technology/
```

### 4.2 Africa-Focused Dataset Themes

| Theme | Description | Target Countries |
|-------|-------------|------------------|
| **African Languages NLP** | Swahili, Yoruba, Hausa, Amharic, Zulu, Igbo, Twi, etc. | All |
| **Healthcare** | Disease surveillance, maternal health, epidemic data | All |
| **Agriculture** | Crop yields, weather, soil data, market prices | NG, KE, GH |
| **Finance & Fintech** | Mobile money, financial inclusion, fraud detection | KE, NG |
| **Climate & Environment** | Carbon emissions, deforestation, water resources | All |
| **Education** | Literacy, enrollment, learning outcomes | All |
| **Urban Development** | Transportation, infrastructure, population | ZA, NG |
| **Governance** | Budget data, service delivery, elections | All |

---

## 5. Website Features

### 5.1 Core Features (MVP)

#### Homepage
- Hero section with project mission
- Quick stats (datasets, countries, categories)
- Featured datasets carousel
- Search bar with auto-complete
- Quick links to course-specific pages

#### Dataset Catalog
- Filterable grid/list view
- Filters: Country, Language, Task Type, Difficulty, License, Size
- Sort by: Popularity, Date Added, Name, Size
- Pagination or infinite scroll

#### Dataset Detail Page
- **Overview**: Description, source, license, last updated
- **Metadata**: Size, format, languages, countries, tasks
- **Quick Start**: Python/Colab code snippets
- **Download/Access**: Direct links, API endpoints, Hugging Face links
- **Citation**: BibTeX, APA formats
- **Related Datasets**: Recommendations
- **Project Ideas**: Suggested capstone applications
- **Ethical Considerations**: Bias, PII, limitations

#### Course Pages (7 pages)
- Course overview and learning objectives
- Recommended datasets for the course
- Sample exercises and mini-projects
- Links to course materials

#### Search
- Full-text search across all datasets
- Filter by multiple criteria
- Search history (local storage)

### 5.2 Enhanced Features (Phase 2)

#### Capstone Showcase
- Gallery of completed student projects
- Project submissions by HEI and country
- Voting/featuring system
- Success stories

#### User Contributions
- Dataset submission form
- Community-suggested datasets
- User reviews and ratings

#### Localization
- Multi-language support (English + French + Portuguese)
- Country-specific landing pages

#### Analytics Dashboard (Admin)
- Dataset download/view statistics
- Popular searches
- User engagement metrics

### 5.3 Accessibility Features
- Mobile-responsive design
- Low-bandwidth mode (text-only option)
- Offline capability (PWA)
- Screen reader compatibility
- High contrast mode

---

## 6. Technical Architecture

### 6.1 Technology Stack

**Frontend Framework:**
```
Option A (Recommended): Jekyll + GitHub Pages
- Native GitHub Pages support
- Simple, fast, low maintenance
- Markdown-based content
- Liquid templating
- No build pipeline needed

Option B: Hugo + GitHub Pages
- Faster build times for large sites
- More flexible templating
- Requires GitHub Actions for build

Option C: Next.js/Gatsby + GitHub Pages
- React-based, modern DX
- Static export capability
- More complex setup
```

**Recommendation: Jekyll** (simplest for GitHub Pages, easy for non-developers to contribute)

### 6.2 Repository Structure

```
capstone-datasets-website/
├── _config.yml                 # Jekyll configuration
├── _data/
│   ├── datasets.yml            # Dataset metadata (single source of truth)
│   ├── courses.yml             # Course information
│   ├── countries.yml           # Country-specific data
│   └── navigation.yml          # Site navigation
├── _includes/
│   ├── header.html
│   ├── footer.html
│   ├── dataset-card.html       # Reusable dataset card component
│   ├── search-box.html
│   └── filters.html
├── _layouts/
│   ├── default.html
│   ├── dataset.html            # Single dataset page layout
│   ├── course.html             # Course page layout
│   └── category.html           # Category listing layout
├── _sass/
│   ├── _variables.scss
│   ├── _base.scss
│   ├── _components.scss
│   └── _responsive.scss
├── assets/
│   ├── css/
│   │   └── main.scss
│   ├── js/
│   │   ├── search.js           # Client-side search
│   │   ├── filters.js          # Dataset filtering
│   │   └── clipboard.js        # Copy code snippets
│   └── images/
│       ├── logo.svg
│       ├── countries/
│       └── categories/
├── datasets/                    # Individual dataset pages (auto-generated)
│   ├── masakhaner-v2.md
│   ├── afrisenti.md
│   └── ...
├── courses/
│   ├── 01-build-slm.md
│   ├── 02-represent-data.md
│   └── ...
├── pages/
│   ├── about.md
│   ├── contribute.md
│   ├── showcase.md
│   └── search.html
├── index.html                   # Homepage
├── 404.html
├── Gemfile                      # Ruby dependencies
├── CNAME                        # Custom domain (optional)
└── README.md
```

### 6.3 Data Schema

**datasets.yml structure:**
```yaml
datasets:
  - id: masakhaner-v2
    name: "MasakhaNER 2.0"
    description: "Named entity recognition for 21 African languages"
    source_url: "https://huggingface.co/datasets/masakhane/masakhaner2"
    source_type: huggingface  # huggingface | zenodo | github | direct | api

    # Metadata
    languages:
      - swa  # Swahili
      - yor  # Yoruba
      - hau  # Hausa
      - amh  # Amharic
    countries:
      - KE
      - NG
      - GH
      - ZA
    tasks:
      - named-entity-recognition
      - sequence-labeling

    # Technical details
    size: "50MB"
    format: ["json", "conll"]
    license: "CC-BY-4.0"

    # Course mapping
    courses:
      - 02-represent-data
      - 05-finetune
      - 07-capstone

    # Difficulty and use
    difficulty: intermediate  # beginner | intermediate | advanced
    compute_requirements: low  # low | medium | high | gpu-required

    # Quick start
    quickstart: |
      from datasets import load_dataset
      dataset = load_dataset("masakhane/masakhaner2", "swa")
      print(dataset['train'][0])

    # Capstone ideas
    project_ideas:
      - "Build a Swahili news article NER system"
      - "Compare NER performance across African languages"
      - "Create a multilingual entity linking system"

    # Ethics
    ethical_considerations: |
      - Potential geographic bias towards certain regions
      - Entity categories may not cover all local contexts

    # Dates
    date_added: 2026-01-20
    last_verified: 2026-01-20

    # Stats (optional, for popularity)
    featured: true
    downloads: 1500
```

### 6.4 GitHub Pages Configuration

**.github/workflows/pages.yml** (for Jekyll):
```yaml
name: Deploy Jekyll site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: '3.2'
          bundler-cache: true
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Build with Jekyll
        run: bundle exec jekyll build
        env:
          JEKYLL_ENV: production
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

**Repository Settings Required:**
1. Go to Settings > Pages
2. Source: "GitHub Actions"
3. (Optional) Custom domain configuration

---

## 7. Design Requirements

### 7.1 Visual Identity

**Colors (Aligned with Africa AI Upskilling):**
```scss
$primary:        #1E40AF;  // Deep blue (trust, technology)
$secondary:      #059669;  // Green (growth, Africa)
$accent:         #F59E0B;  // Amber (energy, innovation)
$background:     #F8FAFC;  // Light gray
$text:           #1E293B;  // Dark slate
$text-secondary: #64748B;  // Medium gray

// Country accent colors
$nigeria:        #008751;  // Green
$south-africa:   #007A4D;  // Green
$kenya:          #BB0000;  // Red
$ghana:          #EF3340;  // Red
```

**Typography:**
```scss
$font-heading: 'Inter', sans-serif;
$font-body: 'Inter', sans-serif;
$font-code: 'JetBrains Mono', monospace;
```

### 7.2 UI Components

**Dataset Card:**
```
┌─────────────────────────────────────┐
│ [Icon] Dataset Name                 │
│ ───────────────────────────────────│
│ Short description of the dataset... │
│                                     │
│ 🏷️ NER  📊 50MB  ⚖️ CC-BY-4.0     │
│                                     │
│ 🌍 KE NG GH    🗣️ Swahili +20     │
│                                     │
│ [View Details]  [Quick Start]       │
└─────────────────────────────────────┘
```

**Filter Panel:**
```
┌─────────────────────────────────────┐
│ 🔍 Search datasets...               │
├─────────────────────────────────────┤
│ Country        ▼                    │
│ ☑ Nigeria  ☑ Kenya                 │
│ ☑ South Africa  ☑ Ghana            │
├─────────────────────────────────────┤
│ Task Type      ▼                    │
│ ☐ NER  ☐ Sentiment  ☐ Translation  │
├─────────────────────────────────────┤
│ Difficulty     ▼                    │
│ ○ All  ○ Beginner  ○ Intermediate  │
├─────────────────────────────────────┤
│ Course         ▼                    │
│ ☐ Course 1  ☐ Course 2  ...        │
└─────────────────────────────────────┘
```

### 7.3 Responsive Breakpoints
```scss
$mobile:  480px;
$tablet:  768px;
$desktop: 1024px;
$wide:    1280px;
```

---

## 8. Content Strategy

### 8.1 Initial Dataset Curation

**Phase 1 Launch (20-30 datasets):**

| Category | Datasets | Priority |
|----------|----------|----------|
| African Languages NLP | MasakhaNER, AfriSenti, MAFAND, AfroXLMR | High |
| Tabular/Structured | World Bank Africa, WHO Africa, AfroBarometer | High |
| Text Corpora | Wikipedia (African langs), News corpora | High |
| Agriculture | FAO Africa, FEWS NET | Medium |
| Health | DHIS2, WHO Disease Data | Medium |
| Climate | Africa Climate Data | Medium |

**Phase 2 Expansion (50+ datasets):**
- User-contributed datasets
- HEI-specific local datasets
- Capstone project outputs

### 8.2 Dataset Quality Criteria

Each dataset must have:
- [ ] Clear license allowing educational use
- [ ] Verified working download/access link
- [ ] Complete metadata (languages, countries, tasks)
- [ ] Working code snippet (tested in Colab)
- [ ] Ethical considerations documented
- [ ] Mapped to at least one course

### 8.3 Content Update Process

1. **Weekly**: Verify all external links
2. **Monthly**: Add new featured datasets
3. **Quarterly**: Review and update all dataset cards
4. **Ongoing**: Process community submissions

---

## 9. Implementation Phases

### Phase 1: Foundation (Weeks 1-2)
- [x] Create GitHub repository
- [ ] Set up Jekyll project structure
- [ ] Configure GitHub Pages deployment
- [ ] Design and implement base templates
- [ ] Create responsive CSS framework
- [ ] Build homepage layout
- [ ] Implement dataset card component

### Phase 2: Core Features (Weeks 3-4)
- [ ] Build dataset catalog page with filtering
- [ ] Create dataset detail page template
- [ ] Implement client-side search
- [ ] Add 7 course pages
- [ ] Populate initial 20 datasets
- [ ] Test on mobile devices
- [ ] Accessibility audit

### Phase 3: Content & Polish (Weeks 5-6)
- [ ] Complete all dataset cards
- [ ] Write about/contribute pages
- [ ] Add project ideas to each dataset
- [ ] Create quick-start Colab notebooks
- [ ] SEO optimization
- [ ] Performance optimization
- [ ] Cross-browser testing

### Phase 4: Launch & Iterate (Weeks 7-8)
- [ ] Beta testing with AI Champions
- [ ] Gather feedback
- [ ] Bug fixes and improvements
- [ ] Official launch
- [ ] Documentation for contributors
- [ ] Analytics setup

### Future Phases
- Capstone showcase gallery
- User accounts and contributions
- Multi-language support
- Offline PWA mode

---

## 10. Integration with Existing Resources

### 10.1 Link to ai-foundations-datasets Repository
- Website pulls dataset metadata from existing `manifest.yaml`
- Sync mechanism to keep data consistent
- Website serves as user-friendly frontend

### 10.2 Course Material Integration
- Links to Google Cloud Skills Boost
- References to lecture toolkit materials
- Alignment with curriculum learning objectives

### 10.3 HEI Portal Integration
- Embed widgets for HEI websites
- API for dataset information
- White-label options per institution

---

## 11. Success Metrics

### 11.1 Usage Metrics
| Metric | Target (6 months) |
|--------|-------------------|
| Monthly unique visitors | 5,000+ |
| Dataset page views | 50,000+ |
| Code snippet copies | 10,000+ |
| Average session duration | 3+ minutes |

### 11.2 Engagement Metrics
| Metric | Target |
|--------|--------|
| Datasets with 5+ projects | 80% |
| Student project submissions | 500+ |
| Community dataset contributions | 20+ |

### 11.3 Quality Metrics
| Metric | Target |
|--------|--------|
| Broken links | <1% |
| Page load time | <3 seconds |
| Mobile usability score | 90+ |
| Accessibility score | 95+ |

---

## 12. Maintenance Plan

### 12.1 Roles
| Role | Responsibility |
|------|---------------|
| **Content Manager** | Dataset curation, quality control |
| **Technical Lead** | Infrastructure, deployments |
| **Community Manager** | User submissions, showcase |

### 12.2 Regular Tasks
- **Daily**: Monitor site uptime
- **Weekly**: Check external links, review submissions
- **Monthly**: Add new datasets, update featured content
- **Quarterly**: Major updates, new features

### 12.3 Backup & Recovery
- GitHub repository serves as backup
- GitHub Actions for automated deployments
- No external database dependencies (static site)

---

## 13. Risk Mitigation

| Risk | Mitigation |
|------|------------|
| External dataset links break | Weekly link checking, cache critical metadata |
| Low user adoption | Partner with AI Champions for promotion |
| Content becomes outdated | Automated freshness checks, community contributions |
| Performance issues | Static site architecture, CDN via GitHub Pages |
| Accessibility barriers | Regular audits, low-bandwidth mode |

---

## 14. Budget Considerations

**GitHub Pages (Pro Account):**
- Hosting: Free (included with GitHub Pro)
- Custom domain: Free (if using github.io subdomain)
- SSL: Free (automatic)
- Bandwidth: 100GB/month soft limit
- Build minutes: 3,000/month (ample for Jekyll)

**Additional Costs (Optional):**
| Item | Cost | Notes |
|------|------|-------|
| Custom domain | ~$12/year | Optional, .org or .africa |
| Analytics | Free | Google Analytics or Plausible |
| CDN upgrade | ~$20/month | Only if traffic exceeds limits |

---

## 15. Next Steps

### Immediate Actions
1. **Approve this plan** - Review and confirm approach
2. **Set up Jekyll project** - Initialize repository structure
3. **Design mockups** - Create visual designs for key pages
4. **Curate initial datasets** - Select 20-30 priority datasets
5. **Assign roles** - Identify content and technical owners

### Decision Points
- [ ] Confirm Jekyll as framework choice
- [ ] Decide on custom domain (e.g., datasets.africaai.org)
- [ ] Approve visual design direction
- [ ] Set launch target date

---

## Appendix A: Sample Dataset Entry

```yaml
- id: masakhaner-v2
  name: "MasakhaNER 2.0"
  tagline: "Named Entity Recognition for 21 African Languages"
  description: |
    MasakhaNER 2.0 is a named entity recognition (NER) dataset covering 21 African
    languages. It includes annotations for Person (PER), Organization (ORG), Location (LOC),
    and Date (DATE) entities. The dataset was created by the Masakhane community and
    represents a significant resource for African language NLP research.

  source:
    url: "https://huggingface.co/datasets/masakhane/masakhaner2"
    type: huggingface
    paper: "https://arxiv.org/abs/2210.12391"

  metadata:
    languages: [amh, hau, ibo, kin, lug, luo, mos, nya, pcm, sna, swa, tsn, twi, wol, xho, yor, zul, bam, bbj, ewe, fon]
    countries: [ET, NG, RW, UG, MW, MZ, KE, ZA, BW, GH, SN, ZW, BJ, CM, ML]
    tasks: [named-entity-recognition, sequence-labeling, token-classification]
    size: "~50MB"
    format: [json, conll]
    samples: 100000
    license: CC-BY-4.0

  technical:
    difficulty: intermediate
    compute: low
    colab_friendly: true

  courses:
    primary: [02-represent-data, 05-finetune]
    secondary: [07-capstone]

  quickstart:
    python: |
      from datasets import load_dataset

      # Load Swahili subset
      dataset = load_dataset("masakhane/masakhaner2", "swa")

      # View a sample
      print(dataset['train'][0])

      # Output:
      # {'tokens': ['Waziri', 'wa', 'Elimu', ...],
      #  'ner_tags': [1, 0, 0, ...]}

  project_ideas:
    - title: "Multilingual NER System"
      description: "Build a system that can recognize entities across multiple African languages"
      difficulty: intermediate

    - title: "News Article Information Extraction"
      description: "Extract key entities from African news articles for summarization"
      difficulty: beginner

    - title: "Cross-lingual Transfer Learning"
      description: "Study how NER knowledge transfers between related African languages"
      difficulty: advanced

  ethics:
    considerations:
      - "Geographic bias towards certain regions with more annotators"
      - "Entity categories based on Western NER conventions"
      - "Some languages have fewer samples than others"
    pii_risk: low
    bias_notes: "Performance varies significantly across languages"

  related_datasets:
    - masakhaner-v1
    - wikiann
    - afrisenti

  dates:
    added: 2026-01-20
    updated: 2026-01-20
    verified: 2026-01-20

  featured: true
  downloads: 1523
```

---

## Appendix B: Page Wireframes

### Homepage Wireframe
```
┌──────────────────────────────────────────────────────────────┐
│  [Logo]  Datasets   Courses   Showcase   About    [Search]   │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│     CAPSTONE DATASETS                                        │
│     Curated datasets for AI Research Foundations             │
│     capstone projects across Africa                          │
│                                                              │
│     [Browse Datasets]  [View by Course]                      │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│  📊 45 Datasets  │  🌍 4 Countries  │  🏫 30 HEIs           │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  FEATURED DATASETS                                           │
│  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐            │
│  │ Card 1 │  │ Card 2 │  │ Card 3 │  │ Card 4 │            │
│  └────────┘  └────────┘  └────────┘  └────────┘            │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  BROWSE BY COURSE                                            │
│  ┌─────────────────────────────────────────────────────────┐│
│  │ 01 │ Build Your Own Small Language Model    │ 8 datasets ││
│  ├─────────────────────────────────────────────────────────┤│
│  │ 02 │ Represent Your Language Data           │ 12 datasets││
│  ├─────────────────────────────────────────────────────────┤│
│  │ ...                                                     ││
│  └─────────────────────────────────────────────────────────┘│
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  BROWSE BY COUNTRY                                           │
│  [🇳🇬 Nigeria]  [🇿🇦 South Africa]  [🇰🇪 Kenya]  [🇬🇭 Ghana]  │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│  Footer: Links | Contact | License | Powered by AIMS/FATE   │
└──────────────────────────────────────────────────────────────┘
```

### Dataset Catalog Wireframe
```
┌──────────────────────────────────────────────────────────────┐
│  [Logo]  Datasets   Courses   Showcase   About    [Search]   │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  DATASET CATALOG                          45 datasets found  │
│                                                              │
├─────────────────┬────────────────────────────────────────────┤
│                 │                                            │
│  FILTERS        │  [Sort: Most Recent ▼]                    │
│                 │                                            │
│  🔍 Search...   │  ┌────────────┐  ┌────────────┐           │
│                 │  │ Dataset 1  │  │ Dataset 2  │           │
│  Country ▼      │  │            │  │            │           │
│  ☑ Nigeria     │  │ NER 50MB   │  │ Sent 20MB  │           │
│  ☑ Kenya       │  └────────────┘  └────────────┘           │
│  ☐ S. Africa   │                                            │
│  ☐ Ghana       │  ┌────────────┐  ┌────────────┐           │
│                 │  │ Dataset 3  │  │ Dataset 4  │           │
│  Task ▼         │  │            │  │            │           │
│  ☑ NER         │  └────────────┘  └────────────┘           │
│  ☐ Sentiment   │                                            │
│  ☐ Translation │  ┌────────────┐  ┌────────────┐           │
│                 │  │ Dataset 5  │  │ Dataset 6  │           │
│  Difficulty ▼   │  └────────────┘  └────────────┘           │
│  ○ All          │                                            │
│  ○ Beginner     │  [Load More...]                           │
│  ○ Intermediate │                                            │
│  ○ Advanced     │                                            │
│                 │                                            │
│  Course ▼       │                                            │
│  ☐ Course 1    │                                            │
│  ☐ Course 2    │                                            │
│                 │                                            │
│  [Clear All]    │                                            │
│                 │                                            │
└─────────────────┴────────────────────────────────────────────┘
```

---

## Appendix C: GitHub Pages Setup Checklist

### Initial Setup
- [ ] Enable GitHub Pages in repository settings
- [ ] Select "GitHub Actions" as source
- [ ] Add `.github/workflows/pages.yml` workflow file
- [ ] Add `Gemfile` with Jekyll dependencies
- [ ] Add `_config.yml` with site configuration

### Configuration (_config.yml)
```yaml
title: "Capstone Datasets"
description: "Curated datasets for AI Research Foundations capstone projects"
url: "https://yassir-249.github.io"
baseurl: "/capstone-datasets-website"

# Build settings
theme: minima  # Or custom theme
plugins:
  - jekyll-feed
  - jekyll-seo-tag
  - jekyll-sitemap

# Collections
collections:
  datasets:
    output: true
    permalink: /datasets/:name/

# Defaults
defaults:
  - scope:
      path: ""
      type: "datasets"
    values:
      layout: "dataset"

# Exclude from build
exclude:
  - Gemfile
  - Gemfile.lock
  - node_modules
  - vendor
  - PLAN.md
```

### Custom Domain (Optional)
1. Add `CNAME` file with domain name
2. Configure DNS:
   - A records pointing to GitHub Pages IPs
   - Or CNAME record for subdomain
3. Enable "Enforce HTTPS" in settings

---

**Document Version:** 1.0
**Created:** January 23, 2026
**Author:** AI Research Foundations Team
**Status:** Draft - Pending Approval
