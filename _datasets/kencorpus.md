---
layout: dataset
id: "kencorpus"
name: "Kencorpus"
tagline: "Kenyan Languages Corpus: Swahili, Dholuo, Luhya"
description: |
  A text and speech corpus for three Kenyan languages (Swahili, Dholuo, Luhya): 5.6M words and 177 hours of speech, plus 7,537 Swahili QA pairs, 13,400 translation sentences, and POS-tagged sets.
  The Maseno project homepage is offline; data is mirrored on Harvard Dataverse.
source_url: "https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/6N5V1K"
source_type: "dataverse"
paper_url: "https://arxiv.org/abs/2208.12081"
languages:
  - { code: "swa", name: "Swahili" }
  - { code: "luo", name: "Dholuo" }
  - { code: "luy", name: "Luhya" }
countries: ["KE"]
tasks: ["machine-translation", "pos-tagging", "question-answering", "asr"]
size: "5.6M words / 177 hours"
format: ["Text", "Audio"]
license: "CC BY 4.0"
difficulty: "intermediate"
compute: "low"
colab_friendly: true
courses: ["02-represent-data", "04-transformer", "08-capstone"]
quickstart: |
  # Download from Harvard Dataverse (CC BY 4.0):
  #   https://doi.org/10.7910/DVN/6N5V1K
  # text, QA, translation and POS files plus speech wavs
project_ideas:
  - title: "Dholuo-Swahili MT"
    description: "Build a Dholuo-to-Swahili translation transformer."
    difficulty: "intermediate"
  - title: "Swahili STT"
    description: "Develop a Swahili speech-to-text pipeline and measure word error rate."
    difficulty: "intermediate"
ethics:
  - "Indigenous languages carry cultural heritage; develop with native-speaker consultation."
featured: false
date_added: "2026-06-11"
---
