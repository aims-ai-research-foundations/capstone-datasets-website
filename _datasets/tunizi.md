---
layout: dataset
id: "tunizi"
name: "Tunizi"
tagline: "Tunisian Arabizi Sentiment Analysis"
description: |
  First sentiment analysis dataset for Tunisian Arabizi (Tunisian dialect written in Latin script with numerals).
source_url: "https://huggingface.co/datasets/chaymafourati/tunizi"
source_type: "huggingface"
paper_url: "https://arxiv.org/abs/2004.14303"
languages:
  - { code: "tun", name: "Tunisian Arabizi" }
countries: ["TN"]
tasks: ["sentiment-analysis", "text-classification"]
size: "~3,000 sentences"
format: ["CSV"]
license: "MIT"
difficulty: "beginner"
compute: "low"
colab_friendly: true
courses: ["03-neural-networks"]
quickstart: |
  from datasets import load_dataset

  dataset = load_dataset("chaymafourati/tunizi", split="train")
project_ideas:
  - title: "Arabizi Tokenization"
    description: "Handle Arabizi (numbers as letters) in tokenization"
    difficulty: "intermediate"
  - title: "Dialect Comparison"
    description: "Compare MSA-trained model vs Tunizi-trained model"
    difficulty: "intermediate"
ethics:
  - "Social media data privacy considerations"
featured: false
date_added: "2026-01-23"
---
