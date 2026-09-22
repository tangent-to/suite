---
title: "binaryCrossEntropy"
---

> `const` **binaryCrossEntropy**: `any`

Defined in: [losses.js:74](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/losses.js#L74)

Binary cross-entropy on a logit output, in the stable form
`softplus(z) - y z`, which is `-log Bernoulli(y | sigmoid(z))` without ever
forming the probability.
