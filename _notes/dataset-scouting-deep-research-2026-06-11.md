

## 1. Agricultural Intelligence and Food Security

Agriculture forms the economic backbone of Sub-Saharan Africa, yet it remains acutely vulnerable to climate volatility and pestilence. AI interventions in this sector—ranging from satellite-based crop yield prediction to smartphone-based disease diagnostics—offer immense potential. The following datasets transition students from basic computer vision tasks to complex, multi-band geospatial segmentation.

The introduction of agricultural datasets requires an understanding of diverse data modalities. Students will encounter RGB (Red, Green, Blue) images captured via basic smartphones, alongside multispectral satellite imagery that demands advanced data representation techniques.

*   **Dataset Name:** Makerere Fall Armyworm Crop Dataset
    *   **Description:** An image dataset of maize crop leaves, equally distributed across healthy plants and those devastated by the Fall Armyworm pest [cite: 1, 2].
    *   **Exact Source URL:** https://zindi.africa/competitions/makerere-fall-armyworm-crop-challenge/data [cite: 1]
    *   **Licence:** Free for educational/research use (Standard Zindi Competition License).
    *   **Size:** 376.7 MB [cite: 1].
    *   **Modality/Format:** RGB (Red, Green, Blue) Images (.zip) and CSV labels [cite: 1].
    *   **Tasks Supported:** Binary Image Classification.
    *   **Relevant Countries:** Originates in Uganda, but highly relevant to Kenya, Ghana, and Nigeria due to the pan-African impact of the Fall Armyworm [cite: 2, 3].
    *   **Difficulty:** Beginner.
    *   **Capstone Ideas:** (1) Build a mobile-deployable lightweight Convolutional Neural Network (CNN) or Vision Transformer (ViT) to classify plant health [cite: 4]. (2) Implement an inference acceleration project optimizing the model for edge devices used by smallholder farmers.
    *   **Ethical Caveats:** Minimal risk regarding human privacy. Bias may occur if the model is trained solely on Ugandan maize varieties and deployed elsewhere.

*   **Dataset Name:** KaraAgro AI Maize Dataset
    *   **Description:** A meticulously curated dataset featuring over 16,000 maize crop images with bounding box annotations for various diseases, including maize streak and armyworm damage [cite: 3].
    *   **Exact Source URL:** https://datasetninja.com/kara-agro-ai-maize [cite: 3]
    *   **Licence:** Open/Accessible for research and machine learning community [cite: 3].
    *   **Size:** ~1.5 GB (Estimated based on 16,552 high-res images).
    *   **Modality/Format:** RGB Images with bounding box annotations [cite: 3].
    *   **Tasks Supported:** Object Detection, Multi-class Image Classification.
    *   **Relevant Countries:** Ghana (primary data source) and broader Sub-Saharan Africa [cite: 3].
    *   **Difficulty:** Intermediate.
    *   **Capstone Ideas:** (1) Train an object detection model using architectures like YOLO (You Only Look Once) or a Transformer-based detector to precisely locate armyworm larvae or frass on leaves. (2) Evaluate the model's performance on a heavily imbalanced subset to practice data augmentation.
    *   **Ethical Caveats:** Models must not be presented to farmers as definitive agricultural guarantees without human agronomic oversight.

*   **Dataset Name:** Maize, Beans and Tomatoes Image Dataset for Africa
    *   **Description:** A "super dataset" aggregating images from 10 individual datasets across Sub-Saharan Africa to solve geographical diversity issues in crop disease detection [cite: 5].
    *   **Exact Source URL:** https://www.kaggle.com/datasets/osutokaggle/maize-beans-and-tomatoes-image-dataset-for-africa [cite: 5]
    *   **Licence:** Open/Kaggle standard (derived from academic sources).
    *   **Size:** ~2 GB (68,519 images) [cite: 5].
    *   **Modality/Format:** RGB Images [cite: 5].
    *   **Tasks Supported:** Image Classification (32 classes) [cite: 5].
    *   **Relevant Countries:** Nigeria, Ghana, Kenya (and others like Uganda/Tanzania) [cite: 5].
    *   **Difficulty:** Intermediate.
    *   **Capstone Ideas:** (1) Develop a unified multi-crop disease classifier using fine-tuned Vision Transformers. (2) Conduct a cross-geography generalization study (train on East African data, test on West African data).
    *   **Ethical Caveats:** Differences in camera quality across regions could lead the model to learn artifact biases rather than actual biological features.

*   **Dataset Name:** CV4A Kenya Crop Type Competition Dataset
    *   **Description:** Multispectral Sentinel-2 satellite imagery of agricultural fields in Kenya, labeled by crop type to support automated agricultural monitoring [cite: 6, 7].
    *   **Exact Source URL:** https://source.coop/radiantearth/african-crops-kenya-02 [cite: 7]
    *   **Licence:** CC-BY-SA-4.0 [cite: 7].
    *   **Size:** ~5-10 GB (Depending on tile downloads).
    *   **Modality/Format:** 13-band multi-spectral raster data in GeoTIFF (Geographic Tagged Image File Format) and raster labels [cite: 7].
    *   **Tasks Supported:** Semantic Segmentation, Time-Series Classification.
    *   **Relevant Countries:** Kenya [cite: 7].
    *   **Difficulty:** Advanced.
    *   **Capstone Ideas:** (1) Use 1D convolutions or temporal Transformers on the time-series spectral data to classify crop types over a growing season. (2) Analyze the impact of cloud cover probability layers on model accuracy.
    *   **Ethical Caveats:** Satellite monitoring of private smallholder farms raises macro-level privacy questions regarding state or corporate surveillance of civilian food production.

*   **Dataset Name:** South Africa Crop Type Competition Dataset
    *   **Description:** Fused Sentinel-1 (Radar) and Sentinel-2 (Multispectral) imagery for classifying crop fields in South Africa's Western Cape [cite: 8, 9].
    *   **Exact Source URL:** https://collections.eurodatacube.com/south-africa-crops-competition/ [cite: 8]
    *   **Licence:** CC BY 4.0 [cite: 8].
    *   **Size:** ~10 GB.
    *   **Modality/Format:** Raster imagery (10m resolution) with field identification labels [cite: 8].
    *   **Tasks Supported:** Semantic Segmentation, Multimodal Data Fusion.
    *   **Relevant Countries:** South Africa [cite: 8].
    *   **Difficulty:** Advanced.
    *   **Capstone Ideas:** (1) Build a multimodal fusion model that combines optical (Sentinel-2) and synthetic aperture radar (Sentinel-1) data to predict crop types, demonstrating how radar penetrates cloud cover.
    *   **Ethical Caveats:** Similar to the CV4A dataset; spatial data must be handled respectfully to avoid exploiting localized economic vulnerabilities.

