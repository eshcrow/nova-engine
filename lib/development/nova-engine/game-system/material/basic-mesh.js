"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Three = require("three");
class BasicMesh {
    constructor() {
        this._instance = new Three.MeshBasicMaterial({
            color: 0x00ff00,
            wireframe: true
        });
    }
    get instance() {
        return this._instance;
    }
}
exports.BasicMesh = BasicMesh;
//# sourceMappingURL=basic-mesh.js.map