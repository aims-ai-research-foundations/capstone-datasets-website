---
layout: dataset
id: "africa-climate"
name: "African Climate Change"
tagline: "Temperature Data for 5 African Countries"
description: |
  Historical daily temperature data (1980-2023) for Egypt, Tunisia, Cameroon, Senegal, Angola.
  Supports climate resilience projects.
source_url: "https://www.kaggle.com/datasets/nadiatriki/africa-climate-change"
source_type: "kaggle"
languages:
  - { code: "num", name: "Numeric" }
countries: ["EG", "TN", "CM", "SN", "AO"]
tasks: ["time-series", "forecasting", "regression"]
size: "Daily records (1980-2023)"
format: ["CSV"]
license: "Open"
difficulty: "intermediate"
compute: "low"
colab_friendly: true
courses: ["08-capstone"]
quickstart: |
  import pandas as pd

  df = pd.read_csv("Africa_climate_change.csv")
project_ideas:
  - title: "Drought Prediction"
    description: "Predict drought conditions in Senegal using LSTM"
    difficulty: "intermediate"
  - title: "Warming Trend Visualization"
    description: "Visualize warming trends in North vs Sub-Saharan Africa"
    difficulty: "beginner"
ethics:
  - "Climate data accuracy is critical for policy"
  - "State model uncertainty"
featured: false
date_added: "2026-01-23"
---
