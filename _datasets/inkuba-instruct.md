---
layout: dataset
id: "inkuba-instruct"
name: "Inkuba Instruct"
tagline: "Multi-task Instruction Data by Lelapa AI"
description: |
  Developed by Lelapa AI, compiles downstream tasks for five African languages.
  Integrates MT, NER, POS, and Sentiment data for instruction fine-tuning.
source_url: "https://huggingface.co/datasets/lelapa/Inkuba-instruct"
source_type: "huggingface"
languages:
  - { code: "swa", name: "Swahili" }
  - { code: "yor", name: "Yoruba" }
  - { code: "xho", name: "IsiXhosa" }
  - { code: "hau", name: "Hausa" }
  - { code: "zul", name: "IsiZulu" }
countries: ["NG", "KE", "ZA"]
tasks: ["instruction-tuning", "multi-task", "fine-tuning"]
size: "62M Swahili, 6M Yoruba samples"
format: ["JSON"]
license: "CC BY-NC 4.0"
difficulty: "advanced"
compute: "high"
colab_friendly: false
courses: ["05-finetune"]
quickstart: |
  from datasets import load_dataset

  dataset = load_dataset("lelapa/Inkuba-instruct", "swahili_train", split="train")
project_ideas:
  - title: "TinyLlama for Zulu"
    description: "Fine-tune TinyLlama for Zulu instruction following"
    difficulty: "advanced"
ethics:
  - "Non-commercial license"
featured: false
date_added: "2026-01-23"
---
