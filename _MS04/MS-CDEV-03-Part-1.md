---
layout: group
author: smb2025
subgroup: "CDEV"
subgroup-long: "CDEV-03"
title: "From data to mechanisms: advancement in modeling in cell and developmental biology"
organizers: "Keisha Cook, Anna Nelson (Clemson University), Alessandra Bonfanti (Politecnico di Milano)
Giulia Celora (University of Oxford)
Kelsey Gasior (University of Notre Dame)
Qixuan Wang (University of California, Riverside)"
description: "In many cell and developmental processes, both modeling and data analytic approaches are necessary in order to generate useful modeling predictions to guide the design of further experiments for both validating and improving biological insight. There is an increased understanding that the application of machine learning methods can also be used to enhance common data-driven modeling techniques, including parameter and equation inference, classification, and sensitivity analysis. The speakers in this session will discuss how differential equation models, stochastic models, and methods from machine learning can be combined to address questions related to cell growth, intracellular transport, cell differentiation, cell migration, and tissue development. The speakers will highlight current research progress and challenges associated with combining modeling and inference approaches in cell and developmental biology."
room: "Salon 6"
code: "MS04"
part: "1"
codes: [MS07/MS-CDEV-03-Part-2]
author1: "Khanh Dao Duc"
title1: "Optimal Transport based metrics and statistics for quantifying cell shape heterogeneity"
inst1: "University of British Columbia"
dept1: ""
abstract1: "Recent advances in experimental methodologies and community efforts have led to a surge in large cell image datasets, that require the developments of new methods to analyze them and extract meaningful information. In this context, I will describe our recent efforts to leverage optimal transport theory, with the introduction of metrics inspired by Wasserstein/Gromov-Wasserstein distances for 2D and 3D cell shapes, that are efficient to compute and can be used for a variety of tasks, including Dimensionality reduction, statistical testing and machine learning. Real data applications will focus on analyzing 2D contour of cancer cells, and 3D images of nucleus and cell shapes under different stages of development."
author2: "Peijie Zhou"
title2: "Towards AI Virtual Cell Through Dynamical Generative Modeling of Single-cell Omics Data"
inst2: "Peking University"
dept2: ""
abstract2: "Reconstructing continuous cellular dynamics from sparse, high-dimensional single-cell omics data remains a fundamental challenge in systems biology. Recently, a paradigm shift has been witnessed by leveraging artificial intelligence—specifically, dynamical generative modeling—to develop an AI virtual cell, a predictive digital twin capable of simulating cellular behavior across time and space. In this talk, we introduce our recent attempts that integrate flow-based generative models with partial differential equations (PDEs) to infer latent dynamics from scRNA-seq data. For spatial transcriptomics data, we extend this method with stVCR, a generative model that aligns transcriptomic snapshots across biological replicates and temporal stages. To further infer stochastic dynamics from static data, we explore a regularized unbalanced optimal transport (RUOT) formulation and its theoretical connections to the Schrödinger Bridge and diffusion models. I will also introduce a generative deep-learning solver designed for this problem.Together, these works suggest how generative AI could have the potential to unify dynamical modeling, spatial reconstruction, and stochastic inference—transforming fragmented omics data into a predictive virtual cell."
author3: "Amanda Alexander"
title3: "Persistence of plasmid DNA in spatially organized bacterial populations"
inst3: "University of Houston"
dept3: ""
abstract3: "Bacterial cells contain extrachromosomal DNA molecules called plasmids. In nature, plasmids often confer antibiotic resistance. Cells commonly have no mechanism for evenly partitioning plasmids during cell division, and thus there is some probability that one of two daughter cells does not inherit any plasmids. On the population scale, what factors influence the persistence of plasmid DNA over generations? Mathematical modeling is useful in answering this question, as it is difficult to experimentally resolve new plasmid loss from replication of previously plasmid-free cells over long time periods. We introduce a spatial Moran-like model of a finite cell population undergoing plasmid loss, because biologists frequently observe cell populations in spatially constrained microfluidic traps. We explore how properties of single cells impact the dynamics of the cell population in different trap geometries. This analysis reveals that the persistence of plasmid DNA in cell populations has a complex dependence on both spatial geometry and assumptions on single cell properties such as cell division age."
author4: "Grace McLaughlin"
title4: "Modeling Asynchronous Nuclear Division in Fungal Cells"
inst4: "University of North Carolina, Chapel Hill"
dept4: ""
abstract4: "Multinucleate cells are common in biology, with examples including muscle cells, placenta, and fungi. Despite this, many aspects of their cell biology are not well understood. Nuclei within these large cells can undergo division, and their cell cycles are governed by biochemical oscillators. Dividing nuclei residing in a common cytosol would be expected to synchronize, as the oscillating levels of cell cycle regulators from each nucleus should in theory entrain neighbors. However, in the multinucleate fungus Ashbya gossypii, spatially neighboring nuclei have been observed to divide out of sync. Despite this apparent nuclear autonomy, nuclear density is controlled within a whole cell, suggesting cell cycles are coupled with cell growth. Does nuclear asynchrony play a role in regulating nuclear density? How do nuclei maintain asynchrony while coordinating their cell cycles on the whole-cell level? And how do nuclei achieve local asynchrony while sharing a common cytosol and originating from the same initial nucleus? To answer these questions, we model Ashbya nuclei as a dynamically growing system of coupled phase oscillators residing within a network-like cell. We find that robust control of nuclear density requires regulation of both cell morphology and cell cycle length. Furthermore, we show that even if cell cycles are coupled to changing nuclear density, it is still possible for them to stay asynchronous as long as this coupling is sufficiently weak. Finally, focusing on interactions between individual nuclei, we find that asymmetric coupling from mitotic nuclei towards younger nuclei can promote asynchrony. All together, these results show how asynchrony can persist in Ashbya, and how these cells achieve a balance between local autonomy with global coordination."
---
