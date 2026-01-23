---
layout: dataset
id: "oscar"
name: "OSCAR"
tagline: "Open Super-large Crawled Aggregated Corpus"
description: |
  A huge multilingual corpus obtained by language classification and filtering of Common Crawl.
  Provides data in both original and deduplicated forms, specifically aiming to improve data quality for low-resource languages.
source_url: "https://huggingface.co/datasets/oscar-corpus/oscar"
source_type: "huggingface"
paper_url: "https://arxiv.org/abs/1911.02116"
languages:
  - { code: "amh", name: "Amharic" }
  - { code: "som", name: "Somali" }
  - { code: "yor", name: "Yoruba" }
  - { code: "mlg", name: "Malagasy" }
  - { code: "swa", name: "Swahili" }
  - { code: "afr", name: "Afrikaans" }
countries: ["Pan-African"]
tasks: ["language-modeling", "pretraining"]
size: "Millions of sentences"
format: ["Text"]
license: "CC0 1.0 (Metadata)"
difficulty: "intermediate"
compute: "high"
colab_friendly: false
courses: ["01-build-slm"]
quickstart: |
  from datasets import load_dataset

  # Load deduplicated Amharic data
  dataset = load_dataset("oscar-corpus/oscar", language="am", split="train", streaming=True)
  print(next(iter(dataset)))
project_ideas:
  - title: "Token Distribution Analysis"
    description: "Analyze token distribution of Amharic script compared to Latin-script African languages"
    difficulty: "intermediate"
  - title: "3-gram Language Model"
    description: "Build a 3-gram language model for Malagasy"
    difficulty: "beginner"
ethics:
  - "As a web crawl, it reflects biases of the internet"
  - "Privacy of individuals mentioned in crawled text is a concern"
featured: false
date_added: "2026-01-23"
---
