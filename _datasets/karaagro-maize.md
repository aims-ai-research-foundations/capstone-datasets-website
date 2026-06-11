---
layout: dataset
id: "karaagro-maize"
name: "KaraAgro AI Maize"
tagline: "Annotated Maize Disease Images from Ghana"
description: |
  Over 16,000 maize crop images with bounding-box annotations for diseases including maize streak and armyworm damage, curated by KaraAgro AI in Ghana.
  Released CC0; canonical data lives on Harvard Dataverse (doi:10.7910/DVN/CXUMDS).
source_url: "https://datasetninja.com/kara-agro-ai-maize"
source_type: "web"
languages:
  - { code: "en", name: "English (Metadata)" }
countries: ["GH"]
tasks: ["object-detection", "image-classification", "computer-vision"]
size: "16,552 images (~1.5GB)"
format: ["Image"]
license: "CC0 1.0"
difficulty: "intermediate"
compute: "medium"
colab_friendly: true
courses: ["03-neural-networks", "08-capstone"]
quickstart: |
  # Download from Harvard Dataverse (CC0)
  #   https://doi.org/10.7910/DVN/CXUMDS
  # then load the images + bounding-box annotations with your CV framework
  from torchvision.io import read_image
project_ideas:
  - title: "Disease Detector"
    description: "Train a YOLO or transformer-based detector to localise armyworm damage and frass on maize leaves."
    difficulty: "intermediate"
  - title: "Imbalance Study"
    description: "Evaluate the detector on a heavily imbalanced disease subset and practise targeted data augmentation."
    difficulty: "intermediate"
ethics:
  - "Models must not be presented to farmers as definitive guarantees without agronomic oversight."
  - "Camera-quality differences across regions can teach artefact bias rather than biology."
featured: true
date_added: "2026-06-11"
---
