---
title: "leastSquares"
---

> **leastSquares**(`spec?`): `any`

Defined in: [leastsq.js:165](https://github.com/tangent-to/opt/blob/92f11b3aa26804ff0465d67f82f3eea22cefd937/src/leastsq.js#L165)

Minimize 0.5 * sum(r(p)^2) with Levenberg-Marquardt.

## Parameters

### spec?

#### bounds?

`number`[][]

Per-parameter [lo, hi] box
  bounds (MINUIT transform; null/±Infinity for unbounded sides)

#### fScale?

`number`

Residual scale at which the robust losses
  start to flatten (scipy's f_scale)

#### fTol?

`number`

Relative cost reduction on an accepted step

#### gTol?

`number`

Inf-norm of the gradient J^T r

#### history?

`boolean`

Record {cost, lambda} per accepted iteration

#### jacobian?

`Function`

(p) => m-by-n Array<Array<number>>;
  central finite differences on the residuals otherwise

#### lambda0?

`number`

Initial damping

#### lambdaDown?

`number`

Damping decrease factor on acceptance

#### lambdaUp?

`number`

Damping increase factor on rejection

#### loss?

`string`

'linear' | 'huber' | 'soft_l1' | 'cauchy';
  robust losses down-weight outliers (IRLS, scipy least_squares semantics)

#### maxIter?

`number`

Maximum accepted iterations

#### residuals

`Function`

(p) => Array<number> of length m

#### x0

`number`[]

Initial parameters of length n

#### xTol?

`number`

Max relative step component on an accepted step

## Returns

`any`

{x, fx, residuals, iterations, fevals, converged, history?}
