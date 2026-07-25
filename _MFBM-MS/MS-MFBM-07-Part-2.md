---
layout: group
author: smb2025
subgroup: "MFBM"
subgroup-long: "MFBM-07"
title: "Stochastic Methods for Biochemical Reaction Networks"
organizers: "Hye-Won Kang (University of Maryland Baltimore County), Arnab Ganguly, Louisiana State University, aganguly@lsu.edu"
description: "Stochastic modeling has become increasingly popular in the biological sciences, including cell biology, systems biology, and epidemiology. One of the key advantages of stochastic methods is their ability to account for intrinsic fluctuations and uncertainties in experimental outcomes. These methods have proven to be invaluable for analyzing biological systems characterized by random events, stochastic interactions, environmental variability, and low-copy-number molecular species.

This minisymposium aims to showcase recent progress in stochastic methods for biochemical reaction networks, spanning both ecological and molecular scales. The sessions will provide a comprehensive overview of the field, covering a broad spectrum of themes that include both applications and methodological advancements.

Specific topics of interest include:
-New asymptotic results and approximations
-Multiscale methods
-Statistical inference and learning algorithms for stochastic biological systems
-Applications to gene expression, cell signaling, metabolic systems, neuroscience, and epidemiology.

A special emphasis will be placed on methods that can be translated into practical tools for broader use in research and applications. By bringing together researchers working on cutting-edge developments, the minisymposium aims to foster interdisciplinary collaboration and inspire innovative approaches and new directions in the study of stochastic processes in biology."
room: "Salon 9"
code: "MS07"
part: "2"
codes: [MS05/MS-MFBM-07-Part-1, MS08/MS-MFBM-07-Part-3]
author1: "Joshua McGinnis"
title1: "Homogenization of a Spatially Extended, Stochastic Ion Channel Model"
inst1: "University of Pennsylvania"
dept1: ""
abstract1: "Simulations of stochastic neuron potential models, which describe the voltage potential along the length of a neuron’s axon and incorporate ion channel noise as Gaussian fluctuations, have shown that channel noise can induce complex phenomena such as jitters and splitting of action potentials [1] and place constraints on the miniaturization of axons [2]. To develop a robust analytic framework for understanding stochastic effects of channel noise on action potential propagation in a neuron, we need to begin by investigating how many independent, spatially distributed ion channels can collectively yield deterministic behavior. We start with an electrophysiological derivation of a simple discrete model and contrast this with a common, yet less physically accurate approach where the law of large numbers and the central limit theorem are more easily applied. Our model couples a spatially discretized diffusive PDE for the voltage with continuous-time Markov processes that govern the behavior of the ion channels. We will then outline an argument using homogenization theory to estimate the rate of strong convergence to the typical deterministic PDE as the spacing between ion channels approaches zero. Finally, we present a numerical technique for simulating our model and discuss the challenges involved in increasing computational efficiency of simulations.

[1] Faisal AA, Laughlin SB. Stochastic simulations on the reliability of action potential propagation in thin axons. PLoS Comput Biol. 2007 May;3(5):e79. doi: 10.1371/journal.pcbi.0030079. PMID: 17480115; PMCID: PMC1864994.
[2] Faisal AA, White JA, Laughlin SB. Ion-channel noise places limits on the miniaturization of the brain's wiring. Curr Biol. 2005 Jun 21;15(12):1143-9. doi: 10.1016/j.cub.2005.05.056. PMID: 15964281."
author2: "Radek Erban"
title2: "Chemical Reaction Networks: Systematic Design, Limit Cycles and Spatio-Temporal Modelling"
inst2: "University of Oxford"
dept2: ""
abstract2: "I will discuss mathematical methods for describing biochemical reaction networks, with applications to modelling of intracellular processes. Several types of mathematical models of chemical reaction systems will be considered, including (i) deterministic models which are written in terms of reaction rate equations (i.e. ordinary differential equations (ODEs) for concentrations of chemical species involved); (ii) stochastic models of reaction networks, given in terms of the Gillespie stochastic simulation algorithm, which provides more detailed information about the simulated system than ODEs; and (iii) spatio-temporal models described by the reaction-diffusion master equation and Brownian dynamics simulations. I will discuss methods for systematic design of relatively simple reaction systems with prescribed dynamical behaviour, including reaction systems with multiple oscillating solutions (limit cycles). I will also present methods for efficient spatio-temporal modelling of intracellular processes."
author3: "David Lipshutz"
title3: "Methods for Comparing Sensitivities of Stochastic Neural Networks"
inst3: "Baylor College of Medicine"
dept3: ""
abstract3: "Biological neural networks (and some artificial neural networks) transform stimuli into stochastic neural responses. Each network induces a Riemannian geometry in stimulus space via the Fisher-Rao metric and it is of interest in various applications to compare the local geometries on stimulus space that are induced by different networks. Such comparisons can be challenging when stimulus space is high-dimensional (e.g., images), so one approach is to identify a few directions in stimulus space along which to compare the induced geometries. We propose a method for optimally selecting directions in stimulus space that maximally differentiate a set of networks in terms of the induced local geometries along these directions. We apply our method to compare a set of simple models of the early visual system and show that our method produces image distortions that allow for immediate visual comparison of these models. This is joint work with Jenelle Feather, Sarah Harvey, Alex Williams and Eero Simoncelli."
author4: "Minji Lee"
title4: "MPUGAT: A Novel Framework for Inferring Dynamic Infectious Disease Transmission with Graph Attention"
inst4: "Ulsan National Institute of Science and Technology"
dept4: ""
abstract4: "Estimating spatiotemporal transmission patterns in infectious disease modeling often involves high-dimensional parameters and hidden contact structures, leading to challenges in parameter identifiability. We present MPUGAT, a hybrid framework that integrates a multi-patch SEIQ compartment model with a spatio-temporal deep learning architecture utilizing Graph Attention Networks (GATs). MPUGAT dynamically estimates the time-varying transmission matrix by inferring latent interaction patterns from diverse time series data, including mobility indicators and case counts.
Our approach captures stochastic variations in contact structures and transmission intensity by treating epidemic parameters as latent variables inferred under observational uncertainty. Through a case study on COVID-19 in South Korea, MPUGAT demonstrates strong alignment with real-world social distancing interventions and regional heterogeneity in disease spread. This framework illustrates how non-epidemic time series data, integrated through deep learning, can enhance the identifiability of high-dimensional transmission parameters in epidemic models."
---
