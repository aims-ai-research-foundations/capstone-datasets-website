---
layout: dataset
id: "cryceleb"
name: "CryCeleb"
tagline: "Infant Cry Analysis from Nigeria"
description: |
  Dataset of infant cries labeled for identity, used to detect birth asphyxia.
  Cutting-edge health application from Ubenwa.
source_url: "https://huggingface.co/datasets/Ubenwa/CryCeleb2023"
source_type: "huggingface"
languages:
  - { code: "cry", name: "Infant Cry (Audio)" }
countries: ["NG"]
tasks: ["audio-classification", "healthcare", "medical"]
size: "6.5 hours, 786 infants"
format: ["Audio"]
license: "CC BY-NC-ND 4.0"
difficulty: "advanced"
compute: "medium"
colab_friendly: true
courses: ["08-capstone"]
quickstart: |
  from datasets import load_dataset

  dataset = load_dataset("Ubenwa/CryCeleb2023", split="train")
project_ideas:
  - title: "Birth Asphyxia Detection"
    description: "Develop low-cost diagnostic tool using mobile audio"
    difficulty: "advanced"
ethics:
  - "Extremely sensitive medical data involving minors"
  - "Strict privacy and non-commercial use"
featured: true
date_added: "2026-01-23"
---
