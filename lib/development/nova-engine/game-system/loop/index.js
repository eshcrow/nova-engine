"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_system_1 = require("../../core-system");
var LoopSettings;
(function (LoopSettings) {
    LoopSettings[LoopSettings["TICKS_PER_SECOND"] = 25] = "TICKS_PER_SECOND";
    LoopSettings[LoopSettings["SKIP_TICKS"] = 40] = "SKIP_TICKS";
    LoopSettings[LoopSettings["MAX_FRAMESKIP"] = 5] = "MAX_FRAMESKIP";
})(LoopSettings = exports.LoopSettings || (exports.LoopSettings = {}));
class Loop {
    constructor(GameCtr) {
        this._running = false;
        this._nextTickCount = 0;
        this._renderer = new core_system_1.Renderer();
        this._game = new GameCtr();
    }
    awake() {
        this._renderer.setDomTarget(this._game.domTarget);
        this._renderer.setPixelRatio(this._game.devicePixelRatio);
        this._renderer.setSize(this._game.width, this._game.height);
        this._game.awake();
    }
    start() {
        core_system_1.Time.start();
        this._running = true;
        this.run();
    }
    update() {
    }
    render(interpolation) {
        this._renderer.render(this._game.scene.instance, this._game.camera.instance);
    }
    run() {
        this._nextTickCount = core_system_1.Time.getElapsedTime();
        while (this._running) {
            let loops = 0;
            while (core_system_1.Time.getDeltaTime() > this._nextTickCount && loops < LoopSettings.MAX_FRAMESKIP) {
                this.update();
                this._nextTickCount = this._nextTickCount + LoopSettings.SKIP_TICKS;
                loops = loops + 1;
            }
            const interpolation = (core_system_1.Time.getElapsedTime() + LoopSettings.SKIP_TICKS - this._nextTickCount) / LoopSettings.SKIP_TICKS;
            this.render(interpolation);
        }
    }
    pause(paused) {
        this._running = paused;
        this._running === false && this.run();
    }
    stop() {
        this._running = false;
        core_system_1.Time.stop();
    }
}
exports.Loop = Loop;
//# sourceMappingURL=index.js.map