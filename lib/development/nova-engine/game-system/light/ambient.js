"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Three = require("three");
class Ambient {
    constructor(color) {
        this._instance = new Three.AmbientLight(color ? color.getHex() : 0x404040);
    }
    get instance() {
        return this._instance;
    }
}
exports.Ambient = Ambient;
//# sourceMappingURL=ambient.js.map