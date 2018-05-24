"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Three = require("three");
class Color {
    constructor(hex) {
        this._instance = new Three.Color(hex);
    }
    get instance() {
        return this._instance;
    }
    getHex() {
        return this._instance.getHex();
    }
    setHex(hex) {
        this._instance.setHex(hex);
    }
}
exports.Color = Color;
//# sourceMappingURL=index.js.map