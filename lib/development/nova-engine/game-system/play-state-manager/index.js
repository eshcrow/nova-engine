"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const boot_1 = require("../boot");
;
class PlayStateManager {
    constructor(GameCtr, options) {
        this._autoplay = false;
        this._booted = false;
        this._boot = new boot_1.Boot(GameCtr);
        this._autoplay = options && options.autoplay ? options.autoplay : this._autoplay;
        this._booted = true;
        this._autoplay && this.play();
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