---
layout: dataset
id: "african-medical-records"
name: "African Medical Records (OCR)"
tagline: "Nigerian Handwritten Clinical Records for OCR"
description: |
  Paired images and digital ground-truth text mapping diverse Nigerian clinical handwriting, built to support handwriting OCR and clinical text extraction in healthcare.
source_url: "https://huggingface.co/datasets/Nigeria-Health-data-OCR-pipeline/African-Medical-Records"
source_type: "huggingface"
languages:
  - { code: "en", name: "English (Nigeria)" }
countries: ["NG"]
tasks: ["ocr", "computer-vision", "clinical-text-extraction"]
size: "<1K records"
format: ["Image", "Text"]
license: "CC-BY 4.0"
difficulty: "advanced"
compute: "medium"
colab_friendly: true
courses: ["03-neural-networks", "04-transformer", "08-capstone"]
quickstart: |
  from datasets import load_dataset

  dataset = load_dataset("Nigeria-Health-data-OCR-pipeline/African-Medical-Records", split="train")
  print(dataset[0])
project_ideas:
  - title: "Prescription Pipeline"
    description: "Build an OCR-to-LLM pipeline that reads a handwritten prescription image and extracts drug and dosage."
    difficulty: "advanced"
  - title: "Handwriting OCR"
    description: "Fine-tune a vision-text model on the clinical handwriting and report character error rate."
    difficulty: "advanced"
ethics:
  - "Handwriting carries biometric nuance; ensure complete de-identification of patient names."
featured: false
date_added: "2026-06-11"
---
