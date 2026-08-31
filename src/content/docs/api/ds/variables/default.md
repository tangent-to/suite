---
title: "default"
---

> **default**: `object`

Defined in: [index.js:24](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/index.js#L24)

Default export bundling every namespace (core, stats, ml, mva, plot) under
one object for convenient single-import usage.

## Type Declaration

### core

> **core**: [`core`](../@tangent.to/namespaces/core/README.md)

Core module exports

### ml

> **ml**: [`ml`](../@tangent.to/namespaces/ml/README.md)

Machine Learning module exports

### mva

> **mva**: [`mva`](../@tangent.to/namespaces/mva/README.md)

Multivariate Analysis module exports

Provide both the functional namespaces (pca, hca, lda, rda) and the
class-based PCA and LDA estimators. Import the classes and re-export them
together with the functional namespaces to ensure consumers can import
either the functional API or the class-based estimators.

### plot

> **plot**: [`plot`](../@tangent.to/namespaces/plot/README.md)

Visualization module
Observable Plot configuration generators for data analysis

### stats

> **stats**: [`stats`](../@tangent.to/namespaces/stats/README.md)

Stats module exports
