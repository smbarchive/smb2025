---
layout: group
author: smb2025
subgroup: "MEPI"
subgroup-long: "MEPI-11"
title: "Advances in infectious disease modelling: towards a unifying framework to support the needs of small and large jurisdictions"
organizers: "Amy Hurford (Memorial University), Michael Li, Public Health Agency of Canada"
description: "Homogeneous mixing and the aggregation of diverse population groups into one group are frequent simplifying assumptions that may produce erroneous models and recommendations that exacerbate health inequities. Yet, models that make these simplifying assumptions have well-understood dynamics, and can be quickly solved, facilitating data fitting and uncertainty analysis that can support policy recommendations. Advancing the methodology around these model-building tensions is needed, and the best modelling approach may depend on the application. The motivation for developing these modelling approaches is from the COVID-19 pandemic in Canada. Atlantic Canada, the Canadian territories, and other small Canadian jurisdictions experienced different epidemiology, and needed different types of modelling support, than the larger Canadian provinces. There is a need to advance infectious disease modelling to support jurisdictions at all levels, and this session furthers this goal by including talks that describe: infectious disease spread in structured communities; importations and mobility networks; models that were developed for specific small jurisdictions, methods for calculating the reproduction number, estimating healthcare demand, and describing how the needs of small jurisdictions can be integrated into pandemic preparedness plans."
room: "Salon 12"
code: "MS04"
part: "2"
codes: [MS03/MS-MEPI-11-Part-1, MS08/MS-MEPI-11-Part-3, MS09/MS-MEPI-11-Part-4]
author1: "Reilly Comper"
title1: "A meta-population disease model for the transmission of highly pathogenic avian influenza H5N1 within and between dairy herds in Ontario, Canada to assess the potential risk of pathogen spillover to dairy workers"
inst1: "Trent University"
dept1: "Biology"
abstract1: "Introduction: Since first being identified in March 2024, the outbreak of highly 
pathogenic avian influenza H5N1 (HPAI-H5N1) in United States (US) dairy cattle 
has affected 973 herds across 17 states. The outbreak among cattle has 
subsequently led to 41 confirmed spillover cases in humans with a known exposure
to infected dairy cattle. Canadian cattle remain unaffected by the HPAI-H5N1 
outbreak. Preparedness and preparation during this time is critical and may help 
to mitigate the size and duration of such an outbreak should introduction of HPAI-
H5N1occur in Canada.
Objectives: The objectives of this study were to construct a meta-population 
disease model of HPAI-H5N1 in Ontario dairy cattle, parameterized based on 
empirical dairy cow movement networks, and to assess the potential for spillover 
infections to occur within Ontario dairy farm workers.
Methods: The meta-population model was built using the ‘SimInf’ package in R. 
The within-herd disease model was constructed using a stochastic SIR model 
framework and the system of between-herd dairy cow movements was based on 
random networks parameterized using historical Ontario dairy cow network data. 
Introduction of HPAI-H5N1 was assumed to occur through importation of infected 
cattle from the United States, the number and regional distribution of which were 
also based on historical data. A human spillover function was parameterized using 
data from the 2024 HPAI-H5N1 dairy outbreak in California, and the spillover 
function was applied to the results of the meta-population model simulations to 
estimate the number of projected dairy cow-to-human spillover events in Ontario. 
Ten thousand model simulations were run for one year and the number of primary 
herd infections (infected through importing infectious dairy cattle), secondary herd
infections (infected through the domestic movements of an infectious dairy cow(s) 
between Ontario herds), and human spillover cases were quantified.
Results: Simulations of the meta-population model resulted in the majority of 
infected herds being those that imported infectious dairy cows (IQR: 12-16; range: 
4-26). Due to the highly fragmented network of domestic between-herd dairy cow 
movements in Ontario, the number of secondary infection herds (i.e., Ontario herds
receiving an infectious cow from another Ontario herd) ranged from 0-5, with 
approximately 56% of model iterations resulting in no between-herd transmission 
of HPAI-H5N1 within Ontario. Spillover of HPAI-H5N1 to human farm workers was 
very rare, occurring in only 8/10,000 model iterations with no more than a single 
spillover event per iteration."
author2: "Clotilde Djuikem"
title2: "Threshold-based impulsive biocontrol for coffee leaf rust"
inst2: "University of Manitoba"
dept2: "Department of Mathematics"
abstract2: "Coffee leaf rust (CLR) severely affects coffee production worldwide, leading to reduced yields and economic losses. To reduce the cost of control, small-scale farmers often only apply control measures once a noticeable level of infection is reached. In this work, we develop mathematical models to better understand CLR dynamics and impulsive biocontrol with threshold-based interventions. We first use ordinary and impulsive differential equations to describe disease spread and the application of control measures once a certain infection level is detected. These models help determine when and how often interventions should occur. To capture the early stages of the disease and the chance that it might die out by itself, we then use a continuous-time Markov chain approach. This stochastic model allows us to estimate the probability that the pathogen fails to establish, thereby avoiding serious outbreaks."
author3: "Sayeda Irin Akter"
title3: " Modeling the Effect of Social Distancing on the Spread and Control of Infectious Diseases Using Point Pattern Process"
inst3: "York University"
dept3: "Mathematics and Statistics"
abstract3: "This work explores the spatial dynamics of disease transmission using Point Pattern Processes (PPPs) and distance-dependent infection rate within a Susceptible-Infectious-Removed-Susceptible (SIRS) framework. By modeling individuals as points in a continuous space, we examine how social distancing and spatial separation influence the spread of the virus. The infection rate is not uniform but varies with the distance between individuals, simulating the real-world effects of reduced contact through interventions like social distancing. We use mathematical models and point pattern analysis to investigate different spatial configurations, from clustered (high transmission risk) to dispersed (reflecting effective social distancing). The pair correlation function g(r) is employed to capture spatial clustering, while pair approximation simplifies the modeling of spatial interactions by considering the effect of pairwise interactions. Prior to social distancing, high $P_I$ probability of infection values are observed due to frequent close contacts, leading to clustered transmission patterns. After implementing social distancing, $P_I$ decreases as individuals are more dispersed, reducing the likelihood of infection. This approach allows us to quantify the impact of public health measures on transmission dynamics, providing insights for optimizing interventions to control the spread of disease."
author4: "Wade McDonald"
title4: "Use of Synthetic Data to Improve Wastewater-based Epidemiological Models in a Small Jurisdiction"
inst4: "University of Saskatchewan"
dept4: "Computer Science"
abstract4: "Previous studies have shown that applying methods such as Particle Filtering and Particle Markov-Chain Monte Carlo (pMCMC) to stochastic mechanistic epidemiological models can enhance model accuracy compared to simple parameter calibration. Addition of data streams to the filter can improve model fit even if those data are deemed to be of “low quality,” e.g., internet search volumes. In the present work, we employ a synthetic dataset, generated by an agent-based model, to explore the use of pMCMC with a compartmental epidemiological model, including wastewater-based epidemiology (WBE), in the context of a small jurisdiction facing an emerging pathogen. Predictive performance of the filtered model will be compared against synthetic ground truth using clinical cases alone versus clinical cases and WBE measures. Effects of structural mismatches between the synthetic ground truth and filtered model will be considered; for example, what if the synthetic ground truth admits waning of immunity (SIRS) but our filtered model assumes immunity is permanent (SIR)?"
---
