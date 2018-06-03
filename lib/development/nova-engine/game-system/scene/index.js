"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid");
const Three = require("three");
class Scene {
    constructor(name) {
        this._id = uuid();
        this._name = name || `unknown-scene-${this._id}`;
        this._instance = new Three.Scene();
    }
    get instance() {
        return this._instance;
    }
    setBackground(color) {
        this._instance.background = color.instance;
    }
    add(object3d) {
        this._instance.add(object3d.instance.instance);
    }
}
exports.Scene = Scene;
//# sourceMappingURL=index.js.map