*   **Dataset Name:** Location, Biophysical and Agronomic Parameters for Croplands in Northern Ghana
    *   **Description:** A highly detailed agronomic dataset containing crop locations, leaf area index, chlorophyll concentrations, and yield measurements for Ghanaian maize [cite: 10, 11].
    *   **Exact Source URL:** https://zenodo.org/records/6632083 [cite: 10, 12]
    *   **Licence:** Creative Commons Attribution 4.0 International (standard for Zenodo).
    *   **Size:** < 100 MB (Tabular/Geospatial vectors).
    *   **Modality/Format:** Tabular, Polygons/Shapefiles [cite: 10, 11].
    *   **Tasks Supported:** Regression (Yield Prediction), Spatial Analysis.
    *   **Relevant Countries:** Ghana [cite: 10, 11].
    *   **Difficulty:** Intermediate.
    *   **Capstone Ideas:** (1) Predict end-of-season crop yield based on mid-season biophysical parameters using deep neural networks. (2) Map uncertainties within fields to provide confidence intervals for yield estimates.
    *   **Ethical Caveats:** Requires ensuring that precise farm locations are aggregated if published to protect individual farmer economic data.

**Synthesis of Agricultural Datasets:**
These datasets allow students to progress from standard 3-channel RGB image processing to highly complex, multi-band, temporal geospatial arrays. This progression perfectly encapsulates the DeepMind curriculum's focus on "data representation," forcing students to think deeply about how to tokenize and embed non-traditional data structures (like 13-band Sentinel-2 pixels) for Transformer architectures.

## 2. Healthcare Diagnostics and Mobile Medical AI

The ratio of medical specialists to patients in Sub-Saharan Africa is critically low. Consequently, AI applications focused on edge-deployable diagnostics and medical triage are highly relevant. The following datasets bridge the gap between traditional computer vision and the emerging field of Medical Large Language Models (Med-LLMs).

Medical data is notoriously difficult to source due to privacy regulations. The datasets selected here have been explicitly anonymized or crowdsourced with open licenses, providing a safe sandbox for undergraduate exploration.

*   **Dataset Name:** AfriMed-QA
    *   **Description:** The first large-scale, multi-specialty Pan-African medical Question-Answering dataset designed to evaluate and develop equitable LLMs for African healthcare [cite: 13, 14].
    *   **Exact Source URL:** https://huggingface.co/datasets/intronhealth/afrimedqa_v2 [cite: 15]
    *   **Licence:** CC BY-SA 4.0 [cite: 15].
    *   **Size:** < 50 MB (15,000 QA pairs) [cite: 13, 15].
    *   **Modality/Format:** Tabular/Text (CSV) [cite: 15].
    *   **Tasks Supported:** Question Answering, LLM Fine-tuning, Bias Evaluation [cite: 14, 15].
    *   **Relevant Countries:** Pan-African (includes Nigeria, Ghana, Kenya, South Africa) [cite: 14, 15].
    *   **Difficulty:** Intermediate to Advanced.
    *   **Capstone Ideas:** (1) Fine-tune a small open-source LLM (e.g., Llama-3-8B) on this dataset and evaluate its reduction in hallucination rates compared to a zero-shot base model. (2) Perform an alignment project using RLHF/DPO (Reinforcement Learning from Human Feedback / Direct Preference Optimization) to ensure the model responds appropriately to sensitive local medical queries.
    *   **Ethical Caveats:** Explicitly state in projects that the resulting model is a research artifact and strictly **not** for clinical use.

*   **Dataset Name:** Ghana Maternal Health Q&A Dataset (English & Code-Mixed)
    *   **Description:** Contains 20,000 unique question-answer pairs focused on maternal health in Ghana, available in both English and authentic Ga-English code-mixed communication [cite: 16, 17].
    *   **Exact Source URL:** https://www.kaggle.com/datasets/ghanaairesnet/ghana-maternal-health-q-and-a-dataset-ga-english [cite: 16]
    *   **Licence:** CC BY-NC-SA 4.0 [cite: 16].
    *   **Size:** ~7 MB [cite: 17].
    *   **Modality/Format:** Text (CSV) [cite: 16, 17].
    *   **Tasks Supported:** Chatbot Training, NLP on Code-Mixed Languages [cite: 16].
    *   **Relevant Countries:** Ghana [cite: 16].
    *   **Difficulty:** Intermediate.
    *   **Capstone Ideas:** (1) Develop a Retrieval-Augmented Generation (RAG) system for maternal health queries that handles code-switched (Ga-English) inputs. (2) Analyze tokenization inefficiencies when processing code-mixed African languages through standard Western tokenizers (where subword fragmentation often destroys semantic meaning in highly agglutinative African languages).
    *   **Ethical Caveats:** Maternal health is highly sensitive. The dataset developers warn that this is for educational use only and lacks clinical validation for direct patient care [cite: 16].

*   **Dataset Name:** African Medical Records (AMR) – Nigerian Handwritten Medical Records
    *   **Description:** A benchmark dataset mapping diverse Nigerian clinical handwriting to digital ground truths, meant to support Optical Character Recognition (OCR) in healthcare [cite: 18].
    *   **Exact Source URL:** https://huggingface.co/datasets/Nigeria-Health-data-OCR-pipeline/African-Medical-Records [cite: 18]
    *   **Licence:** Creative Commons Attribution 4.0 (CC BY 4.0) [cite: 18].
    *   **Size:** ~1-5 GB (Growing image repository).
    *   **Modality/Format:** Paired Image and Text [cite: 18].
    *   **Tasks Supported:** OCR, Clinical Text Extraction [cite: 18].
    *   **Relevant Countries:** Nigeria [cite: 18].
    *   **Difficulty:** Advanced.
    *   **Capstone Ideas:** (1) Build an end-to-end multi-modal pipeline that takes an image of a handwritten prescription, performs OCR, and uses an LLM to extract the active drug and dosage.
    *   **Ethical Caveats:** Handwriting contains biometric nuances; ensuring complete de-identification of patient names in the synthesized records is paramount.

*   **Dataset Name:** Nigerian Colposcopy Images for Cervical Cancer
    *   **Description:** 3,356 high-resolution digital colposcopy images collected from women at a Nigerian hospital, captured before and after acetic acid application [cite: 19].
    *   **Exact Source URL:** https://pmc.ncbi.nlm.nih.gov/articles/PMC12992497/ [cite: 19] (Data hosted via linked Mendeley Data).
    *   **Licence:** CC BY-NC 4.0 [cite: 19].
    *   **Size:** ~2-5 GB.
    *   **Modality/Format:** High-resolution JPEG images [cite: 19].
    *   **Tasks Supported:** Image Classification, Computer-Aided Diagnosis [cite: 19].
    *   **Relevant Countries:** Nigeria [cite: 19].
    *   **Difficulty:** Intermediate.
    *   **Capstone Ideas:** (1) Train a lightweight CNN to classify normal vs. abnormal cervical lesions, focusing on optimizing inference speed for low-resource clinic deployment.
    *   **Ethical Caveats:** Highly sensitive medical imagery. Must be handled with strict adherence to privacy, and students must understand the gravity of false negatives in oncology.

