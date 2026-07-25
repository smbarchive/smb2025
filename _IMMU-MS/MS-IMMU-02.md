---
layout: group
author: smb2025
subgroup: "IMMU"
subgroup-long: "IMMU-02"
title: "In host Viral Dynamics"
organizers: "Esteban A. Hernandez-Vargas (University of Idaho), Veronika Zarnitsyna, Emory University"
description: "Understanding the complex dynamics of viral infections requires integrating experimental data with mathematical and computational models that capture both intracellular and cell-level processes. This mini-symposium will explore recent advances in modeling SARS-CoV-2 and other respiratory viruses to improve predictions of infection dynamics, antiviral efficacy, and viral interactions. Presentations will examine how clinical trial simulations can refine antiviral potency assessments, addressing discrepancies between polymerase chain reaction (PCR) measurements and actual viral clearance. The discussion will also focus on time-dependent viral production rates and their implications for within-host infection models. At the intracellular level, mechanistic models of SARS-CoV-2 replication will provide insights into key bottlenecks in the viral life cycle and potential therapeutic targets. Finally, the symposium will explore models of viral-viral coinfections in the respiratory tract, highlighting how interactions between different pathogens can shape disease progression and treatment responses. By bridging theoretical and clinical perspectives, this session aims to refine our understanding of viral infections and inform more effective antiviral strategies."
room: "Salon 1"
code: "MS06"
part: ""
author1: "Esteban Hernandez Vargas"
title1: "CrossLabFit: Enhancing parameter fitting in viral dynamics through cross-laboratory qualitative integration"
inst1: "University of Idaho"
dept1: "Department of Mathematics and Statistical Science"
abstract1: "Accurate parameter estimation is critical for predictive modeling in viral dynamics, yet it remains a major bottleneck due to sparse, heterogeneous, and often qualitative data. Traditional fitting approaches typically rely on rich quantitative datasets from a single lab—an impractical constraint for many real-world biological systems.

In this talk, I will introduce CrossLabFit, a new framework that enables parameter fitting by integrating qualitative trends from multiple experimental sources. Instead of requiring high-frequency, high-resolution data from a single experiment, our method leverages categorical and trend-based insights collected across labs. These are encoded as 'qualitative windows'—adaptive constraints that guide model behavior without demanding precise point-wise agreement.

We implement this approach using a GPU-accelerated differential evolution algorithm, allowing us to efficiently explore parameter spaces constrained by both quantitative data and distributed qualitative insights. Applied to viral dynamics models, CrossLabFit not only improves fit accuracy but also enhances parameter identifiability in settings where conventional methods struggle.

By enabling collaborative data use across labs, this method offers a scalable, realistic path to better modeling of complex infectious diseases. I will conclude by discussing applications to current viral systems and how this approach opens doors for broader integration in systems biology.

Funding: Research reported in this publication was supported by the National Institute of General Medical Sciences of the National Institutes of Health under award numbers R01GM152736."
author2: "Hana Dobrovolny"
title2: "Time-varying viral production in virus dynamics models"
inst2: "Texas Christian University"
dept2: "Department of Physics & Astronomy"
abstract2: "Mathematical modeling of viral kinetics can be used to gain further insight into the viral replication cycle and virus-host interactions. However, many virus dynamics models assume that viral production occurs at a constant rate over the lifespan of the infected cell. In fact, virus yield is time-dependent, which could alter the time course of the viral infection. We used measurements of viral yield from single cells infected with vesicular stomatitis virus (VSV) to determine the cumulative distribution of virus produced by a single cell. We then incorporate the distribution into an integro-differential equation model of viral infection that allows for time-dependent viral production, allowing us to determine how time-dependent viral production changes the predictions of viral kinetics models."
author3: "Timon Kapischke"
title3: "Mathematical Modeling and Analysis of Factors Influencing the Intracellular Replication of SARS-CoV-2"
inst3: "University Medicine Greifswald Greifswald"
dept3: "Institute of Bioinformatics"
abstract3: "The emergence of SARS-CoV-2 underscored the critical need to understand the molecular mechanisms governing viral replication and host response. While mathematical models have provided valuable insights into viral dynamics, detailed mechanistic models of SARS-CoV-2 intracellular replication remain scarce. Here, we present a comprehensive model that captures the key stages of the intracellular viral life cycle and enables quantitative analysis of host-virus interactions.

Methods: We developed a mechanistic model encompassing viral entry, replication, protein synthesis, and virion release, implemented within the Data2Dynamics framework. The model was calibrated using high-resolution 24-hour kinetic data, including measurements of viral RNA, proteins, and virion concentrations, to ensure accurate parameter estimation and robust validation.

Results: The model successfully recapitulates the intracellular dynamics of SARS-CoV-2 and identifies key regulatory points that serve as potential therapeutic targets. We validated these predictions through drug response experiments targeting distinct stages of the replication cycle. Furthermore, comparative analysis of replication kinetics across SARS-CoV-2 variants reveals mechanistic insights into observed differences in replication efficiency. Ongoing work focuses on extending the model to include the RIG-I/JAK-STAT signaling pathway, aiming to link intracellular viral dynamics with innate immune responses.

Funding: DFG, project number 462165342"
author4: "Lubna Pinky"
title4: "Modeling how virus-virus interference can affect population-level transmission dynamics"
inst4: "Meharry Medical College"
dept4: "Department of Biomedical Data Science"
abstract4: "Certain viruses demonstrate capacity to inhibit the replication of competing pathogens during concurrent infection within hosts - a phenomenon termed viral interference that has been observed among respiratory viruses, including SARS-CoV-2 and its co-circulating counterparts. Using a compartmental epidemiological framework, we investigate how this host-level viral suppression translates to population-scale transmission dynamics. Our findings reveal that viral interference manifests as reduced infections of the suppressed virus across the population, with significant effect observed when competing viruses possess comparable epidemiological parameters. Simulating co-circulation scenarios between SARS-CoV-2 and three common respiratory pathogens, we demonstrate that RSV co-circulation produces the most substantial suppression of SARS-CoV-2 transmission. Interestingly, while SARS-CoV-2 epidemics remain largely unaltered during co-circulation with either influenza or rhinovirus, these interactions induce temporal shifts in the epidemic curves of the latter viruses - highlighting asymmetric interference effects that depend on specific viral pairings. These results suggest how molecular-level viral competition shapes broader epidemic patterns and transmission trajectories of respiratory infections."
---
