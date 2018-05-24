"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_system_1 = require("../../core-system");
const TICKS_PER_SECOND = 25;
const SKIP_TICKS = 1000 / TICKS_PER_SECOND;
const MAX_FRAMESKIP = 5;
class Loop {
    constructor(GameCtr) {
        this._running = false;
        this._nextTickCount = 0.0;
        this._renderer = new core_system_1.Renderer();
        this._game = new GameCtr();
        this.setUpRenderer();
    }
    setUpRenderer() {
        this._renderer.setDomTarget(this._game.domTarget);
        this._renderer.setPixelRatio(this._game.devicePixelRatio);
        this._renderer.setSize(this._game.width, this._game.height);
        this._renderer.setClearColor(0xffffff);
    }
    awake() {
        core_system_1.Time.start();
        this._game.awake();
    }
    start() {
        this._game.start();
        this._running = !this._game.paused;
        this._nextTickCount = core_system_1.Time.getElapsedTime();
        requestAnimationFrame(() => { this.run(); });
    }
    update() {
        this._game.update();
    }
    render(interpolation) {
        this._renderer.render(this._game.scene.instance, this._game.camera.instance, interpolation);
    }
    run() {
        if (this._running) {
            let loops = 0;
            let interpolation = 0;
            while (core_system_1.Time.getElapsedTime() > this._nextTickCount && loops < MAX_FRAMESKIP) {
                this.update();
                this._nextTickCount = this._nextTickCount + SKIP_TICKS;
                loops = loops + 1;
            }
            interpolation = (core_system_1.Time.getDeltaTime() + SKIP_TICKS - this._nextTickCount) / SKIP_TICKS;
            this.render(interpolation);
            requestAnimationFrame(() => { this.run(); });
        }
    }
}
exports.Loop = Loop;
//# sourceMappingURL=index.js.map