---
title: "transform"
---

> **transform**(`model`, `X`, `Y`, `options?`): `any`

Defined in: [mva/cca.js:260](https://github.com/tangent-to/ds/blob/0a43f5fe13ac4b751b6725aa861bff8ee10e9e13/src/mva/cca.js#L260)

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
