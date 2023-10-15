const { Utils } = require('../');

describe('Utils', () => {
  test('clamp', () => {
    expect(Utils.clamp(1, 2, 5)).toBe(2);
    expect(Utils.clamp(7, 2, 5)).toBe(5);
  });

  test('clamp01', () => {
    expect(Utils.clamp01(2)).toBe(1);
    expect(Utils.clamp01(-1)).toBe(0);
  });

  test('lerp', () => {
    expect(Utils.lerp(0, 10, 0.5)).toBe(5);
    expect(Utils.lerp(0, 10, 2)).toBe(10);
  });

  test('lerpUnclamped', () => {
    expect(Utils.lerpUnclamped(0, 10, 1.5)).toBe(15);
  });

  test('inverseLerp', () => {
    expect(Utils.inverseLerp(0, 10, 5)).toBe(0.5);
  });

  test('lerpAngle', () => {
    expect(Utils.lerpAngle(0, 180, 0.5)).toBe(90);
  });

  test('repeat', () => {
    expect(Utils.repeat(15, 10)).toBe(5);
  });

  test('pingPong', () => {
    expect(Utils.pingPong(15, 10)).toBe(5);
  });

  test('deltaAngle', () => {
    expect(Utils.deltaAngle(80, 90)).toBe(10);
  });

  test('isEqualNum', () => {
    expect(Utils.isEqualNum(10, 10)).toBe(true);
    expect(Utils.isEqualNum(10, 20)).toBe(false);
  });

  test('getRandomFloatInRange01', () => {
    for (let index = 0; index < 10; index++) {
      const value = Utils.getRandomFloatInRange01();
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThanOrEqual(1);
    }

    for (let index = 0; index < 10; index++) {
      const value = Utils.getRandomFloatInRange01(0, 0.5);
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThanOrEqual(0.5);
    }
  });

  test('getRandomIntInRange', () => {
    for (let index = 0; index < 10; index++) {
      const value = Utils.getRandomIntInRange(0, 100);
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThanOrEqual(100);
    }
  });

  test('isNumber', () => {
    expect(Utils.isNumber(3)).toBe(true);
    expect(Utils.isNumber('k')).toBe(false);
  });

  test('isNumeric', () => {
    expect(Utils.isNumeric('12')).toBe(true);
    expect(Utils.isNumeric('12d')).toBe(false);
  });
});
