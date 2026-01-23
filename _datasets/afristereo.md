---
layout: dataset
id: "afristereo"
name: "AfriStereo"
tagline: "African Stereotype Evaluation Dataset"
description: |
  First open-source African stereotype dataset grounded in local socio-cultural contexts.
  Stereotype-antistereotype pairs for evaluating bias in models.
source_url: "https://arxiv.org/abs/2511.22016"
source_type: "arxiv"
languages:
  - { code: "eng", name: "English (African context)" }
  - { code: "fra", name: "French" }
countries: ["NG", "KE", "SN"]
tasks: ["bias-evaluation", "stereotypes", "safety"]
size: "~5,000 pairs"
format: ["JSON"]
license: "Open Source"
difficulty: "intermediate"
compute: "low"
colab_friendly: true
courses: ["06-align"]
quickstart: |
  # Dataset coming soon on HuggingFace
project_ideas:
  - title: "LLM Bias Comparison"
    description: "Evaluate GPT-4 vs Llama-2 on African gender stereotypes"
    difficulty: "intermediate"
  - title: "Reward Model Training"
    description: "Train reward model to penalize stereotyping"
    difficulty: "advanced"
ethics:
  - "Contains offensive stereotypes for evaluation purposes"
featured: false
date_added: "2026-01-23"
---
