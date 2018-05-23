"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Three = require("three");
class Time {
    static start() {
        this._instance.start();
    }
    static stop() {
        this._instance.stop();
    }
    static getDeltaTime() {
        return this._instance.getDelta() * 1000;
    }
    static getElapsedTime() {
        return this._instance.getElapsedTime() * 1000;
    }
    static now() {
        return performance.now();
    }
}
Time._instance = new Three.Clock(false);
exports.Time = Time;
//# sourceMappingURL=index.js.map