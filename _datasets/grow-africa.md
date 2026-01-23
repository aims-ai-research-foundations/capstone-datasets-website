---
layout: dataset
id: "grow-africa"
name: "GROW-Africa"
tagline: "African Crop Yield Data"
description: |
  500,000+ geotagged observations tracking crop yields for 25 major crops across Africa.
  Supports food security projects.
source_url: "https://datadryad.org/dataset/doi:10.5061/dryad.vq83bk42w"
source_type: "dryad"
languages:
  - { code: "num", name: "Numeric" }
countries: ["Pan-African"]
tasks: ["regression", "yield-prediction", "geospatial"]
size: "500,000+ observations"
format: ["CSV"]
license: "Open Access"
difficulty: "intermediate"
compute: "low"
colab_friendly: true
courses: ["08-capstone"]
quickstart: |
  # Load CSV from download
project_ideas:
  - title: "Maize Yield Prediction"
    description: "Predict maize yield in Kenya based on weather"
    difficulty: "intermediate"
  - title: "Fertilizer Optimization"
    description: "Optimize fertilizer usage for smallholder farmers"
    difficulty: "advanced"
ethics:
  - "Data accuracy impacts food security policy"
featured: false
date_added: "2026-01-23"
---
