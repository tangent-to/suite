---
title: "summarize"
---

> **summarize**(`samples`): `object`

Defined in: [utils/trace.js:13](https://github.com/tangent-to/mc/blob/6ab72bfaee3ddf99e56ddaa22a4b0f629cd2ec96/src/utils/trace.js#L13)

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
