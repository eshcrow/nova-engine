"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid");
class Object3D {
    constructor(mesh, name = `unknowObject3D-${uuid()}`) {
        this._mesh = mesh;
        this._name = name;
    }
    get name() {
        return this._name;
    }
    get mesh() {
        return this._mesh;
    }
}
exports.Object3D = Object3D;
//# sourceMappingURL=index.js.map