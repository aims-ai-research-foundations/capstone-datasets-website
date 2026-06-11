---
layout: dataset
id: "african-next-voices"
name: "African Next Voices"
tagline: "Multilingual South African Speech (3000+ hrs)"
description: |
  A large multilingual speech dataset for seven South African languages, combining scripted and unscripted speech across agriculture, health, and general-purpose domains.
  Gated on Hugging Face (accept terms first). Very large; stream or use per-language subsets.
source_url: "https://huggingface.co/datasets/dsfsi-anv/za-african-next-voices"
source_type: "huggingface"
paper_url: "https://arxiv.org/abs/2512.02201"
languages:
  - { code: "zul", name: "isiZulu" }
  - { code: "xho", name: "isiXhosa" }
  - { code: "sot", name: "Sesotho" }
  - { code: "tsn", name: "Setswana" }
  - { code: "nso", name: "Sepedi" }
  - { code: "nbl", name: "isiNdebele" }
  - { code: "ven", name: "Tshivenda" }
countries: ["ZA"]
tasks: ["asr", "speech-recognition"]
size: "3,000+ hours"
format: ["Audio", "Text"]
license: "CC BY 4.0"
difficulty: "advanced"
compute: "high"
colab_friendly: false
courses: ["05-finetune", "08-capstone"]
quickstart: |
  from datasets import load_dataset

  # Accept the dataset terms on Hugging Face first
  ds = load_dataset("dsfsi-anv/za-african-next-voices", split="train", streaming=True)
  print(next(iter(ds)))
project_ideas:
  - title: "isiZulu Whisper"
    description: "Fine-tune Whisper on a 10-hour isiZulu subset to adapt to local pronunciation."
    difficulty: "advanced"
  - title: "Scripted vs Unscripted"
    description: "Compare ASR accuracy on scripted vs unscripted speech."
    difficulty: "intermediate"
ethics:
  - "Dataset terms prohibit text-to-speech, voice cloning, or voice synthesis use."
  - "Community-collected data; respect consent and avoid biometric profiling."
featured: false
date_added: "2026-06-11"
---
