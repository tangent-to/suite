---
title: "ordiplot"
---

> **ordiplot**(`result`, `options?`): `any`

Defined in: [plot/ordiplot.js:48](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/plot/ordiplot.js#L48)

Generate unified ordination plot configuration
Works with PCA, LDA, and RDA results

## Parameters

### result

`any`

Ordination result (from PCA, LDA, or RDA)

### options?

Configuration options

#### axis1

`number` = `1`

First axis to plot (default: 1)

#### axis2

`number` = `2`

Second axis to plot (default: 2)

#### color

`any` = `null`

Point color scale for grouped points, merged
  into the Plot `color` scale: `{ range, scheme, domain, legend, label }`. E.g.
  `{ range: ["#111","#888"] }` for greyscale, or `{ scheme: "Observable10" }`.

#### colorBy

`any` = `null`

Group values for points: an array,
  any iterable (e.g. an Arquero column), a { data, column } descriptor, or the name of a
  column in the data the model was fit on (requires a declarative fit({ data, ... }))

#### height

`number` = `400`

Plot height (default: 400)

#### labels

`any` = `null`

Labels for points (same accepted forms as colorBy)

#### loadingColor

`string` = `null`

Stroke for loading arrows (default:
  'red', or 'blue' for an RDA response triplot).

#### loadingFactor

`number` = `1`

Multiplier applied to loading vectors (default: 1, set 0 for auto)

#### loadingScale

`number` = `3`

Scale factor for loading vectors (default: 3)

#### loadingTextColor

`string` = `null`

Fill for loading labels (default:
  'darkred', or 'darkblue' for RDA).

#### pointColor

`string` = `'steelblue'`

Fill for points when there is no `colorBy`
  (default: 'steelblue').

#### pointRadius

`number` = `4`

Point radius (default: 4).

#### predictorColor

`string` = `null`

Stroke for RDA predictor arrows
  (default: 'red'). Set e.g. '#111' for a greyscale triplot.

#### predictorFactor

`number` = `null`

Multiplier for predictor arrows (RDA only, default: inherits loadingFactor; set 0 for auto)

#### predictorTextColor

`string` = `null`

Fill for RDA predictor labels
  (default: inherits predictorColor, else 'darkred').

#### showCentroids

`boolean` = `false`

Show class centroids (LDA only)

#### showConvexHulls

`boolean` = `false`

Show convex hulls around groups (optional)

#### showLoadings

`boolean` = `true`

Show loading vectors (PCA/RDA only)

#### symbolBy

`boolean` = `false`

Also encode groups by symbol (shape), not
  colour alone - recommended for greyscale / colour-vision-deficiency safety.

#### type

`string` = `null`

Type of ordination ('pca', 'lda', 'rda') - auto-detected if not specified

#### width

`number` = `640`

Plot width (default: 640)

## Returns

`any`

Plot configuration
