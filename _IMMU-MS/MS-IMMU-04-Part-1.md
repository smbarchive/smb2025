---
layout: group
author: smb2025
subgroup: "IMMU"
subgroup-long: "IMMU-04"
title: "Multiscale modelling in infectious diseases"
organizers: "Dr Macauely Locke (Los Alamos National Laboratory), Dr Jasmine Kreig, Dr Aurelien Marc,  Los Alamos National Laboratory"
description: "Part of the complexity of biological and epidemiological systems arises from interactions that occur on different scales.
This mini-symposium explores available data scales and how models can be formulated to represent them, with applications to viral dynamics, immune responses, and epidemiology. In addition to showcasing current work by presenters, this session encourages discussion of further development on and novel approaches to multiscale modelling of infectious diseases. This session aims to gather speakers from diverse backgrounds, including early and late-career scientists and post-docs, different fields of expertise such as viral dynamics, immunology (T-cell and antibody) and epidemiology and cover a range of institutions (such as Academia and National labs)."
room: "Salon 3"
code: "MS04"
part: "1"
codes: [MS08/MS-IMMU-04-Part-2]
author1: "Aurelien Marc"
title1: "Modeling suggests that the HCV polymerase inhibitor bemnifosbuvir has two modes of action: inhibiting intracellular viral replication and virion assembly/secretion"
inst1: "Los Alamos National Laboratory"
dept1: ""
abstract1: "Chronic hepatitis C virus (HCV) infection remains a significant global health challenge, with an estimated 50 million people affected and 1 million new cases annually as of 2022. The majority of HCV-related deaths are due to severe liver damage and hepatocellular carcinoma. This highlights the urgent need to optimize treatment strategies and develop next-generation antivirals that can enhance cure rates and shorten therapy, especially for patients with advanced liver disease. In this study, we developed a joint pharmacokinetic and multiscale viral dynamic model to characterize the antiviral effects of the HCV polymerase inhibitor bemnifosbuvir (BEM) currently in clinical trials. Fitting our model to clinical data suggests that BEM acts via a dual mechanism, effectively inhibiting both viral replication as expected for a polymerase inhibitor and, unexpectedly, virion assembly/secretion. These effects were consistent across multiple genotypes and in patients with cirrhosis, highlighting BEM’s potential as a new effective, multi-targeting antiviral agent for chronic HCV infection."
author2: "Nathanael Hoze"
title2: "Integrating multiscale mathematical modeling and serology to unravel antibody dynamics and infection risk"
inst2: "IAME"
dept2: ""
abstract2: ": Understanding infectious disease dynamics requires connecting processes across biological scales, from individual immune responses to population-level transmission. Serological data—particularly age-stratified antibody measurements—are a rich resource for inferring historical pathogen circulation and quantifying infection risk, especially in settings lacking continuous surveillance.
In this talk, I will present a suite of Bayesian statistical models that leverage serological data to infer key epidemiological and immunological parameters. I begin with models analyzing cross-sectional seroprevalence data, where age profiles inform the reconstruction of time-varying force of infection. These serocatalytic models account for features such as lifelong or waning immunity, heterogeneous exposure, and imperfect diagnostics. Inference is performed via Hamiltonian Monte Carlo using Stan, and the framework is implemented in a dedicated R package, Rsero, which includes tools for model fitting, diagnostics, and model selection using LOOIC and DIC.
Analysis of serological data is often dogged by complex immune mechanisms that makes their interpretation difficult. Antibody cross-reactivity, especially relevant in arbovirus serology, happens when viruses can generate antibodies with similar responses. Determining which virus generated the response is challenging. I developed hierarchical Bayesian models that integrate individual-level quantitative titer data with transmission dynamics and prior knowledge on cross-reactive immune responses. These models estimate individual infection histories, pathogen-specific forces of infection, and cross-reactivity structures, using latent variable methods implemented in rstan. The framework accommodates diverse data types, including spatial and demographic covariates.
I will also present ongoing work on Enterovirus EV-A71, the main causative agent of hand-foot-and-mouth disease, based on a yearly repeated dataset of age-stratified neutralizing antibody titers collected over 18 years in Malaysia. This model extends classical serocatalytic approaches by modeling full titer distributions across age and time, incorporating mechanisms for infection-induced boosting, waning, and identifying protection due to antibody and number of infections."
author3: "Quiyana Murphy"
title3: "Understanding antibody durability and magnitude following vaccination against SARS-CoV-2"
inst3: "Virginia tech"
dept3: ""
abstract3: "Vaccination against severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) results in transient antibody response against the spike protein. The individual immune status at the time of vaccination influences the response. Using mathematical models of antibody decay, we determined the dynamics of serum immunoglobulin G (IgG) and serum immunoglobulin A (IgA) over time. Data fitting to longitudinal IgG and IgA titers was used to quantify differences in antibody magnitude and antibody duration among infection-naïve and infection-positive vaccinees. We found that prior infections result in more durable serum IgG and serum IgA responses, with prior symptomatic infections resulting in the most durable serum IgG response and prior asymptomatic infections resulting in the most durable serum IgA response. These findings can guide vaccine boosting schedules."
author4: "Grant Lythe"
title4: "Models of bursting and budding"
inst4: "University of Leeds"
dept4: ""
abstract4: "When are infectious viruses or bacteria released from infected cells?
We consider two types of mathematical models.  In the first, 
“budding'', infected cells are assumed to release new infectious
particles at a constant rate (that is, constant probability per unit
time).  No description of the intracellular dynamics is needed; the
mean number of new infectious particles released per infected cell is
simply the rate of release multiplied by the mean lifetime of an
infected cell.  In the second, “bursting'', infectious particles
accumulate inside a host cell until the cell dies and the
intracellular load is released at once.  At the stochastic level of an
individual cell, the simplest budding models have two types of events
(release of an infectious particle and death of the infected cell), and
the mathematics is consistent with the assumption that events are
independent.  In bursting, however, release of infectious particles
and death of the host cell are not independent events: they occur
simultaneously."
---
