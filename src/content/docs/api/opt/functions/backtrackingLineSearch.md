---
title: "backtrackingLineSearch"
---

> **backtrackingLineSearch**(`evaluate`, `x`, `gradient`, `currentLoss`): `number`

Defined in: [gradient.js:29](https://github.com/tangent-to/opt/blob/92f11b3aa26804ff0465d67f82f3eea22cefd937/src/gradient.js#L29)

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
