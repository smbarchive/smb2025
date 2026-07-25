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
code: "MS05"
part: "1"
codes: [MS07/MS-MFBM-07-Part-2, MS08/MS-MFBM-07-Part-3]
author1: "Ruth J Williams"
title1: "Stochastic Analysis of Markov Chain Models for Chromatin Dynamics"
inst1: "University of California San Diego"
dept1: ""
abstract1: "Stochastic dynamics and time-scale differences between establishment and erasure processes in chromatin modifications (such as histone modifications and DNA methylation) have been seen in simulations to have a critical effect on maintaining and switching cell types through generations of cell division. It has been further observed that cross-catalysis between repressive histone modifications and DNA methylation can quickly silence a gene, and protein-mediated positive autoregulation can alleviate this silencing. 
In this talk, we provide a rigorous mathematical framework to validate, explain and extend these insights.  We introduce stochastic models of chromatin modification circuits as singularly perturbed, continuous-time Markov chains with a small parameter  epsilon capturing the time scale separation. We characterize the limiting stationary distribution as epsilon goes to zero in terms of a reduced Markov chain. We also show that protein-mediated positive autoregulation can monotonically alleviate cross-catalytic silencing caused by two types of repressive modifications. The theoretical tools developed not only provide a solid mathematical foundation for previous computational and experimental findings, emphasizing the role of chromatin modification dynamics and protein-mediated autoregulation, but also have broader applications to singularly perturbed continuous time Markov chains, particularly those associated with chemical reaction networks.
Based on joint work with S. Bruno, Felipe Campos, D. Del Vecchio, Y. Fu."
author2: "Grzegorz Rempala"
title2: "Likelihood Functions for Individual-Level Chemical Reaction Models"
inst2: "Ohio State University"
dept2: ""
abstract2: "When analyzing chemical reaction systems, it is often valuable to track the behavior of individual molecules over time. In such settings, one can construct an individual-level likelihood function—a statistical tool that quantifies how well a specific parametric reaction model explains observed data. Such likelihood functions are particularly useful when applied to time series data that capture the trajectories of chemical reaction networks. In this talk, I will introduce the concept of individual-level likelihoods, highlight their key applications, and discuss practical approximations, especially in the context of mass-transfer models. A central example will be the stochastic SIR  model, though similar constructions apply more broadly across biological and chemical systems."
author3: "Mark Flegg"
title3: "Stochastic Simulation of Reaction Networks with Well-Mixed Clustered Agents"
inst3: "Monash University"
dept3: ""
abstract3: "In this talk we will explore the suitability of simulating reaction networks at the level of local clusters rather than individuals for improvements in efficiency and reduction of complexity. This approach asserts an approximation with how a local cluster of reactants evolve and specifically how the components of this cluster interact with the larger network. We explore the method in the context of simple population models of a disease. Here, clusters represent the efficient disease interactions within households and approximations are made with how individuals of a household contribute to spreading the disease in the rest of the community. In biochemical systems a cluster is more complicated and constitutes efficient molecular mechanisms of multiple components embedded in a larger chemical network."
author4: "Hye-Won Kang"
title4: "Multiscale Approximation and Parameter Estimation in Stochastic Models of the Glycolytic Pathway"
inst4: "University of Maryland Baltimore County"
dept4: ""
abstract4: "In this talk, I will introduce a glycolytic pathway that includes multiple enzyme-catalyzed reactions. We focus on the part involving the phosphofructokinase (PFK) reaction as a case study in stochastic modeling. Using model reduction techniques, we show how to derive a simplified model and use it to estimate parameters from partially observed data.
Previous studies modeled this pathway deterministically and employed a quasi-steady-state approximation to reduce its complexity. In contrast, we assume that some enzymes are present in low copy numbers and thus adopt a continuous-time Markov chain framework to capture stochastic effects. To further reduce network complexity, we apply a multiscale approximation method and derive a reduced ODE model that describes the system's behavior on a slow timescale.
The reduced model focuses on two key species: fructose-6-phosphate (F6P) and adenosine diphosphate (ADP). It not only captures the essential dynamics of the full network but also provides insights into key parameters. The equations in the reduced model contain fewer parameters—expressed as functions of those in the full model--which facilitates more tractable parameter estimation.
Assuming that only the reduced species are observable, we generate synthetic data from the full model and use it to estimate the parameters in the reduced model. This approach demonstrates how time-series data from a subset of species can enable effective estimation of composite parameters in a reduced system.
This is joint work with Arnab Ganguly."
---
