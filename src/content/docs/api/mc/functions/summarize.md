---
title: "summarize"
---

> **summarize**(`samples`): `object`

Defined in: [utils/trace.js:13](https://github.com/tangent-to/mc/blob/f22d94c7dfed239d858791e7e0d263abb3191973/src/utils/trace.js#L13)

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
