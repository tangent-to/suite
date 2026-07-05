---
title: "Matrix"
---

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:991

## Extends

- `AbstractMatrix`

## Constructors

### Constructor

> **new Matrix**(`nRows`, `nColumns`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:992

#### Parameters

##### nRows

`number`

##### nColumns

`number`

#### Returns

`Matrix`

#### Overrides

`AbstractMatrix.constructor`

### Constructor

> **new Matrix**(`data`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:993

#### Parameters

##### data

`ArrayLike`\<`ArrayLike`\<`number`\>\>

#### Returns

`Matrix`

#### Overrides

`AbstractMatrix.constructor`

### Constructor

> **new Matrix**(`otherMatrix`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:994

#### Parameters

##### otherMatrix

`AbstractMatrix`

#### Returns

`Matrix`

#### Overrides

`AbstractMatrix.constructor`

## Properties

### columns

> `readonly` **columns**: `number`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:139

Number of columns of the matrix.

#### Inherited from

`AbstractMatrix.columns`

***

### rows

> `readonly` **rows**: `number`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:134

Number of rows of the matrix.

#### Inherited from

`AbstractMatrix.rows`

***

### size

> `readonly` **size**: `number`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:129

Total number of elements in the matrix.

#### Inherited from

`AbstractMatrix.size`

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Generator`\<\[`number`, `number`, `number`\], `void`, `void`\>

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:859

iterator from left to right, from top to bottom
yield [row, column, value]

#### Returns

`Generator`\<\[`number`, `number`, `number`\], `void`, `void`\>

#### Inherited from

`AbstractMatrix.[iterator]`

***

### abs()

> **abs**(): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:925

#### Returns

`this`

#### Inherited from

`AbstractMatrix.abs`

***

### acos()

> **acos**(): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:926

#### Returns

`this`

#### Inherited from

`AbstractMatrix.acos`

***

### acosh()

> **acosh**(): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:927

#### Returns

`this`

#### Inherited from

`AbstractMatrix.acosh`

***

### add()

> **add**(`value`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:885

#### Parameters

##### value

`ScalarOrMatrix`

#### Returns

`this`

#### Inherited from

`AbstractMatrix.add`

***

### addColumn()

#### Call Signature

> **addColumn**(`index`, `array`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:1016

Adds a new column to the matrix (in place).

##### Parameters

###### index

`number`

Column index. Default: `this.columns`.

###### array

`AbstractMatrix` \| `ArrayLike`\<`number`\>

Column to add.

##### Returns

`this`

#### Call Signature

> **addColumn**(`array`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:1017

Adds a new column to the matrix (in place).

##### Parameters

###### array

`AbstractMatrix` \| `ArrayLike`\<`number`\>

Column to add.

##### Returns

`this`

***

### addColumnVector()

> **addColumnVector**(`vector`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:472

Adds the values of a vector to each column.

#### Parameters

##### vector

`AbstractMatrix` \| `ArrayLike`\<`number`\>

Array or vector.

#### Returns

`this`

#### Inherited from

`AbstractMatrix.addColumnVector`

***

### addRow()

#### Call Signature

> **addRow**(`index`, `array`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:1024

Adds a new row to the matrix (in place).

##### Parameters

###### index

`number`

Row index. Default: `this.rows`.

###### array

`AbstractMatrix` \| `ArrayLike`\<`number`\>

Row to add.

##### Returns

`this`

#### Call Signature

> **addRow**(`array`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:1025

Adds a new row to the matrix (in place).

##### Parameters

###### array

`AbstractMatrix` \| `ArrayLike`\<`number`\>

Row to add.

##### Returns

`this`

***

### addRowVector()

> **addRowVector**(`vector`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:448

Adds the values of a vector to each row.

#### Parameters

##### vector

`AbstractMatrix` \| `ArrayLike`\<`number`\>

Array or vector.

#### Returns

`this`

#### Inherited from

`AbstractMatrix.addRowVector`

***

### and()

> **and**(`value`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:894

#### Parameters

##### value

`ScalarOrMatrix`

#### Returns

`this`

#### Inherited from

`AbstractMatrix.and`

***

### apply()

> **apply**(`callback`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:295

Applies a callback for each element of the matrix. The function is called in the matrix (this) context.

#### Parameters

##### callback

(`row`, `column`) => `void`

Function that will be called for each element in the matrix.

#### Returns

`this`

#### Inherited from

`AbstractMatrix.apply`

***

### asin()

> **asin**(): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:928

#### Returns

`this`

#### Inherited from

`AbstractMatrix.asin`

***

### asinh()

> **asinh**(): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:929

#### Returns

`this`

#### Inherited from

`AbstractMatrix.asinh`

***

### atan()

> **atan**(): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:930

#### Returns

`this`

#### Inherited from

`AbstractMatrix.atan`

***

### atanh()

> **atanh**(): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:931

#### Returns

`this`

#### Inherited from

`AbstractMatrix.atanh`

***

### cbrt()

> **cbrt**(): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:932

#### Returns

`this`

#### Inherited from

`AbstractMatrix.cbrt`

***

### ceil()

> **ceil**(): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:933

#### Returns

`this`

#### Inherited from

`AbstractMatrix.ceil`

***

### center()

#### Call Signature

> **center**(`options?`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:826

Center the matrix in-place. By default, the mean value of the matrix is
subtracted from every value.

##### Parameters

###### options?

`ICenterOptions`

##### Returns

`this`

##### Inherited from

`AbstractMatrix.center`

#### Call Signature

> **center**(`by`, `options?`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:834

Center the matrix in-place. By default, the mean values in the give
dimension are subtracted from the values.

##### Parameters

###### by

`MatrixDimension`

center by 'row' or 'column'.

###### options?

`ICenterByOptions`

##### Returns

`this`

##### Inherited from

`AbstractMatrix.center`

***

### clone()

> **clone**(): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:755

Creates an exact and independent copy of the matrix.

#### Returns

`this`

#### Inherited from

`AbstractMatrix.clone`

***

### clz32()

> **clz32**(): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:934

#### Returns

`this`

#### Inherited from

`AbstractMatrix.clz32`

***

### cos()

> **cos**(): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:935

#### Returns

`this`

#### Inherited from

`AbstractMatrix.cos`

***

### cosh()

> **cosh**(): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:936

#### Returns

`this`

#### Inherited from

`AbstractMatrix.cosh`

***

### cumulativeSum()

> **cumulativeSum**(): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:605

Computes the cumulative sum of the matrix elements (in place, row by row).

#### Returns

`this`

#### Inherited from

`AbstractMatrix.cumulativeSum`

***

### diag()

> **diag**(): `number`[]

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:589

Returns an array containing the diagonal values of the matrix.

#### Returns

`number`[]

#### Inherited from

`AbstractMatrix.diag`

***

### diagonal()

> **diagonal**(): `number`[]

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:594

Alias for [AbstractMatrix.diag](#diag-1).

#### Returns

`number`[]

#### Inherited from

`AbstractMatrix.diagonal`

***

### div()

> **div**(`value`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:890

#### Parameters

##### value

`ScalarOrMatrix`

#### Returns

`this`

#### Inherited from

`AbstractMatrix.div`

***

### divColumnVector()

> **divColumnVector**(`vector`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:490

Divides the values of each column by those of a vector.

#### Parameters

##### vector

`AbstractMatrix` \| `ArrayLike`\<`number`\>

Array or vector.

#### Returns

`this`

#### Inherited from

`AbstractMatrix.divColumnVector`

***

### divide()

> **divide**(`value`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:891

#### Parameters

##### value

`ScalarOrMatrix`

#### Returns

`this`

#### Inherited from

`AbstractMatrix.divide`

***

### divRowVector()

> **divRowVector**(`vector`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:466

Divides the values of each row by those of a vector.

#### Parameters

##### vector

`AbstractMatrix` \| `ArrayLike`\<`number`\>

Array or vector.

#### Returns

`this`

#### Inherited from

`AbstractMatrix.divRowVector`

***

### dot()

> **dot**(`vector`): `number`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:611

Computes the dot (scalar) product between the matrix and another.

#### Parameters

##### vector

`AbstractMatrix`

#### Returns

`number`

#### Inherited from

`AbstractMatrix.dot`

***

### echelonForm()

> **echelonForm**(): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:358

Returns the row echelon form of the matrix computed using gaussian
elimination.

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.echelonForm`

***

### entries()

> **entries**(): `Generator`\<\[`number`, `number`, `number`\], `void`, `void`\>

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:869

iterator from left to right, from top to bottom
yield [row, column, value]

#### Returns

`Generator`\<\[`number`, `number`, `number`\], `void`, `void`\>

#### Inherited from

`AbstractMatrix.entries`

***

### exp()

> **exp**(): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:937

#### Returns

`this`

#### Inherited from

`AbstractMatrix.exp`

***

### expm1()

> **expm1**(): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:938

#### Returns

`this`

#### Inherited from

`AbstractMatrix.expm1`

***

### fill()

> **fill**(`value`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:380

Fills the matrix with a given value. All elements will be set to this value.

#### Parameters

##### value

`number`

New value.

#### Returns

`this`

#### Inherited from

`AbstractMatrix.fill`

***

### flipColumns()

> **flipColumns**(): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:648

#### Returns

`this`

#### Inherited from

`AbstractMatrix.flipColumns`

***

### flipRows()

> **flipRows**(): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:646

#### Returns

`this`

#### Inherited from

`AbstractMatrix.flipRows`

***

### floor()

> **floor**(): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:939

#### Returns

`this`

#### Inherited from

`AbstractMatrix.floor`

***

### fround()

> **fround**(): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:940

#### Returns

`this`

#### Inherited from

`AbstractMatrix.fround`

***

### get()

> **get**(`rowIndex`, `columnIndex`): `number`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:997

Returns the value of the given element of the matrix.

#### Parameters

##### rowIndex

`number`

Index of the element's row.

##### columnIndex

`number`

Index of the element's column.

#### Returns

`number`

- The value of the element.

#### Overrides

`AbstractMatrix.get`

***

### getColumn()

> **getColumn**(`index`): `number`[]

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:422

Returns a new array with the values from the given column index.

#### Parameters

##### index

`number`

Column index.

#### Returns

`number`[]

#### Inherited from

`AbstractMatrix.getColumn`

***

### getColumnVector()

> **getColumnVector**(`index`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:428

Returns a new column vector with the values from the given column index.

#### Parameters

##### index

`number`

Column index.

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.getColumnVector`

***

### getRow()

> **getRow**(`index`): `number`[]

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:396

Returns a new array with the values from the given row index.

#### Parameters

##### index

`number`

Row index.

#### Returns

`number`[]

#### Inherited from

`AbstractMatrix.getRow`

***

### getRowVector()

> **getRowVector**(`index`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:402

Returns a new row vector with the values from the given row index.

#### Parameters

##### index

`number`

Row index.

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.getRowVector`

***

### isColumnVector()

> **isColumnVector**(): `boolean`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:317

Returns whether the matrix has one column.

#### Returns

`boolean`

#### Inherited from

`AbstractMatrix.isColumnVector`

***

### isDistance()

> **isDistance**(): `boolean`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:332

Returns whether the matrix is symmetric and diagonal values are equals to 0

#### Returns

`boolean`

#### Inherited from

`AbstractMatrix.isDistance`

***

### isEchelonForm()

> **isEchelonForm**(): `boolean`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:347

Returns whether the matrix is in row echelon form.

#### Returns

`boolean`

#### Inherited from

`AbstractMatrix.isEchelonForm`

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:337

Returns whether the number of rows or columns (or both) is zero.

#### Returns

`boolean`

#### Inherited from

`AbstractMatrix.isEmpty`

***

### isReducedEchelonForm()

> **isReducedEchelonForm**(): `boolean`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:352

Returns whether the matrix is in reduced row echelon form.

#### Returns

`boolean`

#### Inherited from

`AbstractMatrix.isReducedEchelonForm`

***

### isRowVector()

> **isRowVector**(): `boolean`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:312

Returns whether the matrix has one row.

#### Returns

`boolean`

#### Inherited from

`AbstractMatrix.isRowVector`

***

### isSquare()

> **isSquare**(): `boolean`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:327

Returns whether the matrix has the same number of rows and columns.

#### Returns

`boolean`

#### Inherited from

`AbstractMatrix.isSquare`

***

### isSymmetric()

> **isSymmetric**(): `boolean`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:342

Returns whether the matrix is square and has the same values on both sides of the diagonal.

#### Returns

`boolean`

#### Inherited from

`AbstractMatrix.isSymmetric`

***

### isVector()

> **isVector**(): `boolean`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:322

Returns whether the matrix has one row or one column.

#### Returns

`boolean`

#### Inherited from

`AbstractMatrix.isVector`

***

### kroneckerProduct()

> **kroneckerProduct**(`other`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:655

Returns the Kronecker product (also known as tensor product) between `this` and `other`.

#### Parameters

##### other

`MaybeMatrix`

Other matrix.

#### Returns

`Matrix`

#### Link

https://en.wikipedia.org/wiki/Kronecker_product

#### Inherited from

`AbstractMatrix.kroneckerProduct`

***

### kroneckerSum()

> **kroneckerSum**(`other`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:662

Returns the Kronecker sum between `this` and `other`.

#### Parameters

##### other

`MaybeMatrix`

Other matrix.

#### Returns

`Matrix`

#### Link

https://en.wikipedia.org/wiki/Kronecker_product#Kronecker_sum

#### Inherited from

`AbstractMatrix.kroneckerSum`

***

### leftShift()

> **leftShift**(`value`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:897

#### Parameters

##### value

`ScalarOrMatrix`

#### Returns

`this`

#### Inherited from

`AbstractMatrix.leftShift`

***

### log()

> **log**(): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:941

#### Returns

`this`

#### Inherited from

`AbstractMatrix.log`

***

### log10()

> **log10**(): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:943

#### Returns

`this`

#### Inherited from

`AbstractMatrix.log10`

***

### log1p()

> **log1p**(): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:942

#### Returns

`this`

#### Inherited from

`AbstractMatrix.log1p`

***

### log2()

> **log2**(): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:944

#### Returns

`this`

#### Inherited from

`AbstractMatrix.log2`

***

### max()

#### Call Signature

> **max**(): `number`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:509

Returns the maximum value of the matrix.

##### Returns

`number`

##### Inherited from

`AbstractMatrix.max`

#### Call Signature

> **max**(`by`): `number`[]

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:515

Returns the maximum value by the given dimension.

##### Parameters

###### by

`MatrixDimension`

max by 'row' or 'column'.

##### Returns

`number`[]

##### Inherited from

`AbstractMatrix.max`

***

### maxColumn()

> **maxColumn**(`column`): `number`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:566

Returns the maximum value of one column.

#### Parameters

##### column

`number`

Column index.

#### Returns

`number`

#### Inherited from

`AbstractMatrix.maxColumn`

***

### maxColumnIndex()

> **maxColumnIndex**(`column`): \[`number`, `number`\]

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:572

Returns the index of the maximum value of one column.

#### Parameters

##### column

`number`

Column index.

#### Returns

\[`number`, `number`\]

#### Inherited from

`AbstractMatrix.maxColumnIndex`

***

### maxIndex()

> **maxIndex**(): \[`number`, `number`\]

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:520

Returns the index of the maximum value.

#### Returns

\[`number`, `number`\]

#### Inherited from

`AbstractMatrix.maxIndex`

***

### maxRow()

> **maxRow**(`row`): `number`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:542

Returns the maximum value of one row.

#### Parameters

##### row

`number`

Row index.

#### Returns

`number`

#### Inherited from

`AbstractMatrix.maxRow`

***

### maxRowIndex()

> **maxRowIndex**(`row`): \[`number`, `number`\]

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:548

Returns the index of the maximum value of one row.

#### Parameters

##### row

`number`

Row index.

#### Returns

\[`number`, `number`\]

#### Inherited from

`AbstractMatrix.maxRowIndex`

***

### mean()

#### Call Signature

> **mean**(): `number`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:784

Returns the mean of all elements of the matrix.

##### Returns

`number`

##### Inherited from

`AbstractMatrix.mean`

#### Call Signature

> **mean**(`by`): `number`[]

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:790

Returns the mean by the given dimension.

##### Parameters

###### by

`MatrixDimension`

mean by 'row' or 'column'.

##### Returns

`number`[]

##### Inherited from

`AbstractMatrix.mean`

***

### min()

#### Call Signature

> **min**(): `number`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:525

Returns the minimum value of the matrix.

##### Returns

`number`

##### Inherited from

`AbstractMatrix.min`

#### Call Signature

> **min**(`by`): `number`[]

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:531

Returns the minimum value by the given dimension.

##### Parameters

###### by

`MatrixDimension`

min by 'row' or 'column'.

##### Returns

`number`[]

##### Inherited from

`AbstractMatrix.min`

***

### minColumn()

> **minColumn**(`column`): `number`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:578

Returns the minimum value of one column.

#### Parameters

##### column

`number`

Column index.

#### Returns

`number`

#### Inherited from

`AbstractMatrix.minColumn`

***

### minColumnIndex()

> **minColumnIndex**(`column`): \[`number`, `number`\]

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:584

Returns the index of the minimum value of one column.

#### Parameters

##### column

`number`

Column index.

#### Returns

\[`number`, `number`\]

#### Inherited from

`AbstractMatrix.minColumnIndex`

***

### minIndex()

> **minIndex**(): \[`number`, `number`\]

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:536

Returns the index of the minimum value.

#### Returns

\[`number`, `number`\]

#### Inherited from

`AbstractMatrix.minIndex`

***

### minRow()

> **minRow**(`row`): `number`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:554

Returns the minimum value of one row.

#### Parameters

##### row

`number`

Row index.

#### Returns

`number`

#### Inherited from

`AbstractMatrix.minRow`

***

### minRowIndex()

> **minRowIndex**(`row`): \[`number`, `number`\]

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:560

Returns the index of the maximum value of one row.

#### Parameters

##### row

`number`

Row index.

#### Returns

\[`number`, `number`\]

#### Inherited from

`AbstractMatrix.minRowIndex`

***

### mmul()

> **mmul**(`other`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:617

Returns the matrix product between `this` and `other`.

#### Parameters

##### other

`MaybeMatrix`

Other matrix.

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.mmul`

***

### mmulStrassen()

> **mmulStrassen**(`y`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:629

#### Parameters

##### y

`MaybeMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.mmulStrassen`

***

### mod()

> **mod**(`value`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:892

#### Parameters

##### value

`ScalarOrMatrix`

#### Returns

`this`

#### Inherited from

`AbstractMatrix.mod`

***

### modulus()

> **modulus**(`value`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:893

#### Parameters

##### value

`ScalarOrMatrix`

#### Returns

`this`

#### Inherited from

`AbstractMatrix.modulus`

***

### mpow()

> **mpow**(`scalar`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:623

Returns the square matrix raised to the given power

#### Parameters

##### scalar

`number`

the non-negative integer power to raise this matrix to

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.mpow`

***

### mul()

> **mul**(`value`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:888

#### Parameters

##### value

`ScalarOrMatrix`

#### Returns

`this`

#### Inherited from

`AbstractMatrix.mul`

***

### mulColumn()

> **mulColumn**(`index`, `value`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:504

Multiplies the values of a column with a scalar.

#### Parameters

##### index

`number`

Column index.

##### value

`number`

#### Returns

`this`

#### Inherited from

`AbstractMatrix.mulColumn`

***

### mulColumnVector()

> **mulColumnVector**(`vector`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:484

Multiplies the values of a vector with each column.

#### Parameters

##### vector

`AbstractMatrix` \| `ArrayLike`\<`number`\>

Array or vector.

#### Returns

`this`

#### Inherited from

`AbstractMatrix.mulColumnVector`

***

### mulRow()

> **mulRow**(`index`, `value`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:497

Multiplies the values of a row with a scalar.

#### Parameters

##### index

`number`

Row index.

##### value

`number`

#### Returns

`this`

#### Inherited from

`AbstractMatrix.mulRow`

***

### mulRowVector()

> **mulRowVector**(`vector`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:460

Multiplies the values of a vector with each row.

#### Parameters

##### vector

`AbstractMatrix` \| `ArrayLike`\<`number`\>

Array or vector.

#### Returns

`this`

#### Inherited from

`AbstractMatrix.mulRowVector`

***

### multiply()

> **multiply**(`value`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:889

#### Parameters

##### value

`ScalarOrMatrix`

#### Returns

`this`

#### Inherited from

`AbstractMatrix.multiply`

***

### neg()

> **neg**(): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:385

Negates the matrix. All elements will be multiplied by `-1`.

#### Returns

`this`

#### Inherited from

`AbstractMatrix.neg`

***

### negate()

> **negate**(): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:390

Alias for AbstractMatrix.neg.

#### Returns

`this`

#### Inherited from

`AbstractMatrix.negate`

***

### norm()

> **norm**(`type?`): `number`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:600

Returns the norm of a matrix.

#### Parameters

##### type?

`"max"` \| `"frobenius"`

Norm type. Default: `'frobenius'`.

#### Returns

`number`

#### Inherited from

`AbstractMatrix.norm`

***

### not()

> **not**(): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:924

#### Returns

`this`

#### Inherited from

`AbstractMatrix.not`

***

### or()

> **or**(`value`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:895

#### Parameters

##### value

`ScalarOrMatrix`

#### Returns

`this`

#### Inherited from

`AbstractMatrix.or`

***

### pow()

> **pow**(`value`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:986

#### Parameters

##### value

`ScalarOrMatrix`

#### Returns

`this`

#### Inherited from

`AbstractMatrix.pow`

***

### product()

#### Call Signature

> **product**(): `number`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:773

Returns the product of all elements of the matrix.

##### Returns

`number`

##### Inherited from

`AbstractMatrix.product`

#### Call Signature

> **product**(`by`): `number`[]

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:779

Returns the product by the given dimension.

##### Parameters

###### by

`MatrixDimension`

product by 'row' or 'column'.

##### Returns

`number`[]

##### Inherited from

`AbstractMatrix.product`

***

### reducedEchelonForm()

> **reducedEchelonForm**(): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:364

Returns the reduced row echelon form of the matrix computed using
gaussian elimination.

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.reducedEchelonForm`

***

### removeColumn()

> **removeColumn**(`index`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:1003

Removes a column from the matrix (in place).

#### Parameters

##### index

`number`

Column index.

#### Returns

`this`

***

### removeRow()

> **removeRow**(`index`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:1009

Removes a row from the matrix (in place).

#### Parameters

##### index

`number`

Row index.

#### Returns

`this`

***

### repeat()

> **repeat**(`options?`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:374

Creates a new matrix that is a repetition of the current matrix. New matrix has rows times the number of
rows of the original matrix, and columns times the number of columns of the original matrix.

#### Parameters

##### options?

`IRepeatOptions`

#### Returns

`Matrix`

#### Example

```ts
var matrix = new Matrix([[1, 2]]);
matrix.repeat({ rows: 2 }); // [[1, 2], [1, 2]]
```

#### Inherited from

`AbstractMatrix.repeat`

***

### rightShift()

> **rightShift**(`value`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:899

#### Parameters

##### value

`ScalarOrMatrix`

#### Returns

`this`

#### Inherited from

`AbstractMatrix.rightShift`

***

### round()

> **round**(): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:945

#### Returns

`this`

#### Inherited from

`AbstractMatrix.round`

***

### scale()

#### Call Signature

> **scale**(`options?`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:841

Scale the matrix in-place. By default, values are divided by their
standard deviation.

##### Parameters

###### options?

`IScaleOptions`

##### Returns

`this`

##### Inherited from

`AbstractMatrix.scale`

#### Call Signature

> **scale**(`by`, `options?`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:849

Scale the matrix in-place. By default, values are divided by the
standard deviation in the given dimension.

##### Parameters

###### by

`MatrixDimension`

scale by 'row' or 'column'.

###### options?

`IScaleByOptions`

##### Returns

`this`

##### Inherited from

`AbstractMatrix.scale`

***

### scaleColumns()

> **scaleColumns**(`options?`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:644

Returns a new column-by-column scaled matrix.

#### Parameters

##### options?

`IScaleOptions`

#### Returns

`Matrix`

#### Example

```ts
var matrix = new Matrix([[1, 2], [-1, 0]]);
var scaledMatrix = matrix.scaleColumns(); // [[1, 1], [0, 0]]
```

#### Inherited from

`AbstractMatrix.scaleColumns`

***

### scaleRows()

> **scaleRows**(`options?`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:635

Returns a new row-by-row scaled matrix.

#### Parameters

##### options?

`IScaleOptions`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.scaleRows`

***

### selection()

> **selection**(`rowIndices`, `columnIndices`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:742

Return a new matrix based on a selection of rows and columns.
Order of the indices matters and the same index can be used more than once.

#### Parameters

##### rowIndices

`ArrayLike`\<`number`\>

The row indices to select.

##### columnIndices

`ArrayLike`\<`number`\>

The column indices to select.

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.selection`

***

### set()

> **set**(`rowIndex`, `columnIndex`, `value`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:996

Sets a given element of the matrix.

#### Parameters

##### rowIndex

`number`

Index of the element's row.

##### columnIndex

`number`

Index of the element's column.

##### value

`number`

The new value for the element.

#### Returns

`this`

#### Overrides

`AbstractMatrix.set`

***

### setColumn()

> **setColumn**(`index`, `array`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:435

Sets a column at the given index.

#### Parameters

##### index

`number`

Column index.

##### array

`AbstractMatrix` \| `ArrayLike`\<`number`\>

Array or vector to set.

#### Returns

`this`

#### Inherited from

`AbstractMatrix.setColumn`

***

### setRow()

> **setRow**(`index`, `array`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:409

Sets a row at the given index.

#### Parameters

##### index

`number`

Row index.

##### array

`AbstractMatrix` \| `ArrayLike`\<`number`\>

Array or vector to set.

#### Returns

`this`

#### Inherited from

`AbstractMatrix.setRow`

***

### setSubMatrix()

> **setSubMatrix**(`matrix`, `startRow`, `startColumn`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:730

Set a part of the matrix to the given sub-matrix.

#### Parameters

##### matrix

`MaybeMatrix`

The source matrix from which to extract values.

##### startRow

`number`

The index of the first row to set.

##### startColumn

`number`

The index of the first column to set.

#### Returns

`this`

#### Inherited from

`AbstractMatrix.setSubMatrix`

***

### sign()

> **sign**(): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:946

#### Returns

`this`

#### Inherited from

`AbstractMatrix.sign`

***

### signPropagatingRightShift()

> **signPropagatingRightShift**(`value`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:898

#### Parameters

##### value

`ScalarOrMatrix`

#### Returns

`this`

#### Inherited from

`AbstractMatrix.signPropagatingRightShift`

***

### sin()

> **sin**(): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:947

#### Returns

`this`

#### Inherited from

`AbstractMatrix.sin`

***

### sinh()

> **sinh**(): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:948

#### Returns

`this`

#### Inherited from

`AbstractMatrix.sinh`

***

### sortColumns()

> **sortColumns**(`compareFunction?`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:684

Sorts the columns in-place.

#### Parameters

##### compareFunction?

(`a`, `b`) => `number`

#### Returns

`this`

#### Inherited from

`AbstractMatrix.sortColumns`

***

### sortRows()

> **sortRows**(`compareFunction?`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:678

Sorts the rows in-place.

#### Parameters

##### compareFunction?

(`a`, `b`) => `number`

#### Returns

`this`

#### Inherited from

`AbstractMatrix.sortRows`

***

### sqrt()

> **sqrt**(): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:949

#### Returns

`this`

#### Inherited from

`AbstractMatrix.sqrt`

***

### standardDeviation()

#### Call Signature

> **standardDeviation**(`options?`): `number`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:809

Returns the standard deviation of all elements of the matrix.

##### Parameters

###### options?

`IVarianceOptions`

##### Returns

`number`

##### Inherited from

`AbstractMatrix.standardDeviation`

#### Call Signature

> **standardDeviation**(`by`, `options?`): `number`[]

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:816

Returns the standard deviation by the given dimension.

##### Parameters

###### by

`MatrixDimension`

standard deviation by 'row' or 'column'.

###### options?

`IVarianceByOptions`

##### Returns

`number`[]

##### Inherited from

`AbstractMatrix.standardDeviation`

***

### strassen2x2()

> **strassen2x2**(`other`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:625

#### Parameters

##### other

`MaybeMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.strassen2x2`

***

### strassen3x3()

> **strassen3x3**(`other`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:627

#### Parameters

##### other

`MaybeMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.strassen3x3`

***

### sub()

> **sub**(`value`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:886

#### Parameters

##### value

`ScalarOrMatrix`

#### Returns

`this`

#### Inherited from

`AbstractMatrix.sub`

***

### subColumnVector()

> **subColumnVector**(`vector`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:478

Subtracts the values of a vector from each column.

#### Parameters

##### vector

`AbstractMatrix` \| `ArrayLike`\<`number`\>

Array or vector.

#### Returns

`this`

#### Inherited from

`AbstractMatrix.subColumnVector`

***

### subMatrix()

> **subMatrix**(`startRow`, `endRow`, `startColumn`, `endColumn`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:693

Returns a subset of the matrix.

#### Parameters

##### startRow

`number`

First row index.

##### endRow

`number`

Last row index.

##### startColumn

`number`

First column index.

##### endColumn

`number`

Last column index.

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.subMatrix`

***

### subMatrixColumn()

> **subMatrixColumn**(`indices`, `startRow?`, `endRow?`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:718

Returns a subset of the matrix based on an array of column indices.

#### Parameters

##### indices

`ArrayLike`\<`number`\>

Array containing the column indices.

##### startRow?

`number`

First row index. Default: `0`.

##### endRow?

`number`

Last row index. Default: `this.rows - 1`.

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.subMatrixColumn`

***

### subMatrixRow()

> **subMatrixRow**(`indices`, `startColumn?`, `endColumn?`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:706

Returns a subset of the matrix based on an array of row indices.

#### Parameters

##### indices

`ArrayLike`\<`number`\>

Array containing the row indices.

##### startColumn?

`number`

First column index. Default: `0`.

##### endColumn?

`number`

Last column index. Default: `this.columns - 1`.

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.subMatrixRow`

***

### subRowVector()

> **subRowVector**(`vector`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:454

Subtracts the values of a vector from each row.

#### Parameters

##### vector

`AbstractMatrix` \| `ArrayLike`\<`number`\>

Array or vector.

#### Returns

`this`

#### Inherited from

`AbstractMatrix.subRowVector`

***

### subtract()

> **subtract**(`value`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:887

#### Parameters

##### value

`ScalarOrMatrix`

#### Returns

`this`

#### Inherited from

`AbstractMatrix.subtract`

***

### sum()

#### Call Signature

> **sum**(): `number`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:762

Returns the sum of all elements of the matrix.

##### Returns

`number`

##### Inherited from

`AbstractMatrix.sum`

#### Call Signature

> **sum**(`by`): `number`[]

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:768

Returns the sum by the given dimension.

##### Parameters

###### by

`MatrixDimension`

sum by 'row' or 'column'.

##### Returns

`number`[]

##### Inherited from

`AbstractMatrix.sum`

***

### swapColumns()

> **swapColumns**(`column1`, `column2`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:442

Swap two columns.

#### Parameters

##### column1

`number`

First column index.

##### column2

`number`

Second column index.

#### Returns

`this`

#### Inherited from

`AbstractMatrix.swapColumns`

***

### swapRows()

> **swapRows**(`row1`, `row2`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:416

Swap two rows.

#### Parameters

##### row1

`number`

First row index.

##### row2

`number`

Second row index.

#### Returns

`this`

#### Inherited from

`AbstractMatrix.swapRows`

***

### tan()

> **tan**(): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:950

#### Returns

`this`

#### Inherited from

`AbstractMatrix.tan`

***

### tanh()

> **tanh**(): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:951

#### Returns

`this`

#### Inherited from

`AbstractMatrix.tanh`

***

### tensorProduct()

> **tensorProduct**(`other`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:667

Alias for [AbstractMatrix.kroneckerProduct](#kroneckerproduct).

#### Parameters

##### other

`MaybeMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.tensorProduct`

***

### to1DArray()

> **to1DArray**(): `number`[]

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:300

Returns a new 1D array filled row by row with the matrix values.

#### Returns

`number`[]

#### Inherited from

`AbstractMatrix.to1DArray`

***

### to2DArray()

> **to2DArray**(): `number`[][]

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:305

Returns a 2D array containing a copy of the matrix data.

#### Returns

`number`[][]

#### Inherited from

`AbstractMatrix.to2DArray`

***

### toJSON()

> **toJSON**(): `number`[][]

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:307

#### Returns

`number`[][]

#### Inherited from

`AbstractMatrix.toJSON`

***

### toString()

> **toString**(`options?`): `string`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:851

#### Parameters

##### options?

`IToStringOptions`

#### Returns

`string`

#### Inherited from

`AbstractMatrix.toString`

***

### trace()

> **trace**(): `number`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:750

Returns the trace of the matrix (sum of the diagonal elements).

#### Returns

`number`

#### Inherited from

`AbstractMatrix.trace`

***

### transpose()

> **transpose**(): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:672

Transposes the matrix and returns a new one containing the result.

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.transpose`

***

### trunc()

> **trunc**(): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:952

#### Returns

`this`

#### Inherited from

`AbstractMatrix.trunc`

***

### values()

> **values**(): `Generator`\<`number`, `void`, `void`\>

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:879

iterator from left to right, from top to bottom
yield value

#### Returns

`Generator`\<`number`, `void`, `void`\>

#### Inherited from

`AbstractMatrix.values`

***

### variance()

#### Call Signature

> **variance**(`options?`): `number`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:796

Returns the variance of all elements of the matrix.

##### Parameters

###### options?

`IVarianceOptions`

##### Returns

`number`

##### Inherited from

`AbstractMatrix.variance`

#### Call Signature

> **variance**(`by`, `options?`): `number`[]

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:803

Returns the variance by the given dimension.

##### Parameters

###### by

`MatrixDimension`

variance by 'row' or 'column'.

###### options?

`IVarianceByOptions`

##### Returns

`number`[]

##### Inherited from

`AbstractMatrix.variance`

***

### xor()

> **xor**(`value`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:896

#### Parameters

##### value

`ScalarOrMatrix`

#### Returns

`this`

#### Inherited from

`AbstractMatrix.xor`

***

### zeroFillRightShift()

> **zeroFillRightShift**(`value`): `this`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:900

#### Parameters

##### value

`ScalarOrMatrix`

#### Returns

`this`

#### Inherited from

`AbstractMatrix.zeroFillRightShift`

***

### abs()

> `static` **abs**(`value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:955

#### Parameters

##### value

`MaybeMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.abs`

***

### acos()

> `static` **acos**(`value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:956

#### Parameters

##### value

`MaybeMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.acos`

***

### acosh()

> `static` **acosh**(`value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:957

#### Parameters

##### value

`MaybeMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.acosh`

***

### add()

> `static` **add**(`matrix`, `value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:902

#### Parameters

##### matrix

`MaybeMatrix`

##### value

`ScalarOrMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.add`

***

### and()

> `static` **and**(`matrix`, `value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:911

#### Parameters

##### matrix

`MaybeMatrix`

##### value

`ScalarOrMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.and`

***

### asin()

> `static` **asin**(`value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:958

#### Parameters

##### value

`MaybeMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.asin`

***

### asinh()

> `static` **asinh**(`value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:959

#### Parameters

##### value

`MaybeMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.asinh`

***

### atan()

> `static` **atan**(`value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:960

#### Parameters

##### value

`MaybeMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.atan`

***

### atanh()

> `static` **atanh**(`value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:961

#### Parameters

##### value

`MaybeMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.atanh`

***

### cbrt()

> `static` **cbrt**(`value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:962

#### Parameters

##### value

`MaybeMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.cbrt`

***

### ceil()

> `static` **ceil**(`value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:963

#### Parameters

##### value

`MaybeMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.ceil`

***

### checkMatrix()

> `static` **checkMatrix**(`value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:267

Check that the provided value is a Matrix and tries to instantiate one if not.

#### Parameters

##### value

`any`

The value to check.

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.checkMatrix`

***

### clz32()

> `static` **clz32**(`value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:964

#### Parameters

##### value

`MaybeMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.clz32`

***

### columnVector()

> `static` **columnVector**(`newData`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:166

Creates a column vector, a matrix with only one column.

#### Parameters

##### newData

`ArrayLike`\<`number`\>

A 1D array containing data for the vector.

#### Returns

`Matrix`

The new matrix.

#### Inherited from

`AbstractMatrix.columnVector`

***

### copy()

> `static` **copy**\<`M`\>(`from`, `to`): `M`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:757

#### Type Parameters

##### M

`M` *extends* `AbstractMatrix`

#### Parameters

##### from

`AbstractMatrix`

##### to

`M`

#### Returns

`M`

#### Inherited from

`AbstractMatrix.copy`

***

### cos()

> `static` **cos**(`value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:965

#### Parameters

##### value

`MaybeMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.cos`

***

### cosh()

> `static` **cosh**(`value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:966

#### Parameters

##### value

`MaybeMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.cosh`

***

### diag()

> `static` **diag**(`data`, `rows?`, `columns?`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:240

Creates a diagonal matrix based on the given array.

#### Parameters

##### data

`ArrayLike`\<`number`\>

Array containing the data for the diagonal.

##### rows?

`number`

Number of rows. Default: `data.length`.

##### columns?

`number`

Number of columns. Default: `rows`.

#### Returns

`Matrix`

- The new diagonal matrix.

#### Inherited from

`AbstractMatrix.diag`

***

### diagonal()

> `static` **diagonal**(`data`, `rows?`, `columns?`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:245

Alias for [AbstractMatrix.diag](#diag-1).

#### Parameters

##### data

`ArrayLike`\<`number`\>

##### rows?

`number`

##### columns?

`number`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.diagonal`

***

### div()

> `static` **div**(`matrix`, `value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:907

#### Parameters

##### matrix

`MaybeMatrix`

##### value

`ScalarOrMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.div`

***

### divide()

> `static` **divide**(`matrix`, `value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:908

#### Parameters

##### matrix

`MaybeMatrix`

##### value

`ScalarOrMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.divide`

***

### exp()

> `static` **exp**(`value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:967

#### Parameters

##### value

`MaybeMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.exp`

***

### expm1()

> `static` **expm1**(`value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:968

#### Parameters

##### value

`MaybeMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.expm1`

***

### eye()

> `static` **eye**(`rows`, `columns?`, `value?`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:226

Creates an identity matrix with the given dimension. Values of the diagonal will be 1 and others will be 0.

#### Parameters

##### rows

`number`

Number of rows.

##### columns?

`number`

Number of columns. Default: `rows`.

##### value?

`number`

Value to fill the diagonal with. Default: `1`.

#### Returns

`Matrix`

- The new identity matrix.

#### Inherited from

`AbstractMatrix.eye`

***

### floor()

> `static` **floor**(`value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:969

#### Parameters

##### value

`MaybeMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.floor`

***

### from1DArray()

> `static` **from1DArray**(`newRows`, `newColumns`, `newData`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:148

Constructs a matrix with the chosen dimensions from a 1D array.

#### Parameters

##### newRows

`number`

Number of rows.

##### newColumns

`number`

Number of columns.

##### newData

`ArrayLike`\<`number`\>

A 1D array containing data for the matrix.

#### Returns

`Matrix`

The new matrix.

#### Inherited from

`AbstractMatrix.from1DArray`

***

### fround()

> `static` **fround**(`value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:970

#### Parameters

##### value

`MaybeMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.fround`

***

### identity()

> `static` **identity**(`rows`, `columns?`, `value?`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:231

Alias for [AbstractMatrix.eye](#eye).

#### Parameters

##### rows

`number`

##### columns?

`number`

##### value?

`number`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.identity`

***

### isMatrix()

> `static` **isMatrix**(`value`): `value is AbstractMatrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:273

Returns whether `value` is a Matrix.

#### Parameters

##### value

`any`

The value to check.

#### Returns

`value is AbstractMatrix`

#### Inherited from

`AbstractMatrix.isMatrix`

***

### leftShift()

> `static` **leftShift**(`matrix`, `value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:914

#### Parameters

##### matrix

`MaybeMatrix`

##### value

`ScalarOrMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.leftShift`

***

### log()

> `static` **log**(`value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:971

#### Parameters

##### value

`MaybeMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.log`

***

### log10()

> `static` **log10**(`value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:973

#### Parameters

##### value

`MaybeMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.log10`

***

### log1p()

> `static` **log1p**(`value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:972

#### Parameters

##### value

`MaybeMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.log1p`

***

### log2()

> `static` **log2**(`value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:974

#### Parameters

##### value

`MaybeMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.log2`

***

### max()

> `static` **max**(`matrix1`, `matrix2`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:261

Returns a matrix whose elements are the maximum between `matrix1` and `matrix2`.

#### Parameters

##### matrix1

`MaybeMatrix`

##### matrix2

`MaybeMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.max`

***

### min()

> `static` **min**(`matrix1`, `matrix2`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:254

Returns a matrix whose elements are the minimum between `matrix1` and `matrix2`.

#### Parameters

##### matrix1

`MaybeMatrix`

##### matrix2

`MaybeMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.min`

***

### mod()

> `static` **mod**(`matrix`, `value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:909

#### Parameters

##### matrix

`MaybeMatrix`

##### value

`ScalarOrMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.mod`

***

### modulus()

> `static` **modulus**(`matrix`, `value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:910

#### Parameters

##### matrix

`MaybeMatrix`

##### value

`ScalarOrMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.modulus`

***

### mul()

> `static` **mul**(`matrix`, `value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:905

#### Parameters

##### matrix

`MaybeMatrix`

##### value

`ScalarOrMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.mul`

***

### multiply()

> `static` **multiply**(`matrix`, `value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:906

#### Parameters

##### matrix

`MaybeMatrix`

##### value

`ScalarOrMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.multiply`

***

### not()

> `static` **not**(`value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:954

#### Parameters

##### value

`MaybeMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.not`

***

### ones()

> `static` **ones**\<`M`\>(`rows`, `columns`): `M`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:187

Creates a matrix with the given dimensions. Values will be set to one.

#### Type Parameters

##### M

`M` *extends* `AbstractMatrix` = `Matrix`

#### Parameters

##### rows

`number`

Number of rows.

##### columns

`number`

Number of columns.

#### Returns

`M`

The new matrix.

#### Inherited from

`AbstractMatrix.ones`

***

### or()

> `static` **or**(`matrix`, `value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:912

#### Parameters

##### matrix

`MaybeMatrix`

##### value

`ScalarOrMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.or`

***

### pow()

> `static` **pow**(`matrix`, `value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:988

#### Parameters

##### matrix

`MaybeMatrix`

##### value

`ScalarOrMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.pow`

***

### rand()

> `static` **rand**(`rows`, `columns`, `options?`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:199

Creates a matrix with the given dimensions. Values will be randomly set.

#### Parameters

##### rows

`number`

Number of rows.

##### columns

`number`

Number of columns.

##### options?

`IRandomOptions`

Options object.

#### Returns

`Matrix`

The new matrix.

#### Inherited from

`AbstractMatrix.rand`

***

### randInt()

> `static` **randInt**(`rows`, `columns`, `options?`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:213

Creates a matrix with the given dimensions. Values will be random integers.

#### Parameters

##### rows

`number`

Number of rows.

##### columns

`number`

Number of columns.

##### options?

`IRandomIntOptions`

#### Returns

`Matrix`

- The new matrix.

#### Inherited from

`AbstractMatrix.randInt`

***

### random()

> `static` **random**(`rows`, `columns`, `options?`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:200

#### Parameters

##### rows

`number`

##### columns

`number`

##### options?

`IRandomOptions`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.random`

***

### rightShift()

> `static` **rightShift**(`matrix`, `value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:919

#### Parameters

##### matrix

`MaybeMatrix`

##### value

`ScalarOrMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.rightShift`

***

### round()

> `static` **round**(`value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:975

#### Parameters

##### value

`MaybeMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.round`

***

### rowVector()

> `static` **rowVector**(`newData`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:159

Creates a row vector, a matrix with only one row.

#### Parameters

##### newData

`ArrayLike`\<`number`\>

A 1D array containing data for the vector.

#### Returns

`Matrix`

The new matrix.

#### Inherited from

`AbstractMatrix.rowVector`

***

### sign()

> `static` **sign**(`value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:976

#### Parameters

##### value

`MaybeMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.sign`

***

### signPropagatingRightShift()

> `static` **signPropagatingRightShift**(`matrix`, `value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:915

#### Parameters

##### matrix

`MaybeMatrix`

##### value

`ScalarOrMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.signPropagatingRightShift`

***

### sin()

> `static` **sin**(`value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:977

#### Parameters

##### value

`MaybeMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.sin`

***

### sinh()

> `static` **sinh**(`value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:978

#### Parameters

##### value

`MaybeMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.sinh`

***

### sqrt()

> `static` **sqrt**(`value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:979

#### Parameters

##### value

`MaybeMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.sqrt`

***

### sub()

> `static` **sub**(`matrix`, `value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:903

#### Parameters

##### matrix

`MaybeMatrix`

##### value

`ScalarOrMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.sub`

***

### subtract()

> `static` **subtract**(`matrix`, `value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:904

#### Parameters

##### matrix

`MaybeMatrix`

##### value

`ScalarOrMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.subtract`

***

### tan()

> `static` **tan**(`value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:980

#### Parameters

##### value

`MaybeMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.tan`

***

### tanh()

> `static` **tanh**(`value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:981

#### Parameters

##### value

`MaybeMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.tanh`

***

### trunc()

> `static` **trunc**(`value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:982

#### Parameters

##### value

`MaybeMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.trunc`

***

### xor()

> `static` **xor**(`matrix`, `value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:913

#### Parameters

##### matrix

`MaybeMatrix`

##### value

`ScalarOrMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.xor`

***

### zeroFillRightShift()

> `static` **zeroFillRightShift**(`matrix`, `value`): `Matrix`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:920

#### Parameters

##### matrix

`MaybeMatrix`

##### value

`ScalarOrMatrix`

#### Returns

`Matrix`

#### Inherited from

`AbstractMatrix.zeroFillRightShift`

***

### zeros()

> `static` **zeros**\<`_M`\>(`rows`, `columns`): `_M`

Defined in: ds/node\_modules/ml-matrix/matrix.d.ts:176

Creates a matrix with the given dimensions. Values will be set to zero.
This is equivalent to calling the Matrix constructor.

#### Type Parameters

##### _M

`_M` *extends* `AbstractMatrix` = `Matrix`

is private. Don't override it.

#### Parameters

##### rows

`number`

Number of rows.

##### columns

`number`

Number of columns.

#### Returns

`_M`

The new matrix.

#### Inherited from

`AbstractMatrix.zeros`
