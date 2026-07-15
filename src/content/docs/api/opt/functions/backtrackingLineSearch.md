---
title: "backtrackingLineSearch"
---

> **backtrackingLineSearch**(`evaluate`, `x`, `gradient`, `currentLoss`): `number`

Defined in: [gradient.js:29](https://github.com/tangent-to/opt/blob/63a7219f8afc0efe76f35f5cd4a9865efeff26b2/src/gradient.js#L29)

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
