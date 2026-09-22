---
title: "compileFromJSON"
---

> **compileFromJSON**(`json`): (`x`, `inputs?`) => `object`

Defined in: [api.js:660](https://github.com/tangent-to/grad/blob/2b49f114ab283e1b1f70b759a41ed9af1b885364/src/api.js#L660)

Rebuild a compiled objective from the data [compile](compile.md)'s `toJSON`
produced, on this thread or another.

What comes back behaves like the output of `compile`, with one difference:
it has no objective function to fall back to, so it evaluates only at the
shapes it was built for and throws on any other. That is the point. A
worker cannot receive a closure, but it can receive this, and the data the
closure captured travels inside it as constant leaves; the data the closure
took as inputs is asked for again, by name, on every call.

## Parameters

### json

`any`

the value `compiled.toJSON()` returned

## Returns

with `.value(x, inputs)` as on [compile](compile.md)

(`x`, `inputs?`) => `object`

## Example

```ts
const vg = compile(negLogLik);
vg(p0);                                   // builds the graph
const json = vg.toJSON();                 // structured-clonable
const again = compileFromJSON(json);      // in a worker, say
again(p1);                                // same gradient the original gives
```
