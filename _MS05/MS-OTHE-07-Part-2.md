---
layout: group
author: smb2025
subgroup: "OTHE"
subgroup-long: "OTHE-07"
title: "Bioinference: diverse approaches to inference and identifiability in biology"
organizers: "Ioana Bouros (University of Oxford), Alexander Browning, University of Melbourne"
description: "Mathematical models are now indispensable in the interpretation of biological data. Correspondingly, recent years have seen a proliferation of tools for parameter inference and identifiability analysis to aid this interpretation. In this mini-symposium, we aim to showcase diverse methodological approaches to inference and identifiability analysis, in addition to diverse areas of application. In particular, we will highlight problem-specific challenges at the interface of models and data: from epidemiological datasets comprising retrospective observations of a single epidemic, to spatial models where issues of data availability and sparsity are more acute.

Through a succession of talks, we will foster discussion and interdisciplinary engagement. We will identify common threads and challenges that underlie the model-data interface, and together identify future areas of research. This mini-symposium aims to facilitate knowledge exchange, inspire novel approaches to integrating models with data, and encourage collaboration between both speakers and the audience. We anticipate a stimulating and fruitful dialogue among mathematical biologists of diverse backgrounds who may not otherwise interact."
room: "Salon 1"
code: "MS05"
part: "2"
codes: [MS01/MS-OTHE-07-Part-1]
author1: "Hyukpyo Hong"
title1: "Inferring delays in partially observed gene regulation processes"
inst1: "University of Wisconsin–Madison"
dept1: ""
abstract1: "Cell function is regulated by gene regulatory networks (GRNs) defined by protein-mediated interaction between constituent genes. Despite advances in experimental techniques, we can still measure only a fraction of the processes that govern GRN dynamics. To infer the properties of GRNs using partial observation, unobserved sequential processes can be replaced with distributed time delays, yielding non-Markovian models. Inference methods based on the resulting model suffer from the curse of dimensionality. We develop a simulation-based Bayesian MCMC method for the efficient and accurate inference of GRN parameters when only some of their products are observed. We illustrate our approach using a two-step activation model: An activation signal leads to the accumulation of an unobserved regulatory protein, which triggers the expression of observed fluorescent proteins. Our method is scalable and can be used to analyze other non-Markovian models with hidden components.


References

[1] Hyukpyo Hong, Mark Jayson Cortez, Yu-Yu Cheng, Hang Joon Kim, Boseung Choi, Krešimir Josić, Jae Kyoung Kim, Inferring delays in partially observed gene regulation processes, Bioinformatics, 39 (11): btad670, 2023."
author2: "Hui Jia Farm"
title2: "Ensuring parameter identifiability in cardiac cell models is an essential prerequisite for reliable prediction"
inst2: "University of Oxford"
dept2: "Department of Computer Science"
abstract2: "Computational modelling of heart cells, especially the binding of drugs to the ion channel, is now an essential part of the drug development process, aiming to predict a drug’s risk to the heart from channel-level reactions. The ion channel controls the flow of ions across the cell membrane and the beating of the heart. The ion channel is susceptible to drug inhibition which can disrupt the heart’s beating cycle and can be fatal. Some drugs can get “trapped” within the channel, meaning they are unable to unbind from the channel while it is closed, and this is believed to increase the risk they pose. The trapping component introduced in a popular model of the drug-binding mechanism (the ORd-CiPAv1 model) has a limited effect on the beating cycle of heart cells, running counter to the claim that a drug’s risk depends on its trapping behaviour.

We show that this limited effect of the trapping component is due to the non-identifiability of its parameters which stems from the insignificant contribution of the trapping component to the current. We propose two alternative drug-binding models which do not suffer from the problem of non-identifiability of the trapping component. With fewer parameters and/or constraints, the alternative models are more interpretable and/or more identifiable. Despite not having an explicit drug-trapping component, our proposed models can capture the drug-trapping phenotype observed in the experimentally-measured current. Even though all drug-binding models have limitations, one of our alternative models can replicate the risk categorisation of drugs predicted by the ORd-CiPAv1 model.

We conclude that the trapping component defined in the ORd-CiPAv1 model is not necessary for the risk categorisation of drugs. Moreover, a model with identifiable and interpretable components each of which has an impact on model predictions would be preferable over complex models that contain more components but where those additional components have little to no effect."
author3: "Harsh Jain"
title3: "Parameter Estimation in ABMs: A Surrogate Modeling Approach"
inst3: "Swenson College of Science and Education"
dept3: ""
abstract3: "Validated mathematical models of complex biological phenomena are increasingly recognized as invaluable for uncovering mechanisms that underlie real-world (experimental or clinical) observations. Agent-based models (ABMs) have emerged as a natural formulation of choice in such models, providing a logical structure for capturing the multiple time and spatial scales associated with complex biology. However, the inherent stochasticity and heavy computational requirements of ABMs are significant obstacles for data-driven parameterization and for conducting parameter space exploration and sensitivity analyses. Further, experimental or clinical data used for parameterization is typically limited, coarse-grained and may lack spatial resolution, resulting in issues of parameter identifiability. There is hence a need for developing new theoretical and computational frameworks that can bridge the current divide between ABM parameters and real-world data. In this talk I will present a novel approach — Surrogate Modeling for Reconstructing Parameter Surfaces (SMoRe ParS) — that uses explicitly formulated surrogate models (SMs) to bridge ABM simulations and experimental data. Our approach quantifies the relationship between parameter values across the ABM and SM, and between SM parameters and experimental data. Thus, SM parameters act as interlocutors between ABM inputs and data that can be used for calibration and uncertainty quantification of ABM parameters."
author4: "Tyler Cassidy"
title4: "Parameter estimation and identifiability from clinical data in viral dynamics models"
inst4: "University of Leeds"
dept4: ""
abstract4: "Mathematical models have been instrumental in our understanding of viral kinetics. These models have identified important portions of the viral life cycle in many infections, like HIV and HBV, and are increasingly used to understand data from clinical trials of new treatments for these infections. I'll discuss some recent work focused on understanding how we can leverage analytical approximations and hierarchical parameter estimation techniques to identify model parameters from participants in early-stage clinical trials."
---
