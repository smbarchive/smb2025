---
layout: group
author: smb2025
subgroup: "MEPI"
subgroup-long: "MEPI-03"
title: "Delayed and structured dynamics of infection and epidemic models"
organizers: "Tyler Cassidy (University of Leeds), Tony Humphries (McGill University)"
description: "This mini-symposium showcases recent advancements in the development and analysis of biological models that incorporate delays or dependency on the  physiological characteristics of the population. A particular emphasis is placed on applications to infection dynamics and the transmission of infectious diseases within populations. The research presented highlights novel methods and results on both local and global dynamics of the systems, offering insights to tackle infections and infectious disease outbreaks."
room: "Salon 15/16"
code: "MS03"
part: ""
author1: "Tianyu Cheng"
title1: "Recurrent patterns of disease spread post the acute phase of a pandemic:  insights from a coupled system of a differential equation for disease  transmission and a delayed algebraic equation for behavioural adaptation"
inst1: "York University"
dept1: ""
abstract1: "In this talk, we propose a coupled system of disease transmission dynamics and a behavioural renewal equation to explain nonlinear oscillations post the acute phase of a pandemic. This extends the Zhang–Scarabel–Murty–Wu model, which captured multi-wave patterns during the early acute phase of the COVID-19 pandemic. Our study explores how susceptible depletion affects the coupled dynamics of disease spread and behaviour. Using risk aversion functions and delayed adaptation, we also show how these factors contribute to sustained oscillatory patterns"
author2: "Tony Humphries"
title2: "An immuno-epidemiological model with threshold delay"
inst2: "McGill University"
dept2: ""
abstract2: "Threshold delays arise naturally in systems with state-dependent feed-back such as those involving maturation and propagation. However, their implicit formulation and continuous state dependence present both analytical and numerical challenges. We study an immuno-epidemiological model of pathogen transmission in a large population, where the threshold delay represents a latency period that can be shortened by multiple exposures during the exposed stage. Using a heuristic linearization approach based on asymptotic expansions, we analyze the solution behavior near the steady states and compare it with that arising from two alternative formulations: a differentiated form of the threshold condition and a discrete state-dependent delay. Although both formulations leave the steady-state unchanged, they affect the local dynamics differently. Specifically, the differentiated form introduces a spurious positive eigenvalue, while the discrete state-dependent form alters the eigenvalue spectrum. To address the numerical instability induced by the differentiated form, we introduce a penalty control term that ensures the spurious eigenvalue is real and negative, hence allowing for numerical simulation. For solving boundary value problems, we demonstrate how to approximate the threshold delay by discretizing the threshold condition, which allows the use of the numerical bifurcation software package DDE-BIFTOOL."
author3: "Andrea Pugliese"
title3: "A multi-season epidemic model with random drift in immunity and transmissibility"
inst3: "University of Trento"
dept3: ""
abstract3: "We consider a model for an influenza-like disease in which epidemics occur during each winter season, while the virus randomly drifts between seasons. 

The seasonal epidemic follow a deterministic SIR scheme (with several classes according to the year of last infection), starting with a proportion of immune individuals that depends on the fractions that were infected in the previous seasons, and on the viral drift. It is assumed that the fractions that get infected during the season are those predicted by the final size equation of structured SIR models.

The viral drift is quantified (in year k) by $delta_k$, the factor reducing the immunity of all classes, and by $tau_k$, the transmissibility.

The model is similar to those studied by Andreasen (2003), Roberts et al (2019) and Roberts et al (2024); however, in their models $delta$ and $tau$ are constant, while we assume that the pairs ($delta_k, tau_k$) are independent random variables with a given density q.

The immunity status at the start of a season k consists of the vector (truncated to length r, meaning that all immunity is lost r years after last infection) of the population subdivided according to the number of years since last infection, and their coresponding immunity levels. 

We prove that the sequence of immunity status form an ergodic Markov chain that converges to a stationary distribution, that can be examined through simulations.

More analytical progress is made for the case where immunity only lasts for one season (r=2): we can then explicitly compute the transition probabilities and the equations satisfied by the stationary distribution. We can also study the distribution of the effective reproduction ratio $R_E^{(k)}$, that depends on the immunity status and on the pair ($delta_k, tau_k$), and of the final attack ratio conditional on the effective reproduction ratio; this could be interesting for predicting the epidemic impact, since $R_E^{(k)}$ can be estimated at the start of a season from the exponential growth rate.

Numerical computations for the case r=2 show that. for all the choices considered for the distribution of ($delta_k, tau_k$), the distribution of the attack ratio conditional on the effective reproduction ratio is very narrow.In principle, this would make it possible reliable predictions of the attack ratio knowing the effective reproduction ratio; however, estimates from influenza seasons appear in contrast with model predictions, suggesting that the model is too simple to be realistic. 

The model is being extended to allow for more heterogeneity, due to age structure and other factors, in the population; this should make predicted attack ratios more variable and generally lower, more in line ith empirical estimates.

References

Andreasen V (2003) Dynamics of annual influenza A epidemics with immuno-selection. J Math Biol 46:504–536. https://doi.org/10.1007/s00285-002-0186-2

Roberts, M.G., Hickson, R.I., McCaw, J.M. et al. A simple influenza model with complicated dynamics. J. Math. Biol. 78, 607–624 (2019). https://doi.org/10.1007/s00285-018-1285-z 

Roberts, M.G., Hickson, R.I. & McCaw, J.M. How immune dynamics shape multi-season epidemics: a continuous-discrete model in one dimensional antigenic space. J. Math. Biol. 88, 48 (2024). https://doi.org/10.1007/s00285-024-02076-x"
author4: "Tyler Cassidy"
title4: "Multi-stability in an infectious disease model with waning and boosting of immunity"
inst4: "University of Leeds"
dept4: ""
abstract4: "The waning of immunity to an infectious pathogen can cause recurring outbreaks in a population due to the replenishment of the pool of susceptible individuals. Importantly, the dynamics of the infection at the population level is affected by the dynamics of the infectious pathogen within the individual hosts, in terms of how the infectiousness rises and falls, and how the disease-induced immunity subsequently fades. I'll discuss bistability in a simple epidemiological model that explicitly links these within-host and between-host pathogen dynamics."
---
