"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid");
class Object3D {
    constructor(instance, name) {
        this._id = uuid();
        this._instance = instance;
        this._name = name || `unknown-object-3d-${this._id}`;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get instance() {
        return this._instance;
    }
    get position() {
        return this._instance.instance.position;
    }
    get rotation() {
        return this._instance.instance.rotation;
    }
}
exports.Object3D = Object3D;
//# sourceMappingURL=index.js.map