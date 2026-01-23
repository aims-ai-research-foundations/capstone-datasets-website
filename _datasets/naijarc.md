---
layout: dataset
id: "naijarc"
name: "NaijaRC"
tagline: "Reading Comprehension for Nigerian Languages"
description: |
  A reading comprehension dataset for Nigerian languages (Hausa, Igbo, Yoruba) based on high-school
  examination questions. Provides a realistic educational benchmark for testing model comprehension.
source_url: "https://huggingface.co/datasets/masakhane/naijarc"
source_type: "huggingface"
paper_url: "https://arxiv.org/abs/2308.09768"
languages:
  - { code: "hau", name: "Hausa" }
  - { code: "ibo", name: "Igbo" }
  - { code: "yor", name: "Yoruba" }
countries: ["NG"]
tasks: ["reading-comprehension", "multiple-choice", "question-answering"]
size: "~358 questions (Yoruba subset)"
format: ["JSON"]
license: "CC-BY-NC 4.0"
difficulty: "intermediate"
compute: "low"
colab_friendly: true
courses: ["04-transformer"]
quickstart: |
  from datasets import load_dataset

  dataset = load_dataset("masakhane/naijarc", "yor", split="test")
  print(dataset['question'][:3])
project_ideas:
  - title: "High School Exam Test"
    description: "Test if LLMs can pass a Nigerian high school language exam"
    difficulty: "intermediate"
  - title: "Cross-lingual Transfer"
    description: "Compare model performance across Hausa, Igbo, and Yoruba"
    difficulty: "advanced"
ethics:
  - "Educational data with potential privacy considerations"
featured: false
date_added: "2026-01-23"
---
