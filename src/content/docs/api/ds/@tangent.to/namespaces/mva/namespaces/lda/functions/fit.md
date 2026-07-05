---
title: "fit"
---

> **fit**(`X`, `y`, `options?`): `any`

Defined in: [ds/src/mva/lda.js:34](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/mva/lda.js#L34)

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
