"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Three = require("three");
class Vector3 {
    constructor(x, y, z) {
        this._instance = new Three.Vector3(x, y, z);
    }
    get instance() {
        return this._instance;
    }
    get x() {
        return this._instance.x;
    }
    get y() {
        return this._instance.y;
    }
    get z() {
        return this._instance.z;
    }
    set x(x) {
        this._instance.setX(x);
    }
    set y(y) {
        this._instance.setY(y);
    }
    set z(z) {
        this._instance.setZ(z);
    }
}
exports.Vector3 = Vector3;
//# sourceMappingURL=vector3.js.map