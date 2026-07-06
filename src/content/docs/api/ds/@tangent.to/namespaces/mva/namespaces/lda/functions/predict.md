---
title: "predict"
---

> **predict**(`model`, `X`): (`string` \| `number`)[]

Defined in: [mva/lda.js:421](https://github.com/tangent-to/ds/blob/2ee2e1ba2630e5364404ffcd3f46be1feb8826e1/src/mva/lda.js#L421)

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
