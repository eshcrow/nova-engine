"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const boot_1 = require("../boot");
;
class PlayStateManager {
    constructor(GameCtr, options) {
        this._booted = false;
        this._boot = new boot_1.Boot(GameCtr);
        this._booted = true;
        (options && options.autoplay) && this.play();
    }
    play() {
        this._boot && this._booted && this._boot.loop();
    }
    stop() {
        this._boot && this._boot.stop();
    }
    destroy() {
        this._boot && this._boot.destroy();
    }
}
exports.PlayStateManager = PlayStateManager;
//# sourceMappingURL=index.js.map