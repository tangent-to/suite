---
title: "createD3DendrogramRenderer"
---

> **createD3DendrogramRenderer**(`d3`, `options?`): `Function`

Defined in: [plot/renderers/d3Dendrogram.js:52](https://github.com/tangent-to/ds/blob/6e21a5270fa50d9c6d6c92270cea025b02e6d754/src/plot/renderers/d3Dendrogram.js#L52)

Build a dendrogram renderer that relies on user-supplied D3 modules for scaling.
The returned function is compatible with the `.show(renderer)` helper emitted by plotHCA.

Usage:
  import { plot } from '@tangent.to/ds';
  const { plotHCA, createD3DendrogramRenderer } = plot;
  const spec = plotHCA(model);
  const svg = spec.show(createD3DendrogramRenderer(d3));

## Parameters

### d3

`any`

D3 namespace (only `scaleLinear` is used if available)

### options?

`any` = `{}`

Renderer options

## Returns

`Function`

Renderer function accepted by config.show()
