---
layout: dataset
id: "flores-200"
name: "FLORES-200"
tagline: "Professional Translations for 200 Languages"
description: |
  A many-to-many evaluation dataset covering 200 languages with professional translations.
  Gold standard for evaluating embeddings and alignment quality.
source_url: "https://huggingface.co/datasets/facebook/flores"
source_type: "huggingface"
paper_url: "https://arxiv.org/abs/2207.04672"
languages:
  - { code: "multi", name: "20+ African languages including Dinka, Nuer, Kanuri" }
countries: ["Pan-African"]
tasks: ["translation-evaluation", "embeddings", "alignment"]
size: "3,001 sentences per language"
format: ["JSON"]
license: "CC-BY-SA 4.0"
difficulty: "intermediate"
compute: "low"
colab_friendly: true
courses: ["02-represent-data"]
quickstart: |
  from datasets import load_dataset

  dataset = load_dataset("facebook/flores", "all")
project_ideas:
  - title: "Embedding Evaluation"
    description: "Evaluate cosine similarity between English and Dinka sentence embeddings"
    difficulty: "intermediate"
  - title: "Alignment Fine-tuning"
    description: "Fine-tune a multilingual model to align Kanuri and English"
    difficulty: "advanced"
ethics:
  - "High quality but limited domain (Wikipedia-based)"
featured: true
date_added: "2026-01-23"
---
