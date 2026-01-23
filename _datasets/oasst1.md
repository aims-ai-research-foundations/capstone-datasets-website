---
layout: dataset
id: "oasst1"
name: "OASST1"
tagline: "OpenAssistant Conversations for RLHF"
description: |
  Human-generated, human-annotated assistant-style conversation corpus with quality ratings.
  Useful for training reward models.
source_url: "https://huggingface.co/datasets/OpenAssistant/oasst1"
source_type: "huggingface"
languages:
  - { code: "multi", name: "35 languages (Multilingual)" }
countries: ["Global"]
tasks: ["rlhf", "dialogue", "preference-data"]
size: "161k messages"
format: ["JSON"]
license: "Apache 2.0"
difficulty: "advanced"
compute: "medium"
colab_friendly: true
courses: ["06-align"]
quickstart: |
  from datasets import load_dataset

  dataset = load_dataset("OpenAssistant/oasst1", split="train")
project_ideas:
  - title: "Swahili RLHF"
    description: "Translate OASST1 prompts to Swahili for RLHF dataset"
    difficulty: "advanced"
  - title: "Cross-lingual Reward Model"
    description: "Train reward model on English, test transfer to African languages"
    difficulty: "advanced"
ethics:
  - "User-generated content"
featured: false
date_added: "2026-01-23"
---
