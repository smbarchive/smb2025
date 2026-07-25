---
layout: group
author: smb2025
subgroup: "MFBM"
subgroup-long: "MFBM-17"
title: "Immune Digital Twins: Mathematical and Computational Foundations"
organizers: "Tomas Helikar (University of Nebraska - Lincoln), Juilee Thakar (Juilee_Thakar@URMC.Rochester.edu) - University of Rochester Medical Center
James Glazier (jaglazier@gmail.com) - Indiana University"
description: "Immune Digital Twins (IDTs), virtual models of the human immune system, coupled with periodic real-world data, are a growing focus of precision medicine. Designing control interventions to regulate the immune system requires real-time evaluation of high-dimensional parameter spaces of possible interventions in real-time and the ability to continuously recalibrate models of a changing patient. 

Because of the sparsity and lack of accuracy of the available experimental data feeds, the lack of first-principles models, the intrinsic stochasticity of the underlying biology, and population heterogeneity building full IDTs presents numerous challenges in model design, parameter identification (in complex agent-based models), uncertainty quantification, forecast deployment and data assimilation for model refinement. Another critical aspect of the development of IDTs is the integration of AI/ML methods with mechanistic models in a variety of roles. 

Due to the rapidly developing field, we would like to propose and request time for a 5-hour mini-symposium that will focus on modeling and mathematical challenges and achievements related to IDTs. We have secured 10 speakers across disciplines and career stages to cover a wide range of topics, including the use of IDTs in the control of sepsis, respiratory infections, and cancer immunotherapies and approaches to multiscale model construction and parameterization, addressing the aforementioned challenges."
room: "Salon 10"
code: "MS06"
part: "2"
codes: [MS03/MS-MFBM-17-Part-1, MS07/MS-MFBM-17-Part-3]
author1: "Reinhard Laubenbacher"
title1: "Immune Digital Twins: Foundational Mathematical Challenges"
inst1: "University of Florida"
dept1: "Department of Medicine"
abstract1: "The digital twin concept has its origins in industry. One industrial equipment
manufacturer advertised its digital twin capabilities to its customers as ”No
unplanned downtime” for its products. There is a compelling aspirational analog in
healthcare: “No unplanned doctor visits.' Of course, the challenges of building
digital twins for human patients are incomparably greater than for machinery.
Nonetheless, there are now several instances of what might be called digital twins
in medicine, and many more ongoing development projects. Aside from our
incomplete understanding of human biology, relative sparseness of data
characterizing human patients, and logistical difficulties in implementing
computational models in healthcare, there are many mathematical and
computational problems that need to be solved. Examples include calibration and
validation of multiscale, hybrid, stochastic computational models, forecasting
algorithms, and optimal control methods. This talk will describe some of these
problems and outline a mathematical research program for the field."
author2: "Josh Loecker"
title2: "Adaptive Analysis of Mechanistic Models using Large Language Models"
inst2: "University of Nebraska-Lincoln"
dept2: "Department of Biochemistry"
abstract2: "Large language models (LLMs) hold immense potential for revolutionizing biomedical research and personalized medicine, but their application to mechanistic modeling and immune digital twins (IDTs) remains largely unexplored. This work proposes a novel framework integrating LLMs with mechanistic models to address two critical gaps: (1) translating complex model outputs into actionable insights for patients and clinicians, and (2) automating the analysis and interpretation of large-scale mechanistic models. Our framework leverages a comprehensive library of “Action Intents,” enabling LLMs to interact with and manipulate models, perform complex analyses, and generate human-readable explanations. We will develop novel LLM-driven algorithms for tasks such as parameter sensitivity analysis, critical node identification, and emergent behavior prediction. Furthermore, we will establish robust evaluation metrics to assess LLM performance in this domain, encompassing both quantitative measures of accuracy and qualitative assessments of clinical utility. This framework will empower patients with personalized, understandable insights derived from their Personalized Digital Twin, fostering greater autonomy in healthcare decisions. Simultaneously, it will provide researchers with powerful tools to accelerate the analysis and interpretation of complex biological models, ultimately advancing our understanding of the immune system and accelerating the development of novel therapeutic strategies. This innovative approach promises to bridge the gap between complex biological models and their practical application in personalized medicine, paving the way for more effective and patient-centered healthcare."
author3: "Heber L. Rocha"
title3: "Multiscale Modeling of Immune Surveillance for Cancer Patient Digital Twins"
inst3: "Indiana University"
dept3: "Department of Intelligent Systems Engineering"
abstract3: "Tumors are complex ecosystems characterized by heterogeneous cellular behaviors, intercellular interactions, and stochastic processes, which collectively challenge the development of personalized cancer therapies due to unpredictable therapeutic responses. Digital twins—computational representations of individual patients—offer a transformative approach to simulate and predict treatment outcomes, enabling precision oncology. This presentation describes an multiscale agent-based model, developed using the PhysiCell framework, to investigate immune surveillance in micrometastases, early metastatic clusters critical to cancer progression. Through high-throughput simulations of over 100,000 virtual patient trajectories, our model revealed a spectrum of outcomes, ranging from tumor proliferation to immune-mediated eradication. These analyses identified critical parameters, such as immune cell functionality and tumor immunogenicity, that govern these divergent dynamics. These findings provide a robust foundation for constructing cancer patient digital twins to optimize therapeutic strategies. To enhance model reliability, our ongoing efforts focus on uncertainty quantification, employing sensitivity analysis and parameter calibration to address inherent biological variability and epistemic uncertainties, thereby advancing the development of clinically actionable digital twins."
author4: "James A. Glazier"
title4: "Medical Digital Twins: Addressing Simulation Equivalence Challenges in Virtual-Tissue Models"
inst4: "Indiana University, Bloomington"
dept4: "Department of Intelligent Systems Engineering and Biocomplexity Institute"
abstract4: "Developing closed-loop Medical Digital Twins requires multiple tools—both physical (sensors/actuators) and computational—to support the cycle of measurement, forecasting, divergence assessment, anomaly detection, data assimilation, and action selection. While significant progress has been made in predictive modeling and data assimilation, comparing simulation states presents unique challenges, particularly for agent-based spatial Virtual-Tissue models.
When working with scalar quantities like blood oxygenation, comparing measured and forecast values is straightforward. However, for Virtual-Tissue models, determining whether two simulation states derive from the same underlying model becomes complex. Implementation differences across software frameworks create substantial numerical variations (inter-simulation variability), while stochasticity within single implementations produces multiple potential phenotypes (intra-simulation variability).
To address these reproducibility and interoperability challenges, I present three methodologies for determining simulation state equivalence despite phenotypic differences:
1) A neural-network image classifier that learns features of equivalent model configurations robust to both intra- and inter-simulation variability. This classifier also supports developing generative AI surrogates of mechanistic agent-based models for Medical Digital Twin applications.
2) AI/ML approaches to cluster and classify synthetic images generated by agent-based models of cell sorting and angiogenesis.
3) Leveraging the classification techniques to solve the inverse problem of inferring model parameters from images, enabling parameter identification in complex systems.

The presentation concludes with proposed next steps for advancing these techniques in the Digital Twin ecosystem."
---
