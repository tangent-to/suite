---
title: "ml/explain"
---

SHAP (SHapley Additive exPlanations) for @tangent.to/ds

Model explanations based on Shapley values from cooperative game theory.
Every explainer is *additive*: for an instance x,

  f(x) = baseValue + Σ_j φ_j(x)

where `baseValue` is the model's expected output over a background/reference
distribution and `φ_j` is the contribution of feature j.

Three explainers are provided:

 - `KernelExplainer`  model-agnostic KernelSHAP (Lundberg & Lee, 2017).
                      Works with any model exposing a numeric `predict`,
                      e.g. a `GaussianProcessRegressor`, `MLPRegressor`, GLM…
 - `TreeExplainer`    exact, fast path-dependent TreeSHAP (Lundberg et al.,
                      2018) for `DecisionTreeRegressor` / `RandomForestRegressor`
                      (and bare `DecisionTreeBase`). Uses node coverage.
 - `PermutationExplainer`  model-agnostic Shapley estimation by sampling
                      feature permutations (Štrumbelj & Kononenko, 2014).

Plus tidy-data helpers `summaryData` / `importanceData` that turn SHAP values
into row arrays ready for Observable Plot (beeswarm / bar).

## Classes

- [KernelExplainer](classes/KernelExplainer.md)
- [PermutationExplainer](classes/PermutationExplainer.md)
- [TreeExplainer](classes/TreeExplainer.md)

## Functions

- [importanceData](functions/importanceData.md)
- [kernelShap](functions/kernelShap.md)
- [summaryData](functions/summaryData.md)
- [treeShap](functions/treeShap.md)
