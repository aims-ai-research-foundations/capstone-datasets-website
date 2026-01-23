---
layout: dataset
id: "mafand-mt"
name: "MAFAND-MT"
tagline: "Machine Translation for African Languages"
description: |
  MAFAND-MT is a machine translation dataset covering 21 African languages paired with English and French.
  It provides parallel corpora for training and evaluating translation systems for African languages.
source_url: "https://huggingface.co/datasets/masakhane/mafand"
source_type: "huggingface"
paper_url: "https://arxiv.org/abs/2204.06487"
languages:
  - { code: "swa", name: "Swahili" }
  - { code: "yor", name: "Yoruba" }
  - { code: "hau", name: "Hausa" }
  - { code: "zul", name: "Zulu" }
  - { code: "ibo", name: "Igbo" }
countries: ["KE", "NG", "GH", "ZA"]
tasks: ["machine-translation", "sequence-to-sequence"]
size: "100MB"
format: ["JSON", "TSV"]
license: "CC-BY-4.0"
difficulty: "intermediate"
compute: "medium"
colab_friendly: true
courses: ["04-transformer", "05-finetune", "08-capstone"]
quickstart: |
  from datasets import load_dataset

  # Load English-Swahili translation data
  dataset = load_dataset("masakhane/mafand", "en-swa")

  # View a sample
  print(dataset['train'][0])
  # Output: {'translation': {'en': '...', 'swa': '...'}}
project_ideas:
  - title: "Bidirectional Translation App"
    description: "Build a mobile-friendly translation app between English and an African language"
    difficulty: "intermediate"
  - title: "Document Translation Pipeline"
    description: "Create a system for translating documents while preserving formatting"
    difficulty: "advanced"
ethics:
  - "Translation quality varies by language pair"
  - "May not handle code-switching well"
  - "Domain-specific terminology may be missing"
featured: true
date_added: "2026-01-20"
---

## Additional Information

MAFAND-MT was created by the Masakhane community to address the lack of machine translation resources for African languages.

### Citation

```bibtex
@inproceedings{adelani-etal-2022-mafand,
    title = "A Few Thousand Translations Go a Long Way!",
    author = "Adelani, David and others",
    booktitle = "NAACL",
    year = "2022"
}
```