*   **Dataset Name:** Med-Convo-Nig
    *   **Description:** A curated dataset of 25 simulated doctor-patient tele-consultations conducted in Nigerian-accented English [cite: 20].
    *   **Exact Source URL:** https://huggingface.co/datasets/intronhealth/med-convo-nig [cite: 20]
    *   **Licence:** CC BY-NC-SA 4.0 [cite: 20].
    *   **Size:** < 1 GB (4.2 hours of audio) [cite: 20].
    *   **Modality/Format:** Audio (.wav) and Text Transcripts [cite: 20].
    *   **Tasks Supported:** Automatic Speech Recognition (ASR), Medical Transcription [cite: 20].
    *   **Relevant Countries:** Nigeria [cite: 20].
    *   **Difficulty:** Intermediate.
    *   **Capstone Ideas:** (1) Fine-tune Whisper on Nigerian medical terminology to improve transcription accuracy. (2) Design a speaker-diarization pipeline to automatically separate the doctor's speech from the patient's speech.
    *   **Ethical Caveats:** Simulated data mitigates patient privacy risks, but students should discuss the implications of ASR bias against heavy regional accents in real healthcare.

*   **Dataset Name:** Malaria Cell Images Dataset
    *   **Description:** A classic, widely-used dataset containing 27,558 images of parasitized and uninfected cells for automated malaria detection [cite: 21, 22, 23].
    *   **Exact Source URL:** https://www.kaggle.com/datasets/iarunava/cell-images-for-detecting-malaria [cite: 22]
    *   **Licence:** Public Domain (sourced from NIH) [cite: 21, 22].
    *   **Size:** ~339 MB [cite: 22].
    *   **Modality/Format:** RGB Images [cite: 21].
    *   **Tasks Supported:** Binary Image Classification [cite: 21, 24].
    *   **Relevant Countries:** Pan-African applicability (Malaria heavily impacts all four target nations) [cite: 23].
    *   **Difficulty:** Beginner.
    *   **Capstone Ideas:** (1) Build a baseline ResNet (Residual Network) or Inception (a deep convolutional neural network architecture) model to classify cells [cite: 23, 24], and deploy it via a local Streamlit web application to simulate edge diagnostic tools.
    *   **Ethical Caveats:** A highly sanitized dataset; students must recognize that real-world blood smears contain artifacts and noise not present in this clean data.

**Synthesis of Healthcare Datasets:**
The transition from identifying malaria in a sanitized cell image to managing code-mixed, conversational medical queries reflects the spectrum of AI in healthcare. These datasets afford students the opportunity to tackle model alignment—ensuring that an LLM providing medical triage does not hallucinate fatal advice—and inference acceleration, a hard requirement for tools meant to run on battery-powered devices in rural clinics.

## 3. Climate Resilience and Disaster Vulnerability

Climate change poses an existential threat to African infrastructure and agriculture. Datasets mapping flood risks, pluvial occurrences, and ecological shifts provide the raw material for predictive models that can literally save lives.

Spatial and topological data introduce students to non-standard feature engineering, requiring them to merge topographical, meteorological, and demographic variables.

*   **Dataset Name:** Ibadan Metropolis Pluvial Flood Dataset
    *   **Description:** A highly localized dataset containing 144,401 records of conditioning variables (elevation, rainfall, drainage) to predict pluvial flood susceptibility in Ibadan, Nigeria [cite: 25, 26].
    *   **Exact Source URL:** https://www.kaggle.com/datasets/oladapokayodeabiodun/pluvial-flood-dataset [cite: 26]
    *   **Licence:** Open Database Contents [cite: 26].
    *   **Size:** 11.81 MB [cite: 26].
    *   **Modality/Format:** Tabular (XLSX/CSV) [cite: 26].
    *   **Tasks Supported:** Multiclass Classification, Predictive Geospatial Analysis [cite: 26].
    *   **Relevant Countries:** Nigeria [cite: 26].
    *   **Difficulty:** Intermediate.
    *   **Capstone Ideas:** (1) Train an ensemble neural network to classify geographic grids by their susceptibility to flooding based on topological and meteorological features. (2) Analyze feature importance to advise local city planners on mitigation priorities.
    *   **Ethical Caveats:** Flood risk prediction can impact real estate values and insurance premiums, potentially harming economically vulnerable populations living in high-risk zones.

*   **Dataset Name:** Flash Flood Events in West Africa (2013-2023)
    *   **Description:** A master compilation of flash flood events integrated from global databases, mapped against river discharge monitoring stations in West Africa [cite: 27].
    *   **Exact Source URL:** https://iro.uiowa.edu/esploro/outputs/dataset/Flash-Flood-Events-in-West-Africa/9984944728302771 [cite: 27]
    *   **Licence:** Open Access (Zenodo Standard / DOI: 10.5281/zenodo.15824712) [cite: 28].
    *   **Size:** < 50 MB.
    *   **Modality/Format:** Tabular (XLSX) [cite: 27].
    *   **Tasks Supported:** Time-Series Analysis, Risk Assessment [cite: 27].
    *   **Relevant Countries:** Ghana, Nigeria [cite: 27].
    *   **Difficulty:** Beginner to Intermediate.
    *   **Capstone Ideas:** (1) Correlate historical flood dates with historical precipitation data to build an early-warning predictor model.
    *   **Ethical Caveats:** Ensuring that disaster data is not purely academic but translates to actionable community warnings.

*   **Dataset Name:** Snapshot Serengeti (Subset)
    *   **Description:** A massive database of camera trap images from Tanzania, vital for tracking ecological shifts and multi-species dynamics in response to climate changes [cite: 29, 30, 31].
    *   **Exact Source URL:** https://lila.science/datasets/snapshot-serengeti/ [cite: 29]
    *   **Licence:** Community Data License Agreement [cite: 29].
    *   **Size:** *WARNING:* Full dataset is ~5 TB [cite: 32]. Students **MUST** use the provided metadata CSVs or download a small sampled subset to fit within Colab limits.
    *   **Modality/Format:** Images and JSON/CSV annotations [cite: 29].
    *   **Tasks Supported:** Image Classification, Object Detection, Ecological Monitoring [cite: 29].
    *   **Relevant Countries:** Bordering Kenya (Ecosystem overlaps heavily with Kenyan conservation efforts).
    *   **Difficulty:** Advanced (due to data handling logistics).
    *   **Capstone Ideas:** (1) Build a data-loader pipeline that streams a subset of images directly into Colab to train a species classifier. (2) Address the massive class imbalance (76% of images are "empty") using focal loss techniques (a method of down-weighting the loss assigned to easy-to-classify, highly frequent examples to force the model to focus on rare, hard-to-classify instances) [cite: 29].
    *   **Ethical Caveats:** Removing human images from camera traps is required for privacy; students must understand the implications of inadvertent surveillance [cite: 29].

