---
layout: dataset
id: "masakhanews"
name: "MasakhaNEWS"
tagline: "News Topic Classification for 16 African Languages"
description: |
  High-quality, human-annotated news articles for topic classification.
  Excellent for modeling formal language and news domains, offering cleaner data than web crawls.
source_url: "https://huggingface.co/datasets/masakhane/masakhanews"
source_type: "huggingface"
paper_url: "https://arxiv.org/abs/2304.09972"
languages:
  - { code: "amh", name: "Amharic" }
  - { code: "hau", name: "Hausa" }
  - { code: "ibo", name: "Igbo" }
  - { code: "lug", name: "Luganda" }
  - { code: "swa", name: "Swahili" }
  - { code: "yor", name: "Yoruba" }
  - { code: "lin", name: "Lingala" }
  - { code: "sna", name: "Shona" }
  - { code: "xho", name: "IsiXhosa" }
countries: ["NG", "ET", "KE", "UG", "ZW", "ZA", "CD"]
tasks: ["topic-classification", "language-modeling", "text-classification"]
size: "~20,000 articles"
format: ["JSON", "CSV"]
license: "CC-BY-4.0"
difficulty: "beginner"
compute: "low"
colab_friendly: true
courses: ["01-build-slm", "03-neural-networks"]
quickstart: |
  from datasets import load_dataset

  dataset = load_dataset("masakhane/masakhanews", "hau", split="train")
  print(dataset['text'][:3], dataset['label'][:3])
project_ideas:
  - title: "Domain-Specific LM"
    description: "Train a domain-specific language model for African news"
    difficulty: "intermediate"
  - title: "Headline Generator"
    description: "Generate news headlines using n-grams based on body text"
    difficulty: "beginner"
  - title: "News Classifier"
    description: "Train a classifier to categorize Swahili news articles"
    difficulty: "beginner"
ethics:
  - "News data may contain political biases specific to region and publication time"
featured: true
date_added: "2026-01-23"
---
