---
layout: dataset
id: "financial-inclusion"
name: "Financial Inclusion in Africa"
tagline: "Bank Account Prediction Dataset"
description: |
  Classification dataset to predict who in Africa is most likely to have a bank account.
  Demographics from Kenya, Rwanda, Tanzania, Uganda.
source_url: "https://zindi.africa/competitions/financial-inclusion-in-africa"
source_type: "zindi"
languages:
  - { code: "eng", name: "English (Metadata)" }
countries: ["KE", "RW", "TZ", "UG"]
tasks: ["classification", "tabular", "financial"]
size: "~33,000 rows"
format: ["CSV"]
license: "Public (Zindi Terms)"
difficulty: "beginner"
compute: "low"
colab_friendly: true
courses: ["08-capstone"]
quickstart: |
  import pandas as pd

  df = pd.read_csv("Train.csv")
  print(df.head())
project_ideas:
  - title: "Credit Scoring Proxy"
    description: "Build credit scoring proxy for unbanked populations"
    difficulty: "intermediate"
  - title: "Gender Disparity Analysis"
    description: "Analyze gender disparity in financial access"
    difficulty: "beginner"
ethics:
  - "Financial data is sensitive"
  - "Audit models for rural/female population bias"
featured: true
date_added: "2026-01-23"
---
