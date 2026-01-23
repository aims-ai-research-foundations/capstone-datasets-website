---
layout: dataset
id: "mc4-african"
name: "mC4 (African Subset)"
tagline: "Multilingual Colossal Cleaned Crawled Corpus"
description: |
  A multilingual variant of the C4 dataset, mC4 is a colossal, cleaned version of Common Crawl.
  Standard for training massive multilingual models like mT5, though requires significant filtering for low-resource languages.
source_url: "https://huggingface.co/datasets/allenai/c4"
source_type: "huggingface"
paper_url: "https://arxiv.org/abs/2010.11934"
languages:
  - { code: "afr", name: "Afrikaans" }
  - { code: "amh", name: "Amharic" }
  - { code: "hau", name: "Hausa" }
  - { code: "ibo", name: "Igbo" }
  - { code: "mlg", name: "Malagasy" }
  - { code: "nya", name: "Chichewa" }
  - { code: "sna", name: "Shona" }
  - { code: "som", name: "Somali" }
  - { code: "swa", name: "Swahili" }
  - { code: "xho", name: "Xhosa" }
  - { code: "yor", name: "Yoruba" }
  - { code: "zul", name: "Zulu" }
countries: ["Pan-African"]
tasks: ["language-modeling", "pretraining"]
size: "Terabytes"
format: ["Text"]
license: "ODC-BY"
difficulty: "advanced"
compute: "high"
colab_friendly: false
courses: ["01-build-slm"]
quickstart: |
  from datasets import load_dataset

  # Streaming is recommended due to size
  dataset = load_dataset("allenai/c4", "sw", split="train", streaming=True)
  print(next(iter(dataset)))
project_ideas:
  - title: "Data Cleaning Pipeline"
    description: "Create a cleaning pipeline to filter noise from the Somali subset of mC4"
    difficulty: "advanced"
  - title: "Word2Vec Training"
    description: "Train a Word2Vec model on the Swahili subset"
    difficulty: "intermediate"
ethics:
  - "Contains toxic content, hate speech, and significant noise"
  - "African language representation is often lower quality than high-resource languages"
featured: false
date_added: "2026-01-23"
---
