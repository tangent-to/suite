---
title: "compositionalOutliers"
---

> **compositionalOutliers**(`mat`, `opts?`): `object`

Defined in: [mva/composition.js:721](https://github.com/tangent-to/ds/blob/7d229ed87da5ebf67c735ea5b568e110c7b5e17a/src/mva/composition.js#L721)

Detect compositional outliers via the Mahalanobis distance in log-ratio
space, tested as a chi-squared variable (Filzmoser & Hron; Parent & Dafir,
1992). Convenience wrapper around [CompositionalOutlierDetector](../classes/CompositionalOutlierDetector.md) that
fits on `mat` (or a `reference` subset of it) and tests `mat`.

For testing *new* points against the fitted reference (e.g. external
standards), fit a detector once and call `.test(newComposition)` - no manual
projection needed.

## Parameters

### mat

`number`[][]

Strictly-positive composition.

### opts?

#### alpha?

`number` = `0.05`

#### reference?

`boolean`[] = `null`

Mask selecting the rows that define
  the centroid/covariance (default: all rows).

#### transform?

`"clr"` \| `"ilr"` = `"clr"`

## Returns

`object`

### center

> **center**: `number`[]

### covInverse

> **covInverse**: `number`[][]

### detector

> **detector**: [`CompositionalOutlierDetector`](../classes/CompositionalOutlierDetector.md)

### df

> **df**: `number`

### distances

> **distances**: `number`[]

### outliers

> **outliers**: `boolean`[]

### pValues

> **pValues**: `number`[]
