"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const boot_1 = require("../boot");
;
class PlayManager {
    static boot(GameCtr, options) {
        this._boot = new boot_1.Boot(GameCtr);
        this._autoplay = options !== undefined ? options.autoplay : this._autoplay;
    }
    static play() {
        this._boot && this._boot.loop();
    }
}
PlayManager._autoplay = false;
PlayManager._boot = null;
PlayManager._booted = false;
exports.PlayManager = PlayManager;
//# sourceMappingURL=index.js.map