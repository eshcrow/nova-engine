"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Three = require("three");
class Scene {
    constructor() {
        this._instance = new Three.Scene();
    }
    get instance() {
        return this._instance;
    }
    setName(name) {
        this._instance.name = name;
    }
    add(object3d) {
        this._instance.add(object3d.mesh.instance);
    }
}
exports.Scene = Scene;
//# sourceMappingURL=index.js.map