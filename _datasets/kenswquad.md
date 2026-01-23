---
layout: dataset
id: "kenswquad"
name: "KenSwQuAD"
tagline: "Swahili Question Answering Dataset"
description: |
  Question Answering dataset for Swahili, annotated from raw story texts.
  Addresses the lack of QA resources for Swahili in East Africa.
source_url: "https://huggingface.co/datasets/lighteval/KenSwQuAD"
source_type: "huggingface"
paper_url: "https://arxiv.org/abs/2205.02674"
languages:
  - { code: "swa", name: "Swahili" }
countries: ["KE", "TZ"]
tasks: ["question-answering"]
size: "7,526 QA pairs"
format: ["JSON"]
license: "CC-BY 4.0"
difficulty: "intermediate"
compute: "low"
colab_friendly: true
courses: ["04-transformer", "07-accelerate"]
quickstart: |
  # Requires LightEval wrapper or custom loading
project_ideas:
  - title: "Swahili QA Bot"
    description: "Train a Swahili QA bot for local stories"
    difficulty: "intermediate"
  - title: "CPU-Optimized QA"
    description: "Optimize for CPU-only inference"
    difficulty: "advanced"
ethics:
  - "Community-sourced data"
featured: false
date_added: "2026-01-23"
---
