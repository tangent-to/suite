---
title: nn
description: Neural networks for JavaScript on the grad tape. Keras-style layers with branches, dropout and concrete dropout, likelihood losses over proba's densities, trained with opt, exportable as one JSON file.
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 3
---

<p class="tg-pkg-head"><span class="tg-slug">tangent<span class="slash">/</span>nn</span> <span class="tg-validated">gradients checked against finite differences</span></p>

A functional layer API in the spirit of Keras. A network is a graph of layers traced into an objective that [grad](/grad/) differentiates, so nothing in it has a hand-written backward pass: a new activation, a custom loss or a skip connection is an expression, not a derivation. The update rules come from [opt](/opt/), the randomness from [proba](/proba/), and the likelihood losses are proba's densities negated, the same formulas [mc](/mc/) samples with.

```bash
npm install @tangent.to/nn     # npm
deno add jsr:@tangent/nn        # Deno / JSR
```

<a class="tg-run" href="https://note.tangent.to/gh/tangent-to/nn/examples/neural-networks.js">
<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
Run the example notebook
</a>

```js
import nn from '@tangent.to/nn';

const x    = nn.input(37);                              // 24 soil + 12 tissue + cycle
const soil = nn.dense(32, { activation: 'relu' })(nn.slice(x, 0, 24));
const leaf = nn.dense(16, { activation: 'relu' })(nn.slice(x, 24, 12));
const h    = nn.concreteDropout(nn.dense(32, { activation: 'tanh' }))(
               nn.concat([soil, leaf, nn.slice(x, 36, 1)]));
const out  = nn.dense(2)(h);                              // [mean, log sd]

const model = nn.model(x, out, { loss: 'gaussianNLL', normalizeY: true, seed: 42 });
await model.fit(X, y, { epochs: 300, validationSplit: 0.1,
  callbacks: [nn.callbacks.earlyStopping({ patience: 20 })] });

model.predict(Xnew);                       // point prediction, dropout off
model.predict(Xnew, { samples: 200 });     // { mean, std, epistemic, aleatoric }
model.predictGradient(xnew);               // d mean / d x
JSON.stringify(model);                     // architecture and weights, for an app
```

## Layers

A layer is called on a tensor and returns a tensor; the graph is data until `fit`. A layer applied twice shares its weights. Parameters belong to the model, so a `clone()` has fresh weights on the same graph.

| Signature | Description |
| --- | --- |
| `input(d)` | The root tensor, `d` features per row. |
| `dense(units, { activation, useBias, init })` | Fully connected. Activations `linear`, `relu`, `tanh`, `sigmoid`, `softplus`, `elu`, `gelu`, or a function of the Var. Glorot initialization, He for `relu`. |
| `concat([a, b])`, `slice(x, start, size)`, `add([a, b])` | Join branches, take a run of features, a residual connection. |
| `dropout(rate)` | A mask drawn per batch, off at `predict`, drawn again at `predict({ samples })`. |
| `concreteDropout(denseLayer, { perFeature, temperature, priorLengthScale })` | Learns its rate (Gal, Hron and Kendall, 2017). Wraps the dense layer it feeds; `perFeature` learns one rate per input feature, a relevance per variable. |
| `lambda(fn)` | The escape hatch: a function of the input Var in grad operations. Reloads only where the function is registered by name. |

## Model

| Signature | Description |
| --- | --- |
| `model(input, output, { loss, normalizeY, seed })` | Trace the graph and build its parameters. `loss` is a built-in name or a function; `normalizeY` standardizes the targets and undoes it at `predict`. |
| `fit(X, y, options)` | Asynchronous, yielding every epoch; `fitSync` for a synchronous caller. Options: `optimizer` (`adam`, `sgd`, `momentum`, `rmsprop`, or `lbfgs` on the full batch), `learningRate`, `epochs`, `batchSize`, `sampleWeight` (0 where a target is missing), `validationSplit` or `validationData`, `metrics`, `clipNorm`, `callbacks`, `onEpochEnd`, `signal`. |
| `predict(X, { samples, seed, returnStd })` | The point prediction; with `samples`, Monte Carlo dropout's `{ mean, std, epistemic, aleatoric }`; with `returnStd` on a Gaussian head, the noise column. |
| `predictGradient(x)` | The gradient of the mean in the input at one row, on the target scale. |
| `evaluate(X, y)`, `clone()`, `getParams()`, `setParams()`, `summary()` | As on any estimator. `clone` is what a cross-validation fold or a bootstrap refit needs. |
| `toJSON()`, `fromJSON(json)` | The architecture, the weights and the target statistics as data; an app loads grad and nn and has `predict` with nothing to refit. |
| `ensemble(model, X, y, { members })` | Clones fitted on different seeds, predicting their mean and spread: better calibrated than Monte Carlo dropout when the fits are affordable. |
| `checkGradients(model, X, y)` | The compiled gradient against finite differences, for whoever writes a loss or a lambda layer. |

## Losses

Every loss takes `(yPred, yTrue, w)`, a weight per row, and carries a head that says how the output columns read.

| Signature | Description |
| --- | --- |
| `mse`, `mae`, `huber(delta)` | Regression on a mean head, one column per target. |
| `gaussianNLL` | Negative log-likelihood on `[mean, log sd]`: the head learns its own noise. |
| `studentTNLL({ nu })` | The same head under a Student-t: robust to an outlying row. |
| `poissonNLL` | On a log-rate output, for counts. |
| `binaryCrossEntropy` | On a logit, in the stable `softplus(z) - y z` form. |

The likelihood losses are [proba](/proba/)'s `logDensity`, negated and averaged; a custom loss is any function of the same signature.

## Uncertainty

Monte Carlo dropout gives two numbers per prediction: the spread of the means across passes, what the network is unsure of, and the noise a Gaussian head learned, what the data are noisy by. Neither is calibrated on its own. The model reports them separately so a conformal factor from held-out residuals can be applied to the total, the way [ds](/ds/)'s Gaussian process is calibrated in practice, and `ensemble` is the better default when five fits are affordable.

## Where it stops

Rank two: matrices and vectors, so dense networks. Recurrent and convolutional layers, normalization layers and a multiclass softmax wait for grad's reductions by axis, column broadcast and `gather`, planned as grad 0.4 and nn 0.2. No GPU: the tape is double precision on one thread, which trains tabular, spectral and short-sequence data of agricultural size in seconds and is not meant for images. The design note in the repository, `docs/DESIGN-0.1.md`, records the choices, what the package borrows from the rest of the suite, and its review.
