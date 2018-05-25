"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loop_1 = require("../loop");
class Boot {
    constructor(GameCtr) {
        this._booted = false;
        this._loop = new loop_1.Loop(GameCtr);
        this._loop.awake();
        this._booted = true;
    }
    get booted() {
        return this._booted;
    }
    loop() {
        this._loop.start();
    }
    stop() {
        this._loop.stop();
    }
    destroy() {
        this._loop.destroy();
    }
}
exports.Boot = Boot;
//# sourceMappingURL=index.js.map