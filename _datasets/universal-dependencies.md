---
layout: dataset
id: "universal-dependencies"
name: "Universal Dependencies"
tagline: "Grammar Annotation for African Languages"
description: |
  Framework for consistent annotation of grammar (POS, morphology, syntax).
  Crucial for understanding linguistic structure and embeddings.
source_url: "https://universaldependencies.org/"
source_type: "web"
languages:
  - { code: "amh", name: "Amharic" }
  - { code: "bam", name: "Bambara" }
  - { code: "cop", name: "Coptic" }
  - { code: "hau", name: "Hausa" }
  - { code: "ibo", name: "Igbo" }
  - { code: "yor", name: "Yoruba" }
  - { code: "wol", name: "Wolof" }
countries: ["NG", "ET", "SN", "ML"]
tasks: ["pos-tagging", "dependency-parsing", "morphology"]
size: "Small, high-quality treebanks"
format: ["CoNLL-U"]
license: "CC-BY-SA 4.0"
difficulty: "advanced"
compute: "low"
colab_friendly: true
courses: ["02-represent-data"]
quickstart: |
  from datasets import load_dataset

  dataset = load_dataset("universal_dependencies", "wol_wtb", split="train")
  print(dataset['tokens'][:3])
project_ideas:
  - title: "Dependency Visualization"
    description: "Visualize dependency trees for Yoruba sentences"
    difficulty: "intermediate"
  - title: "POS Tagger"
    description: "Train a POS tagger using embeddings"
    difficulty: "intermediate"
ethics:
  - "Highly curated academic data"
featured: false
date_added: "2026-01-23"
---