**Synthesis of Climate Datasets:**
These datasets push students to deal with imbalanced data (rare catastrophic floods, empty camera trap images) and spatial topology. Capstones built here directly feed into policy-making and environmental governance, fulfilling the AI-for-Social-Good mandate.

## 4. Financial Inclusion & Credit Scoring

Access to credit remains a significant barrier to upward mobility in Africa. Because vast swathes of the population are "unbanked," traditional credit scoring fails. AI models utilizing alternative data (mobile money usage, demographics) represent a paradigm shift in financial inclusion [cite: 33, 34, 35].

Financial data is largely proprietary, making high-quality, open-source datasets rare. The following selected datasets are explicitly engineered for machine learning competitions and academic research.

*   **Dataset Name:** Financial Inclusion in Africa
    *   **Description:** Demographic and financial service usage data for ~33,600 individuals extracted from Finscope surveys, aimed at predicting bank account ownership [cite: 36, 37].
    *   **Exact Source URL:** https://www.kaggle.com/competitions/financial-inclusion-in-africa/data [cite: 36]
    *   **Licence:** Free for educational/research use (Competition Data).
    *   **Size:** 1.2 MB [cite: 36].
    *   **Modality/Format:** Tabular (CSV) [cite: 36].
    *   **Tasks Supported:** Binary Classification, Exploratory Data Analysis [cite: 37].
    *   **Relevant Countries:** Kenya, Rwanda, Tanzania, Uganda [cite: 36].
    *   **Difficulty:** Beginner.
    *   **Capstone Ideas:** (1) Train a Multi-Layer Perceptron (MLP) or XGBoost (Extreme Gradient Boosting) model to predict the likelihood of a citizen owning a bank account [cite: 36]. (2) Perform an exhaustive feature importance analysis to understand demographic drivers of financial exclusion [cite: 37].
    *   **Ethical Caveats:** Strong potential for demographic bias. Models may inadvertently learn to discriminate based on gender, rural location, or age. Students must implement fairness metrics.

*   **Dataset Name:** African Credit Scoring Challenge Dataset
    *   **Description:** Designed to predict loan defaults and build a credit scoring function using alternative data for African financial markets [cite: 38].
    *   **Exact Source URL:** https://zindi.africa/competitions/african-credit-scoring-challenge [cite: 38]
    *   **Licence:** Zindi Competition License (Permits academic use).
    *   **Size:** < 50 MB.
    *   **Modality/Format:** Tabular (CSV) [cite: 38].
    *   **Tasks Supported:** Binary Classification, Probability Calibration [cite: 38].
    *   **Relevant Countries:** Pan-African [cite: 38].
    *   **Difficulty:** Intermediate.
    *   **Capstone Ideas:** (1) Design a neural network that predicts loan default probability and mathematically transforms that probability into a readable 300-850 "Credit Score" scale [cite: 38].
    *   **Ethical Caveats:** Algorithmic redlining. If a model denies credit based heavily on geographic proxies, it perpetuates systemic poverty—a phenomenon observed in real-world contexts where alternative scoring inadvertently penalized marginalized demographics by equating minority-heavy postal codes with high default risk. Capstones should mandate a "bias audit" phase.

**Synthesis of Financial Datasets:**
While the dataset sizes are small, the complexity lies in the domain. Teaching neural network training on tabular data requires careful normalization, embedding of categorical variables, and handling class imbalances (as defaults are typically the minority class). Crucially, this domain forces students to grapple with the real-world implications of model alignment and fairness.

## 5. Educational Analytics

Data-driven education policies can identify at-risk students and optimize resource allocation. While African student performance data is sparse, these tabular datasets provide excellent test beds for predictive modeling.

*   **Dataset Name:** Data Science Nigeria Student Academic Performance
    *   **Description:** Captures the performance of randomly selected students along with demographic, social, and school-related features (e.g., travel time, family support) to predict academic scores [cite: 39].
    *   **Exact Source URL:** https://www.kaggle.com/c/datasciencenigeria/data [cite: 39]
    *   **Licence:** Free for educational use.
    *   **Size:** < 5 MB [cite: 39].
    *   **Modality/Format:** Tabular (CSV) [cite: 39].
    *   **Tasks Supported:** Regression, Classification [cite: 39].
    *   **Relevant Countries:** Nigeria [cite: 39].
    *   **Difficulty:** Beginner.
    *   **Capstone Ideas:** (1) Build a dense neural network to predict final student scores. (2) Analyze the impact of parent cohabitation status or travel time on performance, using SHAP (SHapley Additive exPlanations) values to explain model predictions to educators.
    *   **Ethical Caveats:** Predicting a student will fail based on their socio-economic background can lead to a self-fulfilling prophecy if educators lower their expectations based on algorithm outputs.

*   **Dataset Name:** Education in Africa (Macro-level)
    *   **Description:** A macro-economic dataset compiled from UNESCO and the World Bank detailing primary, secondary, and tertiary education statistics (expenditures, attendance) for all African countries from 2010 to 2023 [cite: 40].
    *   **Exact Source URL:** https://www.kaggle.com/datasets/lydia70/education-in-africa [cite: 40]
    *   **Licence:** Apache 2.0 [cite: 40].
    *   **Size:** 48.63 kB [cite: 40].
    *   **Modality/Format:** Tabular / Time Series (CSV) [cite: 40].
    *   **Tasks Supported:** Time Series Forecasting, Data Visualization [cite: 40].
    *   **Relevant Countries:** Nigeria, Ghana, Kenya, South Africa (Pan-African) [cite: 40].
    *   **Difficulty:** Beginner.
    *   **Capstone Ideas:** (1) Forecast future out-of-school children rates based on historical government expenditure trends using recurrent architectures such as LSTMs (Long Short-Term Memory) or Time-Series Transformers.
    *   **Ethical Caveats:** Missing values are highly prevalent in macroeconomic African data [cite: 40]. Imputing data incorrectly could lead to flawed policy recommendations.

**Synthesis of Educational Datasets:**
These datasets are excellent for beginners focusing on the fundamentals of neural network training. They provide a smooth entry point into data representation (encoding categorical variables like 'urban vs. rural') and emphasize the necessity of interpretability.

## 6. Under-Covered African Language & Multimodal Gems

While the current DeepMind catalogue is rich in text-based NLP, expanding into Automatic Speech Recognition (ASR) and multimodality is critical. African languages are highly tonal and diverse, making voice-enabled technology an active frontier.

