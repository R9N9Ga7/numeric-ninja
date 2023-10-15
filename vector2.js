const { Utils } = require('./utils');

class Vector2 {
  x;
  y;

  constructor(x = 0, y = 0) {
    this.set(x, y)
  }

  set(x, y) {
    this.x = x;
    this.y = y;
  }

  setVector2(vector) {
    this.x = vector.x;
    this.y = vector.y;
  }

  add(value) {
    if (Utils.isNumber(value)) {
      return new Vector2(this.x + value, this.y + value);
    }
    return new Vector2(this.x + value.x, this.y + value.y);
  }

  sub(value) {
    if (Utils.isNumber(value)) {
      return new Vector2(this.x - value, this.y - value);
    }
    return new Vector2(this.x - value.x, this.y - value.y);
  }

  mul(value) {
    if (Utils.isNumber(value)) {
      return new Vector2(this.x * value, this.y * value);
    }
    return new Vector2(this.x * value.x, this.y * value.y);
  }

  div(value) {
    if (Utils.isNumber(value)) {
      return new Vector2(this.x / value, this.y / value);
    }
    return new Vector2(this.x / value.x, this.y / value.y);
  }

  isEqual(vector) {
    return Utils.isEqualNum(this.x, vector.x)
      && Utils.isEqualNum(this.y, vector.y);
  }

  getMagnitude() {
    return Math.sqrt(this.getSqrMagnitude());
  }

  getSqrMagnitude() {
    return this.x * this.x + this.y * this.y;
  }

  getNormalized() {
    const normalized = new Vector2(this.x, this.y);
    normalized.normalize()
    return normalized;
  }

  normalize() {
    const magnitude = this.getMagnitude();
    if (magnitude > Number.EPSILON) {
      this.setVector2(this.div(magnitude))
    } else {
      this.set(0, 0);
    }
  }

  clone() {
    return new Vector2(this.x, this.y);
  }

  toString() {
    return `x: ${this.x} y: ${this.y}`;
  }

  static lerp(v1, v2, t) {
    const value = Utils.clamp01(t);
    return new Vector2(
      v1.x + (v2.x - v1.x) * value,
      v1.y + (v2.y - v1.y) * value,
    );
  }

  static lerpUnclamped(v1, v2, t) {
    return new Vector2(
      v1.x + (v2.x - v1.x) * t,
      v1.y + (v2.y - v1.y) * t,
    );
  }

  static dotProduct(v1, v2) {
    return v1.x * v2.x + v1.y * v2.y;
  }

  static reflect(inDirection, inNormal) {
    const factor = -2 * this.dotProduct(inNormal, inDirection);
    return new Vector2(
      factor * inNormal.x + inDirection.x,
      factor * inNormal.y + inDirection.y,
    );
  }

  static angle(from, to) {
    const denominator = Math.sqrt(from.getSqrMagnitude() * to.getSqrMagnitude());
    if (denominator < Number.EPSILON) {
      return 0;
    }

    const dot = Utils.clamp(this.dotProduct(from, to) / denominator, -1, 1);
    return Math.acos(dot) * Utils.radToDeg;
  }

  static distance(v1, v2) {
    const diffX = v1.x - v2.x;
    const diffY = v1.y - v2.y;
    return Math.sqrt(diffX * diffX + diffY * diffY);
  }

  static zeroVector() {
    return new Vector2(0, 0);
  }

  static oneVector() {
    return new Vector2(1, 1);
  }

  static upVector() {
    return new Vector2(0, 1);
  }

  static downVector() {
    return new Vector2(0, -1);
  }

  static leftVector() {
    return new Vector2(-1, 0);
  }

  static rightVector() {
    return new Vector2(1, 0);
  }
}

module.exports = { Vector2 };
