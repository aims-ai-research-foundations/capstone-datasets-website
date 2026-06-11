---
layout: dataset
id: "snapshot-serengeti"
name: "Snapshot Serengeti"
tagline: "Camera-Trap Wildlife Images from Tanzania"
description: |
  Camera-trap image series from Serengeti National Park, Tanzania, for species classification and ecological monitoring; roughly three-quarters of frames are empty, creating strong class imbalance.
  The full archive is terabyte-scale, so use the provided metadata CSVs or a sampled subset for Colab.
source_url: "https://lila.science/datasets/snapshot-serengeti/"
source_type: "web"
languages:
  - { code: "en", name: "English (Metadata)" }
countries: ["TZ"]
tasks: ["image-classification", "object-detection", "ecological-monitoring"]
size: "~5TB full (use a subset)"
format: ["Image", "CSV"]
license: "CDLA-Permissive-1.0"
difficulty: "advanced"
compute: "high"
colab_friendly: false
courses: ["03-neural-networks", "08-capstone"]
quickstart: |
  # Browse metadata + download a subset from LILA (CDLA-Permissive):
  #   https://lila.science/datasets/snapshot-serengeti/
  import pandas as pd
  # annotations = pd.read_json("SnapshotSerengeti_v2.json")
project_ideas:
  - title: "Streaming Species Classifier"
    description: "Stream a sampled subset into Colab to train a species classifier."
    difficulty: "advanced"
  - title: "Imbalance with Focal Loss"
    description: "Tackle the ~76% empty-frame imbalance using focal loss."
    difficulty: "advanced"
ethics:
  - "Human images must be removed for privacy; discuss the surveillance implications of camera traps."
featured: false
date_added: "2026-06-11"
---
