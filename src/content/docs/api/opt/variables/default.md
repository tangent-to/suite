---
title: "default"
---

> **default**: `object`

Defined in: [index.js:47](https://github.com/tangent-to/opt/blob/2c60d687aa9d4aa31542bf370be075cafa422b5c/src/index.js#L47)

## Type Declaration

### adam

> **adam**: (`f`, `x0`, `options?`) => `any`

Adam (adaptive moment estimation).

#### Parameters

##### f

`Function`

Objective

##### x0

`number`[]

Initial parameters

##### options?

`any` = `{}`

{grad, learningRate, maxIter, tol, beta1, beta2, epsilon, verbose}

#### Returns

`any`

{x, fx, iterations, converged, history}

### AdamOptimizer

> **AdamOptimizer**: *typeof* [`AdamOptimizer`](../classes/AdamOptimizer.md)

### adamStep

> **adamStep**: (`x`, `gradient`, `state?`, `options?`) => `object`

Adam (Kingma and Ba, 2015): bias-corrected first and second moments. The
step count lives in the state, so bias correction is right however many
tensors share one options object.

#### Parameters

##### x

`number`[] \| `Float64Array`\<`ArrayBufferLike`\>

moved in place

##### gradient

`number`[] \| `Float64Array`\<`ArrayBufferLike`\>

##### state?

###### m

`Float64Array`

###### t

`number`

###### v

`Float64Array`

##### options?

`StepOptions` & `object` = `{}`

#### Returns

`object`

##### m

> **m**: `Float64Array`

##### t

> **t**: `number`

##### v

> **v**: `Float64Array`

### createOptimizer

> **createOptimizer**: (`name`, `options`) => `Optimizer`

Convenience function to create optimizer by name

#### Parameters

##### name

`string`

Optimizer name

##### options?

`any` = `{}`

Optimizer options

#### Returns

`Optimizer`

Optimizer instance

### curveFit

> **curveFit**: (`spec`) => `any`

Fit a scalar model to (x, y) data, scipy.optimize.curve_fit style.

#### Parameters

##### spec?

###### model

`Function`

(x, params) => number for a scalar datum x

###### options?

`any`

Remaining keys are passed to leastSquares
  (jacobian, maxIter, fTol, xTol, gTol, lambda0, lambdaUp, lambdaDown, history)

###### p0

`number`[]

Initial parameters

###### x

`number`[]

Independent data

###### y

`number`[]

Dependent data, same length as x

#### Returns

`any`

{params, cov, stdErr, fx, iterations, converged}

### gradientDescent

> **gradientDescent**: (`f`, `x0`, `options?`) => `any`

Plain gradient descent, with optional backtracking line search.

#### Parameters

##### f

`Function`

Objective: (x) => number or (x) => {loss, gradient}

##### x0

`number`[]

Initial parameters

##### options?

`any` = `{}`

{grad, learningRate, maxIter, tol, lineSearch, verbose}

#### Returns

`any`

{x, fx, iterations, converged, history}

### GradientDescent

> **GradientDescent**: *typeof* [`GradientDescent`](../classes/GradientDescent.md)

### gradientStep

> **gradientStep**: (`x`, `gradient`, `_state?`, `options?`) => `null`

Plain gradient descent: `x -= lr · g`. Stateless; returns `null` so it has
the signature of the others.

#### Parameters

##### x

`number`[] \| `Float64Array`\<`ArrayBufferLike`\>

moved in place

##### gradient

`number`[] \| `Float64Array`\<`ArrayBufferLike`\>

##### \_state?

`null` = `null`

##### options?

`StepOptions` = `{}`

#### Returns

`null`

### lbfgs

> **lbfgs**: (`f`, `x0`, `options?`) => `any`

Minimize a function with L-BFGS.

#### Parameters

##### f

`Function`

Objective: (x) => number or (x) => {loss, gradient}

##### x0

`number`[]

Initial parameters

##### options?

###### c1?

`number`

Line search sufficient-decrease constant

###### c2?

`number`

Line search curvature constant

###### fTol?

`number`

Relative function-decrease tolerance

###### grad?

`Function`

Gradient: (x) => Array<number> (finite differences otherwise)

###### maxIter?

`number`

Maximum iterations

###### memory?

`number`

Number of curvature pairs kept

###### tol?

`number`

Convergence tolerance on the gradient norm

###### verbose?

`boolean`

#### Returns

`any`

{x, fx, iterations, fevals, converged, history}

### leastSquares

> **leastSquares**: (`spec`) => `any`

Minimize 0.5 * sum(r(p)^2) with Levenberg-Marquardt.

#### Parameters

##### spec?

###### bounds?

`number`[][]

Per-parameter [lo, hi] box
  bounds (MINUIT transform; null/±Infinity for unbounded sides)

###### fScale?

`number`

Residual scale at which the robust losses
  start to flatten (scipy's f_scale)

###### fTol?

`number`

Relative cost reduction on an accepted step

###### gTol?

`number`

Inf-norm of the gradient J^T r

###### history?

`boolean`

Record {cost, lambda} per accepted iteration

###### jacobian?

`Function`

(p) => m-by-n Array<Array<number>>;
  central finite differences on the residuals otherwise

###### lambda0?

`number`

Initial damping

###### lambdaDown?

`number`

Damping decrease factor on acceptance

###### lambdaUp?

`number`

Damping increase factor on rejection

###### loss?

`string`

'linear' | 'huber' | 'soft_l1' | 'cauchy';
  robust losses down-weight outliers (IRLS, scipy least_squares semantics)

###### maxIter?

`number`

Maximum accepted iterations

###### residuals

`Function`

(p) => Array<number> of length m

###### x0

`number`[]

Initial parameters of length n

###### xTol?

`number`

Max relative step component on an accepted step

#### Returns

`any`

{x, fx, residuals, iterations, fevals, converged, history?}

### methods

> **methods**: () => `string`[]

List the available minimization methods.

#### Returns

`string`[]

### minimize

> **minimize**: (`spec`) => `any`

Minimize a scalar function of one or more variables.

#### Parameters

##### spec?

###### f

`Function`

Objective: (x) => number or (x) => {loss, gradient}

###### grad?

`Function`

Gradient: (x) => Array<number> (gradient methods only)

###### method?

`string`

One of methods()

###### options?

`any`

Remaining keys are passed to the method
  (maxIter, tol, learningRate, fTol, xTol, history, verbose, ...)

###### x0

`number`[]

Initial parameters

#### Returns

`any`

{x, fx, iterations, converged, method, ...}

### minimizeScalar

> **minimizeScalar**: (`f`, `options?`) => `any`

Minimize a univariate function.

#### Parameters

##### f

`Function`

Objective: (x: number) => number

##### options?

###### bracket?

`number`[]

[a, b] to auto-bracket
  from, or a full bracketing triple [a, b, c] with f(b) <= f(a), f(b) <= f(c)

###### maxIter?

`number`

Maximum iterations

###### method?

`string`

'brent' or 'golden'

###### xTol?

`number`

Relative tolerance on x

#### Returns

`any`

{x, fx, iterations, fevals, converged}

### momentumDescent

> **momentumDescent**: (`f`, `x0`, `options?`) => `any`

Gradient descent with momentum.

#### Parameters

##### f

`Function`

Objective

##### x0

`number`[]

Initial parameters

##### options?

`any` = `{}`

{grad, learningRate, maxIter, tol, momentum, verbose}

#### Returns

`any`

{x, fx, iterations, converged, history}

### MomentumOptimizer

> **MomentumOptimizer**: *typeof* [`MomentumOptimizer`](../classes/MomentumOptimizer.md)

### momentumStep

> **momentumStep**: (`x`, `gradient`, `state?`, `options?`) => `object`

Gradient descent with momentum: `v = μ v + lr · g; x -= v`.

#### Parameters

##### x

`number`[] \| `Float64Array`\<`ArrayBufferLike`\>

moved in place

##### gradient

`number`[] \| `Float64Array`\<`ArrayBufferLike`\>

##### state?

###### velocity

`Float64Array`

##### options?

`StepOptions` & `object` = `{}`

#### Returns

`object`

##### velocity

> **velocity**: `Float64Array`

### nelderMead

> **nelderMead**: (`f`, `x0`, `options?`) => `any`

Minimize a function using the Nelder-Mead downhill simplex method.

#### Parameters

##### f

`Function`

Objective: (x) => number (or (x) => {loss, ...})

##### x0

`number`[]

Initial parameters

##### options?

###### chi?

`number`

Expansion coefficient

###### fTol?

`number`

Convergence tolerance on f spread across the simplex

###### history?

`boolean`

Record {x, fx, simplex} per iteration

###### maxIter?

`number`

Maximum iterations

###### nonZeroDelta?

`number`

Relative perturbation for nonzero x0 entries

###### psi?

`number`

Contraction coefficient

###### rho?

`number`

Reflection coefficient

###### sigma?

`number`

Reduction (shrink) coefficient

###### xTol?

`number`

Convergence tolerance on x spread across the simplex

###### zeroDelta?

`number`

Absolute perturbation for zero x0 entries

#### Returns

`any`

{x, fx, iterations, fevals, converged, history?}

### numericalGradient

> **numericalGradient**: (`f`, `x`, `options?`) => `number`[]

Approximate the gradient of a scalar function by central finite differences.

#### Parameters

##### f

`Function`

Scalar function (x: Array<number>) => number

##### x

`number`[]

Point at which to evaluate the gradient

##### options?

###### h?

`number`

Step size

#### Returns

`number`[]

Gradient approximation

### numericalHessian

> **numericalHessian**: (`f`, `x`, `options?`) => `number`[][]

Central finite-difference Hessian of a scalar function.

#### Parameters

##### f

`Function`

(x: Array<number>) => number

##### x

`number`[]

Point of length n

##### options?

###### step?

`number`

Relative step size

#### Returns

`number`[][]

n-by-n symmetric Hessian

### numericalJacobian

> **numericalJacobian**: (`f`, `x`, `options?`) => `number`[][]

Central finite-difference Jacobian of a vector-valued function.
Per-component step h_j = step * max(1, |x_j|).

#### Parameters

##### f

`Function`

(x: Array<number>) => Array<number> of length m

##### x

`number`[]

Point of length n

##### options?

###### step?

`number`

Relative step size

#### Returns

`number`[][]

m-by-n Jacobian

### rmsprop

> **rmsprop**: (`f`, `x0`, `options?`) => `any`

RMSProp.

#### Parameters

##### f

`Function`

Objective

##### x0

`number`[]

Initial parameters

##### options?

`any` = `{}`

{grad, learningRate, maxIter, tol, decay, epsilon, verbose}

#### Returns

`any`

{x, fx, iterations, converged, history}

### RMSProp

> **RMSProp**: *typeof* [`RMSProp`](../classes/RMSProp.md)

### rmspropStep

> **rmspropStep**: (`x`, `gradient`, `state?`, `options?`) => `object`

RMSProp: a running mean of squared gradients scales each coordinate's step.

#### Parameters

##### x

`number`[] \| `Float64Array`\<`ArrayBufferLike`\>

moved in place

##### gradient

`number`[] \| `Float64Array`\<`ArrayBufferLike`\>

##### state?

###### cache

`Float64Array`

##### options?

`StepOptions` & `object` = `{}`

#### Returns

`object`

##### cache

> **cache**: `Float64Array`

### rootScalar

> **rootScalar**: (`f`, `options?`) => `any`

Find a root of a univariate function inside a sign-changing bracket.

#### Parameters

##### f

`Function`

Function: (x: number) => number

##### options?

###### bracket

`number`[]

[a, b] with f(a) and f(b) of
  opposite signs (required)

###### maxIter?

`number`

Maximum iterations

###### method?

`string`

'brent' or 'bisect'

###### rTol?

`number`

Relative tolerance on x

###### xTol?

`number`

Absolute tolerance on x

#### Returns

`any`

{x, fx, iterations, fevals, converged}

### solve

> **solve**: (`A`, `b`) => `number`[]

Solve the linear system A x = b.

#### Parameters

##### A

`number`[][]

n-by-n coefficient matrix (not mutated)

##### b

`number`[]

Right-hand side of length n (not mutated)

#### Returns

`number`[]

Solution vector x

#### Throws

If A is not square, b has the wrong length, or A is singular
