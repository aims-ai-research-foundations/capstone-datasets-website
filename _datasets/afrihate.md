---
layout: dataset
id: "afrihate"
name: "AfriHate"
tagline: "Hate Speech Detection for 15 African Languages"
description: |
  Multilingual dataset for hate speech and abusive language detection.
  Tweets annotated by native speakers with socio-cultural context.
source_url: "https://huggingface.co/datasets/afrihate/afrihate"
source_type: "huggingface"
languages:
  - { code: "ara", name: "Algerian Arabic" }
  - { code: "amh", name: "Amharic" }
  - { code: "hau", name: "Hausa" }
  - { code: "ibo", name: "Igbo" }
  - { code: "kin", name: "Kinyarwanda" }
  - { code: "som", name: "Somali" }
  - { code: "swa", name: "Swahili" }
  - { code: "tir", name: "Tigrinya" }
  - { code: "twi", name: "Twi" }
  - { code: "xho", name: "Xhosa" }
  - { code: "yor", name: "Yoruba" }
  - { code: "zul", name: "Zulu" }
countries: ["Pan-African"]
tasks: ["hate-speech-detection", "text-classification", "safety"]
size: "~45,000 examples"
format: ["JSON", "CSV"]
license: "Apache 2.0"
difficulty: "intermediate"
compute: "low"
colab_friendly: true
courses: ["03-neural-networks", "06-align"]
quickstart: |
  from datasets import load_dataset

  dataset = load_dataset("afrihate/afrihate", "hau", split="train")
project_ideas:
  - title: "Hate Speech Classifier"
    description: "Train BERT classifier for hate speech in Kinyarwanda"
    difficulty: "intermediate"
  - title: "Feature Analysis"
    description: "Investigate linguistic features correlating with abusive labels"
    difficulty: "advanced"
ethics:
  - "Contains offensive content"
  - "Use strictly for safety research"
featured: false
date_added: "2026-01-23"
---
