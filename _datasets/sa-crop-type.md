---
layout: dataset
id: "sa-crop-type"
name: "South Africa Crop Type"
tagline: "Fused Sentinel-1/2 Imagery for Crop Mapping"
description: |
  Fused Sentinel-1 (radar) and Sentinel-2 (multispectral) imagery for crop-field classification in South Africa's Western Cape, produced for the Radiant Earth Spot the Crop Challenge.
  10 m resolution rasters with field-identification and crop-type labels.
source_url: "https://collections.eurodatacube.com/south-africa-crops-competition/"
source_type: "web"
languages:
  - { code: "en", name: "English (Metadata)" }
countries: ["ZA"]
tasks: ["semantic-segmentation", "data-fusion", "computer-vision"]
size: "~10GB"
format: ["GeoTIFF"]
license: "CC BY 4.0"
difficulty: "advanced"
compute: "high"
colab_friendly: false
courses: ["03-neural-networks", "08-capstone"]
quickstart: |
  # Browse and download tiles from Source Cooperative / Sentinel Hub:
  #   https://collections.eurodatacube.com/south-africa-crops-competition/
  # Read the GeoTIFF rasters with rasterio
  import rasterio
project_ideas:
  - title: "Optical + Radar Fusion"
    description: "Build a model fusing Sentinel-2 optical and Sentinel-1 radar bands and show how radar penetrates cloud cover."
    difficulty: "advanced"
  - title: "Temporal Segmentation"
    description: "Segment crop fields using the multi-date image stack across the growing season."
    difficulty: "advanced"
ethics:
  - "Spatial data on smallholder fields should be handled to avoid exposing localized economic vulnerabilities."
featured: false
date_added: "2026-06-11"
---
