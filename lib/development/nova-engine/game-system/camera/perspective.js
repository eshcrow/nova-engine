"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid");
const Three = require("three");
class Perspective {
    constructor(aspect, name) {
        this._id = uuid();
        this._name = name || `unknown-camera-${this._id}`;
        this._instance = new Three.PerspectiveCamera(75, aspect, 0.1, 1000);
    }
    get instance() {
        return this._instance;
    }
    setDefaultPosition(position) {
        this._instance.position.setX(position.x);
        this._instance.position.setY(position.y);
        this._instance.position.setZ(position.z);
    }
    setFov(fov) {
        this._instance.fov = fov;
    }
    setAspect(aspect) {
        this._instance.aspect = aspect;
    }
    setNear(near) {
        this._instance.near = near;
    }
    setFar(far) {
        this._instance.far = far;
    }
    updateProjectionMatrix() {
        this._instance.updateProjectionMatrix();
    }
}
exports.Perspective = Perspective;
//# sourceMappingURL=perspective.js.map