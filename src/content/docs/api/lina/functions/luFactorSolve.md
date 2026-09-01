---
title: "luFactorSolve"
---

> **luFactorSolve**(`fac`, `b`): `Float64Array`\<`ArrayBufferLike`\>

Defined in: [lu.js:147](https://github.com/tangent-to/lina/blob/38f2deda0247ee8455f96fb1a9956056f232f3f4/src/lu.js#L147)

Solve A x = b from a packed factorization returned by luFactor().

## Parameters

### fac

luFactor() result

#### lu

`Float64Array`

#### n

`number`

#### perm

`Int32Array`

### b

`number`[] \| `Float64Array`\<`ArrayBufferLike`\>

Right-hand side (length n, not modified)

## Returns

`Float64Array`\<`ArrayBufferLike`\>

Solution vector x
