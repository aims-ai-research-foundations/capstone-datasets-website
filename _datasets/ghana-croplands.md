---
layout: dataset
id: "ghana-croplands"
name: "Ghana Croplands Agronomy"
tagline: "Biophysical & Yield Measurements for Northern Ghana Maize"
description: |
  Crop locations, leaf area index, leaf chlorophyll concentration, and yield for maize across three agroecological zones in northern Ghana (2020-2021).
  Data files are on Zenodo (doi:10.5281/zenodo.6632083); the linked page is the peer-reviewed ESSD data descriptor.
source_url: "https://essd.copernicus.org/articles/14/5387/2022/"
source_type: "web"
languages:
  - { code: "en", name: "English (Metadata)" }
countries: ["GH"]
tasks: ["regression", "yield-prediction", "geospatial"]
size: "<100MB"
format: ["CSV", "Shapefile"]
license: "CC BY 4.0"
difficulty: "intermediate"
compute: "low"
colab_friendly: true
courses: ["03-neural-networks", "08-capstone"]
quickstart: |
  # Download the data files from Zenodo (CC BY 4.0):
  #   https://doi.org/10.5281/zenodo.6632083
  import pandas as pd
  # df = pd.read_csv("ghana_croplands.csv")
project_ideas:
  - title: "Mid-Season Yield Prediction"
    description: "Predict end-of-season maize yield from mid-season biophysical parameters with a neural network."
    difficulty: "intermediate"
  - title: "Within-Field Uncertainty"
    description: "Map yield-estimate uncertainty across fields to produce confidence intervals."
    difficulty: "advanced"
ethics:
  - "Aggregate precise farm locations before any republication to protect individual farmer data."
featured: false
date_added: "2026-06-11"
---
