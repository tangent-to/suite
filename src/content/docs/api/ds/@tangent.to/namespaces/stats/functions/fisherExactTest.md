---
title: "fisherExactTest"
---

> **fisherExactTest**(`table`, `options?`): `any`

Defined in: [stats/tests.js:838](https://github.com/tangent-to/ds/blob/09615975dac258601b705b966868b430eb321dc8/src/stats/tests.js#L838)

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
