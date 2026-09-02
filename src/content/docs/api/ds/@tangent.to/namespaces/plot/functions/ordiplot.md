---
title: "ordiplot"
---

> **ordiplot**(`result`, `options?`): `any`

Defined in: [plot/ordiplot.js:79](https://github.com/tangent-to/ds/blob/f03994f48e9c28111fe220ccf64940ed8dbce7ac/src/plot/ordiplot.js#L79)

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

#### labelNudge

`number` = `1`

Multiplier on the radial distance a loading/
  predictor label sits past its arrow tip (default 1). Larger pushes labels
  further out from the tips before de-collision.

#### labelRepel

`boolean` = `true`

Run ggrepel-style overlap removal on the
  arrow labels (default true). Set false to place each label at its tip with no
  de-collision.

#### labels

`any` = `null`

Labels for points (same accepted forms as colorBy)

#### loadingColor

`string` = `null`

Stroke for loading arrows (default:
  'red', or 'blue' for an RDA response triplot).

#### loadingFactor

`number` = `0`

Multiplier applied to loading vectors.
  Default 0 = AUTO: fit the longest vector to 90% of the score cloud's radius,
  so arrows and points are readable against each other. Set a number to
  override — 1 draws the loadings at their raw length, which for PCA is
  usually far larger than the scores (site scores are normalized to unit
  column norm, hence of order 1/sqrt(n), while loadings stay of order 1) and
  leaves the points crushed into a dot at the origin.

#### loadingScale

`number` = `3`

Constant applied to loading vectors
  before `loadingFactor` (default: 3). Under the default auto-scaling it has
  no effect: the auto-fit normalizes by the longest vector, which cancels any
  constant prefactor. It only bites when `loadingFactor` is set explicitly.

#### loadingTextColor

`string` = `null`

Fill for loading labels (default:
  'darkred', or 'darkblue' for RDA).

#### minLoadingContribution

`number` = `0`

Hide loading vectors whose
  contribution to the two displayed axes is below this fraction (0-1) of the
  total, i.e. squared vector length / summed squared length. Default 0 shows
  every vector at its true relative length. Use e.g. 0.02 to drop near-zero
  vectors that only clutter the plot, keeping magnitudes honest (vectors are NOT
  rescaled - negligible ones are removed, not inflated). On an RDA this governs
  the response arrows, and [minPredictorContribution](#ordiplot) the predictor ones.

#### minPredictorContribution

`number` = `null`

Same filter for RDA
  predictor arrows (default: null, inherits minLoadingContribution). Each group
  is measured against its own summed length, and an RDA typically has a handful
  of responses against many predictors, so one threshold rarely suits both: a
  response competing with three others clears 2% easily, while the same arrow
  among twenty predictors may not. Set this to declutter the predictors while
  keeping every response visible - a response dropping out is usually a finding
  (these axes carry none of it), not clutter.

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

Multiplier for predictor arrows
  (RDA only, default: inherits loadingFactor, so auto as well; set a number to override)

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
