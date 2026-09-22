---
title: "summarize"
---

> **summarize**(`samples`): `object`

Defined in: [utils/trace.js:13](https://github.com/tangent-to/mc/blob/bc88f98e0b4326b110a43551bb0f45e41cfe4fc7/src/utils/trace.js#L13)

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
