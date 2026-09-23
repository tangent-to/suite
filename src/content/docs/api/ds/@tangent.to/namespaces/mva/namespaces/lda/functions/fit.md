---
title: "fit"
---

> **fit**(`X`, `y`, `options?`): `any`

Defined in: [mva/lda.js:34](https://github.com/tangent-to/ds/blob/09615975dac258601b705b966868b430eb321dc8/src/mva/lda.js#L34)

Fit LDA model

## Parameters

### X

`any`

Design matrix (n × p), or a declarative config object with X/y/data

### y

(`string` \| `number`)[]

Class label vector

### options?

Fitting options

#### encoders?

`any`

Label encoders for declarative input

#### naOmit?

`boolean`

Omit rows with missing values (default true)

#### omit_missing?

`boolean`

Omit rows with missing values (alias of naOmit)

#### scale?

`boolean`

Scale features to unit variance (default false)

#### scaling?

`number`

Ordination scaling, 1 or 2 (default 2)

## Returns

`any`

Fitted LDA model
