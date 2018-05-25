"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const boot_1 = require("../boot");
;
class PlayStateManager {
    constructor(GameCtr, options) {
        this._boot = new boot_1.Boot(GameCtr);
        (options && options.autoplay) && this.play();
    }
    play() {
        this._boot.booted && this._boot.loop();
    }
    stop() {
        this._boot.booted && this._boot.stop();
    }
    destroy() {
        this._boot.booted && this._boot.destroy();
    }
}
exports.PlayStateManager = PlayStateManager;
//# sourceMappingURL=index.js.map