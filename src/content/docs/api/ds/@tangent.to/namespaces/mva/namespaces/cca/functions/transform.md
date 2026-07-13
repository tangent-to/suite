---
title: "transform"
---

> **transform**(`model`, `X`, `Y`, `options?`): `any`

Defined in: [mva/cca.js:260](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/mva/cca.js#L260)

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
