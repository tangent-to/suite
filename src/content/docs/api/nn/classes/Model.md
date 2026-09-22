---
title: "Model"
---

Defined in: [model.js:42](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/model.js#L42)

## Constructors

### Constructor

> **new Model**(`input`, `output`, `options?`): `Model`

Defined in: [model.js:55](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/model.js#L55)

#### Parameters

##### input

[`Tensor`](Tensor.md)

the root tensor, from `nn.input`

##### output

[`Tensor`](Tensor.md)

the tensor to predict

##### options?

###### loss?

`string` \| `Function`

###### name?

`string`

###### normalizeY?

`boolean`

standardize the targets in
  `fit` and undo it in `predict`; the noise column of a Gaussian head is
  shifted back too

###### seed?

`number`

for initialization, shuffles, masks and
  noise; drawn from the clock when absent, and reported by `summary`

#### Returns

`Model`

## Properties

### \_compiled

> **\_compiled**: `object`

Defined in: [model.js:122](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/model.js#L122)

***

### hasRegularizers

> **hasRegularizers**: `boolean`

Defined in: [model.js:120](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/model.js#L120)

***

### input

> **input**: [`Tensor`](Tensor.md)

Defined in: [model.js:64](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/model.js#L64)

***

### layerInputShapes

> **layerInputShapes**: `Map`\<`any`, `any`\>

Defined in: [model.js:101](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/model.js#L101)

***

### layers

> **layers**: `any`[]

Defined in: [model.js:80](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/model.js#L80)

***

### loss

> **loss**: `any`

Defined in: [model.js:60](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/model.js#L60)

***

### name

> **name**: `string`

Defined in: [model.js:59](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/model.js#L59)

***

### options

> **options**: `object`

Defined in: [model.js:58](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/model.js#L58)

#### loss

> **loss**: `string` \| `Function` = `'mse'`

#### name

> **name**: `string` = `'model'`

#### normalizeY

> **normalizeY**: `boolean` = `false`

#### seed?

> `optional` **seed?**: `number`

***

### output

> **output**: [`Tensor`](Tensor.md)

Defined in: [model.js:65](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/model.js#L65)

***

### params

> **params**: `object`

Defined in: [model.js:100](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/model.js#L100)

***

### rng

> **rng**: `any`

Defined in: [model.js:66](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/model.js#L66)

***

### seed

> **seed**: `any`

Defined in: [model.js:67](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/model.js#L67)

***

### stochastic

> **stochastic**: `object`

Defined in: [model.js:115](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/model.js#L115)

Feed keys the loop draws per batch: `{ key: { kind, p, shape } }`.

***

### tensors

> **tensors**: `any`[]

Defined in: [model.js:70](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/model.js#L70)

***

### yStats

> **yStats**: `any`

Defined in: [model.js:121](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/model.js#L121)

## Accessors

### inputShape

#### Get Signature

> **get** **inputShape**(): `number`[]

Defined in: [model.js:125](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/model.js#L125)

##### Returns

`number`[]

***

### isStochastic

#### Get Signature

> **get** **isStochastic**(): `boolean`

Defined in: [model.js:134](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/model.js#L134)

##### Returns

`boolean`

***

### nParams

#### Get Signature

> **get** **nParams**(): `any`

Defined in: [model.js:131](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/model.js#L131)

##### Returns

`any`

***

### outputShape

#### Get Signature

> **get** **outputShape**(): `number`[]

Defined in: [model.js:128](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/model.js#L128)

##### Returns

`number`[]

## Methods

### clone()

> **clone**(`__namedParameters?`): `Model`

Defined in: [model.js:331](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/model.js#L331)

A fresh model on the same graph, with new weights from `seed`.

#### Parameters

##### \_\_namedParameters?

#### Returns

`Model`

***

### compiled()

> **compiled**(`which`): `any`

Defined in: [model.js:172](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/model.js#L172)

Compiled objectives, built once each.

#### Parameters

##### which

`any`

#### Returns

`any`

***

### decode()

> **decode**(`out`): \{ `mean`: `any`; `sd`: `any`; \} \| \{ `mean`: `any`; `sd?`: `undefined`; \}

Defined in: [model.js:299](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/model.js#L299)

`{ mean, sd? }` from raw output rows: mean as a flat array for one column.

#### Parameters

##### out

`any`

#### Returns

\{ `mean`: `any`; `sd`: `any`; \} \| \{ `mean`: `any`; `sd?`: `undefined`; \}

***

### decodeRaw()

> **decodeRaw**(`out`): `any`

Defined in: [model.js:283](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/model.js#L283)

Raw output rows back on the target scale, per the loss head.

#### Parameters

##### out

`any`

#### Returns

`any`

***

### evaluate()

> **evaluate**(`X`, `y`, `__namedParameters?`): `any`

Defined in: [model.js:199](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/model.js#L199)

The loss on `(X, y)` in inference mode, on the standardized scale when `normalizeY`.

#### Parameters

##### X

`any`

##### y

`any`

##### \_\_namedParameters?

#### Returns

`any`

***

### fit()

> **fit**(`X`, `y`, `options?`): `Promise`\<`any`\>

Defined in: [model.js:189](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/model.js#L189)

Train. See `fit` in fit.js for the options; returns the history.

#### Parameters

##### X

`any`

##### y

`any`

##### options?

#### Returns

`Promise`\<`any`\>

***

### fitSync()

> **fitSync**(`X`, `y`, `options?`): `object`

Defined in: [model.js:194](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/model.js#L194)

The same loop, blocking: for a caller whose contract is synchronous.

#### Parameters

##### X

`any`

##### y

`any`

##### options?

#### Returns

`object`

##### epochs

> **epochs**: `number`

##### loss

> **loss**: `number`[]

##### stopped

> **stopped**: `string`

##### valLoss?

> `optional` **valLoss?**: `number`[]

***

### forward()

> **forward**(`paramVars`, `feedVars`, `training`): `any`

Defined in: [model.js:150](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/model.js#L150)

The graph on Vars. `feed.X` is the batch; masks and noise are under the
keys `stochastic` lists.

#### Parameters

##### paramVars

`any`

##### feedVars

`any`

##### training

`any`

#### Returns

`any`

***

### getParams()

> **getParams**(): `object`

Defined in: [model.js:336](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/model.js#L336)

A copy of the parameters, `{ key: { data, shape } }`.

#### Returns

`object`

***

### layerParams()

> **layerParams**(`map`, `layer`): `object`

Defined in: [model.js:139](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/model.js#L139)

This layer's parameters out of the flat map, keyed by their own names.

#### Parameters

##### map

`any`

##### layer

`any`

#### Returns

`object`

***

### objective()

> **objective**(`paramVars`, `feedVars`): `any`

Defined in: [model.js:162](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/model.js#L162)

The training objective: loss plus regularizers, dropout on.

#### Parameters

##### paramVars

`any`

##### feedVars

`any`

#### Returns

`any`

***

### predict()

> **predict**(`X`, `__namedParameters?`): `any`

Defined in: [model.js:234](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/model.js#L234)

Predict.

`predict(X)` is the point prediction, dropout off: a flat array for one
mean column, rows otherwise. `predict(X, { samples: k, seed })` runs `k`
passes with dropout on and returns `{ mean, std, epistemic, aleatoric }`.
`predict(X, { returnStd: true })` on a Gaussian head returns
`{ mean, std }` from the noise column alone.

#### Parameters

##### X

`any`

##### \_\_namedParameters?

###### returnStd?

`boolean` = `false`

#### Returns

`any`

***

### predictGradient()

> **predictGradient**(`x`): `any`

Defined in: [model.js:311](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/model.js#L311)

d mean / d x at one row, through grad's `jacobian`: a flat array for one
mean column, one row per mean column otherwise, on the target scale.

#### Parameters

##### x

`any`

#### Returns

`any`

***

### setParams()

> **setParams**(`map`): `Model`

Defined in: [model.js:343](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/model.js#L343)

Write parameters in place; keys and sizes must match.

#### Parameters

##### map

`any`

#### Returns

`Model`

***

### summary()

> **summary**(): `string`

Defined in: [model.js:355](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/model.js#L355)

Layers, output shapes and parameter counts, as text.

#### Returns

`string`

***

### targetFeed()

> **targetFeed**(`Xt`, `y`, `sampleWeight`, `what`): `object`

Defined in: [model.js:205](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/model.js#L205)

`{ X, y, w }` for a loss, with `y` standardized when the model does that.

#### Parameters

##### Xt

`any`

##### y

`any`

##### sampleWeight

`any`

##### what

`any`

#### Returns

`object`

##### w

> **w**: `object`

###### w.data

> **data**: `Float64Array`\<`ArrayBuffer`\>

###### w.shape

> **shape**: `any`[]

##### X

> **X**: `any` = `Xt`

##### y

> **y**: `object` = `yt`

###### y.data

> **data**: `Float64Array`\<`ArrayBuffer`\>

###### y.shape

> **shape**: `number`[]

***

### toJSON()

> **toJSON**(): `object`

Defined in: [model.js:370](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/model.js#L370)

The architecture, the parameters and the target statistics, as data.

#### Returns

`object`

##### format

> **format**: `string` = `'nn/1'`

##### layers

> **layers**: `object`[]

##### name

> **name**: `string`

##### options

> **options**: `object`

###### options.loss

> **loss**: `any`

###### options.normalizeY

> **normalizeY**: `boolean`

##### output

> **output**: `number`

##### params

> **params**: `object`

###### Index Signature

\[`k`: `string`\]: `object`

##### seed

> **seed**: `any`

##### tensors

> **tensors**: `object`[]

##### yStats

> **yStats**: `any`