*   **Dataset Name:** African Next Voices (ZA-ANV)
    *   **Description:** The largest publicly available multilingual speech dataset for South African languages, combining scripted and unscripted daily-life speech [cite: 41, 42].
    *   **Exact Source URL:** https://huggingface.co/datasets/dsfsi/za-african-next-voices (Via DSFSI Registry) [cite: 41]
    *   **Licence:** Open/Permissive (Custom, requires attribution) [cite: 43].
    *   **Size:** *WARNING:* 3000 hours of audio [cite: 41]. Exceeds 20GB. Must be streamed or downloaded in language-specific subsets.
    *   **Modality/Format:** Audio and Text [cite: 42].
    *   **Tasks Supported:** Automatic Speech Recognition (ASR), Speech-to-Text [cite: 41].
    *   **Relevant Countries:** South Africa [cite: 41].
    *   **Difficulty:** Advanced.
    *   **Capstone Ideas:** (1) Fine-tune the Whisper architecture on a 10-hour subset of isiZulu to adapt it to local pronunciation. (2) Explore the differences in model accuracy between scripted and unscripted speech [cite: 42].
    *   **Ethical Caveats:** Community-driven data collection requires strict adherence to ethical usage; voice models should not be used for deepfake generation or unauthorized biometric profiling.

*   **Dataset Name:** KenCorpus
    *   **Description:** A comprehensive text and speech corpus for three major under-resourced languages in Kenya: Swahili, Dholuo, and Luhya [cite: 44, 45].
    *   **Exact Source URL:** https://kencorpus.maseno.ac.ke/transcription-data/ [cite: 46]
    *   **Licence:** Public Domain / Open Academic [cite: 45].
    *   **Size:** 177 hours of speech / 5.6M words [cite: 44]. Under 20GB (manageable subsets).
    *   **Modality/Format:** Audio (.wav) and Text Transcripts [cite: 46].
    *   **Tasks Supported:** Machine Translation, POS (Part-of-Speech) tagging, Question Answering, ASR [cite: 45].
    *   **Relevant Countries:** Kenya [cite: 44].
    *   **Difficulty:** Intermediate.
    *   **Capstone Ideas:** (1) Build a Dholuo-to-Swahili translation Transformer model. (2) Develop a localized Swahili speech-to-text pipeline, measuring word error rate against baseline models [cite: 45].
    *   **Ethical Caveats:** Indigenous languages carry deep cultural heritage. Models should be developed in consultation with native speakers to respect semantic and cultural nuances.

*   **Dataset Name:** Mozilla Common Voice Scripted Speech (Swahili / Hausa)
    *   **Description:** A massive crowdsourced collection of read speech recordings designed to teach machines how real people speak [cite: 47, 48].
    *   **Exact Source URL:** https://mozilladatacollective.com/datasets/cmn3ailbd008nmb07mjyu3xro (Swahili example) [cite: 48]
    *   **Licence:** CC-0 (Public Domain) [cite: 49].
    *   **Size:** Swahili is ~20.87 GB (Borderline Colab limit) [cite: 48]. Hausa is smaller (3.43 hours) [cite: 49].
    *   **Modality/Format:** Audio (MP3) and Transcripts [cite: 48].
    *   **Tasks Supported:** ASR, Accent classification [cite: 48].
    *   **Relevant Countries:** Kenya (Swahili), Nigeria (Hausa) [cite: 47, 48].
    *   **Difficulty:** Intermediate.
    *   **Capstone Ideas:** (1) Train an ASR model on Hausa and evaluate its performance disparities across different self-declared genders and age groups [cite: 48, 49].
    *   **Ethical Caveats:** Bias mitigation is key here; if a language dataset lacks female voices (e.g., the Hausa v8.0 subset noted 0 female speakers [cite: 49]), the resulting AI will perform poorly for women.

**Synthesis of Language Datasets:**
Speech processing requires heavy data manipulation. Students will learn how to convert waveforms into spectrogram embeddings, pushing their understanding of data representation. Furthermore, identifying and rectifying biases in voice data directly addresses the program's module on model alignment.

## 7. Datasets to Avoid (The "Mirage" Data)

When scouting datasets for rigorous academic capstones, quantity often masks poor quality. Lecturers should steer students away from datasets that appear highly relevant in search engines but fail basic scientific criteria. The following should be explicitly **avoided**:

1.  **"Kenyan Secondary School Results" by Clinton Moshe:** 
    *   *Why to avoid:* While it looks like a perfect educational analytics dataset, the author explicitly notes it is a "fictionalized" dataset [cite: 50]. Training models on synthetic, fictional data will yield zero real-world insights and is inappropriate for a serious capstone project attempting to address real socio-economic issues.
2.  **"Financial Inclusion in Africa" by Sarah Mabrouk:**
    *   *Why to avoid:* This Kaggle dataset has an extremely low usability score (2.94), lacks basic metadata, features undocumented columns, and has an "Unknown" license [cite: 51]. It relies solely on aggregate percentages rather than raw data, making predictive modeling impossible.
3.  **"Malaria in Africa" by Lydia70:**
    *   *Why to avoid:* Found at `https://www.kaggle.com/datasets/lydia70/malaria-in-africa`, this Kaggle dataset is scraped together with minimal rigorous documentation, an unknown or ambiguous licensing model, and frequently results in truncated or broken CSV files across updates [cite: 52]. Students should use verified, peer-reviewed medical data instead.
4.  **"Malaria Trends in Ghana and Nigeria Dataset" by Houd Fadilla:**
    *   *Why to avoid:* Found at `https://www.kaggle.com/datasets/houdlillianmaltiti/malaria-trends-in-ghana-and-nigeria-dataset`, this dataset relies on severely truncated aggregations rather than usable machine-learning-ready records [cite: 53]. Relying on ambiguous health data derivations prevents training models that meet scientific standards. Verified data (like the NIH Cell Images [cite: 21] or AfriMed-QA [cite: 15]) must be prioritized to prevent training models on corrupted or legally ambiguous health data.

