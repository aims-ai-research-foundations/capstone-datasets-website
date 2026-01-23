# Capstone Datasets Website

A static website for discovering and accessing curated datasets for AI Research Foundations capstone projects across Africa.

## Project Overview

This website supports the **Africa AI Upskilling Initiative**, providing students and AI Champions from Higher Educational Institutions (HEIs) in Nigeria, Ghana, Kenya, and South Africa with easy access to curated datasets for their capstone projects.

**Target Audience:**
- 146 AI Champions (lecturers)
- 146+ Teaching Assistants
- ~31,000 STEM Students

## Technology Stack

- **Framework:** Jekyll (static site generator)
- **Hosting:** GitHub Pages
- **Styling:** SCSS with responsive design
- **Search:** Client-side JavaScript

## Getting Started

### Prerequisites
- Ruby 3.0+
- Bundler

### Local Development

```bash
# Install dependencies
bundle install

# Run local server
bundle exec jekyll serve

# Open http://localhost:4000
```

### Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions.

## Documentation

- [PLAN.md](PLAN.md) - Comprehensive implementation plan
- [_data/datasets.yml](_data/datasets.yml) - Dataset catalog (coming soon)

## Project Structure

```
capstone-datasets-website/
├── _config.yml          # Jekyll configuration
├── _data/               # YAML data files
├── _includes/           # Reusable HTML components
├── _layouts/            # Page templates
├── _sass/               # Stylesheets
├── assets/              # Static assets (CSS, JS, images)
├── datasets/            # Individual dataset pages
├── courses/             # Course-specific pages
├── pages/               # Static pages
└── index.html           # Homepage
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on adding datasets and contributing to the website.

## Related Repositories

- [ai-foundations-datasets](https://github.com/Yassir-249/ai-foundations-datasets) - Dataset catalog with metadata
- [ai-research-foundations](https://github.com/Yassir-249/ai-research-foundations) - Course materials and resources

## License

MIT License - See [LICENSE](LICENSE) for details.

---

**Part of the Africa AI Upskilling Initiative**
