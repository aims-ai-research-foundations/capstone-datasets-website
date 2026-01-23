---
layout: dataset
id: "aya-dataset"
name: "Aya Dataset"
tagline: "Multilingual Instruction Dataset from Cohere"
description: |
  Massive multilingual instruction fine-tuning dataset with human-annotated
  and translated instructions for many African languages.
source_url: "https://huggingface.co/datasets/cohere/aya_dataset"
source_type: "huggingface"
languages:
  - { code: "multi", name: "65 languages including African LRLs" }
countries: ["Global (including Africa)"]
tasks: ["instruction-following", "multilingual", "fine-tuning"]
size: "204k human annotations, millions translated"
format: ["JSON"]
license: "Apache 2.0"
difficulty: "intermediate"
compute: "medium"
colab_friendly: true
courses: ["05-finetune"]
quickstart: |
  from datasets import load_dataset

  dataset = load_dataset("cohere/aya_dataset", split="train")
project_ideas:
  - title: "Yoruba Assistant"
    description: "Fine-tune a model to act as helpful assistant in Yoruba"
    difficulty: "intermediate"
ethics:
  - "Participatory design mitigates some bias"
  - "Translation artifacts may remain"
featured: false
date_added: "2026-01-23"
---
