---
title: "CompositionalImputer"
---

Defined in: [mva/composition.js:519](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/mva/composition.js#L519)

Fit/transform wrapper around [imputeMissing](../functions/imputeMissing.md) for leakage-free
cross-validation. `fit()` learns the CLR mean of a training composition
(zeros and missing cells treated alike as left-censored); `transform()`
completes each row of new data toward that learned mean, holding the observed
parts fixed. Because every incomplete row is completed individually (toward a
shared target mean), below-detection samples do NOT collapse onto one constant
coordinate - the property that motivates lrEM imputation in the first place - 
while test rows never influence the imputation model.

## Example

```ts
const imp = new CompositionalImputer().fit(trainComp);
const trainZ = imp.transform(trainComp); // completed training rows
const testZ  = imp.transform(testComp);  // completed with train-only stats
```

## Constructors

### Constructor

> **new CompositionalImputer**(`opts?`): `CompositionalImputer`

Defined in: [mva/composition.js:525](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/mva/composition.js#L525)

#### Parameters

##### opts?

###### maxIter?

`number` = `100`

EM iterations for the training fit.

###### tol?

`number` = `1e-9`

Convergence tolerance for the training fit.

#### Returns

`CompositionalImputer`

## Properties

### D

> **D**: `any`

Defined in: [mva/composition.js:553](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/mva/composition.js#L553)

***

### fitted

> **fitted**: `boolean`

Defined in: [mva/composition.js:528](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/mva/composition.js#L528)

***

### maxIter

> **maxIter**: `number`

Defined in: [mva/composition.js:526](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/mva/composition.js#L526)

***

### meanClr

> **meanClr**: `any`[]

Defined in: [mva/composition.js:552](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/mva/composition.js#L552)

***

### tol

> **tol**: `number`

Defined in: [mva/composition.js:527](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/mva/composition.js#L527)

## Methods

### fit()

> **fit**(`mat`): `CompositionalImputer`

Defined in: [mva/composition.js:541](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/mva/composition.js#L541)

Learn the CLR mean of the (imputed) training composition.

#### Parameters

##### mat

`number`[][]

Training composition with zeros/missing.

#### Returns

`CompositionalImputer`

this

***

### fitTransform()

> **fitTransform**(`mat`): `number`[][]

Defined in: [mva/composition.js:595](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/mva/composition.js#L595)

Convenience: fit then transform the same matrix.

#### Parameters

##### mat

`number`[][]

Composition with zeros/missing values (n samples × D parts)

#### Returns

`number`[][]

Strictly-positive completed composition

***

### transform()

> **transform**(`mat`): `number`[][]

Defined in: [mva/composition.js:563](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/mva/composition.js#L563)

Complete each row of `mat` toward the learned CLR mean.

#### Parameters

##### mat

`number`[][]

Composition with zeros/missing.

#### Returns

`number`[][]

Strictly-positive completed composition.
