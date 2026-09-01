---
title: "luFactorSolve"
---

> **luFactorSolve**(`fac`, `b`): `Float64Array`\<`ArrayBufferLike`\>

Defined in: [lu.js:147](https://github.com/tangent-to/lina/blob/c8a71bc6d4accccf099a3c97b1c156bb84b7e8a1/src/lu.js#L147)

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
