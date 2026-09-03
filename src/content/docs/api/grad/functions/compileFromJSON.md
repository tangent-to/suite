---
title: "compileFromJSON"
---

> **compileFromJSON**(`json`): (`x`) => `object`

Defined in: [api.js:524](https://github.com/tangent-to/grad/blob/26e3c3d68f4be6927aff68186f4111754dbe8da9/src/api.js#L524)

Rebuild a compiled objective from the data [compile](compile.md)'s `toJSON`
produced, on this thread or another.

What comes back behaves like the output of `compile`, with one difference:
it has no objective function to fall back to, so it evaluates only at the
shapes it was built for and throws on any other. That is the point. A
worker cannot receive a closure, but it can receive this, and the data the
closure captured travels inside it as constant leaves.

## Parameters

### json

`any`

the value `compiled.toJSON()` returned

## Returns

(`x`) => `object`

## Example

```ts
const vg = compile(negLogLik);
vg(p0);                                   // builds the graph
const json = vg.toJSON();                 // structured-clonable
const again = compileFromJSON(json);      // in a worker, say
again(p1);                                // same gradient the original gives
```
