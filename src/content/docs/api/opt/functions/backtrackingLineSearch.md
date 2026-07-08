---
title: "backtrackingLineSearch"
---

> **backtrackingLineSearch**(`evaluate`, `x`, `gradient`, `currentLoss`): `number`

Defined in: [gradient.js:29](https://github.com/tangent-to/opt/blob/975b1333800a65e245182d8e0aa4c737f26ed6fc/src/gradient.js#L29)

Backtracking line search satisfying the Armijo condition.

## Parameters

### evaluate

`Function`

(x) => {loss, gradient}

### x

`number`[]

Current point

### gradient

`number`[]

Gradient at x

### currentLoss

`number`

Loss at x

## Returns

`number`

Step size
