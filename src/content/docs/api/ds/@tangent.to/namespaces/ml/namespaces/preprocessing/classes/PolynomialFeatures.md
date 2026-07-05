---
title: "PolynomialFeatures"
---

Defined in: [ds/src/ml/preprocessing.js:615](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L615)

Generate polynomial and interaction features

## Constructors

### Constructor

> **new PolynomialFeatures**(`__namedParameters?`): `PolynomialFeatures`

Defined in: [ds/src/ml/preprocessing.js:616](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L616)

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

Defined in: [ds/src/ml/preprocessing.js:621](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L621)

***

### \_tableColumns

> **\_tableColumns**: `any`

Defined in: [ds/src/ml/preprocessing.js:622](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L622)

***

### \_tableNaOmit

> **\_tableNaOmit**: `boolean`

Defined in: [ds/src/ml/preprocessing.js:623](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L623)

***

### degree

> **degree**: `number`

Defined in: [ds/src/ml/preprocessing.js:617](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L617)

***

### includeBias

> **includeBias**: `boolean`

Defined in: [ds/src/ml/preprocessing.js:618](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L618)

***

### nInputFeatures

> **nInputFeatures**: `any`

Defined in: [ds/src/ml/preprocessing.js:619](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L619)

***

### nOutputFeatures

> **nOutputFeatures**: `number`

Defined in: [ds/src/ml/preprocessing.js:620](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L620)

## Methods

### \_appendDegreePatterns()

> **\_appendDegreePatterns**(`degree`): `void`

Defined in: [ds/src/ml/preprocessing.js:668](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L668)

#### Parameters

##### degree

`any`

#### Returns

`void`

***

### \_buildFeatureNames()

> **\_buildFeatureNames**(`columns?`): `string`[]

Defined in: [ds/src/ml/preprocessing.js:695](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L695)

#### Parameters

##### columns?

`any` = `null`

#### Returns

`string`[]

***

### \_buildFeaturePatterns()

> **\_buildFeaturePatterns**(): `void`

Defined in: [ds/src/ml/preprocessing.js:651](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L651)

#### Returns

`void`

***

### \_evaluatePattern()

> **\_evaluatePattern**(`pattern`, `row`): `any`

Defined in: [ds/src/ml/preprocessing.js:687](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L687)

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

Defined in: [ds/src/ml/preprocessing.js:626](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L626)

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

Defined in: [ds/src/ml/preprocessing.js:722](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L722)

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

Defined in: [ds/src/ml/preprocessing.js:796](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L796)

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

Defined in: [ds/src/ml/preprocessing.js:748](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/ml/preprocessing.js#L748)

Transform to polynomial features

#### Parameters

##### X

`number`[][]

Feature matrix

#### Returns

`number`[][]

Polynomial features
