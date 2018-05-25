"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_system_1 = require("../../core-system");
const color_1 = require("../color");
const camera_1 = require("../camera");
const scene_1 = require("../scene");
class Game {
    constructor(domTarget = document.body, devicePixelRatio = window.devicePixelRatio, width = window.innerWidth, height = window.innerHeight) {
        this._domTarget = domTarget;
        this._devicePixelRatio = devicePixelRatio;
        this._width = width;
        this._height = height;
        this._camera = new camera_1.Camera.Perspective((width / height), 'Main Camera');
        this._scene = new scene_1.Scene('Main Scene');
        this._camera.setDefaultPosition(new core_system_1.Mathematics.Vector3(0, 0, 5));
        this._scene.setBackground(new color_1.Color(0x2B3233));
        this._paused = false;
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
    get paused() {
        return this._paused;
    }
    set width(width) {
        this._width = width;
    }
    set height(height) {
        this._height = height;
    }
    set paused(paused) {
        this._paused = paused;
    }
    awake() { }
    start() { }
    update() { }
}
exports.Game = Game;
//# sourceMappingURL=index.js.map