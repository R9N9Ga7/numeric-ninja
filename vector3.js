const { Utils } = require('./utils');

class Vector3 {
  x;
  y;
  z;

  constructor(x = 0, y = 0, z = 0) {
    this.set(x, y, z);
  }

  set(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  setVector3(vector) {
    this.x = vector.x;
    this.y = vector.y;
    this.z = vector.z;
  }

  add(value) {
    if (Utils.isNumber(value)) {
      return new Vector3(this.x + value, this.y + value, this.z + value);
    }
    return new Vector3(this.x + value.x, this.y + value.y, this.z + value.z);
  }

  sub(value) {
    if (Utils.isNumber(value)) {
      return new Vector3(this.x - value, this.y - value, this.z - value);
    }
    return new Vector3(this.x - value.x, this.y - value.y, this.z - value.z);
  }

  mul(value) {
    if (Utils.isNumber(value)) {
      return new Vector3(this.x * value, this.y * value, this.z * value);
    }
    return new Vector3(this.x * value.x, this.y * value.y, this.z * value.z);
  }

  div(value) {
    if (Utils.isNumber(value)) {
      return new Vector3(this.x / value, this.y / value, this.z / value);
    }
    return new Vector3(this.x / value.x, this.y / value.y, this.z / value.z);
  }

  isEqual(vector) {
    return Utils.isEqualNum(this.x, vector.x)
      && Utils.isEqualNum(this.y, vector.y)
      && Utils.isEqualNum(this.z, vector.z);
  }

  getMagnitude() {
    return Math.sqrt(this.getSqrMagnitude());
  }

  getSqrMagnitude() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }

  getNormalized() {
    const normalized = new Vector3(this.x, this.y, this.z);
    normalized.normalize()
    return normalized;
  }

  normalize() {
    const magnitude = this.getMagnitude();
    if (magnitude > Number.EPSILON) {
      this.setVector3(this.div(magnitude))
    } else {
      this.set(0, 0, 0);
    }
  }

  clone() {
    return new Vector3(this.x, this.y, this.z);
  }

  toString() {
    return `x: ${this.x} y: ${this.y} z: ${this.z}`;
  }

  static lerp(v1, v2, t) {
    const value = Utils.clamp01(t);
    return new Vector3(
      v1.x + (v2.x - v1.x) * value,
      v1.y + (v2.y - v1.y) * value,
      v1.z + (v2.z - v1.z) * value,
    );
  }

  static lerpUnclamped(v1, v2, t) {
    return new Vector3(
      v1.x + (v2.x - v1.x) * t,
      v1.y + (v2.y - v1.y) * t,
      v1.z + (v2.z - v1.z) * t,
    );
  }

  static dotProduct(v1, v2) {
    return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
  }

  static reflect(inDirection, inNormal) {
    const factor = -2 * this.dotProduct(inNormal, inDirection);
    return new Vector3(
      factor * inNormal.x + inDirection.x,
      factor * inNormal.y + inDirection.y,
      factor * inNormal.z + inDirection.z,
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
    const diffZ = v1.z - v2.z;
    return Math.sqrt(diffX * diffX + diffY * diffY + diffZ * diffZ);
  }

  static zeroVector() {
    return new Vector3(0, 0, 0);
  }

  static oneVector() {
    return new Vector3(1, 1, 1);
  }

  static upVector() {
    return new Vector3(0, 1, 0);
  }

  static downVector() {
    return new Vector3(0, -1, 0);
  }

  static leftVector() {
    return new Vector3(-1, 0, 0);
  }

  static rightVector() {
    return new Vector3(1, 0, 0);
  }

  static forwardVector() {
    return new Vector3(0, 0, 1);
  }

  static backVector() {
    return new Vector3(0, 0, -1);
  }
}

module.exports = {
  Vector3,
};
