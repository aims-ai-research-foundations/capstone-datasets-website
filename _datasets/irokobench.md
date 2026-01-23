---
layout: dataset
id: "irokobench"
name: "IrokoBench"
tagline: "Comprehensive Benchmark for African Languages"
description: |
  A comprehensive benchmark suite for evaluating LLMs on African languages across multiple tasks.
  Covers translation, classification, QA, and more for systematic model evaluation.
source_url: "https://huggingface.co/datasets/masakhane/irokobench"
source_type: "huggingface"
languages:
  - { code: "hau", name: "Hausa" }
  - { code: "ibo", name: "Igbo" }
  - { code: "yor", name: "Yoruba" }
  - { code: "swa", name: "Swahili" }
  - { code: "zul", name: "Zulu" }
  - { code: "multi", name: "16+ African languages" }
countries: ["Pan-African"]
tasks: ["benchmarking", "evaluation", "multi-task"]
size: "Multiple evaluation sets"
format: ["JSON"]
license: "CC-BY-4.0"
difficulty: "intermediate"
compute: "low"
colab_friendly: true
courses: ["07-accelerate"]
quickstart: |
  from datasets import load_dataset

  # Load specific task subset
  dataset = load_dataset("masakhane/irokobench", "yor_classification", split="test")
project_ideas:
  - title: "LLM Evaluation"
    description: "Benchmark popular LLMs (GPT-4, Llama, Gemini) on African languages"
    difficulty: "intermediate"
  - title: "Quantization Impact"
    description: "Measure accuracy degradation when quantizing models using IrokoBench"
    difficulty: "advanced"
ethics:
  - "Standardized evaluation helps identify model biases"
featured: false
date_added: "2026-01-23"
---
