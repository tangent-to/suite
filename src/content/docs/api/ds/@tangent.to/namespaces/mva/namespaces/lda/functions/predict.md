---
title: "predict"
---

> **predict**(`model`, `X`): (`string` \| `number`)[]

Defined in: [mva/lda.js:439](https://github.com/tangent-to/ds/blob/09615975dac258601b705b966868b430eb321dc8/src/mva/lda.js#L439)

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
