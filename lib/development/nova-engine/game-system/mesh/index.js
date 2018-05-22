"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Three = require("three");
class Mesh {
    constructor(geometry, material) {
        this._instance = new Three.Mesh(geometry.instance, material.instance);
    }
    get instance() {
        return this._instance;
    }
}
exports.Mesh = Mesh;
//# sourceMappingURL=index.js.map