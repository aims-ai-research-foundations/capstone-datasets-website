---
layout: dataset
id: "afrimed-qa"
name: "AfriMed-QA"
tagline: "Pan-African Medical Question Answering"
description: |
  15,000+ medical questions sourced from medical schools and clinicians across 16 African countries.
  Crucial for adapting models to the African healthcare context.
source_url: "https://huggingface.co/datasets/intronhealth/afrimedqa_v2"
source_type: "huggingface"
languages:
  - { code: "eng", name: "English (African context)" }
countries: ["16 African countries"]
tasks: ["medical-qa", "domain-adaptation", "healthcare"]
size: "15,000+ QA pairs"
format: ["JSON"]
license: "CC BY-NC-SA 4.0"
difficulty: "advanced"
compute: "medium"
colab_friendly: true
courses: ["05-finetune", "08-capstone"]
quickstart: |
  from datasets import load_dataset

  # Requires access approval
  dataset = load_dataset("intronhealth/afrimedqa_v2", split="train")
project_ideas:
  - title: "Malaria Treatment QA"
    description: "Fine-tune medical LLM for Malaria treatment guidelines in Nigeria"
    difficulty: "advanced"
  - title: "Medical Bias Evaluation"
    description: "Evaluate bias in Western medical models vs AfriMed-QA"
    difficulty: "advanced"
ethics:
  - "Medical data is sensitive"
  - "Dataset is anonymized but requires strict usage terms"
featured: true
date_added: "2026-01-23"
---
