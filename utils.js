class Utils {
  static degToRad = Math.PI * 2 / 360;
  static radToDeg = 1 / (Math.PI * 2 / 360);
  static halfFullAngleInDeg = 180;
  static fullAngleInDeg = 360;

  static clamp(value, minValue, maxValue) {
    if (value < minValue) {
      return minValue;
    } else if (value > maxValue) {
      return maxValue;
    }
    return value;
  };

  static clamp01(value) {
    return this.clamp(value, 0, 1);
  }

  static lerp(a, b, t) {
    return a + (b - a) * this.clamp01(t);
  }

  static lerpUnclamped(a, b, t) {
    return a + (b - a) * t;
  }

  static inverseLerp(a, b, value) {
    return a == b ? 0 : this.clamp01((value - a) / (b - a));
  }

  static lerpAngle(a, b, t) {
    const delta = this.repeat(b - a, this.fullAngleInDeg);
    return delta > this.halfFullAngleInDeg
      ? delta - this.fullAngleInDeg : a + delta * this.clamp01(t)
  }

  static repeat(value, length) {
    return this.clamp(value - Math.floor(value / length) * length, 0, length);
  }

  static pingPong(value, length) {
    const t = this.repeat(value, length * 2);
    return length - Math.abs(t - length);
  }

  static deltaAngle(current, target) {
    const delta = this.repeat(target - current, this.fullAngleInDeg);
    return delta > this.halfFullAngleInDeg ? delta - this.fullAngleInDeg : delta;
  }

  static isEqualNum(x, y) {
    return Math.abs(x - y) < Number.EPSILON;
  }

  static getRandomFloatInRange01(minInclusive = 0, maxExclusive = 1) {
    return Math.random() * (maxExclusive - minInclusive) + minInclusive;
  }

  static getRandomIntInRange(minInclusive, maxInclusive) {
    const min = Math.ceil(minInclusive);
    const max = Math.floor(maxInclusive);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static isNumber(value) {
    return typeof value === 'number';
  }

  static isNumeric(value) {
    return !Number.isNaN(+value);
  }
}

module.exports = { Utils };
