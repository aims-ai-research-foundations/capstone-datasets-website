---
layout: dataset
id: "afriinstruct"
name: "AfriInstruct"
tagline: "Instruction Tuning for African Languages"
description: |
  Dataset specialized for instruction-tuning multiple African languages.
  Bridges the gap between high-resource and African language LLM performance.
source_url: "https://huggingface.co/datasets/llama-lang-adapt/AfriInstruct-Data"
source_type: "huggingface"
languages:
  - { code: "hau", name: "Hausa" }
  - { code: "ibo", name: "Igbo" }
  - { code: "yor", name: "Yoruba" }
  - { code: "swa", name: "Swahili" }
  - { code: "zul", name: "Zulu" }
  - { code: "multi", name: "13+ African languages" }
countries: ["Pan-African"]
tasks: ["instruction-tuning", "fine-tuning", "llm"]
size: "Millions of tokens"
format: ["JSON"]
license: "CC-BY-4.0"
difficulty: "advanced"
compute: "high"
colab_friendly: false
courses: ["05-finetune"]
quickstart: |
  from datasets import load_dataset

  dataset = load_dataset("llama-lang-adapt/AfriInstruct-Data", split="train")
  print(dataset['instruction'][:3], dataset['output'][:3])
project_ideas:
  - title: "Hausa Instruction Following"
    description: "Fine-tune Llama-2-7B to follow instructions in Hausa"
    difficulty: "advanced"
  - title: "Cross-lingual Tax"
    description: "Evaluate cross-lingual instruction tuning tax"
    difficulty: "advanced"
ethics:
  - "Derived from other datasets; inherits their biases"
featured: true
date_added: "2026-01-23"
---
