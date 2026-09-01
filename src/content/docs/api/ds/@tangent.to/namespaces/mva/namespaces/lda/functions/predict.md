---
title: "predict"
---

> **predict**(`model`, `X`): (`string` \| `number`)[]

Defined in: [mva/lda.js:439](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/mva/lda.js#L439)

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
