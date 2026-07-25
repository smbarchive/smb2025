---
layout: group
author: smb2025
subgroup: "CARD"
subgroup-long: "CARD-02"
title: "Novel multiscale and multisystem approaches to cardiovascular modeling and simulation"
organizers: "Mitchel J. Colebank (University of South Carolina), Vijay Rajagopal, The University of Melbourne, Australia"
description: "Cardiovascular models are now recognized as a potential frontier in the development of personalized models and digital twins. This new excitement in the field is fueling new strides in mathematical and computational approaches to describe cardiovascular function across different temporal and/or spatial scales. In addition, new multisystem models accounting for how the heart and vasculature interact with other organ systems are being developed in combination with tools located at the heart of data science. Thus, this minisymposium will focus on the development of cardiovascular models that mimic cardiovascular function across spatial or temporal scale, new models that couple the cardiovascular system with other physiological systems, and new innovations in data-driven solutions to modeling cardiovascular phenomena. Potential topics include:
- Multiscale models of cardiac and vascular function;
- Computational approaches to cell-tissue-organ level function;
- Mathematical coupling of cardiac and vascular mechanics;
-  Modeling autonomic control and neurovascular function;
- Simulating tissue growth and remodeling;
- Multisystems models of cardiovascular-organ interactions; and
- Physics-informed data science approaches to cardiovascular science"
room: "Salon 4"
code: "MS01"
part: "1"
codes: [MS02/MS-CARD-02-Part-2, MS03/MS-CARD-02-Part-3]
author1: "Vijay Rajagopal"
title1: "Calcium-dependent regulation of physiological vs pathological cardiomyoctre hypertrophy"
inst1: "University of Melbourne"
dept1: "Department of Biomedical Engineering"
abstract1: "Cardiomyocyte hypertrophic growth contributes to the adaptative response of the heart to meet sustained increases in hemodynamic demand. While hypertrophic responses to physiological cues maintains or enhances cardiac function, when triggered by pathological cues, this response is maladaptive, associated with compromised heart function, although initially, this response maybe adaptive with preserved function. Since cues and activated pathways associated with both forms of hypertrophy overlap, the question arises as to the mechanism that determines these different outcomes. Here we evaluate the hypothesis that cardiomyocyte Ca2+ signalling – a regulator of pathological hypertrophy - also signals physiological hypertrophy. We discuss how different Ca2+ profiles, in distinct subcellular organelles/microdomains, and interacting with other signalling pathways, provides a mechanism for Ca2+ to be decoded to induce distinct hypertrophic phenotypes. We discuss how integration of computational with rich structural and functional cellular measurements can be used to decipher the role of Ca2+ in hypertrophic gene programming."
author2: "Karin Leiderman"
title2: "A discrete platelet-bonding model for simulating platelet aggregation under flow"
inst2: "University of North Carolina at Chapel Hill"
dept2: "Department of Biochemistry & Biophysics"
abstract2: "Hemostasis is the healthy clotting response to a blood vessel injury. A major component of clotting is platelet aggregation, which involves the formation of platelet-platelet and platelet-wall bonds between platelet receptors (GPVI and GP1b), and platelet integrins ($alpha_2beta_1$ and $alpha_{IIb}beta_3$) with plasma-borne molecules (von Willebrand factor and fibrinogen) and wall adherent collagen. There are platelet disorders that decrease the number and/or functionality of $alpha_{IIb}beta_3$, which results in excessive bleeding. Current treatments exist but are not evidence based and are not always successful in restoring hemostasis. In the cases where hemostasis is restored, the aggregation mechanism without $alpha_{IIb}beta_3$ remains speculative. Our long-term goal is to uncover this mechanism with a mathematical and computational approach. As a first step, we simulated platelet aggregation using the molecular dynamics software, LAMMPS. We considered individual platelets and tracked the platelet-platelet and platelet-wall bonds that formed during aggregation. Currently, the strength of the bonds depends on the local shear rate of a prescribed background flow. Simulations show stable aggregation for healthy platelets under flow. Future work is to improve our modeling framework by parameterizing with experimental measurements and computationally coupling our platelet model to a dynamic flow."
author3: "Pradeep Keshavanarayana"
title3: "Combination of shear stress and hydrostatic pressure dictates the temporal behaviour of vasculature permeability"
inst3: "University College London, London, UK"
dept3: "Centre for Computational Medicine"
abstract3: "ndothelial cells form the inner lining of blood vessels, and their dysfunction, particularly at VE-cadherinbased cell-cell junctions, is associated with several life-threatening diseases. These cells are simultaneously
exposed to various mechanical and chemical stimuli, with pathological conditions altering the balance of these
stimuli, disrupting mechano-chemical equilibrium and cellular functions. Key mechanical stimuli include
extracellular matrix (ECM)-dependent traction forces, shear stress from blood flow, and hydrostatic pressure
within blood vessels. The simultaneous action of these forces disrupts cell-cell junctions, leading to changes
in endothelial permeability. Increased permeability is not only linked to cardiovascular diseases but also
impacts organs like the eyes and brain through the blood-retinal and blood-brain barriers.
To investigate the effects of multiple mechanical stimuli on the endothelium, we developed a continuum
model of an endothelial cell incorporating a strain-rate dependent active stress model. VE-cadherins, which
connect neighbouring endothelial cells, are modelled using a traction-separation law. As traction forces on
cell-cell junctions increase, the cohesive bonds weaken, resulting in loss of contact between cells. Our model
considers both planar and cylindrical monolayers, revealing that monolayer geometry, in addition to mechanical stimuli, influences permeability. Recent in vitro studies have identified piezo-1 as a mechanotransduction
pathway that regulates endothelial cell responses by altering cytoplasmic calcium concentration. Using a
phenomenological law linking mechanical stimuli to calcium concentration and active stress, we demonstrate
that endothelial permeability depends on shear stress and hydrostatic pressure magnitudes, and the duration
of its application.
Simulations show that permeability evolves over time based on shear stress magnitude. Under hydrostatic
pressure, low shear stress initially results in lower permeability compared to high shear stress. However, over
time, permeability under low shear stress surpasses that of high shear stress. This suggests that low shear
stress is initially atheroprotective but becomes atheroprone over time, while high shear stress transitions
from being atheroprone to relatively atheroprotective. Additionally, we analysed contact forces between
endothelial cells under varying mechanical stimuli. For low shear stress, the median contact force is higher
at the start than at the end, whereas for high shear stress, the median is higher at the end than at the start.
These findings indicate that changes in shear stress magnitude affect VE-cadherin distribution and mechanical equilibrium. In vitro experiments further show that the morphology of VE-cadherin junctions—whether
finger-like projections or smooth—depends on the magnitude and duration of mechanical stimuli. Furthermore, we expand the model to examine how increased vascular permeability influences diabetic macular
oedema. Our findings indicate that the spatiotemporal progression of oedema is governed by the patientspecific distribution of retinal vasculature. Thus, our model provides insights into how multiple mechanical
stimuli influence endothelial permeability and regulates tissue behaviour in physiological and pathological
conditions."
author4: "Pim Oomen"
title4: "One Size Does Not Fit All: Systems Biology Modeling of Sex-Specific Cardiac Remodeling"
inst4: "University of California, Irvine"
dept4: "Department of Biomedical Engineering"
abstract4: "While all hearts share the same fundamental properties and functions, no two hearts are truly the same. These differences are especially evident between female and male hearts. Interestingly, infant female hearts are initially slightly larger, with male hearts exceeding female heart size only after puberty. These relative changes coincide with major hormonal transitions during puberty and menopause, indicating a pivotal role for sex hormones in cardiac growth and remodeling. Yet, the precise mechanisms through which sex hormones such as estradiol and testosterone influence cardiac growth and remodeling remain elusive. Due to the complexity and intricate interplay of processes involved in cardiac growth and remodeling, computational models have proven useful in quantifying and analyzing these dynamics. However, there remains a critical need for models that consider sex hormones as biological variable. This critical gap prevents us from understanding the mechanisms behind sex-specific cardiac growth and remodeling and limits the effectiveness of using computational models to inform personalized therapies. In this talk, we will discuss how we used publicly available data to develop a multi-scale systems biology model of the interplay of sex hormones and cardiac remodeling. We use this model to understand the mechanisms that drive sex differences in cardiac remodeling, and demonstrate how these insights can be translated into personalized therapeutic approaches tailored to each patient, ultimately advancing the field toward precision cardiovascular medicine."
---
