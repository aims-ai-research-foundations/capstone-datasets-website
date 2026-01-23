---
layout: dataset
id: "afrispeech-200"
name: "AfriSpeech-200"
tagline: "Pan-African Speech Corpus"
description: |
  200-hour Pan-African speech corpus. Useful for benchmarking ASR model efficiency
  on mobile devices with 120 African accents.
source_url: "https://huggingface.co/datasets/intronhealth/afrispeech-200"
source_type: "huggingface"
languages:
  - { code: "eng", name: "English (120 African accents)" }
countries: ["13 African countries"]
tasks: ["asr", "speech-recognition", "benchmarking"]
size: "200 hours"
format: ["Audio"]
license: "CC BY-NC-SA 4.0"
difficulty: "advanced"
compute: "high"
colab_friendly: false
courses: ["07-accelerate"]
quickstart: |
  from datasets import load_dataset

  dataset = load_dataset("intronhealth/afrispeech-200", split="test")
project_ideas:
  - title: "Raspberry Pi ASR"
    description: "Deploy quantized ASR model on Raspberry Pi with AfriSpeech"
    difficulty: "advanced"
ethics:
  - "Clinical data privacy (curated)"
featured: false
date_added: "2026-01-23"
---
