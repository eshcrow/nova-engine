"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loop_1 = require("../loop");
function Play(GameCtr) {
    const loop = new loop_1.Loop(GameCtr);
    loop.awake();
    loop.render(0);
}
exports.Play = Play;
//# sourceMappingURL=index.js.map