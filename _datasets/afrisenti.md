---
layout: dataset
id: "afrisenti"
name: "AfriSenti"
tagline: "Sentiment Analysis for 14 African Languages"
description: |
  AfriSenti is a multilingual sentiment analysis dataset for 14 African languages.
  It contains Twitter data annotated for positive, negative, and neutral sentiment.
  The dataset enables research on sentiment analysis in low-resource African languages.
source_url: "https://huggingface.co/datasets/masakhane/afrisenti"
source_type: "huggingface"
paper_url: "https://arxiv.org/abs/2302.08956"
languages:
  - { code: "swa", name: "Swahili" }
  - { code: "yor", name: "Yoruba" }
  - { code: "hau", name: "Hausa" }
  - { code: "amh", name: "Amharic" }
  - { code: "twi", name: "Twi" }
  - { code: "pcm", name: "Nigerian Pidgin" }
countries: ["KE", "NG", "GH", "ET", "ZA"]
tasks: ["sentiment-analysis", "text-classification"]
size: "25MB"
format: ["CSV", "JSON"]
license: "CC-BY-4.0"
difficulty: "beginner"
compute: "low"
colab_friendly: true
courses: ["02-represent-data", "03-neural-networks", "05-finetune", "08-capstone"]
quickstart: |
  from datasets import load_dataset

  # Load Hausa sentiment data
  dataset = load_dataset("masakhane/afrisenti", "hau")

  # View a sample
  print(dataset['train'][0])
  # Output: {'text': '...', 'label': 1}

  # Label mapping: 0=negative, 1=neutral, 2=positive
project_ideas:
  - title: "Social Media Sentiment Monitor"
    description: "Build a dashboard that tracks sentiment about key topics in African social media"
    difficulty: "intermediate"
  - title: "Multilingual Sentiment API"
    description: "Create an API that provides sentiment analysis for multiple African languages"
    difficulty: "intermediate"
ethics:
  - "Twitter data may not represent general population sentiment"
  - "Urban bias in social media data"
  - "Potential for misuse in surveillance"
featured: true
date_added: "2026-01-20"
---

## Additional Information

AfriSenti was created as part of the SemEval-2023 shared task on sentiment analysis for African languages. It represents one of the largest multilingual sentiment datasets for African languages.

### Label Distribution

- **Positive**: Tweets expressing positive sentiment
- **Negative**: Tweets expressing negative sentiment
- **Neutral**: Tweets with neutral or no clear sentiment

### Citation

```bibtex
@inproceedings{muhammad-etal-2023-afrisenti,
    title = "{A}fri{S}enti: A {T}witter Sentiment Analysis Benchmark for {A}frican Languages",
    author = "Muhammad, Shamsuddeen Hassan and others",
    booktitle = "EMNLP",
    year = "2023"
}
```
