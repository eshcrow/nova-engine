"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Three = require("three");
class Renderer {
    constructor() {
        this._instance = new Three.WebGLRenderer();
    }
    get instance() {
        return this._instance;
    }
    setPixelRatio(devicePixelRatio) {
        this._instance.setPixelRatio(devicePixelRatio);
    }
    setSize(width, height) {
        this._instance.setSize(width, height);
    }
    setDomTarget(domTarget) {
        domTarget.appendChild(this._instance.domElement);
    }
    render(scene, camera) {
        this._instance.render(scene, camera);
    }
}
exports.Renderer = Renderer;
//# sourceMappingURL=index.js.map