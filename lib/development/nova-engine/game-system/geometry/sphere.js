"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Three = require("three");
class Sphere {
    constructor(radius, horizontalSegementsNumber, verticalSegementsNumber) {
        this._instance = new Three.SphereGeometry(radius, horizontalSegementsNumber, verticalSegementsNumber);
    }
    get instance() {
        return this._instance;
    }
}
exports.Sphere = Sphere;
//# sourceMappingURL=sphere.js.map