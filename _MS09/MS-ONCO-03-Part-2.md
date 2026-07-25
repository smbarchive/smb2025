---
layout: group
author: smb2025
subgroup: "ONCO"
subgroup-long: "ONCO-03"
title: "MathOnco Subgroup Mini-Symposium: At the Interface of Modeling and Machine Learning"
organizers: "Jana Gevertz (The College of New Jersey), Thomas Hillen (University of Alberta), Linh Huynh (Dartmouth College)"
description: "Mathematical oncology models describe cancer dynamics using biologically motivated equations that are validated using experimental data. Machine learning models, on the other hand, leverage vast amounts of data to make predictions without necessarily including any a-priori biological knowledge. Mathematical models result in biologically interpretable predictions, whereas machine learning models excel at handling complex, high-dimensional datasets. Thus, work at the interface of modeling and machine learning holds the promise of realizing the advantages of both methods.  In this mini-symposium, we will showcase how cancer research benefits from a combined approach of mathematical modeling and machine learning."
room: "Salon 13/14"
code: "MS09"
part: "2"
codes: [MS05/MS-ONCO-03-Part-1]
author1: "John Metzcar"
title1: "Evaluation of mechanistic and machine learning modeling approaches for glioblastoma recurrence prediction using white blood cell dynamics"
inst1: "University of Minnesota"
dept1: "Therapy Modeling and Design Center, College of Science and Engineering"
abstract1: "Glioblastoma (GBM) is the most aggressive primary brain tumor, with median recurrence times of approximately 9–11 months following surgery, despite intensive standard-of-care interventions. Early detection of recurrence is crucial for timely enrollment in clinical trials, potentially improving patient outcomes. The significant impact of GBM and its associated therapies on the immune system suggests clinically obtained white blood cell (WBC) counts with differential as possible biomarkers for recurrence prediction. We explore how mechanistic ODE modeling, capturing tumor-immune interactions and treatment impacts, compares with data-driven techniques (GPR and CPH) in predicting GBM recurrence. We apply methods individually and in hybrid combinations to patient-specific WBC trajectories spanning the perioperative period through recurrence. This comparative analysis evaluates predictive accuracy, interpretability, and clinical relevance across methodologies. Our aim is to share preliminary insights from applying multiple modeling strategies to a common clinical problem. By evaluating how each technique performs in the context of GBM recurrence, we hope to better understand their respective advantages and limitations. This work serves as a step toward assessing whether integrating mechanistic with data-driven models enables improved recurrence prediction through a clinically determined, dynamic biomarker."
author2: "Paul Macklin"
title2: "Integrating high-throughput exploration and learning with agent-based models of cancer"
inst2: "Indiana University"
dept2: "Intelligent Systems Engineering"
abstract2: "Agent-based models (ABMs) simulate individual cells as they move and interact in a virtualized tissue microenvironment (TME). In the context of cancer, ABMs are increasingly being used to model interactions of malignant cells with stromal cells and the immune system. Even before determining the parameters of an ABM, a key modeling step is to determine the “rules” of the cell agents: how stimuli in the TME (e.g., diffusible factors and their gradients, mechanical signals, contact with other cell types) model each cell agent’s behaviors. To date, parameter identification techniques are applied to pre-configured ABMs that are generally written by hand, hampering iterative efforts to learn the rules and parameters of cancer, fibroblast, and immune cell agents–whether by human implementation or artificial intelligence techniques. 

In this talk, we describe two advances to help attack this problem: first, we describe how large-scale model exploration on high performance computing (HPC) resources can allow us to broadly pre-explore parameter spaces, giving new insights on not just parameter sensitivity, but also giving new insights on patient-to-patient variation (even with identical model parameters) and the (un)likelihood of finding predictive biomarkers based solely upon patient data at a single time point. Second, we demonstrate a new modeling grammar that allows us to easily create alternative models without need for hand-writing code. Taken together, these advances open the automated exploration of large model spaces on HPC resources, including machine learning approaches. We discuss possible integrations of ABMs with machine learning techniques in future models that combine human and artificial intelligence."
author3: "Kit Gallagher"
title3: "Predicting Treatment Outcomes from Adaptive Therapy — A New Mathematical Biomarker"
inst3: "University of Oxford, Moffitt Cancer Center"
dept3: "Mathematical Institute, Integrated Mathematical Oncology"
abstract3: "Adaptive Therapy dynamically adjusts drug treatment to control, rather than minimize, the tumor burden of metastatic cancer, thus suppressing the growth of treatment-resistant cell populations and delaying patient relapse. Promising clinical results in prostate cancer indicate the potential of adaptive treatment protocols, but demonstrate broad heterogeneity in patient response. This naturally leads to the question: why does this heterogeneity occur, and is a ‘one-size-fits-all' protocol best for patients across this spectrum of responses?

Using deep reinforcement learning, we obtain personalized and clinically-feasible treatment protocols based on individual patient dynamics, and present a framework to generate these treatment schedules based on the patient's response to the first treatment cycle. From a Lotka–Volterra tumor model, we also obtain a predictive expression for the expected benefit from Adaptive Therapy and propose new mathematical biomarkers that can identify the best responders from a clinical dataset after only the first treatment cycle. Overall, the proposed strategies offer personalized treatment schedules that consistently outperform clinical standard-of-care protocols."
---
