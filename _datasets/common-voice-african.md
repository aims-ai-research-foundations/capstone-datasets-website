---
layout: dataset
id: "common-voice-african"
name: "Common Voice (Swahili & Hausa)"
tagline: "Crowdsourced Read Speech for African Languages"
description: |
  Mozilla Common Voice scripted-speech recordings for Swahili (~20GB) and Hausa, with speaker demographics. Crowdsourced read speech released into the public domain (CC0).
  Stream from Hugging Face or pull a language subset to stay within Colab limits.
source_url: "https://mozilladatacollective.com/datasets/cmn3ailbd008nmb07mjyu3xro"
source_type: "web"
languages:
  - { code: "swa", name: "Swahili" }
  - { code: "hau", name: "Hausa" }
countries: ["KE", "NG"]
tasks: ["asr", "speech-recognition", "accent-classification"]
size: "Swahili ~20GB; Hausa smaller"
format: ["Audio", "Text"]
license: "CC0 1.0"
difficulty: "intermediate"
compute: "high"
colab_friendly: true
courses: ["05-finetune", "08-capstone"]
quickstart: |
  from datasets import load_dataset

  # Swahili ("sw") or Hausa ("ha")
  ds = load_dataset("mozilla-foundation/common_voice_17_0", "sw", split="train", streaming=True)
  print(next(iter(ds)))
project_ideas:
  - title: "Hausa ASR Fairness"
    description: "Train a Hausa ASR model and measure accuracy gaps across self-declared gender and age."
    difficulty: "intermediate"
  - title: "Accent Classifier"
    description: "Build a model that classifies speaker accent from the audio."
    difficulty: "intermediate"
ethics:
  - "Demographic gaps (e.g. few female Hausa speakers in some releases) degrade performance for under-represented groups."
featured: false
date_added: "2026-06-11"
---
