---
title: "diagnostics"
---

> `const` **diagnostics**: `object`

Defined in: [mc/src/index.js:116](https://github.com/tangent-to/mc/blob/7995b847d0a211f5963bf0dadedb51df2c3f931d/src/index.js#L116)

## Type Declaration

### effectiveSampleSize

> **effectiveSampleSize**: (`samples`) => `number`

Compute effective sample size (ESS) using autocorrelation

#### Parameters

##### samples

`number`[]

Array of samples

#### Returns

`number`

Effective sample size

### gelmanRubin

> **gelmanRubin**: (`chains`) => `number`

Compute the Gelman-Rubin diagnostic (R-hat) for convergence
Requires multiple chains

#### Parameters

##### chains

`number`[][]

Array of chains (each chain is an array of samples)

#### Returns

`number`

R-hat statistic

### printSummary

> **printSummary**: (`trace`) => `void`

Print trace summary for all variables

#### Parameters

##### trace

`any`

Trace object from sampling

#### Returns

`void`

### summarize

> **summarize**: (`samples`) => `object`

Compute summary statistics for a trace

#### Parameters

##### samples

`number`[]

Array of samples

#### Returns

`object`

Summary statistics: the
  mean, median, standard deviation, variance, 2.5%/97.5% interval bounds,
  and the sample count

##### hdi\_2\_5

> **hdi\_2\_5**: `number`

##### hdi\_97\_5

> **hdi\_97\_5**: `number`

##### mean

> **mean**: `number`

##### median

> **median**: `number`

##### n

> **n**: `number`

##### std

> **std**: `number`

##### variance

> **variance**: `number`

### traceToCSV

> **traceToCSV**: (`samples`) => `string`

Save trace to CSV format (for a single variable)

#### Parameters

##### samples

`number`[]

Array of samples

#### Returns

`string`

CSV string

### traceToJSON

> **traceToJSON**: (`trace`) => `string`

Export trace to JSON format

#### Parameters

##### trace

`any`

Trace object

#### Returns

`string`

JSON string
