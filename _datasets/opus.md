---
layout: dataset
id: "opus"
name: "OPUS Parallel Corpora"
tagline: "Open Parallel Corpus Collection"
description: |
  A collection of translated texts from the web. For African languages, the Ubuntu (localization files)
  and Bible subsets are particularly rich sources of parallel data for training alignment and embeddings.
source_url: "https://opus.nlpl.eu/"
source_type: "web"
languages:
  - { code: "xho", name: "Xhosa" }
  - { code: "zul", name: "Zulu" }
  - { code: "tsn", name: "Tswana" }
  - { code: "sot", name: "Sotho" }
  - { code: "swa", name: "Swahili" }
countries: ["ZA", "BW", "LS", "KE", "TZ"]
tasks: ["machine-translation", "alignment", "embeddings"]
size: "Millions of sentence pairs"
format: ["Text", "TMX"]
license: "Varies by sub-corpus (often open)"
difficulty: "beginner"
compute: "low"
colab_friendly: true
courses: ["02-represent-data"]
quickstart: |
  from datasets import load_dataset

  # Load Ubuntu localization corpus
  dataset = load_dataset("opus_ubuntu", "en-xh", split="train")
  print(dataset['translation'][:3])
project_ideas:
  - title: "Word2Vec from Bible"
    description: "Train static word embeddings (Word2Vec) on the Bible corpus in Xhosa"
    difficulty: "intermediate"
  - title: "Dictionary Mapping"
    description: "Create a dictionary mapping between English and Tswana using alignment tools"
    difficulty: "intermediate"
ethics:
  - "Religious texts have specific domain bias and archaic vocabulary"
  - "Ubuntu corpus is technical domain-specific"
featured: false
date_added: "2026-01-23"
---
