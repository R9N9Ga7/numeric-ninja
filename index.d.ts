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
  static getRandomFloatInRange01(minInclusive: number = 0, maxExclusive: number = 1): number;
  static getRandomIntInRange(minInclusive: number, maxExclusive: number): number;
  static isNumber(value: number): boolean;
  static isNumeric(value: number | string): boolean;
}
