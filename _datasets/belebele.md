---
layout: dataset
id: "belebele"
name: "Belebele"
tagline: "Reading Comprehension for 122 Language Variants"
description: |
  Multiple-choice machine reading comprehension dataset spanning 122 language variants.
  Fully parallel, based on FLORES-200 passages.
source_url: "https://huggingface.co/datasets/facebook/belebele"
source_type: "huggingface"
paper_url: "https://arxiv.org/abs/2308.16884"
languages:
  - { code: "bam", name: "Bambara" }
  - { code: "wol", name: "Wolof" }
  - { code: "yor", name: "Yoruba" }
  - { code: "zul", name: "Zulu" }
  - { code: "multi", name: "Many more African languages" }
countries: ["Pan-African"]
tasks: ["reading-comprehension", "multiple-choice", "evaluation"]
size: "900 questions per language"
format: ["JSON"]
license: "CC-BY-SA 4.0"
difficulty: "intermediate"
compute: "low"
colab_friendly: true
courses: ["04-transformer"]
quickstart: |
  from datasets import load_dataset

  dataset = load_dataset("facebook/belebele", split="eng_Latn")
project_ideas:
  - title: "Zero-Shot LLM Evaluation"
    description: "Evaluate zero-shot Llama-3 on Wolof reading comprehension"
    difficulty: "intermediate"
  - title: "Human vs Machine"
    description: "Compare human vs machine performance on Zulu"
    difficulty: "advanced"
ethics:
  - "Parallel nature allows rigorous cross-language bias testing"
featured: false
date_added: "2026-01-23"
---
