"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_system_1 = require("../../core-system");
const camera_1 = require("../camera");
const scene_1 = require("../scene");
class Game {
    constructor(domTarget = document.body, devicePixelRatio = window.devicePixelRatio, width = window.innerWidth, height = window.innerHeight) {
        this._domTarget = domTarget;
        this._devicePixelRatio = devicePixelRatio;
        this._width = width;
        this._height = height;
        this._camera = new camera_1.Camera.Perspective();
        this._scene = new scene_1.Scene();
        this._camera.setDefaultPosition(new core_system_1.Mathematics.Vector3(0, 0, 5));
    }
    get domTarget() {
        return this._domTarget;
    }
    get devicePixelRatio() {
        return this._devicePixelRatio;
    }
    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }
    get camera() {
        return this._camera;
    }
    get scene() {
        return this._scene;
    }
    awake() { }
    start() { }
    update() { }
}
exports.Game = Game;
//# sourceMappingURL=index.js.map