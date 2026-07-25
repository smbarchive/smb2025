---
layout: group
author: smb2025
subgroup: "MFBM"
subgroup-long: "MFBM-13"
title: "Modern methods in the data-driven modeling of biological systems"
organizers: "Cody FitzGerald (Northwestern University), Rainey Lyons (CU Boulder), Nora Heitzman-Breen (CU Boulder), Susan Rogowski (NCSU)"
description: "Due to recent developments in laboratory technology and data collection techniques, there is an abundance of large and complex datasets resulting from a vast array of biological experiments. This surge of data demands the development of novel data-driven techniques to generate robust, interpretable, and generalizable models of biological systems. The purpose of this minisymposium is to present modern advances in data-driven methods for modeling biological dynamics in the areas of parameter estimation, scientific machine learning, algorithmic model selection, and weak form methods. This minisymposium also aims to discuss common challenges which appear in the context of data-driven modeling, such as sparse data, unobserved states, noisy data, structural and practical identifiability issues, and incorporating multiple biological scales. Applications for such methods will span many active areas of biological research, including cell migration, physiology, neuroscience, epidemiology, and ecology."
room: "Salon 10"
code: "MS01"
part: "1"
codes: [MS02/MS-MFBM-13-Part-2, MS05/MS-MFBM-13-Part-3, MS08/MS-MFBM-13-Part-4]
author1: "Ruth Baker"
title1: "Combining models and data to unravel cell-cell interactions and provide a link between genotype and phenotype."
inst1: "University of Oxford"
dept1: "Mathematical Institute"
abstract1: "In vitro cell biology assays are a cornerstone of biomedical science, from basic research that aims to provide fundamental new understanding of development, disease and repair, through to pharmaceutical applications that include drug discovery and cytotoxicity testing. A widely adopted strategy is to conduct a particular in vitro assay under a range of genetic perturbation conditions and observe how cellular phenotypes change. The key challenge is then to determine the mechanisms by which the genetic perturbations give rise to the phenotypes. I will talk about recent work that combines mathematical modelling, data analysis techniques and computational statistics to characterise cell-cell interactions and provide a link between genotype and phenotype."
author2: "Cody FitzGerald"
title2: "Discovering universal temperature regulation dynamics in animals"
inst2: "Northwestern University"
dept2: "Department of Engineering Sciences and Applied Mathematics"
abstract2: "Hibernation is an adaptation to extreme environmental seasonality that has been studied for almost 200 years, but our mechanistic understanding of the underlying physiological system remains lacking due to the partially observed nature of the system. During hibernation, small mammals, such as the Arctic ground squirrel, exhibit dramatic oscillations in body temperature, typically one of the only physiological states measured, of up to 40 $^{circ}$C. These spikes are known as interbout arousals and typically occur 10-20 times throughout hibernation. The physiological mechanism that drives interbout arousals is unknown, but two distinct mechanisms have been hypothesized. Using model selection for partially observed systems, we are able to differentiate between these two mechanistic hypotheses using only body temperature data recorded from a free-ranging Arctic ground squirrel. We then modify our discovered physiological model of Arctic ground squirrel to include environmental information and find that we can qualitatively match body temperature data recorded from a wide range of species, including a bird, a shrew, and a bear, which also dynamically modulate body temperature. Our results suggest that a universal, environmentally sensitive mechanism could regulate body temperature across a diverse range of species---a mechanistic restructuring of our current understanding of the physiological organization across species. While the findings presented here are applicable to thermophysiology, the general modeling procedure is applicable to time series data collected from partially observed biological, chemical, physical, mechanical, and cosmic systems for which the goal is to elucidate the underlying mechanism or control structure."
author3: "Joshua Macdonald"
title3: "Recovering Ecological Geometry: A Trait- and Depth-Structured IPDE Model of Plankton Dynamics"
inst3: "Johns Hopkins"
dept3: "Bloomberg School of Public Health"
abstract3: "We present a trait- and depth-resolved integro-partial differential equation (IPDE) model of plankton community dynamics, designed as a biologically grounded testbed for evaluating the recoverability of structured ecological observables. The model integrates continuous trait structure, vertical gradients, interaction kernels derived from ecological principles, realistic carbon cycling, and seasonal forcing. It generalizes classical NPZD (nutrient–phytoplankton–zooplankton–detritus) and biogeochemical models by replacing rigid compartmentalization with emergent group formation and trait-mediated interaction geometry. In doing so, it bridges traditional oceanographic modeling and trait-based ecological theory, offering a new path forward that emphasizes functional complexity and emergent structure over many fixed compartments and explicitly enforced structure. We show that the model produces biologically and physically realistic dynamics and enables explicit testing of ecological assumptions that were previously hard-coded. We conclude by outlining directions for future development, including strategies for model–data comparison that prioritize recovering latent geometric structure over minimizing prediction error."
author4: "William Lavery"
title4: "Biologically-Informed Neural Networks for cell models with minimal prior assumptions"
inst4: "Uppsala University"
dept4: ""
abstract4: "We use a neural network architecture with a physics-informed cost function to
formulate a mathematical model that describes the spatiotemporal dynamics of
cells, as seen in, for example, microscopy images and MRIs. In particular, we use
a supervised learning framework on cell coordinate data while enforcing a gen-
eralised reaction-diffusion partial differential equation (PDE) in two dimensions.
By representing the diffusion and reaction terms as multilayer perceptrons, the
method learns their forms with minimal prior assumptions (informed by fun-
damental biological considerations) while simultaneously solving the governing
PDE. We have evaluated the method in two scenarios: (1) numerically simulated
cell density data obtained by forward-solving the original PDE and (2) agent-
based simulations that converge to the continuous cell density case in the limit
of infinite cells and infinitesimal time steps. Our next step is to apply the frame-
work to experimental in vitro data to uncover underlying dynamics. The overall approach can be extended to other governing PDEs (e.g., incorporating additional terms on the right-hand side of the reaction-diffusion equation) and broader particle interaction models."
---
