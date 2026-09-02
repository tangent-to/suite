---
title: "transform"
---

> **transform**(`model`, `X`, `Y`, `options?`): `any`

Defined in: [mva/cca.js:260](https://github.com/tangent-to/ds/blob/f03994f48e9c28111fe220ccf64940ed8dbce7ac/src/mva/cca.js#L260)

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
