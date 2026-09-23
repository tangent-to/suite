---
title: "silhouetteSamples"
---

> **silhouetteSamples**(`X`, `labels`): `object`[]

Defined in: [ml/silhouette.js:60](https://github.com/tangent-to/ds/blob/09615975dac258601b705b966868b430eb321dc8/src/ml/silhouette.js#L60)

Compute the silhouette value for each sample

## Parameters

### X

`number`[][] \| \{ `columns`: `string`[]; `data`: `number`[][]; \}

Data matrix (n × p) or an options object with data/columns

### labels

`number`[] \| `string`[]

Cluster label for each sample (length n)

## Returns

`object`[]

Per-sample silhouette records