**Sources:**
1. [zindi.africa](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGsDLosx1lunzYAHelL1Wa4phIRQ8BUN5i_H13Djw-lDave3Z5gYBtmzld1sDGfT8mAwAYGu7qPn6LVtIiZkAL9FTj2eMmRpiyO79injNW0xp5-oAXqaNOUzzkBXCyMIk7olJirN9rz9HamExC4tYhq4drK0aMPoQNHrAkAS-oAbTA7)
2. [zindi.africa](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFiE_L5McFuUyW9TJMyccBJCmTL0YXufWMLFwflhjH3OhMVeA-6LMz6F1dU3VtnXyNzXMX-McfZKM_L5ZjwaNF5U15c6twmuRXKm3z15buZfqEbOVxGLq_Y-0rsEccHgPvKQETP-QbJ4eXkadwH5NFcw3w0I-D3Yg-_hgI9MA==)
3. [datasetninja.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFmPSr_2RowTrZdXxDntxCe0Y2WylmN0ZjQiII1RXmPGfc9qI7HRsKsPI-WIalRDC3P8ERwEJ5d5WZXtT8SdkhglOiNPir9c6DSq4gZ-V10eQFwNe8gK8SW9nMLEkTeqGM1)
4. [medium.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGtZ3G3OJHawc_0QaKh8QYiHrPFq4-7Ry4Sc_QCfzgsKW-VsWSJZbzFLcWiOxXjKW3YmbKgJrPeTfUmnkoHVS_7vH4qD3bOSPZZqA8n_KOwjQVtEHPfo29eP_Uy-LB2lHLCL0Fv1TpZspJU7Xm3BUAksw-5kZN44YEh532OtlAA0JZNcbMqsu6WpFvjerlVxjWo5yA6PkPuYLW1jgaxM7K-3frQPAoY9uernchZe-qfEFNn-g==)
5. [kaggle.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF_1uKSqe9uMbybpZqcbds_JYx-ZuUxF_wumJrV1hm7b80xb0M22wmfTGnADvjW7x8AznondVRfmyVbXXqM1gEOZpbvjkKDFpTziOwanmQgGCY1l3xqXudBwkUrMfnW5jDe66Gi5l3lgnKVIPvCHGGhGxGGIcCZc57we1ViY00I2dArrpJpx_qqim68lm5Lp2GIdhk=)
6. [kaggle.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHdzuPR0XAQrah7vlB_UsdWDXFFN3WG41DTiBPq-2lX_t5AwaqFUeT35Hvn-hOM8Otc_OKQOaQXhr6z6aIUpPJUfnJLiWHGmvo5rBOU-fj0x_gqPm99wPz6XtFP)
7. [nasa.gov](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGcaXuT3eKv01B8k0dUqIAfsv3qIDJJm5TIya7qWtrnMtDwRYBdsNqES3dMdFkpW4yZXlHdJkS72RRmk5x7YKXVUlaqWsdhu84nQcC5XkiSckuxMbxQoi3HM4a-sX9CFeqeqFbYv1dW4tDn5cVVLa4Ty4xRy5CKCr2pX1o=)
8. [eurodatacube.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH3CwifaN2IPV2eI28e-MoRhO-Hfxg1cb1kKwlqMVciL8CH_Kus37Co5gx7n4rU-gQtrAeQXZTNwbbXFZ3wWhgraTabnBD0BV5U9GXIxX-8I368-LSBlxY8k1hG0WyH5NXYucE5bfaHG0sAnFLf26WhFdN6s2awfgCqpw==)
9. [nasa.gov](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGjfj-pLzZxyzeXqOXyH-NtJNZ9NrwwHLp8m_EwM8m3RiIY6y6ietgMtvti8Q-TnqWhk4dAvB1ceEmISbTT_bBjgg5NRV0rz-D8XvrBdEGkPqiBAZ9D9C5dGhnTiuywivHGzfZjag7GOT5HeSzg05riJl6mW2eg64yc8LE=)
10. [earthobservations.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG5yNCUFkqrCwLtXvr47Sn3e92COR29k-dC0kHL4f5gOh__zmj_52vgLulbBV8iSxnySJYIatF0u-_eTqg5CAOFOd1RCdE0qpRckPQoUKqoLWxAabwoIdeawzf58GJdxA472hh6Bz5B3ryCKJ3I)
11. [copernicus.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHkNurtszPBcjYuyRvPvuqQfZn4HRS1oza6Dpf-Z0ukXzJ0289rqK5lEjkMwWn8Kulv1WLRmppgDyuxB1s_Z6P3ctnjC4UyZIJrrqYDFXWKBZ1FE5b2myRjfjRYjY1dTvG-XS2tWA1WFA==)
12. [zenodo.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEEo-n3OudaQrvBRFXXG0xUBSaZgMOhIdvPg_hPQIquCvCTTZ9PF8X0_Bv1Xbo7VNgWz6mQ-ihqagyAxRR6CUBbXHMSozeIFrixwUTikLU4nELeYTF4mNft)
13. [research.google](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEN230SwbmwWafUC9aaGTy3FUXNn4AMPTnyp7AZ119luXiSx1i1uPXWOjtBvxvPAZJiiYIaZUUHxXANK85PJTksKZkGhm1j1q0mD5Y6k-6sr-ii7BD1dL72EQwOKp5FkE92eZVsowLEt5vGn2rDEBIi24JjoHYiha3oFjePbQnXbrcKsTA8NfEmqSl-Xb__51LAn_lz9e-odOLCxUfEvho6AEajokxW_DV1)
14. [aclanthology.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEC1tJ1bgTvnYb11xH1oDDxT4wOtNUF9ZAjo4_KKrbihNPj4gCQIxSBM8yyB6qlSvqLoRGIbyoSR0cscvD8A7MJJAKaHX0bhglwWZmfSDRZzKDOkQTEElM9-dfcF5FoqJhyDZM=)
15. [huggingface.co](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGpu2Eiwo1fQxGG4OnPtg9EsY6zBA0_es1KNwxupy2W-qI5mJdscIsE6jYMP85mdnm_bbL7_kHuC-UQq-6txoj1UcilYxAMlhtyG-VdOvRPHelgarYxXM7-1wQktVupzvATw-9DWlUymQKEw5Xoz9Q=)
16. [kaggle.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFK7V6L4ANzINxihRpNyVYIVUrrnPMo7T-k0sVG0Mz5MH2bODyXPNC43G_JyOc-zrlOmc2SDJNndyiKyb9wJsimk7MJE45T0EoL0sc9_-qDhBNi9fovd6DnjB52ffRx-yiCNFIdRP6Y98zeJqm7m6TTR9fzBTAs1yZjwjDA9N0MVXh1n7OWVFDRWePmn4ECxxi_oUwO)
17. [kaggle.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGjwGVzar7i2gjsRfmuYgqhm_bQVTpeTkkOGr0mc6pwawFLq5Qe91mLOaSzT90dNX9VolDiTFnYec4rKvz5Z1JbCb0FBRD-l7VOAnTNbgqLVpD6EOjHVgT2-hz4hpgZCoUGqXj99HOswrmOtnusFIESjAsXKFslFdLrmLmRhIT4CrRvHKgX9cpeuiu2jACemxvS)
18. [huggingface.co](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHbGLvNhrreCkVPSU8qeI9UHzKnUlninyzaxydG9AG3pmcLtbUC2gj17nX15GhB4FGTn4GLk7O4irVKX1tI3qL_YcnQw5joj1ueph80kot-6wdqRaxZs2DW_k84FN5dp3nZ9EuTw8B7l0jiqg5rMaDx1ejftS-7xM6chy1MwTqvLIpX4R2Agqp0smGKICUE)
19. [nih.gov](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEi-WcPhXkNatfgcvQkqE22xv_WQt07d-TS-08cd27Z1mBHhzi2npNOB2UxmkWYIe4X3ZtejSf786mMaoejOLA8DrPuVOHaeR8gOKSex758arfKPcMvo_977q5EiLixH1WzChlPoMvoxQ==)
20. [huggingface.co](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFQYZAJrI1xw4iSETsK4aK5pjcITySeeWdIcBUtzc7zr7ZpWg7xo0VujDarcOWKZ2M4c9WoGo2LmagpT65NDx0hE0HQO3WiMXYanItTKvKd2OfxcdAG7n4CcbmvHwCvdwr-VDZD39OD5iCV4yzTwtda)
21. [github.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGTVMAbtiyzLWEVdl8yNxrglkGrxSrnCsNoCwJQgpS6z-ge7lMyZIIbuSWbQDVapRYoi6SNAEEpe-41x_IPCSUwFq9BmPG3vdc4aLS-NKN8liseLVgGXEdG6q9CUCnTDFIlXwNQ)
22. [kaggle.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGIWoZKS7Lxz-xrj8iB-MTDOvXOV4-Qnm_4ENhdct9FuY3gsxpxQkqGmcViy53OU7QfCkaHhL17OVZ41P8oj6DFcz-pnn4PbJ5ljvaYQzR-RWk8RLcskGdziMAG9Rm4gPK9jJs88e_E9Q5qbPPdCSK--UDYcHUIskBKdBGb2rq7kA==)
23. [arxiv.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH5lqAim0XS0tV5uY7jtHVYIZ6s5GFNXLWGIj79yGWpt_5wFJBh8vioAQ6khsyLGS7AkdxTLty2IXXs_jNalp-9ro-1IGveCNcwOT9E_e90dWZLg2dMKg==)
24. [ieee.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFmVcergFEZA_nidTGW7UW1Z_Lsm8l-P013r2JiZKqDpCUFswSvNElOIAZ8XycsAeC0zAartvpTkDoUaNL72lB1Nz1xwZwI_OFhv-uPMmQQAXOJF0lS8WyCMOkS0cw7905KFRRW)
25. [kaggle.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEp3SyD6VW890oErHDUTrzR9CEGK-TzjwvPwqR16IW9KkFa5hBKS4nVkF7M0SoBAnKUV94QG6n4n-bmwO0U5kaaMVsNYrRWERSlALrkP7E4YJdMFgDHt8wcsxjZwKuPbZYWbIgF-DEjUNlKEjXWUMo-MhjhwN_idAnjhOVVyPqx2U3B_7HY1Ixuzho=)
26. [kaggle.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEu4JiN-PAXPruV8UufAmFd7WoHqcs3Sf6T2_PudEqVVCG5r0wtlFdUj-OmDtUO6Ye2QPhU198Bxz-x0hOSH1NpNEFWTOL3ry2jNmtCo7ZUKMO33cuoSoEoLQ6sDfqKMXdXwhfi1JdODyeF9swZXcTU5VIVdCOWyqqyZDme6Z4uzQ==)
27. [uiowa.edu](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQExJD24WXQchNL4Mz-Ul6toPxN6VLVGS7t5r9iI7U-LnYFdEtV_Gt0gQCEFXRQ4UQRbKZmiPQZSL_nNFYdvufogsVa7JO3dm82kfvzzGYDPV_j9x1OrsupYfWiwH5m5wAZMsL1wLjT15T1JepoT9xpYB1sRuaurR1Ng_dnBIbrNwpYPob9rzURRC3s-LVkG8QNiNIJGktU=)
28. [orcid.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGJQ8AcRZnWhrLiDnfChkNPx-IaxOd_LPU33fqW6EVWDqDcbie0jjJPGGBVI-YfVZd8yw_CwTOkm-Hgqa8fc7Ujos3cPBMDTDHgjbELk2ZCwy9wZ9TGjHltYRTH)
29. [lila.science](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGRmzKL5YI2XgJ8qGgp3NpX_5oTr38df8xbPTpgz0ydX64wDNA-ScDybTTlwGvaLmXxxqRmntThXpbyoAIyDgk5J453JBfkdY4BR_uELsmw2qxMC7RCUIDrZ1Lyzh0ijnRzhD5kyNe4)
30. [datadryad.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGhy92N721x4RBBh4fk7_IFFrMjZsr4mGPINE1tkNPyu1YZf6I_rBTlVZXOgGD5iReW-RLQ1XR4_Dtfg4HsWIK6ZdcERFZyp0YEpkNCCVnq3dFCv4WvFyVfvqw_jHDs_y-sTzzlnVCJbmpuXQ==)
31. [ox.ac.uk](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFb0vt7XvCH1fSeY5vKTRBbUHhDqBK1ga9AWXc4v8M_T8r6kM8BjCUHYRGBLQz6cyBLZ7cFKfmPtbYtcVuechys2jWOmivk9YmZZbD8e5YXK_QhkWFGeRAwMOcsYTZ5pDcmskhbALcFJqwgyOst8RDVW7UAIxoihP8noekf)
32. [johnowhitaker.dev](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQG_JNN9t0-Zf1kkcoc9vnMBs97Ab6oay2eUzoLkSe6DBf2_aicGFX1gHXnCemy6ZucwMNzT2ZWP9s-3Abx0R4cZUi2b7N8EA6_UqMCiCN_V74wPHVkGmURsCejhuNfj_eyUoUHDv_T9KptZsh6StMR-ekT1YwuyfH2hN3LHCFkdrNFSHAQcnT9Ui0iQxLZWAaCAhsMVVecEYA==)
33. [kaggle.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFN7sc_KxQk59sv9fDbrCDoY0TNmSjToPZRrxLni_1hjJwHNGuHNU0s6kEw3o9V4b2-L2Ki5FxcGKnP4qAGV1KJruFqsMhIUVsGyamidldDpNRXpEinRf1NQnG8SD2wETGAPGc79jv3UqGRJyvS_rtPmVyWAsf9mSjq852V)
34. [aku.edu](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQF-MkFD354idO2UjdF1bqfFkIK9Q_8_SM4IFIiHRSOod-1SkyoxyB6HVNVsB35QMbtzxqALcIbAwyATCe3-QPV-bSf84-WRkeBdrOrhfS0fFzUo8bmFCfhhBZV0ET_LBd00oAf6quYJtwC-HF7Iq76yxDoSDeZLEwsmx2QpxwBG3I3wcnxqPw==)
35. [researchgate.net](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFxM_DSPFb4lK_1qsrZdhoYP1qF926atVO8v6lTqQdLyYCOhl_n4NQVI7I84ohv9DaBOvMuYBLORYlOcVa_3yURncgNLKA_JlpZAOMNVqubQ8a-cb0ogGgURAuFoZqntwUefoNXgGTSB1kvXIvINwSH3LoTMfxCzpLvz_PAewePq6HGigq4TGPDx1ayQxSSHrwHHX5uY9vRxxN3_WrabdQzDwvrIFxKnOJUVJBmM0oy4xTTAQ==)
36. [kaggle.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHakjGIZhxB9ylRvIjQ5pOeMcKCvs5vZSA2EEisEsz6yi8gbfJPifGdgmcsnOfNGoLMuhnqBc8yGIC5ZZdzk7bE6e282j6EoCsNwqSx4g-Q1dnjc7_lvjsQdpBiCH3S2e_Le6NTf1SEbp-cAhqygnBLAKFQkvP1MZSbs0jD)
37. [deepnote.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGKl16-n1dy92Y6fMzbDM66ayQPZJzhTVLWeai_cSCZHhIbzc4SN9QnDWrkT6qmI_bswTAQ0WmQ72-teBKCwR5bpcbHPIgATU5u24kuwofMTK43tG80-8n2uSYTjuC7yNkbFJ0QgLMz9LDXwuXeGAPL35mcebSdk7jW4-xf7n9cq5buMHozTeVh335LH9bR2toO9dRewyDgc1c4UgwFfxMycm1-hl2WrXncJhuZp2jTFMEI4M8=)
38. [zindi.africa](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHnONH9lAlWlDseiq66Hkao48ppraXN6aTC68EWv8nK3lBv1SqbE3ly34Kv-ycyi0cdf1DTAWsae4E8srT_l6IkA81jD6KOGUBJUl679aF32Rg5Kf9LP-pi-oFPSDyob1zZ7REowRm3thR0mklpeVE2GuY6THLMoC0=)
39. [kaggle.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFj7mveiCAHAJiE3D5mU7K2INhKdKUzfzhFOrGyDoF_reYT3tkyr6_oDPgluUy-5bp3UIxaQ3rcISc4rqf7Xih4KmRBaiXlEkOd_zFCelUPSu93Ufvg9P2I_k-Fts2nPoBIPMQI4ys=)
40. [kaggle.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQESosAn-A48tuds4SUlyJG9x5D9mEIjpMxmflcA9XKcGZMDTvVRwyuCD5k3Pn-kGOdQV1ilsyheuVwOSzlrZOK4DdevUlJ5u6wCuWPNtIVRjV5v5i5p4VhlFJSFgYDel8SFPRQrEFmXzYfAl9KM9OCkDA==)
41. [github.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE8qOb5GHS21PVhabnfR8FfWd74AiRSx8g3qRxylXAvchzfVEr2k5BMHKv7jUQ41FkEfzg75xT4TsuPjjfRyKv8FAEZ6NKtk4ECPWjKuzdN-2AIobhHEZTSATW-jZs=)
42. [dsfsi.co.za](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH-JGTgYuO5I0repO35G676caiHNGkeNJL4BScG04Pssl_wE4BlE0jJeyiXdv78ysOoHMZ-Do-E2G-HVV1S6ll7hkuY6GZacBfV7mKcBaIUJwTrmeiAkEhHMj6KvrzXW2xWm3tWjg==)
43. [up.ac.za](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQEgLMJ2U7b9a22WK9sdi7JHXXcBOoQH7y_unIQrz5CUp8YRbCvcjHGz0O4xQlxvmjaSX8BSrRHAETPUzkjxQC6LTIO8nggTd1Zkc77XhT8som6ZvrDtPBrWK4ZpnfPwi-Dgdbaas0XYVuBeev1HhV-xeW2LAFcx6sLs_ggGrBulONMqMFqmyI0CYCHbccztUCrxtRSJIc_XfiGfoltZPPw=)
44. [aclanthology.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQHQG5rfrkL9wNVct2dCxIcYkjxi__9r-Phqdj3TKYvvayRnMb18wrKE69h2YI1o5EIZaXDdOSNSmiwEP0OtNk6M-dYiOz1fZJSLC7kjbcpJH_5JrBdV_gVP4vOmJOo=)
45. [arxiv.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH5NE3c7PRhTLT8E_daBQ5H73v2CTteIKiN0_R4h5hb2oqR6j1iFg25fA02AmTFf2mk8SxdyKKyqHKhFzCOlBGEwk-5eVAjEjx0XNW4Jhbid0IqBJEJMQ==)
46. [maseno.ac.ke](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGZpBNcVxouGu3O7HuLhHJWj5sG_cFjkw533xXRGFqOZadeoq9MstEtNuaqAJ1kSQSY2Th1D7nQmowC_whfLh4YIRQgjo-T4QW-tb-w9aFzN-RANt5NO7NlBK0OqOs8oLPdYBwZJcUzLg==)
47. [mozilla.org](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQH7eW42-U9F_gTgyx5N1s_Vf_FtWiM6OOHQEjX_rHERtU21FMUFbR8wfVOQUoW9PKA3HTnHo9Kle3DWpRTf0jc3K7lNr7r2qJXcTXx3EzcS9v5gqonkmSOo7D-8zi6qc0HWxg5Ejc36DdhA5lsqKMI=)
48. [mozilladatacollective.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFiDlXnb0N_Gz-JMO2Lrms13oWlfWFJg-L8xsn84VLNlpp0nvTJ2v1IG4qx0WJ4LFscPhf81xNJsMwSho4rwQi1QCo-ylBQ1td7MXvDDWVU29PoPGW68bSE1lzLk2c1s1vXtzYICu_BZgdUiomaDZTKEIku_q-uau6jnQ==)
49. [readthedocs.io](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQE8FeW4hFCpZmtv0Mjf6q5605oxWvqAI3njg75yVUyk0vAjQxsqyD0UNK0Lejl29iZC7ivqTGi0k3Xmq9MV0Gsw03lBu89jFWPZGrwrVwN1WKs819Law8FrNsRj4twjXX2ndn9cvJ04QSZoVo74yMDGPhRsV1uQG-v_WUJBqzNaj6TkqNT6pdtwixQ14odOU5gW)
50. [kaggle.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFwzI_5nAKDrNucfvv2mDQ6LjyI9YyYcbiPoOemb3rq6aG7o7sxXz_GucX15K9SsgwWznTfjfjgZAsuPvxYBrAr6LdDus3Ja_9wOka4lR2fY_uEjLEyZdinT-9OojNSvfdGamVU8HSxOEeE53S_6BckkT1s7ji3CU9zHKWn5HEKPlc7)
51. [kaggle.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQFCERSlrBHnX3ICo2mc_GHRVDm8fjB3uGmIH8kyQwqyUQInb0pZjzJbSz4wTK66yK7fzFtqPCHKsKs-wvv8cGA5OEQh3P_Ws5dFa_eXnxZ_X5M2znWE8CSooj1BHpY2JPpa4BDyfOHUjbn3YdjwG7BWtil7YwG6_dHjQAJX7HX9Qg==)
52. [kaggle.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGw2xSuqlPCwYrGn6tL2qj9D54-jtSp-oD1NtP68bQjsTqaP2k0qufLFqpOg-yb2X3YHGdnL-1AgWzT3BvBpOZnSqMvgYO3-6rGF11c_yTm9CGyzx-DNg0MtijOKKQw6oyiJEn4n2-99Q0DMaJipSQ=)
53. [kaggle.com](https://vertexaisearch.cloud.google.com/grounding-api-redirect/AUZIYQGUT-_-vs9qEy2RX_q_e1_bWCHiAbZn8-ipXtB-HPDQfzVOAl7SsMrrhMuWRHpuk_iz0oelphDqGsFgxPMnK9j-VDUTFBtSOy5g1UwVy7gU4ZILa-umlrdcCUM5muO1tXW1SIIpPWDGAhL4e8Mr3vv9QshL6Yk3IO5XJaskL__68KxYITSjyR13wuYKflUNs8HbXB1M)
