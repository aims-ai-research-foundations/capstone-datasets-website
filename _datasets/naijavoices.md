---
layout: dataset
id: "naijavoices"
name: "NaijaVoices"
tagline: "Culturally Rich Nigerian Language Dataset"
description: |
  Expert-curated text and speech in Nigerian languages. Offers authentic, culturally rich sentences
  distinct from religious or news texts often found online. Uses a community-benefiting data farming approach.
source_url: "https://huggingface.co/datasets/naijavoices/naijavoices-dataset"
source_type: "huggingface"
languages:
  - { code: "ibo", name: "Igbo" }
  - { code: "hau", name: "Hausa" }
  - { code: "yor", name: "Yoruba" }
countries: ["NG"]
tasks: ["language-modeling", "asr", "speech-recognition"]
size: "1,800 hours of speech"
format: ["Audio", "Text"]
license: "CC BY-NC-SA 4.0"
difficulty: "intermediate"
compute: "medium"
colab_friendly: true
courses: ["01-build-slm"]
quickstart: |
  from datasets import load_dataset

  # Requires approval on HuggingFace
  dataset = load_dataset("naijavoices/naijavoices-dataset", split="train", streaming=True)
  print(next(iter(dataset))['transcript'])
project_ideas:
  - title: "Conversational Text Generator"
    description: "Build a conversational text generator for Nigerian languages"
    difficulty: "intermediate"
  - title: "Code-Switching Analysis"
    description: "Analyze code-switching patterns in Nigerian text"
    difficulty: "advanced"
ethics:
  - "Non-commercial license; users must register"
  - "Uses data farming approach that benefits the community"
featured: false
date_added: "2026-01-23"
---
