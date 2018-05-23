"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid");
class Object3D {
    constructor(mesh, name) {
        this._id = uuid();
        this._mesh = mesh;
        this._name = name || `unknown-object-3d-${this._id}`;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get mesh() {
        return this._mesh;
    }
    get position() {
        return this._mesh.instance.position;
    }
    get rotation() {
        return this._mesh.instance.rotation;
    }
}
exports.Object3D = Object3D;
//# sourceMappingURL=index.js.map