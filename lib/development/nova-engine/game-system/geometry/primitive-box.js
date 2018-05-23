"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Three = require("three");
class PrimitiveBox {
    constructor(width = 1, height = 1, depth = 1) {
        this._instance = new Three.BoxGeometry(width, height, depth);
    }
    get instance() {
        return this._instance;
    }
}
exports.PrimitiveBox = PrimitiveBox;
//# sourceMappingURL=primitive-box.js.map