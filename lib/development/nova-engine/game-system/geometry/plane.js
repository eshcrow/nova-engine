"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Three = require("three");
class Plane {
    constructor(width, height) {
        this._instance = new Three.PlaneGeometry(width, height);
    }
    get instance() {
        return this._instance;
    }
}
exports.Plane = Plane;
//# sourceMappingURL=plane.js.map