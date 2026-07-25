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
code: "MS01"
part: "1"
codes: [MS05/MS-OTHE-07-Part-2]
author1: "Yurij Salmaniw"
title1: "Structural identifiability of linear-in-parameter parabolic PDEs through auxiliary elliptic operators"
inst1: "University of Oxford"
dept1: "Mathematical Institute"
abstract1: "In this talk, I will discuss results appearing in a recent manuscript (collaboration with Dr. Alexander P. Browning, Melbourne) under the same title (arXiv: 2411.17553). In it, we develop a relatively elementary approach to establishing parameter identifiability in parabolic partial differential equations and systems under an assumption of 'perfect' data observation. Key to this approach is an assumption of linearity in the parameters, which allows one to reduce the problem of parameter identifiability to a problem of identification of the kernel of a related elliptic operator. We will discuss our notion of parameter distinguishability, and how this connects to the more commonly used notion of parameter identifiability. We will appeal to several common examples from ecological modelling literature to clearly illustrate our results. These insights highlight the intimate connection between idenfiability, the influence of boundary conditions, and the role played by certain eigenfunctions and the linear dependence between low and higher order terms. Despite an ideal assumption of perfect data observation, these insights have consequences for parameter identifiability in practice, which we will also discuss. We will conclude briefly with some future directions, challenges, and open problems."
author2: "Dasuni Salpadoru"
title2: "Parameter estimation and identifiability analysis of bistable ecosystems"
inst2: "Queensland University of Technology"
dept2: ""
abstract2: "Bistable ecosystems, such as lacustrine ecosystems, exhibit two stable equilibria: one representing a healthy equilibrium (oligotrophic) and the other representing an unhealthy equilibrium (eutrophic). Environmental perturbations can push a bistable ecosystem beyond a critical threshold, triggering a shift between these equilibria. Understanding bistable dynamics for ecosystem management requires these thresholds to be identified, as these sudden behavioural changes can potentially lead to irreversible damage. However, a key challenge in studying bistable ecosystems is determining if typical phosphorus monitoring data are sufficient for an ecological model parameter to be identifiable. Although parameter identifiability is important, it has been largely overlooked in bistable ecosystem studies. In this work, we use a profile likelihood approach, which is well-suited for assessing parameter identifiability by quantifying uncertainty and detecting potential non-identifiability issues. This method is applied to estimate parameters and analyse the practical identifiability of key parameters and critical thresholds for the Carpenter Lake eutrophication model in a range of different monitoring scenarios. Understanding the effects of different monitoring strategies on parameter identifiability can inform risk assessment and management plans to maintain water quality in a lake and prevent irreversible degradation. Beyond lake ecosystems, our analysis is generalisable to other bistable ecosystems that may be targets of conservation management.

 

Keywords: Bistable ecosystems, Parameter estimation, Identifiability analysis, Profile likelihood, Lake eutrophication"
author3: "Liam O'Brien"
title3: "Structural causes of pattern formation and its breakdown - through model independent bifurcation analysis"
inst3: "Ohio State University"
dept3: ""
abstract3: "During development, precise cellular patterning is essential for the formation of functional tissues and organs. These patterns arise from conserved signaling networks that regulate communication both within and between cells. Here, we develop and present a model-independent ordinary differential equation (ODE) framework for analyzing pattern formation in a homogeneous cell array. In contrast to traditional approaches that focus on specific equations, our method relies solely on general assumptions about global intercellular communication (between cells) and qualitative properties of local intracellular biochemical signaling (within cells). Prior work has shown that global intercellular communication networks alone determine the possible emergent patterns in a generic system. We build on these results by demonstrating that additional constraints on the local intracellular signaling network lead to a single stable pattern which depends on the qualitative features of the network. Our framework enables the prediction of cell fate patterns with minimal modeling assumptions, and provides a powerful tool for inferring unknown interactions within signaling networks by analyzing tissue-level patterns."
author4: "Ioana Bouros"
title4: "A retrospective analysis of the robustness of existing compartmental models for modelling future pandemics"
inst4: "University of Oxford"
dept4: "Department of Computer Science"
abstract4: "Background & aims of study

For the duration of the Covid pandemic, the UK government consulted a number of mathematical models of transmission dynamics to help to guide policy response. Several of these epidemiological models use compartments to sort the population into, and ODEs to describe the infection dynamics. However, these models rely on a number of modelling assumptions about the disease, which sacrifice accuracy for model tractability. These differences in turn impact the forecasts of the epidemic trajectory and may lead to incongruent recommendations to policy makers.

In this talk, we conduct a retrospective analysis of the performance of three models used for modelling the rapid progression of the Covid pandemic in the UK to test the robustness of the results and whether they can be used interchangeably to inform policy response: the “Cambridge-PHE”, the 'Warwick Household model”, and the “Roche model”.

Methods & Results

For each model, we produce forecasts for cases, deaths and inferred instantaneous reproduction number trajectories both in the actual and in the unmitigated epidemic scenario, by fitting to the same early 2020 UK epidemic death dataset.

We identified that each of the three considered models produced very different death and case trajectories in the counterpart scenario, i.e. when no non-pharmaceutical interventions are put in place and contacts are maintained at the same rates throughout the simulation - which suggests that we cannot substitute the conclusions of on of these models for the other. Additionally, we analysed how the time of application of NPIs impacts the model outcomes. Finally, we include a sensitivity analysis to assess robustness to parameter changes of the three models.

Implications

This work highlights the pitfalls of relying on individual models to inform policy responses for future epidemics and pandemics, as well as the need for a more in-depth study of the impact of modelling assumptions on the quality of model outputs."
---
