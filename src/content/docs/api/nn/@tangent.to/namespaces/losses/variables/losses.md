---
title: "losses"
---

> `const` **losses**: `object`

Defined in: [losses.js:78](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/losses.js#L78)

The built-in losses by name, for `fromJSON`.

## Type Declaration

### binaryCrossEntropy

> **binaryCrossEntropy**: `any`

Binary cross-entropy on a logit output, in the stable form
`softplus(z) - y z`, which is `-log Bernoulli(y | sigmoid(z))` without ever
forming the probability.

### gaussianNLL

> **gaussianNLL**: `any`

Gaussian negative log-likelihood on an output `[mean, log sd]`: the
heteroscedastic head, whose second column learns the noise.

### huber

> **huber**: \{(`delta`): `any`; `lossName`: `string`; \}

Huber: quadratic within `delta`, linear beyond.

#### Parameters

##### delta?

`number` = `1`

#### Returns

`any`

#### huber.lossName

> **lossName**: `string`

### mae

> **mae**: `any`

Mean absolute error; `abs` is `maximum(r, -r)`, grad having no kernel for it.

### mse

> **mse**: `any`

Mean squared error.

### poissonNLL

> **poissonNLL**: `any`

Poisson negative log-likelihood on a log-rate output, for counts.

### studentTNLL

> **studentTNLL**: \{(`__namedParameters`): `any`; `lossName`: `string`; \}

Student-t negative log-likelihood on `[mean, log sd]` with fixed degrees
of freedom: the robust regression head, where an outlying row pulls the
mean less than under a Gaussian.

#### Parameters

##### \_\_namedParameters?

###### nu?

`number` = `4`

#### Returns

`any`

#### studentTNLL.lossName

> **lossName**: `string`
