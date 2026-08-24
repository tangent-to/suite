---
title: "PolynomialFeatures"
---

Defined in: [ml/preprocessing.js:598](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/preprocessing.js#L598)

Generate polynomial and interaction features

## Constructors

### Constructor

> **new PolynomialFeatures**(`__namedParameters?`): `PolynomialFeatures`

Defined in: [ml/preprocessing.js:599](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/preprocessing.js#L599)

#### Parameters

##### \_\_namedParameters?

###### degree?

`number` = `2`

###### includeBias?

`boolean` = `false`

#### Returns

`PolynomialFeatures`

## Properties

### \_featurePatterns

> **\_featurePatterns**: `any`[]

Defined in: [ml/preprocessing.js:604](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/preprocessing.js#L604)

***

### \_tableColumns

> **\_tableColumns**: `any`

Defined in: [ml/preprocessing.js:605](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/preprocessing.js#L605)

***

### \_tableNaOmit

> **\_tableNaOmit**: `boolean`

Defined in: [ml/preprocessing.js:606](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/preprocessing.js#L606)

***

### degree

> **degree**: `number`

Defined in: [ml/preprocessing.js:600](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/preprocessing.js#L600)

***

### includeBias

> **includeBias**: `boolean`

Defined in: [ml/preprocessing.js:601](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/preprocessing.js#L601)

***

### nInputFeatures

> **nInputFeatures**: `any`

Defined in: [ml/preprocessing.js:602](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/preprocessing.js#L602)

***

### nOutputFeatures

> **nOutputFeatures**: `number`

Defined in: [ml/preprocessing.js:603](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/preprocessing.js#L603)

## Methods

### \_appendDegreePatterns()

> **\_appendDegreePatterns**(`degree`): `void`

Defined in: [ml/preprocessing.js:651](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/preprocessing.js#L651)

#### Parameters

##### degree

`any`

#### Returns

`void`

***

### \_buildFeatureNames()

> **\_buildFeatureNames**(`columns?`): `string`[]

Defined in: [ml/preprocessing.js:678](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/preprocessing.js#L678)

#### Parameters

##### columns?

`any` = `null`

#### Returns

`string`[]

***

### \_buildFeaturePatterns()

> **\_buildFeaturePatterns**(): `void`

Defined in: [ml/preprocessing.js:634](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/preprocessing.js#L634)

#### Returns

`void`

***

### \_evaluatePattern()

> **\_evaluatePattern**(`pattern`, `row`): `any`

Defined in: [ml/preprocessing.js:670](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/preprocessing.js#L670)

#### Parameters

##### pattern

`any`

##### row

`any`

#### Returns

`any`

***

### \_normalizeInput()

> **\_normalizeInput**(`X`, `__namedParameters?`): \{ `matrix`: `any`[][]; `tableInput`: \{ `naOmit`: `boolean`; `prepared`: \{ `columns`: `any`[]; `encoders`: \{ \}; `n`: `number`; `rows`: `any`[]; `sourceLength`: `number`; `validIndices`: `any`[]; `X`: `any`[][]; \}; \}; \} \| \{ `matrix`: `any`[]; `tableInput`: `any`; \}

Defined in: [ml/preprocessing.js:609](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/preprocessing.js#L609)

#### Parameters

##### X

`any`

##### \_\_namedParameters?

###### fallbackColumns?

`any` = `null`

###### fallbackNaOmit?

`boolean` = `true`

###### requireColumnsMessage?

`string` = `'PolynomialFeatures: columns are required when using table data'`

#### Returns

\{ `matrix`: `any`[][]; `tableInput`: \{ `naOmit`: `boolean`; `prepared`: \{ `columns`: `any`[]; `encoders`: \{ \}; `n`: `number`; `rows`: `any`[]; `sourceLength`: `number`; `validIndices`: `any`[]; `X`: `any`[][]; \}; \}; \} \| \{ `matrix`: `any`[]; `tableInput`: `any`; \}

***

### fit()

> **fit**(`X`): `PolynomialFeatures`

Defined in: [ml/preprocessing.js:705](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/preprocessing.js#L705)

Fit by determining input/output dimensions

#### Parameters

##### X

`number`[][]

Feature matrix

#### Returns

`PolynomialFeatures`

this

***

### fitTransform()

> **fitTransform**(`X`): `number`[][]

Defined in: [ml/preprocessing.js:779](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/preprocessing.js#L779)

Fit and transform in one step

#### Parameters

##### X

`number`[][]

Feature matrix

#### Returns

`number`[][]

Polynomial features

***

### transform()

> **transform**(`X`): `number`[][]

Defined in: [ml/preprocessing.js:731](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/ml/preprocessing.js#L731)

Transform to polynomial features

#### Parameters

##### X

`number`[][]

Feature matrix

#### Returns

`number`[][]

Polynomial features
