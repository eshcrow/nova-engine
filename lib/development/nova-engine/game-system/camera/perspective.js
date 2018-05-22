"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Three = require("three");
class Perspective {
    constructor(fov = 75, aspect = (window.innerWidth / window.innerHeight), near = 0.1, far = 1000) {
        this._instance = new Three.PerspectiveCamera(fov, aspect, near, far);
    }
    get instance() {
        return this._instance;
    }
    setDefaultPosition(position) {
        this._instance.position.setX(position.x);
        this._instance.position.setY(position.y);
        this._instance.position.setZ(position.z);
    }
}
exports.Perspective = Perspective;
//# sourceMappingURL=perspective.js.map