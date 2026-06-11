---
layout: dataset
id: "med-convo-nig"
name: "Med-Convo-Nig"
tagline: "Simulated Nigerian-Accented Medical Consultations"
description: |
  Simulated doctor-patient tele-consultations recorded in Nigerian-accented English (about 4.2 hours of audio with transcripts), released by Intron Health.
  Gated on Hugging Face: request access before loading.
source_url: "https://huggingface.co/datasets/intronhealth/med-convo-nig"
source_type: "huggingface"
languages:
  - { code: "en", name: "English (Nigerian accent)" }
countries: ["NG"]
tasks: ["asr", "speech-recognition", "medical-transcription"]
size: "4.2 hours audio"
format: ["Audio", "Text"]
license: "CC BY-NC-SA 4.0"
difficulty: "intermediate"
compute: "medium"
colab_friendly: true
courses: ["05-finetune", "08-capstone"]
quickstart: |
  from datasets import load_dataset

  # Requires access approval on Hugging Face
  dataset = load_dataset("intronhealth/med-convo-nig", split="train")
project_ideas:
  - title: "Medical Whisper"
    description: "Fine-tune Whisper on Nigerian medical terminology to improve transcription accuracy."
    difficulty: "intermediate"
  - title: "Speaker Diarization"
    description: "Build a pipeline that separates doctor and patient speech automatically."
    difficulty: "intermediate"
ethics:
  - "Simulated data limits patient-privacy risk, but discuss ASR bias against regional accents in real care."
featured: false
date_added: "2026-06-11"
---
