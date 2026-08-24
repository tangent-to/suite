---
title: "ConsensusCluster"
---

Defined in: [clustering/ConsensusCluster.js:29](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/clustering/ConsensusCluster.js#L29)

## Extends

- `Estimator`

## Constructors

### Constructor

> **new ConsensusCluster**(`options?`): `ConsensusCluster`

Defined in: [clustering/ConsensusCluster.js:36](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/clustering/ConsensusCluster.js#L36)

#### Parameters

##### options?

###### estimators

`any`[] = `[]`

Array of clustering estimators

###### linkage?

`string` = `'single'`

Linkage for final clustering

###### threshold?

`number` = `0.5`

Minimum co-association for same cluster (0-1)

#### Returns

`ConsensusCluster`

#### Overrides

`Estimator.constructor`

## Properties

### \_state

> **\_state**: `object`

Defined in: [core/estimators/estimator.js:27](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/estimators/estimator.js#L27)

#### Inherited from

`Estimator._state`

***

### \_warnings

> **\_warnings**: `any`[]

Defined in: [core/estimators/estimator.js:29](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/estimators/estimator.js#L29)

#### Inherited from

`Estimator._warnings`

***

### coAssocMatrix

> **coAssocMatrix**: `any`[][]

Defined in: [clustering/ConsensusCluster.js:49](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/clustering/ConsensusCluster.js#L49)

***

### estimators

> **estimators**: `any`[]

Defined in: [clustering/ConsensusCluster.js:46](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/clustering/ConsensusCluster.js#L46)

***

### fitted

> **fitted**: `boolean`

Defined in: [core/estimators/estimator.js:25](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/estimators/estimator.js#L25)

#### Inherited from

`Estimator.fitted`

***

### labels

> **labels**: `any`[]

Defined in: [clustering/ConsensusCluster.js:50](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/clustering/ConsensusCluster.js#L50)

***

### linkage

> **linkage**: `string`

Defined in: [clustering/ConsensusCluster.js:48](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/clustering/ConsensusCluster.js#L48)

***

### params

> **params**: `any`

Defined in: [core/estimators/estimator.js:24](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/estimators/estimator.js#L24)

#### Inherited from

`Estimator.params`

***

### threshold

> **threshold**: `number`

Defined in: [clustering/ConsensusCluster.js:47](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/clustering/ConsensusCluster.js#L47)

***

### X\_train

> **X\_train**: `any`

Defined in: [clustering/ConsensusCluster.js:51](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/clustering/ConsensusCluster.js#L51)

## Accessors

### agreementScore

#### Get Signature

> **get** **agreementScore**(): `number`

Defined in: [clustering/ConsensusCluster.js:265](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/clustering/ConsensusCluster.js#L265)

Get overall agreement score
Measures how consistent the input clusterings are

##### Returns

`number`

Score between 0 (no agreement) and 1 (perfect agreement)

***

### nClusters

#### Get Signature

> **get** **nClusters**(): `number`

Defined in: [clustering/ConsensusCluster.js:247](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/clustering/ConsensusCluster.js#L247)

Get number of clusters (excluding noise)

##### Returns

`number`

***

### nNoise

#### Get Signature

> **get** **nNoise**(): `number`

Defined in: [clustering/ConsensusCluster.js:255](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/clustering/ConsensusCluster.js#L255)

Get number of noise points

##### Returns

`number`

## Methods

### \_prepareArgsForFit()

> **\_prepareArgsForFit**(`args?`): \{ `columns?`: `undefined`; `columnsX`: `any`[]; `prepared`: `boolean`; `raw?`: `undefined`; `rows`: `any`[]; `X`: `any`[][]; `y`: `any`[]; \} \| \{ `columns`: `any`[]; `columnsX?`: `undefined`; `prepared`: `boolean`; `raw?`: `undefined`; `rows`: `any`[]; `X`: `any`[][]; `y?`: `undefined`; \} \| \{ `columns?`: `undefined`; `columnsX?`: `undefined`; `prepared?`: `undefined`; `raw`: `any`[]; `rows?`: `undefined`; `X?`: `undefined`; `y?`: `undefined`; \}

Defined in: [core/estimators/estimator.js:367](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/estimators/estimator.js#L367)

Convenience helper: parse arguments passed to fit/predict/transform.

Supports declarative table-style inputs:
 - fit({ X, y, data, omit_missing })
 - fit({ data, columns, ... })

Returns an object { X, y, prepared, rows } where X/y are numeric arrays
if preparation was required, otherwise returns the original values.

Note: this helper only prepares numeric matrices/vectors using core table utilities;
it does not perform encoding of categorical predictors.

#### Parameters

##### args?

`any`[] = `[]`

#### Returns

\{ `columns?`: `undefined`; `columnsX`: `any`[]; `prepared`: `boolean`; `raw?`: `undefined`; `rows`: `any`[]; `X`: `any`[][]; `y`: `any`[]; \} \| \{ `columns`: `any`[]; `columnsX?`: `undefined`; `prepared`: `boolean`; `raw?`: `undefined`; `rows`: `any`[]; `X`: `any`[][]; `y?`: `undefined`; \} \| \{ `columns?`: `undefined`; `columnsX?`: `undefined`; `prepared?`: `undefined`; `raw`: `any`[]; `rows?`: `undefined`; `X?`: `undefined`; `y?`: `undefined`; \}

#### Inherited from

`Estimator._prepareArgsForFit`

***

### \_repr\_html\_()

> **\_repr\_html\_**(): `string`

Defined in: [core/estimators/estimator.js:201](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/estimators/estimator.js#L201)

Observable/Jupyter HTML representation

#### Returns

`string`

HTML representation

#### Inherited from

`Estimator._repr_html_`

***

### clearWarnings()

> **clearWarnings**(): `void`

Defined in: [core/estimators/estimator.js:139](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/estimators/estimator.js#L139)

Clear all warnings

#### Returns

`void`

#### Inherited from

`Estimator.clearWarnings`

***

### fit()

> **fit**(`X`): `ConsensusCluster`

Defined in: [clustering/ConsensusCluster.js:59](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/clustering/ConsensusCluster.js#L59)

Fit consensus clustering

#### Parameters

##### X

`any`

Data to cluster (raw array or {data, columns})

#### Returns

`ConsensusCluster`

#### Overrides

`Estimator.fit`

***

### getClusterStrength()

> **getClusterStrength**(): `any`

Defined in: [clustering/ConsensusCluster.js:221](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/clustering/ConsensusCluster.js#L221)

Get average consensus strength per cluster

#### Returns

`any`

{cluster: avgStrength}

***

### getConsensusStrength()

> **getConsensusStrength**(): `number`[]

Defined in: [clustering/ConsensusCluster.js:186](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/clustering/ConsensusCluster.js#L186)

Get consensus strength for each sample
Higher values = stronger agreement across models

#### Returns

`number`[]

Strength scores between 0 and 1

***

### getEstimatorAgreement()

> **getEstimatorAgreement**(): `object`[]

Defined in: [clustering/ConsensusCluster.js:286](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/clustering/ConsensusCluster.js#L286)

Get detailed comparison of input clusterings
Shows how each estimator contributed

#### Returns

`object`[]

***

### getMemoryUsage()

> **getMemoryUsage**(): `string`

Defined in: [core/estimators/estimator.js:97](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/estimators/estimator.js#L97)

Get memory usage in human-readable format

#### Returns

`string`

Memory usage string (e.g., "2.3 MB" or "145 KB")

#### Inherited from

`Estimator.getMemoryUsage`

***

### getParams()

> **getParams**(): `any`

Defined in: [core/estimators/estimator.js:294](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/estimators/estimator.js#L294)

Get a shallow copy of parameters.

#### Returns

`any`

#### Inherited from

`Estimator.getParams`

***

### getState()

> **getState**(): `any`

Defined in: [core/estimators/estimator.js:65](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/estimators/estimator.js#L65)

Get comprehensive model state

#### Returns

`any`

State information including fitted status, memory estimate, warnings

#### Inherited from

`Estimator.getState`

***

### getWarnings()

> **getWarnings**(): `any`[]

Defined in: [core/estimators/estimator.js:124](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/estimators/estimator.js#L124)

Get all warnings

#### Returns

`any`[]

Array of warning objects

#### Inherited from

`Estimator.getWarnings`

***

### getWarningsByType()

> **getWarningsByType**(`type`): `any`[]

Defined in: [core/estimators/estimator.js:148](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/estimators/estimator.js#L148)

Get warnings of a specific type

#### Parameters

##### type

`string`

Warning type

#### Returns

`any`[]

Filtered warnings

#### Inherited from

`Estimator.getWarningsByType`

***

### hasWarnings()

> **hasWarnings**(): `boolean`

Defined in: [core/estimators/estimator.js:132](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/estimators/estimator.js#L132)

Check if model has warnings

#### Returns

`boolean`

#### Inherited from

`Estimator.hasWarnings`

***

### isFitted()

> **isFitted**(): `boolean`

Defined in: [core/estimators/estimator.js:36](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/estimators/estimator.js#L36)

Check if model is fitted

#### Returns

`boolean`

#### Inherited from

`Estimator.isFitted`

***

### predict()

> **predict**(): `void`

Defined in: [core/estimators/estimator.js:424](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/estimators/estimator.js#L424)

Predict should be implemented by supervised estimators.

#### Returns

`void`

#### Inherited from

`Estimator.predict`

***

### save()

> **save**(): `string`

Defined in: [core/estimators/estimator.js:329](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/estimators/estimator.js#L329)

Save model to JSON string

#### Returns

`string`

JSON representation of the model

#### Inherited from

`Estimator.save`

***

### setParams()

> **setParams**(`params?`): `ConsensusCluster`

Defined in: [core/estimators/estimator.js:285](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/estimators/estimator.js#L285)

Set parameters (mutates instance).

#### Parameters

##### params?

`any` = `{}`

#### Returns

`ConsensusCluster`

#### Inherited from

`Estimator.setParams`

***

### summary()

> **summary**(): \{ `avgConsensusStrength?`: `undefined`; `clusterStrengths?`: `undefined`; `fitted`: `boolean`; `nClusters?`: `undefined`; `nEstimators`: `number`; `nNoise?`: `undefined`; `noiseRatio?`: `undefined`; `nSamples?`: `undefined`; `overallAgreement?`: `undefined`; `threshold`: `number`; \} \| \{ `avgConsensusStrength`: `number`; `clusterStrengths`: `any`; `fitted`: `boolean`; `nClusters`: `number`; `nEstimators`: `number`; `nNoise`: `number`; `noiseRatio`: `number`; `nSamples`: `number`; `overallAgreement`: `number`; `threshold`: `number`; \}

Defined in: [clustering/ConsensusCluster.js:341](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/clustering/ConsensusCluster.js#L341)

Summary statistics

#### Returns

\{ `avgConsensusStrength?`: `undefined`; `clusterStrengths?`: `undefined`; `fitted`: `boolean`; `nClusters?`: `undefined`; `nEstimators`: `number`; `nNoise?`: `undefined`; `noiseRatio?`: `undefined`; `nSamples?`: `undefined`; `overallAgreement?`: `undefined`; `threshold`: `number`; \} \| \{ `avgConsensusStrength`: `number`; `clusterStrengths`: `any`; `fitted`: `boolean`; `nClusters`: `number`; `nEstimators`: `number`; `nNoise`: `number`; `noiseRatio`: `number`; `nSamples`: `number`; `overallAgreement`: `number`; `threshold`: `number`; \}

***

### toJSON()

> **toJSON**(): `object`

Defined in: [clustering/ConsensusCluster.js:370](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/clustering/ConsensusCluster.js#L370)

Serialization (simplified)

#### Returns

`object`

##### \_\_class\_\_

> **\_\_class\_\_**: `string` = `'ConsensusCluster'`

##### coAssocMatrix

> **coAssocMatrix**: `any`[][]

##### fitted

> **fitted**: `boolean`

##### labels

> **labels**: `any`[]

##### linkage

> **linkage**: `string`

##### nEstimators

> **nEstimators**: `number`

##### threshold

> **threshold**: `number`

#### Overrides

`Estimator.toJSON`

***

### transform()

> **transform**(): `void`

Defined in: [core/estimators/estimator.js:431](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/estimators/estimator.js#L431)

Transform should be implemented by transformers.

#### Returns

`void`

#### Inherited from

`Estimator.transform`

***

### fromJSON()

> `static` **fromJSON**(`obj`): `ConsensusCluster`

Defined in: [clustering/ConsensusCluster.js:382](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/clustering/ConsensusCluster.js#L382)

Basic deserialization. Subclasses should override if they need
to restore learned arrays / matrices.

#### Parameters

##### obj

`any`

#### Returns

`ConsensusCluster`

#### Overrides

`Estimator.fromJSON`

***

### load()

> `static` **load**(`jsonString`): `Estimator`

Defined in: [core/estimators/estimator.js:346](https://github.com/tangent-to/ds/blob/c3530bfadae69dd953aae709e1eb87bf8e5f2a32/src/core/estimators/estimator.js#L346)

Load model from JSON string

#### Parameters

##### jsonString

`string`

JSON representation

#### Returns

`Estimator`

Reconstructed estimator instance

#### Inherited from

`Estimator.load`
