---
layout: group
author: smb2025
subgroup: "CDEV"
subgroup-long: "CDEV-02"
title: "Mechanistic modeling from inter- to intra-cellular phenomena"
organizers: "Andreas Buttenschoen (University of Massachusetts Amherst), Calina Copos (Northeastern University)"
description: "Processes such as the immune system response, cell division, developmental processes, and cell migration require the coordination of intra-cellular and inter-cellular processes from inside the cell to between cells, and across tissues. Defects manifest in pathological conditions such as cancer. Identifying key molecular players and their spatiotemporal dynamics requires a multiscale perspective, novel mathematical modeling, and data-driven inference. Ultimately, as a community we aim to identify the universal principles underpinning such cellular phenomena.

In this minisymposium, we bring together emerging leaders and innovative early-career scientists who develop tools and models uncovering the mechanistic underpinnings of intra- and inter-cellular dynamics, and generate key insights using mathematical and statistical tools. The mini-symposium aims to bridge the gap between theoretical models and experimental data, fostering collaboration and innovation in the dynamic field of cellular research."
room: "Salon 15/16"
code: "MS07"
part: ""
author1: "Jupiter Algorta"
title1: "A Data-Driven Model of Polarity Reversal in Migrating Cells"
inst1: "University of British Columbia"
dept1: ""
abstract1: "We study how motile cells can reverse their polarity when exposed to changing stimuli, using mathematical modeling alongside extensive experimental data from optogenetic assays carried out by our collaborators in the Orion Weiner lab (UCSF). These experiments revealed an unexpected phenomenon: when a localized input is followed by a global stimulus, cells often reverse their direction of turning. To explain this, our collaborators hypothesized the existence of a slow-acting, locally produced inhibitor downstream of Rac, a signaling molecule known to promote actin assembly and front-edge protrusion. We test this idea by adapting an existing reaction diffusion model that, under certain conditions, produces a stable spatial pattern: a polarized distribution with a clear front and back. This modeling framework, often referred to as wave-pinning, has not previously been fitted directly to experimental data. Here, we calibrate the model’s reaction terms to time-dependent Rac activity data, introducing a novel approach that embraces cellular heterogeneity by fitting a distribution of parameters across multiple cells. While the Rac-inhibitor circuit captures several key features of the response, it fails to reproduce reversal. Incorporating PIP3, an upstream regulator of Rac, allows the model to recover reversal dynamics and reproduce the full range of observed behaviours. In this presentation, we will show the development of our modeling framework from its earliest steps, including how data fitting informed model refinement. Our results validate the experimental hypothesis and yield new predictions about the molecular timing and feedback logic underlying flexible polarity control."
author2: "Mariya Savinov"
title2: "Modeling mechanically driven tumor cluster coattraction on ECM"
inst2: "New York University"
dept2: "Courant Institute of Mathematical Sciences"
abstract2: "Authors: Mariya Savinov (1), Jeremy Garcia (2), Alex Mogilner (1,2), Carlos Carmona-Fontaine (2)

(1): Courant Institute of Mathematical Sciences, New York University, New York, NY.
(2): Department of Biology, New York University, New York, NY

Collective cell migration is essential for morphogenesis, playing a key role in processes such as embryonic development and cancer metastasis. The ability of cells to collectively migrate in a directional manner depends on coordination cues, both local between cells and extracellular (e.g.  chemotaxis). How cells in cancer clusters coordinate their movements, particularly in early metastasis, is still not well understood. Here we tackle this question using a combined experimental and modeling approach.

Our experimental efforts employed a model system of multicellular tumor structures, which we refer to as cell clusters, on extracellular matrix (ECM). We found that when two cell groups are within a threshold distance, they â€œcoattractâ€, spontaneously migrating collectively towards each other. Surprisingly, the tumor cell clusters also detect and then migrate toward biologically inert beads, suggesting that the coattraction is a consequence of a mechanical cue of the ECM.

To uncover the mechanisms underlying the robust coattraction threshold, we developed a mathematical model of the ECM as a 2D deformable elastic, cable-network material. As experiments have shown that cell clusters pull and concentrate the ECM, the model ECM is subjected to isotropic contractile stresses by the tumor cell clusters.

Through analysis and numerical simulation, our model reveals how the mechanical force distribution of the underlying ECM acts as a symmetry-breaking cue to initiate cell cluster coattraction. We reproduce key experimental results and, notably, our model predicts a lower coattraction threshold between a single cluster and bead as compared to a pair of cell clusters. This work demonstrates how mechanical forces in the ECM can efficiently guide tumor cell cluster migration, and has broad implications regarding the survival of tumor cells during the metastatic journey."
author3: "Wei Wang"
title3: "Statistics of fracture in collective cell migration"
inst3: "Johns Hopkins University"
dept3: ""
abstract3: "When cells migrate collectively, individual cells or small groups can detach from the main body. These fracture events play an important role in cancer invasion and other biological processes, but their statistics and physical control mechanisms remain unclear. We present a theoretical and experimental study that quantifies the statistics of fracture events in collectively migrating tissues and connects them to physical models of active matter with growth and breakup.

We analyze experiments where human carcinoma cells migrate along chemotactic gradients in microchannels and sometimes rupture away from the invading strand. Most rupture events involve single cells, but larger clusters also occur. The rupture probability shows little dependence on the degree of geometric confinement. To understand these observations, we construct a phase-field model of deformable cells that incorporates chemotaxis, heterogeneous cell states (followers, guided cells, and leader cells), and cell-cell and cell-wall adhesion. This model recapitulates key features of the experiments, including the distribution of rupture sizes and times. Our results show that cell-channel adhesion is necessary for cells in narrow channels to invade, and strong cell-cell adhesion leads to fewer but larger ruptures. Chemotaxis also influences the rupture behavior: Strong chemotaxis strength leads to larger and faster ruptures. We also examine the connection between biological jamming transitions and fracture. Our results suggest unjamming is necessary but not sufficient to create ruptures.

To generalize this picture, we study how cell groups control their cluster sizes using a one-dimensional active particle model of growing and fragmenting chains. In this model, rupture is driven by random cell motility, and cluster size is set by the balance between growth and breakup. We compute the rupture rate analytically and solve for the exact steady-state size distributions. We show that these statistics depend only on the ratio of break to division rates, and that size variability can be reduced by restricting division to cluster edges or localizing rupture to the interior. Our theory also suggests that the observed drop in fracture rate in experiments can be explained by relatively small changes in cell motility.

Together, these results provide a physical framework for understanding the statistics of fracture in collective migration, with implications for both tissue size regulation and cancer cell metastasis."
author4: "Eric Cytrynbaum"
title4: " A model for root zone regulation by brassinosteroid and CLASP"
inst4: "University of British Columbia"
dept4: ""
abstract4: "The root apical meristem of the plant A. thaliana is organized into distinct zones, each of which plays an important developmental role. The plant hormone brassinosteroid and the protein CLASP influence the size and dynamics of the elongation and division zones thereby controlling the rate of root growth. This regulation allows plant growth to be responsive to environmental conditions. In this talk, I will describe a model for a mechanism by which brassinosteroid and CLASP modulate cell elongation and cell division. The model is able to match measured root growth data for wild type and two mutants under the condition that CLASP has a biphasic influence on the rate of cell cycle progression, with a maximum cell division rate for intermediate levels of CLASP. This result suggests that CLASP, a regulator of microtubule dynamics, must be finely tuned to allow microtubules to efficiently relocalize through the cell cycle."
---
