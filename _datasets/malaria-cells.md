---
layout: dataset
id: "malaria-cells"
name: "Malaria Cell Images"
tagline: "Parasitized vs Uninfected Blood Cell Images (NIH)"
description: |
  Segmented blood-cell images split evenly between parasitized and uninfected cells, sourced from the US National Institutes of Health for automated malaria screening.
  A clean, classic benchmark for getting started with medical image classification.
source_url: "https://www.kaggle.com/datasets/iarunava/cell-images-for-detecting-malaria"
source_type: "kaggle"
languages:
  - { code: "en", name: "English (Metadata)" }
countries: ["Pan-African"]
tasks: ["image-classification", "computer-vision", "healthcare"]
size: "27,558 images (~339MB)"
format: ["Image"]
license: "Public Domain (NIH)"
difficulty: "beginner"
compute: "low"
colab_friendly: true
courses: ["03-neural-networks", "07-accelerate", "08-capstone"]
quickstart: |
  import kagglehub

  path = kagglehub.dataset_download("iarunava/cell-images-for-detecting-malaria")
  print(path)  # folders: Parasitized/ and Uninfected/
project_ideas:
  - title: "Baseline CNN Classifier"
    description: "Train a ResNet or Inception model to classify parasitized vs uninfected cells."
    difficulty: "beginner"
  - title: "Edge Diagnostic Demo"
    description: "Quantize the classifier and serve it through a local Streamlit app to simulate a clinic edge tool."
    difficulty: "intermediate"
ethics:
  - "This is a sanitized dataset; real blood smears carry artefacts and noise absent here."
  - "False negatives in malaria screening carry serious clinical risk."
featured: true
date_added: "2026-06-11"
---
