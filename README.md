# numeric-ninja
## Table of content
  - [Vector](#vector)
    - [public](#public)
      - [Components of the vector](#components-of-the-vector)
      - [set and setVector](#`set`-and-`setVector`)
      - [`add`, `sub`, `mul` and `div`](#`add`,-`sub`,-`mul`-and-`div`)
      - [isEqual](#`isEqual`)
      - [getMagnitude()](#`getMagnitude()`)
      - [getSqrMagnitude](#`getSqrMagnitude`)
      - [getNormalized](#`getNormalized`)
      - [normalize](#`normalize`)
      - [toString](#`toString`)
      - [clone](#`clone`)
    - [static](#static)
      - [lerp](#`lerp`)
      - [lerpUnclamped](#`lerpUnclamped`)
      - [dotProduct](#`dotProduct`)
      - [reflect](#`reflect`)
      - [angle](#`angle`)
      - [distance](#`distance`)
      - [Vector2 constants](#`vector2-constants`)
      - [Vector3 constants](#`vector2-constants`)
  - [Utils](#utils)

## Vector

<details>
<summary>Vector2 declaration</summary>

```ts
export declare class Vector2 {
  x: number;
  y: number;

  constructor(x: number = 0, y: number = 0);

  set(x: number, y: number): void;
  setVector2(vector: Vector2): void;

  add(value: Vector2): Vector2;
  add(value: number): Vector2;

  sub(value: Vector2): Vector2;
  sub(value: number): Vector2;

  mul(value: Vector2): Vector2;
  mul(value: number): Vector2;

  div(value: Vector2): Vector2;
  div(value: number): Vector2;

  isEqual(vector: Vector2): boolean;
  getMagnitude(): number;
  getSqrMagnitude(): number;
  getNormalized(): Vector2;
  normalize(): void;

  static lerp(v1: Vector2, v2: Vector2, t: number): Vector2;
  static lerpUnclamped(v1: Vector2, v2: Vector2, t: number): Vector2;
  static dotProduct(v1: Vector2, v2: Vector2): number;
  static reflect(v1: Vector2, v2: Vector2): Vector2;
  static angle(from: Vector2, to: Vector2): number;
  static distance(v1: Vector2, v2: Vector2): number;

  static zeroVector(): Vector2;
  static oneVector(): Vector2;
  static upVector(): Vector2;
  static downVector(): Vector2;
  static leftVector(): Vector2;
  static rightVector(): Vector2;

  toString(): string;
  clone(): Vector2;
}
```

</details>

<details>
<summary>Vector3 declaration</summary>

```ts
export declare class Vector3 {
  x: number;
  y: number;
  z: number;

  constructor(x: number = 0, y: number = 0, z: number = 0);

  set(x: number, y: number, z: number): void;
  setVector3(vector: Vector3): void;

  add(value: Vector3): Vector3;
  add(value: number): Vector3;

  sub(value: Vector3): Vector3;
  sub(value: number): Vector3;

  mul(value: Vector3): Vector3;
  mul(value: number): Vector3;

  div(value: Vector3): Vector3;
  div(value: number): Vector3;

  isEqual(vector: Vector3): boolean;
  getMagnitude(): number;
  getSqrMagnitude(): number;
  getNormalized(): Vector3;
  normalize(): void;

  static lerp(v1: Vector3, v2: Vector3, t: number): Vector3;
  static lerpUnclamped(v1: Vector3, v2: Vector3, t: number): Vector3;
  static dotProduct(v1: Vector3, v2: Vector3): number;
  static reflect(v1: Vector3, v2: Vector3): Vector3;
  static angle(from: Vector3, to: Vector3): number;
  static distance(v1: Vector3, v2: Vector3): number;

  static zeroVector(): Vector3;
  static oneVector(): Vector3;
  static upVector(): Vector3;
  static downVector(): Vector3;
  static leftVector(): Vector3;
  static rightVector(): Vector3;

  toString(): string;
  clone(): Vector3;
}
```

</details>

### public

#### Components of the vector

**Vector2**

```ts
x: number;
y: number;
```

**Vector3**

```ts
x: number;
y: number;
z: number;
```

#### `set` and `setVector`
Sets values to the current class

**Vector2**

```ts
set(x: number, y: number): void;
setVector2(vector: Vector2): void;
```

**Vector3**

```ts
set(x: number, y: number, z: number): void;
setVector3(vector: Vector3): void;
```

#### `add`, `sub`, `mul` and `div`
All arithmetic operations return a new vector instance

**Vector2**

```ts
// addition
add(value: Vector2): Vector2;
add(value: number): Vector2;

// subtract
sub(value: Vector2): Vector2;
sub(value: number): Vector2;

// multiplication
mul(value: Vector2): Vector2;
mul(value: number): Vector2;

// division
div(value: Vector2): Vector2;
div(value: number): Vector2;
```

**Vector3**

```ts
// addition
add(value: Vector3): Vector3;
add(value: number): Vector3;

// subtract
sub(value: Vector3): Vector3;
sub(value: number): Vector3;

// multiplication
mul(value: Vector3): Vector3;
mul(value: number): Vector3;

// division
div(value: Vector3): Vector3;
div(value: number): Vector3;
```

#### `isEqual`
Returns true if the given vector is equal to this vector.

**Vector2**

```ts
isEqual(vector: Vector2): boolean;
```

**Vector3**

```ts
isEqual(vector: Vector3): boolean;
```

#### `getMagnitude()`
Returns the length of this vector

**Vector2 and Vector3**

```ts
getMagnitude(): number;
```

#### `getSqrMagnitude()`
Returns the squared length of this vector

**Vector2 and Vector3**

```ts
  getSqrMagnitude(): number;
```

#### `getNormalized()`
Returns this vector with a magnitude of 1

**Vector2**

```ts
  getNormalized(): Vector2;
```

**Vector3**

```ts
  getNormalized(): Vector3;
```

#### `normalize()`
Makes this vector have a magnitude of 1

**Vector2 and Vector3**

```ts
  normalize(): void;
```

#### `toString()`
Returns a vector in string representation

**Vector2**

```ts
  toString(): string; // `x: 0, y: 0`
```

**Vector3**

```ts
  toString(): string; // `x: 0, y: 0, z: 0`
```

#### `clone()`
Returns a copy of the current vector

**Vector2**

```ts
  clone(): Vector2;
```

**Vector3**

```ts
  clone(): Vector3;
```

### Static

#### `lerp`
Linearly interpolates between vectors v1 and v2 by t.

**Vector2**

```ts
lerp(v1: Vector2, v2: Vector2, t: number): Vector2;
```

**Vector3**

```ts
lerp(v1: Vector3, v2: Vector3, t: number): Vector3;
```

#### `lerpUnclamped`
Linearly interpolates between vectors v1 and v2 by t.

**Vector2**

```ts
lerpUnclamped(v1: Vector2, v2: Vector2, t: number): Vector2;
```

**Vector3**

```ts
lerpUnclamped(v1: Vector3, v2: Vector3, t: number): Vector3;
```

#### `dotProduct`
Dot Product of two vectors.

**Vector2**

```ts
dotProduct(v1: Vector2, v2: Vector2): number;
```

**Vector3**

```ts
dotProduct(v1: Vector3, v2: Vector3): number;
```

#### `reflect`
Reflects a vector off the vector defined by a normal.

**Vector2**

```ts
reflect(v1: Vector2, v2: Vector2): Vector2;
```

**Vector3**

```ts
reflect(v1: Vector3, v2: Vector3): Vector3;
```

#### `angle`
Gets the unsigned angle in degrees between from and to.

**Vector2**

```ts
angle(from: Vector2, to: Vector2): number;
```

**Vector3**

```ts
angle(from: Vector3, to: Vector3): number;
```

#### `distance`
Returns the distance between v1 and v2.

**Vector2**

```ts
distance(v1: Vector2, v2: Vector2): number;
```

**Vector3**

```ts
distance(v1: Vector3, v2: Vector3): number;
```

#### `Vector2 constants`
```ts
zeroVector(): Vector2; // new Vector2(0, 0)
oneVector(): Vector2; // new Vector2(1, 1);
upVector(): Vector2; // new Vector2(0, 1);
downVector(): Vector2; // new Vector2(0, -1);
leftVector(): Vector2; // new Vector2(-1, 0);
rightVector(): Vector2; // new Vector2(1, 0);
```

#### `Vector3 constants`

```ts
zeroVector(): Vector3; // new Vector3(0, 0, 0);
oneVector(): Vector3; // new Vector3(1, 1, 1);
upVector(): Vector3; // new Vector3(0, 1, 0);
downVector(): Vector3; // new Vector3(0, -1, 0);
leftVector(): Vector3; // new Vector3(-1, 0, 0);
rightVector(): Vector3; // new Vector3(1, 0, 0);
forwardVector(): Vector3; // new Vector3(0, 0, 1);
backVector(): Vector3; // new Vector3(0, 0, -1);
```

## Utils

<details>
<summary>Utils declaration</summary>

```ts
export declare class Utils {
  static degToRad: number;
  static radToDeg: number;
  static halfFullAngleInDeg: number; // 180
  static fullAngleInDeg: number; // 360

  static clamp(value: number, minValue: number, maxValue: number): number;
  static clamp01(value: number): number;
  static lerp(a: number, b: number, t: number): number;
  static lerpUnclamped(a: number, b: number, t: number): number;
  static inverseLerp(a: number, b: number, value: number): number;
  static lerpAngle(a: number, b: number, t: number): number;
  static repeat(value: number, length: number): number;
  static pingPong(value: number, length: number): number;
  static deltaAngle(current: number, target: number): number;
  static isEqualNum(x: number, y: number): boolean;
  static getRandomFloatInRange01(minInclusive: number, maxExclusive: number): number;
  static getRandomIntInRange(minInclusive: number, maxExclusive: number): number;
  static isNumber(value: number): boolean;
  static isNumeric(value: number | string): boolean;
}
```

</details>