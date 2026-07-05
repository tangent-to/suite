---
title: "curveFit"
---

> **curveFit**(`spec?`): `any`

Defined in: [leastsq.js:341](https://github.com/tangent-to/opt/blob/18b641ebbdf876410f574ba5fd2e3ecdbcd4a047/src/leastsq.js#L341)

Fit a scalar model to (x, y) data, scipy.optimize.curve_fit style.

## Parameters

### spec?

#### model

`Function`

(x, params) => number for a scalar datum x

#### options?

`any`

Remaining keys are passed to leastSquares
  (jacobian, maxIter, fTol, xTol, gTol, lambda0, lambdaUp, lambdaDown, history)

#### p0

`number`[]

Initial parameters

#### x

`number`[]

Independent data

#### y

`number`[]

Dependent data, same length as x

## Returns

`any`

{params, cov, stdErr, fx, iterations, converged}
