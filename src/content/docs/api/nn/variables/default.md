---
title: "default"
---

> **default**: `object`

Defined in: [index.js:41](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/index.js#L41)

## Type Declaration

### activations

> **activations**: `object`

Activations, as expressions. `relu`, `tanh` and `sigmoid` are grad kernels;
the rest are written in them and cost a few nodes each.

#### activations.elu

> **elu**: (`x`) => `any`

##### Parameters

###### x

`any`

##### Returns

`any`

#### activations.gelu

> **gelu**: (`x`) => `any`

##### Parameters

###### x

`any`

##### Returns

`any`

#### activations.linear

> **linear**: (`x`) => `any`

##### Parameters

###### x

`any`

##### Returns

`any`

#### activations.relu

> **relu**: `any`

#### activations.sigmoid

> **sigmoid**: `any`

#### activations.softplus

> **softplus**: (`x`) => `any`

##### Parameters

###### x

`any`

##### Returns

`any`

#### activations.tanh

> **tanh**: `any`

### add

> **add**: (`tensors`, `config`) => `any`

#### Parameters

##### tensors

`any`

##### config

`any`

#### Returns

`any`

### callbacks

> **callbacks**: [`callbacks`](../@tangent.to/namespaces/callbacks/README.md)

Stop when the monitored quantity has not improved by `minDelta` for
`patience` epochs, and put the best weights back unless told otherwise.
The monitored quantity is `valLoss` when there is validation data, else
`loss`, or the `monitor` key named.

### checkGradients

> **checkGradients**: (`model`, `X`, `y`, `options?`) => `object`

#### Parameters

##### model

[`Model`](../classes/Model.md)

##### X

`number`[][]

##### y

`number`[] \| `number`[][]

##### options?

###### h?

`number` = `1e-6`

###### perTensor?

`number` = `3`

coordinates checked in each parameter tensor

###### seed?

`number` = `1`

for the masks, held fixed across the differences

#### Returns

`object`

##### maxRelativeError

> **maxRelativeError**: `number`

##### worst

> **worst**: `object`

###### worst.analytic

> **analytic**: `number`

###### worst.index

> **index**: `number`

###### worst.key

> **key**: `string`

###### worst.numeric

> **numeric**: `number`

### concat

> **concat**: (`tensors`, `config`) => `any`

#### Parameters

##### tensors

`any`

##### config

`any`

#### Returns

`any`

### concreteDropout

> **concreteDropout**: (`wrapped`, `config`) => \{(...`inputs`): `any`; `layer`: `any`; \}

#### Parameters

##### wrapped

`any`

##### config

`any`

#### Returns

\{(...`inputs`): `any`; `layer`: `any`; \}

##### layer

> **layer**: `any`

### dense

> **dense**: (`units`, `config`) => \{(...`inputs`): `any`; `layer`: `any`; \}

#### Parameters

##### units

`any`

##### config

`any`

#### Returns

\{(...`inputs`): `any`; `layer`: `any`; \}

##### layer

> **layer**: `any`

#### See

Dense

### dropout

> **dropout**: (`rate`, `config`) => \{(...`inputs`): `any`; `layer`: `any`; \}

#### Parameters

##### rate

`any`

##### config

`any`

#### Returns

\{(...`inputs`): `any`; `layer`: `any`; \}

##### layer

> **layer**: `any`

### ensemble

> **ensemble**: (`model`, `X`, `y`, `options?`) => `Promise`\<\{ `members`: [`Model`](../classes/Model.md)[]; `predict`: `Function`; \}\>

#### Parameters

##### model

[`Model`](../classes/Model.md)

the template; it is not trained itself

##### X

`number`[][]

##### y

`number`[] \| `number`[][]

##### options?

###### fit?

`any` = `{}`

options passed to each member's `fit`

###### members?

`number` = `5`

###### seeds?

`number`[]

one per member; drawn from the template's rng otherwise

#### Returns

`Promise`\<\{ `members`: [`Model`](../classes/Model.md)[]; `predict`: `Function`; \}\>

### fromJSON

> **fromJSON**: (`json`, `options?`) => [`Model`](../classes/Model.md)

#### Parameters

##### json

`any`

what `toJSON` returned

##### options?

###### loss?

`Function`

required when the model was trained with a custom loss

#### Returns

[`Model`](../classes/Model.md)

### input

> **input**: (`d`) => [`Tensor`](../classes/Tensor.md)

A root tensor with `d` features per row.

#### Parameters

##### d

`any`

#### Returns

[`Tensor`](../classes/Tensor.md)

### lambda

> **lambda**: (`fn`, `config`) => \{(...`inputs`): `any`; `layer`: `any`; \}

#### Parameters

##### fn

`any`

##### config

`any`

#### Returns

\{(...`inputs`): `any`; `layer`: `any`; \}

##### layer

> **layer**: `any`

### Layer

> **Layer**: *typeof* [`Layer`](../classes/Layer.md)

### losses

> **losses**: [`losses`](../@tangent.to/namespaces/losses/README.md)

Losses: `(yPred, yTrue, w) => Var`, a weighted mean over rows of a
per-observation term. `yPred` is the network's output, `[n, k]`; `yTrue`
the targets, `[n, m]`; `w` the sample weights tiled to `[n, m]`, so a row
with a missing target contributes nothing and the mean is over what is
observed.

The likelihood losses are proba's `logDensity`, negated: the same formulas
mc samples with. Each loss carries a `head`, which says how the output
columns read: `mean` (every column is a prediction of the matching target),
`gaussian` (`[mean, log sd]` for one target), `logRate` (one column, a
Poisson log-rate), `logit` (one column, a Bernoulli logit). `normalizeY`
and `predict` use it to put the outputs back on the target's scale.

### model

> **model**: (`input`, `output`, `options`) => [`Model`](../classes/Model.md)

`nn.model(input, output, options)`.

#### Parameters

##### input

`any`

##### output

`any`

##### options

`any`

#### Returns

[`Model`](../classes/Model.md)

### Model

> **Model**: *typeof* [`Model`](../classes/Model.md)

### registerLambda

> **registerLambda**: (`name`, `fn`) => `void`

Register a function so a model with a lambda layer of that name can reload.

#### Parameters

##### name

`any`

##### fn

`any`

#### Returns

`void`

### slice

> **slice**: (`tensor`, `start`, `size`, `config`) => `any`

#### Parameters

##### tensor

`any`

##### start

`any`

##### size

`any`

##### config

`any`

#### Returns

`any`

### Tensor

> **Tensor**: *typeof* [`Tensor`](../classes/Tensor.md)

### version

> **version**: `string`

@tangent.to/nn - neural networks on the tangent tape.

A functional layer API traced into a graph, differentiated by
@tangent.to/grad, trained with @tangent.to/opt's update rules, seeded by
@tangent.to/proba, with likelihood losses over proba's densities. See
docs/DESIGN-0.1.md.

#### Example

```ts
import nn from '@tangent.to/nn';
const x = nn.input(4);
const h = nn.dense(8, { activation: 'relu' })(x);
const model = nn.model(x, nn.dense(1)(h), { loss: 'mse', seed: 1 });
await model.fit(X, y, { optimizer: 'lbfgs' });
model.predict(Xnew);
```
