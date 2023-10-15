const {
  Vector2,
  Utils,
} = require('../index.js');

const MIN = -10000;
const MAX = 10000;

const getRandomVector2 = () => new Vector2(
  Utils.getRandomIntInRange(MIN, MAX),
  Utils.getRandomIntInRange(MIN, MAX),
);

const getRandomValue = () => Utils.getRandomIntInRange(MIN, MAX);

describe('Vector2', () => {
  test('add: adds two vectors', () => {
    const v1 = getRandomVector2();
    const v2 = getRandomVector2();
    expect(
      v1.add(v2),
    ).toEqual({ x: v1.x + v2.x, y: v1.y + v2.y });
  });

  test('sub: substract one vector from another', () => {
    const v1 = getRandomVector2();
    const v2 = getRandomVector2();
    expect(
      v1.sub(v2),
    ).toEqual({ x: v1.x - v2.x, y: v1.y - v2.y });
  });

  test('mul: multiplies a vector by a vector', () => {
    const v1 = getRandomVector2();
    const v2 = getRandomVector2();
    expect(
      v1.mul(v2),
    ).toEqual({ x: v1.x * v2.x, y: v1.y * v2.y });
  });

  test('div: divides a vector by a vector', () => {
    const v1 = getRandomVector2();
    const v2 = getRandomVector2();
    expect(
      v1.div(v2),
    ).toEqual({ x: v1.x / v2.x, y: v1.y / v2.y });
  });

  test('add: adds a vector with a number', () => {
    const v1 = getRandomVector2();
    const value = getRandomValue();
    expect(
      v1.add(value),
    ).toEqual({ x: v1.x + value, y: v1.y + value });
  });

  test('sub: substract a number from a vector', () => {
    const v1 = getRandomVector2();
    const value = getRandomValue();
    expect(
      v1.sub(value),
    ).toEqual({ x: v1.x - value, y: v1.y - value });
  });

  test('mul: multiplies a vector by a number', () => {
    const v1 = getRandomVector2();
    const value = getRandomValue();
    expect(
      v1.mul(value),
    ).toEqual({ x: v1.x * value, y: v1.y * value });
  });

  test('div: divides a vector by a number', () => {
    const v1 = getRandomVector2();
    const value = getRandomValue();
    expect(
      v1.div(value),
    ).toEqual({ x: v1.x / value, y: v1.y / value });
  });

  test('isEqual: compares equal vectors', () => {
    const v1 = getRandomVector2();
    expect(
      v1.isEqual(v1),
    ).toBe(true);
  });

  test('isEqual: compares different vectors', () => {
    const v1 = new Vector2(4, 12);
    const v2 = new Vector2(6, 32);
    expect(
      v1.isEqual(v2),
    ).toBe(false);
  });

  test('getMagnitude', () => {
    expect(new Vector2(40, 50).getMagnitude())
      .toBeCloseTo(64.03124, 4);
  });

  test('getSqrMagnitude', () => {
    expect(new Vector2(40, 50).getSqrMagnitude())
      .toBe(4100);
  });

  test('getNormalized', () => {
    const v1 = new Vector2(40, 50).getNormalized();
    expect(v1.x).toBeCloseTo(0.62469, 4);
    expect(v1.y).toBeCloseTo(0.78086, 4);
  });

  test('normalize', () => {
    const v1 = new Vector2(40, 50);
    v1.normalize();
    expect(v1.x).toBeCloseTo(0.62469, 4);
    expect(v1.y).toBeCloseTo(0.78086, 4);
  });

  test('clone', () => {
    const v1 = new Vector2(10, 10);
    const v2 = v1.clone();
    v1.x = 15;
    v1.y = 30;
    expect(v2)
      .toEqual({ x: 10, y: 10 });
  });

  test('toString', () => {
    expect(new Vector2(10, 10).toString())
      .toBe('x: 10 y: 10');
  });

  test('lerp', () => {
    const v1 = new Vector2(0, 0);
    const v2 = new Vector2(10, 10);
    expect(Vector2.lerp(v1, v2, 0.5))
      .toEqual({ x: 5, y: 5 });
  });

  test('lerp: clamping', () => {
    const v1 = new Vector2(0, 0);
    const v2 = new Vector2(10, 10);
    expect(Vector2.lerp(v1, v2, 2))
      .toEqual({ x: 10, y: 10 });
  });

  test('lerpUnclamped', () => {
    const v1 = new Vector2(0, 0);
    const v2 = new Vector2(10, 10);
    expect(Vector2.lerpUnclamped(v1, v2, 0.5))
      .toEqual({ x: 5, y: 5 });

    expect(Vector2.lerpUnclamped(v1, v2, 2))
      .toEqual({ x: 20, y: 20 });
  });

  test('dotProduct', () => {
    const v1 = new Vector2(40, 40);
    const v2 = new Vector2(10, 10);
    expect(Vector2.dotProduct(v1, v2))
      .toBe(800);
  });

  test('reflect', () => {
    const v1 = new Vector2(50, 70);
    const v2 = new Vector2(30, 10);
    expect(Vector2.reflect(v1, v2))
      .toEqual({ x: -131950, y: -43930 });
  });

  test('angle', () => {
    const v1 = new Vector2(40, 5);
    const v2 = new Vector2(10, 280);
    expect(Vector2.angle(v1, v2))
      .toBeCloseTo(80.82957, 4);
  });

  test('distance', () => {
    const v1 = new Vector2(40, 5);
    const v2 = new Vector2(10, 280);
    expect(Vector2.distance(v1, v2))
      .toBeCloseTo(276.63152, 4);
  });
});

