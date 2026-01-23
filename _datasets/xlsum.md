---
layout: dataset
id: "xlsum"
name: "XL-Sum"
tagline: "Abstractive Summarization for African Languages"
description: |
  Large-scale abstractive summarization dataset from BBC News.
  High-quality article-summary pairs for many African languages.
source_url: "https://huggingface.co/datasets/GEM/xlsum"
source_type: "huggingface"
paper_url: "https://arxiv.org/abs/2106.13822"
languages:
  - { code: "amh", name: "Amharic" }
  - { code: "hau", name: "Hausa" }
  - { code: "ibo", name: "Igbo" }
  - { code: "run", name: "Kirundi" }
  - { code: "pcm", name: "Nigerian Pidgin" }
  - { code: "orm", name: "Oromo" }
  - { code: "som", name: "Somali" }
  - { code: "swa", name: "Swahili" }
  - { code: "tir", name: "Tigrinya" }
  - { code: "yor", name: "Yoruba" }
countries: ["Pan-African"]
tasks: ["summarization", "text-generation", "sequence-to-sequence"]
size: "6k-7k pairs per language"
format: ["JSON"]
license: "CC-BY-NC-SA 4.0"
difficulty: "intermediate"
compute: "medium"
colab_friendly: true
courses: ["04-transformer"]
quickstart: |
  from datasets import load_dataset

  dataset = load_dataset("GEM/xlsum", "igbo", split="train")
  print(dataset['text'][:2], dataset['target'][:2])
project_ideas:
  - title: "mT5 Summarization"
    description: "Fine-tune mT5 to summarize Igbo news articles"
    difficulty: "intermediate"
  - title: "ROUGE Evaluation"
    description: "Evaluate ROUGE scores on Amharic text"
    difficulty: "beginner"
ethics:
  - "BBC data represents specific editorial viewpoint"
featured: true
date_added: "2026-01-23"
---
