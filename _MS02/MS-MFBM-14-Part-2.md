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
code: "MS02"
part: "2"
codes: [MS01/MS-MFBM-14-Part-1, MS08/MS-MFBM-14-Part-3]
author1: "Rajendra Singh Negi"
title1: "Multicellular modeling of how myosin localization impacts symmetry-breaking in zebrafish embryonic development"
inst1: "Syracuse University, USA"
dept1: ""
abstract1: "A fundamental question is how organisms control cell and organ morphology during development, and we address this question using Kupffer’s Vesicle (KV), the left-right organizer in zebrafish, as a simple model organ. Both the cells that comprise the KV, and the organ itself, change shape in a stereotyped manner that is important for organ function. While multiple mechanisms have been proposed to govern these shape changes, recent studies combining 3D simulations with laser ablation experiments have shown that the slow movement of KV through the surrounding tailbud tissue generates dynamic forces that alter the organ and cell shape [1]. To understand the molecular mechanisms that affect this motion, we have developed an experimental protocol to perturb myosin activity in a localized region of interest in the tailbud, using an optically controlled rho-kinase inhibitor. We implement a 3D vertex-based simulation framework that captures the multicellular dynamics of KV migration. Our model incorporates key mechanical interactions: posterior traction from migratory cells, anterior pushing by the notochord using conversion-extension, and viscoelastic responses from surrounding tailbud tissue. We model the effect of the caged rho-kinase inhibitor as a diffusing patch of signal that emanates from a region of interest below the tailbud, which alters both the dynamic forces applied to KV as well as the mechanics of the tailbud tissue. This approach allows us to investigate how localized molecular perturbations propagate through tissue to influence organ motion and morphology. Preliminary results show that such perturbations can alter the motion and shape of KV, revealing how spatially confined molecular changes can drive large-scale morphogenetic transformations. 

[1] Manna et al. bioRxiv, https://arxiv.org/pdf/2407.07055 
This work was supported by NIH R01HD099031."
author2: "Claire Miller"
title2: "Multicellular modelling of endometrial cell invasion in endometriosis lesion onset"
inst2: "Auckland Bioengineering Institute, NEW ZEALAND"
dept2: ""
abstract2: "Endometriosis is a chronic gynaecological condition that is estimated to affect 1 in 9 people with a uterus. The disease is characterised by the presence of cells similar to those that line the uterus (endometrial cells) growing as lesions outside the uterus, such as in the lining of the pelvis. It is hypothesised that the disease originates from menstrual debris entering the pelvic region via the fallopian tubes. The endometrial cells in this menstrual debris then breach the epithelial layer lining the pelvis and form lesions that intrude into the lower layers of the tissue. Very little is understood about the conditions required for endometriosis onset. The endometrial cell invasion behaviour has been hypothesised to be a result of dysfunctions in the immune system, the invading endometrial cells, the breached epithelial layer, or any combination of these. In this talk I will present a multicellular agent-based model for endometrial cell invasion of an epithelial monolayer. Using this model, I will explore several of the hypotheses around disease onset, such as those related to cell proliferation and adhesion, and assess the level to which they promote endometrial cell invasion."
author3: "TJ Sego"
title3: "Quantitative Reproducibility at Scale: A Federated, Standardizable Approach"
inst3: "University of Florida, USA"
dept3: ""
abstract3: "Stochastic simulations are commonly used to quantitatively or semi-quantitatively describe the dynamics of biological systems. Proving reproducibility of simulation results is critical to establishing the credibility of a model. However, reproducibility of stochastic simulation is difficult for numerous reasons. For example, under-sampling produces insufficient information to allow conclusive findings from independent reproducibility studies. Hence, along with measures to compare results, reproducible stochastic simulation as a community-level practice requires measures of when results can be verified as meaningfully reproduced in independent study, and data formats for facilitating information exchange.  

This session presents the Empirical Characteristic Function Equality Convergence Test (EFECT), a data-driven method to quantify the reproducibility of stochastic simulation results. EFECT provides a quantitative measure of the reproducibility of stochastic results, called the EFECT Error, for modelers to determine a sample size that allows independent reproducibility studies. EFECT also provides a statistical test for performing reproducibility studies with an a priori significance, enabling modeling communities to develop standards and best practices. To this end, EFECT defines the minimum necessary information, called an EFECT Report, to facilitate exchange between modelers for reproducibility studies. The session surveys numerous applications that demonstrate EFECT enabling reproducible stochastic simulation with a variety of modeling methodologies, including ordinary differential equations with stochastic parameter sampling, stochastic differential equations, agent-based models, and uncertainty quantification in physics-informed neural networks. The session concludes with a detailed look at how a Python library implementation of EFECT, called libSSR, is enabling quantitative reproducibility in multicellular modeling as a federated, community-level activity."
author4: "Eran Agmon"
title4: "Multicellular Schema with Vivarium"
inst4: "University of Connecticut, USA"
dept4: ""
abstract4: "As models of multicellular biology grow in complexity, there is a critical need for modular, extensible frameworks that can manage diverse biological processes across scales. This talk introduces a compositional schema approach, a methodology for constructing simulations of multicellular systems through modular, interoperable components. Central to this approach is Vivarium, an open-source software platform designed to integrate heterogeneous modeling formalisms—including ODEs, stochastic kinetics, constraint-based models, agent-based systems, and rule-based logic—into unified, hybrid simulations. I will highlight how Vivarium supports schema-driven composition of cells, their interactions, and their environments, enabling scalable simulations of tissues, microbial communities, and synthetic consortia. A flagship example is the integration of diverse mechanistic submodels in a whole-cell simulation of Escherichia coli, demonstrating Vivarium’s ability to orchestrate biological complexity through standardized schemas and modular interfaces. I will discuss design principles behind Vivarium, share emerging tools for building multicellular models, and outline future directions for collaborative, open-ended systems biology."
---
