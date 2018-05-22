"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Three = require("three");
class MeshBasic {
    constructor() {
        this._instance = new Three.MeshBasicMaterial({ color: 0x00ff00 });
    }
    get instance() {
        return this._instance;
    }
}
exports.MeshBasic = MeshBasic;
//# sourceMappingURL=mesh-basic.js.map