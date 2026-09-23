---
title: "summarize"
---

> **summarize**(`samples`): `object`

Defined in: [utils/trace.js:14](https://github.com/tangent-to/mc/blob/dda37c2af05ea0722d546a55a8803c9694c0e8a4/src/utils/trace.js#L14)

Compute summary statistics for a trace

## Parameters

### samples

`number`[]

Array of samples

## Returns

`object`

Summary statistics: the
  mean, median, standard deviation, variance, 2.5%/97.5% interval bounds,
  and the sample count

### hdi\_2\_5

> **hdi\_2\_5**: `number`

### hdi\_97\_5

> **hdi\_97\_5**: `number`

### mean

> **mean**: `number`

### median

> **median**: `number`

### n

> **n**: `number`

### std

> **std**: `number`

### variance

> **variance**: `number`
