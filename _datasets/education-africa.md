---
layout: dataset
id: "education-africa"
name: "Education in Africa"
tagline: "UNESCO African Education Statistics"
description: |
  Data on education across Africa (2010-2023) including literacy rates,
  enrollment, and government expenditure.
source_url: "https://www.kaggle.com/datasets/lydia70/education-in-africa"
source_type: "kaggle"
languages:
  - { code: "num", name: "Numeric" }
countries: ["Pan-African"]
tasks: ["data-analysis", "regression", "tabular"]
size: "Tabular (Country-level)"
format: ["CSV"]
license: "Apache 2.0"
difficulty: "beginner"
compute: "low"
colab_friendly: true
courses: ["08-capstone"]
quickstart: |
  import pandas as pd

  df = pd.read_csv("Education_in_Africa.csv")
project_ideas:
  - title: "Literacy Prediction"
    description: "Predict literacy rates based on government spending"
    difficulty: "beginner"
  - title: "Country Clustering"
    description: "Cluster countries by educational development"
    difficulty: "beginner"
ethics:
  - "Data gaps may misrepresent certain regions"
featured: false
date_added: "2026-01-23"
---
