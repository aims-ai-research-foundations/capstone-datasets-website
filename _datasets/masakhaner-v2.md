---
layout: dataset
id: "masakhaner-v2"
name: "MasakhaNER 2.0"
tagline: "Named Entity Recognition for 21 African Languages"
description: |
  MasakhaNER 2.0 is a comprehensive named entity recognition dataset covering 21 African languages.
  It includes annotations for Person (PER), Organization (ORG), Location (LOC), and Date (DATE) entities.
  Created by the Masakhane community, it represents a significant resource for African language NLP research.
source_url: "https://huggingface.co/datasets/masakhane/masakhaner2"
source_type: "huggingface"
paper_url: "https://arxiv.org/abs/2210.12391"
languages:
  - { code: "swa", name: "Swahili" }
  - { code: "yor", name: "Yoruba" }
  - { code: "hau", name: "Hausa" }
  - { code: "ibo", name: "Igbo" }
  - { code: "amh", name: "Amharic" }
  - { code: "zul", name: "Zulu" }
countries: ["KE", "NG", "GH", "ZA", "ET"]
tasks: ["named-entity-recognition", "sequence-labeling", "token-classification"]
size: "50MB"
format: ["JSON", "CoNLL"]
license: "CC-BY-4.0"
difficulty: "intermediate"
compute: "low"
colab_friendly: true
courses: ["02-represent-data", "05-finetune", "08-capstone"]
quickstart: |
  from datasets import load_dataset

  # Load Swahili subset
  dataset = load_dataset("masakhane/masakhaner2", "swa")

  # View a sample
  print(dataset['train'][0])
  # Output: {'tokens': ['Waziri', 'wa', ...], 'ner_tags': [1, 0, ...]}

  # Get label names
  print(dataset['train'].features['ner_tags'].feature.names)
project_ideas:
  - title: "Multilingual News NER System"
    description: "Build a system that extracts named entities from African news articles across multiple languages"
    difficulty: "intermediate"
  - title: "Cross-lingual Transfer Study"
    description: "Investigate how NER knowledge transfers between related African languages"
    difficulty: "advanced"
ethics:
  - "Geographic bias towards regions with more annotators"
  - "Entity categories based on Western NER conventions may not cover all local contexts"
  - "Performance varies significantly across languages"
featured: true
date_added: "2026-01-20"
---

## Additional Information

MasakhaNER 2.0 builds on the original MasakhaNER dataset with improved coverage and annotation quality. The dataset was created through a collaborative effort by the Masakhane community, bringing together researchers and annotators from across Africa.

### Supported Languages

The dataset covers 21 African languages:
- **East African**: Swahili, Amharic, Luo, Luganda, Kinyarwanda
- **West African**: Yoruba, Hausa, Igbo, Twi, Wolof, Bambara, Fon, Ewe, Mossi
- **Southern African**: Zulu, Xhosa, Setswana, Shona, chiShona

### Citation

```bibtex
@inproceedings{adelani-etal-2022-masakhaner,
    title = "{M}asakha{NER} 2.0: {A}frica-centric Transfer Learning for Named Entity Recognition",
    author = "Adelani, David and others",
    booktitle = "EMNLP",
    year = "2022"
}
```
