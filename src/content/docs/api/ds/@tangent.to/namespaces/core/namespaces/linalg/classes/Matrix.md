---
title: "Matrix"
---

Defined in: [core/matrix.js:22](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/matrix.js#L22)

## Constructors

### Constructor

> **new Matrix**(`rowsOrData`, `columns?`): `Matrix`

Defined in: [core/matrix.js:28](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/matrix.js#L28)

#### Parameters

##### rowsOrData

`number` \| `number`[][] \| `Matrix`

Row count,
  nested array, or Matrix to copy

##### columns?

`number`

Column count when rowsOrData is a number

#### Returns

`Matrix`

## Properties

### data

> **data**: `any`

Defined in: [core/matrix.js:30](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/matrix.js#L30)

## Accessors

### columns

#### Get Signature

> **get** **columns**(): `any`

Defined in: [core/matrix.js:75](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/matrix.js#L75)

##### Returns

`any`

***

### rows

#### Get Signature

> **get** **rows**(): `any`

Defined in: [core/matrix.js:71](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/matrix.js#L71)

##### Returns

`any`

## Methods

### \_elementWise()

> **\_elementWise**(`other`, `op`): `Matrix`

Defined in: [core/matrix.js:147](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/matrix.js#L147)

#### Parameters

##### other

`any`

##### op

`any`

#### Returns

`Matrix`

***

### add()

> **add**(`other`): `Matrix`

Defined in: [core/matrix.js:162](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/matrix.js#L162)

#### Parameters

##### other

`any`

#### Returns

`Matrix`

***

### clone()

> **clone**(): `Matrix`

Defined in: [core/matrix.js:114](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/matrix.js#L114)

#### Returns

`Matrix`

***

### div()

> **div**(`other`): `Matrix`

Defined in: [core/matrix.js:174](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/matrix.js#L174)

#### Parameters

##### other

`any`

#### Returns

`Matrix`

***

### get()

> **get**(`i`, `j`): `any`

Defined in: [core/matrix.js:79](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/matrix.js#L79)

#### Parameters

##### i

`any`

##### j

`any`

#### Returns

`any`

***

### getColumn()

> **getColumn**(`j`): `any`

Defined in: [core/matrix.js:92](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/matrix.js#L92)

#### Parameters

##### j

`any`

#### Returns

`any`

***

### getRow()

> **getRow**(`i`): `any`

Defined in: [core/matrix.js:88](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/matrix.js#L88)

#### Parameters

##### i

`any`

#### Returns

`any`

***

### max()

> **max**(): `number`

Defined in: [core/matrix.js:201](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/matrix.js#L201)

#### Returns

`number`

***

### mean()

> **mean**(`by?`): `number` \| `number`[]

Defined in: [core/matrix.js:183](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/matrix.js#L183)

Mean of all entries, or per-row/per-column means.

#### Parameters

##### by?

`"column"` \| `"row"`

Aggregation axis

#### Returns

`number` \| `number`[]

Grand mean, or one mean per row/column

***

### min()

> **min**(): `number`

Defined in: [core/matrix.js:209](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/matrix.js#L209)

#### Returns

`number`

***

### mmul()

> **mmul**(`other`): `Matrix`

Defined in: [core/matrix.js:123](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/matrix.js#L123)

Matrix product; returns a new Matrix.

#### Parameters

##### other

`number`[][] \| `Matrix`

Right operand

#### Returns

`Matrix`

this * other

***

### mul()

> **mul**(`other`): `Matrix`

Defined in: [core/matrix.js:170](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/matrix.js#L170)

#### Parameters

##### other

`any`

#### Returns

`Matrix`

***

### set()

> **set**(`i`, `j`, `value`): `Matrix`

Defined in: [core/matrix.js:83](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/matrix.js#L83)

#### Parameters

##### i

`any`

##### j

`any`

##### value

`any`

#### Returns

`Matrix`

***

### setColumn()

> **setColumn**(`j`, `values`): `Matrix`

Defined in: [core/matrix.js:101](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/matrix.js#L101)

#### Parameters

##### j

`any`

##### values

`any`

#### Returns

`Matrix`

***

### setRow()

> **setRow**(`i`, `values`): `Matrix`

Defined in: [core/matrix.js:96](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/matrix.js#L96)

#### Parameters

##### i

`any`

##### values

`any`

#### Returns

`Matrix`

***

### sub()

> **sub**(`other`): `Matrix`

Defined in: [core/matrix.js:166](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/matrix.js#L166)

#### Parameters

##### other

`any`

#### Returns

`Matrix`

***

### subMatrix()

> **subMatrix**(`startRow`, `endRow`, `startColumn`, `endColumn`): `Matrix`

Defined in: [core/matrix.js:139](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/matrix.js#L139)

#### Parameters

##### startRow

`any`

##### endRow

`any`

##### startColumn

`any`

##### endColumn

`any`

#### Returns

`Matrix`

***

### to1DArray()

> **to1DArray**(): `any`

Defined in: [core/matrix.js:110](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/matrix.js#L110)

#### Returns

`any`

***

### to2DArray()

> **to2DArray**(): `any`

Defined in: [core/matrix.js:106](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/matrix.js#L106)

#### Returns

`any`

***

### transpose()

> **transpose**(): `Matrix`

Defined in: [core/matrix.js:129](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/matrix.js#L129)

#### Returns

`Matrix`

***

### columnVector()

> `static` **columnVector**(`values`): `Matrix`

Defined in: [core/matrix.js:63](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/matrix.js#L63)

#### Parameters

##### values

`any`

#### Returns

`Matrix`

***

### diag()

> `static` **diag**(`values`): `Matrix`

Defined in: [core/matrix.js:56](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/matrix.js#L56)

#### Parameters

##### values

`any`

#### Returns

`Matrix`

***

### eye()

> `static` **eye**(`rows`, `columns?`): `Matrix`

Defined in: [core/matrix.js:50](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/matrix.js#L50)

#### Parameters

##### rows

`any`

##### columns?

`any` = `rows`

#### Returns

`Matrix`

***

### ones()

> `static` **ones**(`rows`, `columns`): `Matrix`

Defined in: [core/matrix.js:44](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/matrix.js#L44)

#### Parameters

##### rows

`any`

##### columns

`any`

#### Returns

`Matrix`

***

### rowVector()

> `static` **rowVector**(`values`): `Matrix`

Defined in: [core/matrix.js:67](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/matrix.js#L67)

#### Parameters

##### values

`any`

#### Returns

`Matrix`

***

### zeros()

> `static` **zeros**(`rows`, `columns`): `Matrix`

Defined in: [core/matrix.js:40](https://github.com/tangent-to/ds/blob/a3d0ec90bff96188eef59cf586d298d1ed9186dc/src/core/matrix.js#L40)

#### Parameters

##### rows

`any`

##### columns

`any`

#### Returns

`Matrix`
