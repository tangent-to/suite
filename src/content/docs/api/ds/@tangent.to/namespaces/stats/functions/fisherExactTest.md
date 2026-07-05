---
title: "fisherExactTest"
---

> **fisherExactTest**(`table`, `options?`): `any`

Defined in: [ds/src/stats/tests.js:838](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/stats/tests.js#L838)

Fisher's exact test for 2x2 contingency tables

## Parameters

### table

`number`[][]

2x2 contingency table [[a,b],[c,d]]

### options?

`any` = `{}`

{alternative: 'two-sided'|'less'|'greater'}

## Returns

`any`

{pValue, oddsRatio, alternative}
