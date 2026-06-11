---
layout: dataset
id: "nigeria-colposcopy"
name: "Nigerian Colposcopy Images"
tagline: "Cervical Cancer Screening Images from Nigeria"
description: |
  Multi-magnification digital colposcopy images from women at a Nigerian hospital, captured before and after acetic-acid application, for computer-aided cervical cancer screening.
  Data files are hosted on Mendeley Data (doi:10.17632/j5mhfhxrwj.1).
source_url: "https://data.mendeley.com/datasets/j5mhfhxrwj/1"
source_type: "web"
paper_url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12992497/"
languages:
  - { code: "en", name: "English (Metadata)" }
countries: ["NG"]
tasks: ["image-classification", "computer-aided-diagnosis", "computer-vision"]
size: "3,356 images"
format: ["Image"]
license: "CC BY-NC 4.0"
difficulty: "intermediate"
compute: "medium"
colab_friendly: true
courses: ["03-neural-networks", "07-accelerate", "08-capstone"]
quickstart: |
  # Download the images from Mendeley Data (CC BY-NC 4.0):
  #   https://data.mendeley.com/datasets/j5mhfhxrwj/1
  from torchvision.io import read_image
project_ideas:
  - title: "Lesion Classifier"
    description: "Train a lightweight CNN to flag normal vs abnormal cervical lesions, optimising inference for low-resource clinics."
    difficulty: "intermediate"
  - title: "Pre/Post Acetic Acid"
    description: "Compare classification accuracy on pre- vs post-acetic-acid images."
    difficulty: "intermediate"
ethics:
  - "Highly sensitive medical imagery requiring strict privacy handling."
  - "False negatives in oncology carry severe consequences; communicate model limits clearly."
featured: false
date_added: "2026-06-11"
---
