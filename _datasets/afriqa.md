---
layout: dataset
id: "afriqa"
name: "AfriQA"
tagline: "Cross-lingual Question Answering for 10 African Languages"
description: |
  First cross-lingual Open-Retrieval QA dataset for African languages.
  12,000+ examples where answers might be in different language than question.
source_url: "https://huggingface.co/datasets/masakhane/afriqa"
source_type: "huggingface"
paper_url: "https://arxiv.org/abs/2305.06897"
languages:
  - { code: "bem", name: "Bemba" }
  - { code: "fon", name: "Fon" }
  - { code: "hau", name: "Hausa" }
  - { code: "ibo", name: "Igbo" }
  - { code: "kin", name: "Kinyarwanda" }
  - { code: "swa", name: "Swahili" }
  - { code: "twi", name: "Twi" }
  - { code: "wol", name: "Wolof" }
  - { code: "yor", name: "Yoruba" }
  - { code: "zul", name: "Zulu" }
countries: ["ZM", "BJ", "NG", "RW", "KE", "GH", "SN", "ZA"]
tasks: ["question-answering", "cross-lingual", "reading-comprehension"]
size: "12,000+ QA pairs"
format: ["JSON"]
license: "CC-BY-4.0-NC"
difficulty: "advanced"
compute: "medium"
colab_friendly: true
courses: ["04-transformer"]
quickstart: |
  from datasets import load_dataset

  dataset = load_dataset("masakhane/afriqa", "bem", split="train")
  print(dataset['question'][:3], dataset['answers'][:3])
project_ideas:
  - title: "Retrieval-based QA"
    description: "Build retrieval-based QA for Bemba using English documents"
    difficulty: "advanced"
  - title: "mBERT Fine-tuning"
    description: "Fine-tune mBERT for answer span extraction in Yoruba"
    difficulty: "intermediate"
ethics:
  - "Ensures African languages are first-class citizens in QA"
featured: true
date_added: "2026-01-23"
---
