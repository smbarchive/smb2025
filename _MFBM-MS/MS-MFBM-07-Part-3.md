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
code: "MS08"
part: "3"
codes: [MS05/MS-MFBM-07-Part-1, MS07/MS-MFBM-07-Part-2]
author1: "Suzanne Sindi"
title1: "Scalable Bayesian Discovery of Chemical Reaction Networks from Fully Observed Stochastic Dynamics"
inst1: "University of California Merced"
dept1: ""
abstract1: "We present a Bayesian framework for inferring chemical reaction networks (CRNs) from fully observed state-transition data, using spike-and-slab priors to jointly model reaction rates and network structure with uncertainty-aware sparsity. Building on previous work, we leverage likelihood decomposition to enable scalable inference, and demonstrate practical identifiability in three-species networks where the full reaction set is combinatorially large. Our method captures nontrivial posterior structure even in intermediate data regimes, where traditional MLE-based sparse regression methods may fail due to over-penalization of small but important reactions. Unlike point-estimate approaches, our model returns full posterior distributions, allowing principled model selection. We show that our approach generalizes to higher-dimensional systems by exploiting structural sparsity and decomposition strategies, providing a tractable path toward Bayesian inference in large, complex reaction networks."
author2: "Muruhan Rathinam"
title2: "Stochastic Filtering of Reaction Networks"
inst2: "University of Maryland Baltimore County"
dept2: ""
abstract2: "We consider the problem of inferring states and/or parameters from exact observations of a subset of states of a stochastic reaction network. We present two particle filtering methods for the computation of the conditional distribution of the state and/or parameters, one for the case of continuous in time observations and the other for the case of observations in discrete snapshots of time.
In addition to presenting theoretical justification, we also provide numerical examples to illustrate the applicability of these methods."
author3: "Arnab Ganguly"
title3: "Multiscale Enzyme Kinetic Reactions: Stochastic Averaging and Statistical Inference"
inst3: "Louisiana State University"
dept3: ""
abstract3: "We study a stochastic model of multistage enzyme kinetics of the Michaelis–Menten (MM) type, where substrate molecules are converted into product through a sequence of intermediate species. The reaction network is both high-dimensional and multiscale, posing substantial computational challenges, particularly in estimating reaction rates. These challenges are compounded when direct observations of the system's states are unavailable and only random samples of product formation times are accessible.

To address this, we adopt a two-stage approach. In the first stage, under technical assumptions similar to those in the Quasi-Steady-State Approximation (QSSA) literature, we establish two asymptotic results: a stochastic averaging principle that reduces the model’s dimensionality, and a functional central limit theorem that characterizes the resulting fluctuations.

In the second stage, we consider the problem of estimating parameters of the system from data consisting of a sample of product-formation times. Note that such a dataset does not allow reconstruction of temporal paths of species rendering any trajectory-
based inference method categorically inapplicable. To address this, we develop a novel inference framework based on an interacting particle system (IPS) that approximately captures the dynamics the reduced-order model at a molecular level. The crux of our approach is a propagation of chaos result that leads to an asymptotically exact product-form expression for the likelihood function. Numerical examples are presented to demonstrate the effectiveness of the proposed approach. This is a joint work with Wasiur R. KhudaBukhsh."
author4: "Dongju Lim"
title4: "Toward Single-Cell Control: Noise-Robust Perfect Adaptation in Biomolecular Systems"
inst4: "Korea Advanced Institute of Science and Technology"
dept4: ""
abstract4: "Robust perfect adaptation (RPA), whereby a consistent output level is maintained even after a disturbance, is a desired property in biological systems. While this property can be achieved at the population average level by combining the well-known antithetic integral feedback (AIF) loop into the target network, it amplifies the noise of the output level, disrupting the single-cell level regulation of the system output. To address this, we introduce a new regulation motif, the noise controller, inspired by the AIF loop. Combining this noise controller with the AIF controller successfully maintained system output noise as well as mean at their original level, even after the perturbation, achieving noise RPA. This advancement enhances the precision of existing biological controllers, marking a key step toward achieving single-cell level regulation."
---
