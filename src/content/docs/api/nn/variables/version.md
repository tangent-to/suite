---
title: "version"
---

> `const` **version**: `"0.1.0"` = `'0.1.0'`

Defined in: [index.js:18](https://github.com/tangent-to/nn/blob/b82740bccc898557db9b025a7248070fac0b8c07/src/index.js#L18)

@tangent.to/nn - neural networks on the tangent tape.

A functional layer API traced into a graph, differentiated by
@tangent.to/grad, trained with @tangent.to/opt's update rules, seeded by
@tangent.to/proba, with likelihood losses over proba's densities. See
docs/DESIGN-0.1.md.

## Example

```ts
import nn from '@tangent.to/nn';
const x = nn.input(4);
const h = nn.dense(8, { activation: 'relu' })(x);
const model = nn.model(x, nn.dense(1)(h), { loss: 'mse', seed: 1 });
await model.fit(X, y, { optimizer: 'lbfgs' });
model.predict(Xnew);
```
