"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Three = require("three");
class BasicMesh {
    constructor(color, wireframe) {
        this._instance = new Three.MeshBasicMaterial({
            color: color ? color.getHex() : 0x13EFFF,
            wireframe: wireframe || true
        });
    }
    get instance() {
        return this._instance;
    }
}
exports.BasicMesh = BasicMesh;
//# sourceMappingURL=basic-mesh.js.map