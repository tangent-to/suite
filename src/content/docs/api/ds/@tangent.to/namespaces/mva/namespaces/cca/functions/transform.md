---
title: "transform"
---

> **transform**(`model`, `X`, `Y`, `options?`): `any`

Defined in: [ds/src/mva/cca.js:260](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/mva/cca.js#L260)

Project new X and Y data onto their fitted canonical variates

## Parameters

### model

`any`

Fitted CCA model

### X

`number`[][]

New X data matrix (n × p)

### Y

`number`[][]

New Y data matrix (n × q)

### options?

`any` = `{}`

Transform options

## Returns

`any`

Object with xScores and yScores arrays of score objects
