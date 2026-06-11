---
layout: dataset
id: "wura"
name: "WURA"
tagline: "Web-crawled Unsupervised Representation for Africa"
description: |
  A large-scale, document-level dataset covering 16 African languages and 4 high-resource languages widely spoken in Africa.
  Created by auditing mC4 and crawling verified news sources to address quality issues in web-crawled data for low-resource languages.
source_url: "https://huggingface.co/datasets/castorini/wura"
source_type: "huggingface"
paper_url: "https://aclanthology.org/2023.emnlp-main.11/"
languages:
  - { code: "amh", name: "Amharic" }
  - { code: "hau", name: "Hausa" }
  - { code: "ibo", name: "Igbo" }
  - { code: "kin", name: "Kinyarwanda" }
  - { code: "lug", name: "Luganda" }
  - { code: "pcm", name: "Nigerian Pidgin" }
  - { code: "orm", name: "Oromo" }
  - { code: "swa", name: "Swahili" }
  - { code: "wol", name: "Wolof" }
  - { code: "yor", name: "Yoruba" }
  - { code: "zul", name: "Zulu" }
countries: ["NG", "ET", "KE", "RW", "UG", "SN", "ZA"]
tasks: ["language-modeling", "pretraining", "masked-language-modeling"]
size: "~19GB"
format: ["Text", "JSON"]
license: "Apache 2.0"
difficulty: "intermediate"
compute: "medium"
colab_friendly: true
courses: ["01-build-slm"]
quickstart: |
  from datasets import load_dataset

  # Load Yoruba document-level data
  dataset = load_dataset("castorini/wura", "yor", split="train")
  print(dataset['text'][:5])
project_ideas:
  - title: "Train a Small LM from Scratch"
    description: "Train a unidirectional LSTM or Transformer from scratch on Yoruba text"
    difficulty: "intermediate"
  - title: "Compare Data Quality"
    description: "Compare n-gram perplexity between WURA (curated) and mC4 (raw) for Hausa"
    difficulty: "intermediate"
  - title: "Predictive Keyboard"
    description: "Build a predictive text keyboard for Nigerian Pidgin"
    difficulty: "beginner"
ethics:
  - "While curated to remove noise, web-crawled data may still contain biases"
  - "Religious text inclusion can skew domain distribution"
featured: false
date_added: "2026-01-23"
---
