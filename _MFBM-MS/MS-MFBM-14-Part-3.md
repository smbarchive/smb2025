---
layout: group
author: smb2025
subgroup: "MFBM"
subgroup-long: "MFBM-14"
title: "Multicellular Agent-Based Modelling - The OpenVT Project"
organizers: "James Osborne (University of Melbourne), James Glazier (Indiana University) 
Yi Jiang (Georgia State University)"
description: "Multicellular simulations have become indispensable in understanding complex biological phenomena, from tissue development to disease progression. But the diversity in simulation methods - from agent-based models, lattice-free models, stochastic particle simulations, etc - poses challenges in reproducibility, modularity, reusability, and integration within multi-scale simulation. This minisymposia aims to present the variety of multicellular simulations being used by the community along with the efforts to make these simulations replicable and reproducible. Through a series of scientific presentations, we will demonstrate the need for standardization, and the importance of sharing and reusing models.

The minisymposia is broken up into three parts; 
Parts 1 and 2: Modelling Biological Systems 1 and 2.
Part 3: Reproducibility and Standards.

Parts 1 and 2 of the Minisymposia (Modelling Biological Systems 1 and 2) contain a series of scientifically focused talks to demonstrate the variety of modelling techniques and applications being used in multicellular simulations. These talks have a scientific focus however each talk will have 5 minutes dedicated to model specification/reproducibility/comparison. 

Part 3 of the Minisymposia (Reproducibility and Standards) contains a series of talks on the current efforts in reproducibility and standards for multicellular simulations including a report on the OpenVT Satellite meeting reproducibility challenge."
room: "Salon 8"
code: "MS08"
part: "3"
codes: [MS01/MS-MFBM-14-Part-1, MS02/MS-MFBM-14-Part-2]
author1: "James Glazier"
title1: "OpenVT--Towards Making Virtual Tissue Models FAIR - Opportunities and Challenges"
inst1: "Indiana University, USA"
dept1: ""
abstract1: "Multi-scale, Multicellular Agent-Based Virtual-Tissue models built using modeling frameworks like CompuCell3D, Morpheus, Artistoo, CHASTE or PhysiCell are versatile tools for exploring the complex interactions between intracellular signaling and gene-regulatory networks, inter-cellular signaling through contact and diffusible signals, and force generation, cell migration and shape change. They can play a crucial role in helping to interpret and design more informative experiments, in particular in in vitro to in vivo extrapolation. However, Virtual Tissues currently lack the model-specification standards, support for modular architectures and annotation, cross-compatible tools for graphical model specification, visualization and analysis and accepted model sharing infrastructure that have enabled the rapid developing of systems biology network modeling as a core technology in modern biology and the regulatory acceptance of these approaches. Comparable infrastructure is essential for Virtual Tissues to move from academic one-offs for discovery science to truly progressive mainstream technologies in biomedicine, technology and regulation. Because Virtual Tissues are substantially more complex and structurally and functionally diverse than network models, standardization and modularization, graphical specification and distribution are all more challenging. I will consider some of the variety of Virtual Tissue applications, frameworks and modeling approaches and some of the challenges and opportunities we face in developing an effective ecosystem of tools and standards. I will also discuss how the NSF-funded OpenVT project is working to build community to address these challenges."
author2: "Paul Macklin"
title2: "Intuitive code-free tissue modeling in the cloud with PhysiCell"
inst2: "Indiana University, USA"
dept2: ""
abstract2: "Agent-based models (ABMs) simulate individual cells as they move and interact in a virtualized tissue microenvironment (TME). When developing an ABM for a complex multicellular system, a scientist must define diffusible chemical substrates (e.g., oxygen and signaling factors), cell types, and functional relationships between cell behaviors and the chemical and physical signals in the simulated tissue environment. To date, creating an ABM requires scientists to encode these relationships–the “rules” of the cell agents–by hand: first as qualitative statements, then as mathematics, and finally as custom-written simulation code. As a result, ABMs take substantial time to develop and debug, and their code is neither interpretable nor reusable. In this talk, we describe a new (recently published), intuitive cell behavior grammar that writes ABM rules with human-interpretable language (e.g., “IL6 increases migration speed”), and directly and uniquely transforms these interpretable statements into mathematics and model code at run-time without need for hand coding. We also show a graphical studio (PhysiCell Studio) that allows scientist users to rapidly create, explore, and refine these code-free models on the desktop or in the cloud. We show examples from cancer hypoxia, immunology, neurodevelopment, and combination cancer treatments. Beyond the reference implementation in the PhysiCell ABM framework, the modeling grammar could provide a basis for model annotation and exchange between open source simulation toolkits, including “virtual cell templates” (digital cell lines) that bundle a cell type with base behavioral parameter values and cell rules written in this grammar."
author3: "James Osborne"
title3: "Multicellular Model Reproducibility: A case study, results from the Open VT hackathon"
inst3: "University of Melbourne, AUSTRALIA"
dept3: ""
abstract3: "Multicellular development is a key area of ongoing research, focussing on how tissues and organs develop and function, particularly how underlying processes fail. The last decade has seen remarkable progress in experimental studies of tissue and organ development, leading to the development of more advanced mathematical models and increased computational power. This has enabled the increased adoption of multicellular approaches to modelling the self-organisation of cells within tissues.
 
Multicellular simulations have become indispensable in understanding complex biological phenomena, from tissue development to disease progression. However, the diversity in simulation methods, such as agent-based models, lattice-free models, and stochastic particle simulations, poses challenges in terms of reproducibility, modularity, reusability, and integration within multi-scale multicellular simulations.
 
To address these challenges, we organised a workshop titled “Community Development of Multicellular Virtual Tissues: The OpenVT project” on the 13th of July 2025, as part of the 2025 SMB meeting.  We held a Reproducibility Hackathon during the workshop to test model reproducibility and specification. In this talk, we provide an overview of the workshop and present our findings on reproducibility in multicellular simulation."
---
