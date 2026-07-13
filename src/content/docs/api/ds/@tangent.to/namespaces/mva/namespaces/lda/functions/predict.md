---
title: "predict"
---

> **predict**(`model`, `X`): (`string` \| `number`)[]

Defined in: [mva/lda.js:421](https://github.com/tangent-to/ds/blob/8c34ce1d14a4c8a768b5406099bfadf7e90a1e09/src/mva/lda.js#L421)

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
