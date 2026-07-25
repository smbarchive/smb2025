---
layout: group
poster: "MFBM-03"
permalink: "/MFBM/PS01-MFBM-03.html"
day: "Monday"
subgroup: "MFBM"
code: "PS01"
author: "Holly Chambers"
inst: "Imperial College London"
title: "Benchmarking Causal Discovery Methods for Partially Observed Biochemical Kinetics"
abstract: "Systems of intracellular biochemical reactions are complex, often involving components that cannot be directly measured. Representing these systems as networks, with nodes representing biochemical species and edges their reactions, helps quantitatively characterize their function and effects of dysregulation. Causal discovery methods can uncover functional interactions within these networks from purely observational data, detecting hidden effects from partial observations. These effects appear as common causes of observed variables, or through time-lagged effects from intermediate causes.   We benchmark the causal discovery method temporal Multivariate Information-based Inductive Causation (tMIIC) alongside other state-of-the-art tools, for time series data from biochemical kinetic models. Our results demonstrate tMIIC’s high recall in identifying interactions within toy reaction networks. By selectively omitting data, we consider both latent confounders (the standard choice for benchmarking these methods) and unobserved species participating in reactions. tMIIC detects latent confounders using bidirected edges, and unobserved species through time-delayed edges, locating hidden effects and estimating their typical timescales. Finally, we extend these benchmarks to reconstruct an experimentally calibrated model of the epidermal growth factor receptor signalling network – a system frequently dysregulated in cancer.   Altogether, our work showcases the feasibility and usefulness of causal discovery methods like tMIIC for data-driven mathematical modelling of biochemical reactions."
---
