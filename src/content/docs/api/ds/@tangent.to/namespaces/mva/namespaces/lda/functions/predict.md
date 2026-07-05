---
title: "predict"
---

> **predict**(`model`, `X`): (`string` \| `number`)[]

Defined in: [ds/src/mva/lda.js:421](https://github.com/tangent-to/ds/blob/b030bfcdee999a5f0b26cc4645a9d3840d9f23c5/src/mva/lda.js#L421)

Predict class labels for new data using nearest class-mean in discriminant space

## Parameters

### model

`any`

Fitted LDA model

### X

`any`

New data matrix (n × p), or a declarative config object with data/X

## Returns

(`string` \| `number`)[]

Predicted class label for each row
