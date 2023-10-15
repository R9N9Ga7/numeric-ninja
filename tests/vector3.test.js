const {
  Vector3,
  Utils,
} = require('../index.js');

const MIN = -10000;
const MAX = 10000;

const getRandomVector3 = () => new Vector3(
  Utils.getRandomIntInRange(MIN, MAX),
  Utils.getRandomIntInRange(MIN, MAX),
  Utils.getRandomIntInRange(MIN, MAX),
);

const getRandomValue = () => Utils.getRandomIntInRange(MIN, MAX);

describe('Vector3', () => {
  test('add: adds two vectors', () => {
    const v1 = getRandomVector3();
    const v2 = getRandomVector3();
    expect(
      v1.add(v2),
    ).toEqual({ x: v1.x + v2.x, y: v1.y + v2.y, z: v1.z + v2.z });
  });

  test('sub: substract one vector from another', () => {
    const v1 = getRandomVector3();
    const v2 = getRandomVector3();
    expect(
      v1.sub(v2),
    ).toEqual({ x: v1.x - v2.x, y: v1.y - v2.y, z: v1.z - v2.z });
  });

  test('mul: multiplies a vector by a vector', () => {
    const v1 = getRandomVector3();
    const v2 = getRandomVector3();
    expect(
      v1.mul(v2),
    ).toEqual({ x: v1.x * v2.x, y: v1.y * v2.y, z: v1.z * v2.z });
  });

  test('div: divides a vector by a vector', () => {
    const v1 = getRandomVector3();
    const v2 = getRandomVector3();
    expect(
      v1.div(v2),
    ).toEqual({ x: v1.x / v2.x, y: v1.y / v2.y, z: v1.z / v2.z });
  });

  test('add: adds a vector with a number', () => {
    const v1 = getRandomVector3();
    const value = getRandomValue();
    expect(
      v1.add(value),
    ).toEqual({ x: v1.x + value, y: v1.y + value, z: v1.z + value });
  });

  test('sub: substract a number from a vector', () => {
    const v1 = getRandomVector3();
    const value = getRandomValue();
    expect(
      v1.sub(value),
    ).toEqual({ x: v1.x - value, y: v1.y - value, z: v1.z - value });
  });

  test('mul: multiplies a vector by a number', () => {
    const v1 = getRandomVector3();
    const value = getRandomValue();
    expect(
      v1.mul(value),
    ).toEqual({ x: v1.x * value, y: v1.y * value, z: v1.z * value });
  });

  test('div: divides a vector by a number', () => {
    const v1 = getRandomVector3();
    const value = getRandomValue();
    expect(
      v1.div(value),
    ).toEqual({ x: v1.x / value, y: v1.y / value, z: v1.z / value });
  });

  test('isEqual: compares equal vectors', () => {
    const v1 = getRandomVector3();
    expect(
      v1.isEqual(v1),
    ).toBe(true);
  });

  test('isEqual: compares different vectors', () => {
    const v1 = new Vector3(4, 12, 32);
    const v2 = new Vector3(6, 32, 23);
    expect(
      v1.isEqual(v2),
    ).toBe(false);
  });

  test('getMagnitude', () => {
    expect(new Vector3(40, 50, 20).getMagnitude())
      .toBeCloseTo(67.08204, 4);
  });

  test('getSqrMagnitude', () => {
    expect(new Vector3(40, 50, 20).getSqrMagnitude())
      .toBe(4500);
  });

  test('getNormalized', () => {
    const v1 = new Vector3(40, 50, 20).getNormalized();
    expect(v1.x).toBeCloseTo(0.60, 2);
    expect(v1.y).toBeCloseTo(0.75, 2);
    expect(v1.z).toBeCloseTo(0.30, 2);
  });

  test('normalize', () => {
    const v1 = new Vector3(40, 50, 20);
    v1.normalize();
    expect(v1.x).toBeCloseTo(0.60, 2);
    expect(v1.y).toBeCloseTo(0.75, 2);
    expect(v1.z).toBeCloseTo(0.30, 2);
  });

  test('clone', () => {
    const v1 = new Vector3(10, 10, 10);
    const v2 = v1.clone();
    v1.x = 15;
    v1.y = 30;
    v1.z = 20;
    expect(v2)
      .toEqual({ x: 10, y: 10, z: 10 });
  });

  test('toString', () => {
    expect(new Vector3(10, 10, 10).toString())
      .toBe('x: 10 y: 10 z: 10');
  });

  test('lerp', () => {
    const v1 = new Vector3(0, 0, 0);
    const v2 = new Vector3(10, 10, 10);
    expect(Vector3.lerp(v1, v2, 0.5))
      .toEqual({ x: 5, y: 5, z: 5 });
  });

  test('lerp: clamping', () => {
    const v1 = new Vector3(0, 0, 0);
    const v2 = new Vector3(10, 10, 10);
    expect(Vector3.lerp(v1, v2, 2))
      .toEqual({ x: 10, y: 10, z: 10 });
  });

  test('lerpUnclamped', () => {
    const v1 = new Vector3(0, 0, 0);
    const v2 = new Vector3(10, 10, 10);

    expect(Vector3.lerpUnclamped(v1, v2, 0.5))
      .toEqual({ x: 5, y: 5, z: 5 });

    expect(Vector3.lerpUnclamped(v1, v2, 2))
      .toEqual({ x: 20, y: 20, z: 20 });
  });

  test('dotProduct', () => {
    const v1 = new Vector3(40, 40, 50);
    const v2 = new Vector3(10, 10, 30);
    expect(Vector3.dotProduct(v1, v2))
      .toBe(2300);
  });

  test('reflect', () => {
    const v1 = new Vector3(50, 70, 13);
    const v2 = new Vector3(30, 10, 4);
    expect(Vector3.reflect(v1, v2))
      .toEqual({ x: -135070, y: -44970, z: -18003 });
  });

  test('angle', () => {
    const v1 = new Vector3(40, 5, 30);
    const v2 = new Vector3(10, 280, 20);
    expect(Vector3.angle(v1, v2))
      .toBeCloseTo(80.21006, 4);
  });

  test('distance', () => {
    const v1 = new Vector3(40, 5, 30);
    const v2 = new Vector3(10, 280, 20);
    expect(Vector3.distance(v1, v2))
      .toBeCloseTo(276.8122, 4);
  });
});

