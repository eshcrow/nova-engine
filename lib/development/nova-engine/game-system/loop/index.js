"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_system_1 = require("../../core-system");
const TICKS_PER_SECOND = 25;
const SKIP_TICKS = 1000 / TICKS_PER_SECOND;
const MAX_FRAMESKIP = 5;
var WindowResizeEvents;
(function (WindowResizeEvents) {
    WindowResizeEvents[WindowResizeEvents["Add"] = 0] = "Add";
    WindowResizeEvents[WindowResizeEvents["Remove"] = 1] = "Remove";
})(WindowResizeEvents = exports.WindowResizeEvents || (exports.WindowResizeEvents = {}));
class Loop {
    constructor(GameCtr) {
        this._running = false;
        this._nextTickCount = 0.0;
        this._rafId = 0;
        this._renderer = new core_system_1.Renderer();
        this._game = new GameCtr();
        this.setUpRenderer();
        this.setWindowResizEventState(WindowResizeEvents.Add);
    }
    setUpRenderer() {
        this._renderer && this._renderer.setDomTarget(this._game.domTarget);
        this._renderer && this._renderer.setPixelRatio(this._game.devicePixelRatio);
        this._renderer && this._renderer.setSize(this._game.width, this._game.height);
        this._renderer && this._renderer.setClearColor(0xffffff);
    }
    updateRendererAndCameraOnWindowResize() {
        this._game.width = window.innerWidth;
        this._game.height = window.innerHeight;
        this._game.camera.setAspect(this._game.width / this._game.height);
        this._game.camera.updateProjectionMatrix();
        this._renderer && this._renderer.setSize(this._game.width, this._game.height);
    }
    setWindowResizEventState(state) {
        state === 0 && window.addEventListener('resize', () => { this.updateRendererAndCameraOnWindowResize(); });
        state === 1 && window.removeEventListener('resize', () => { this.updateRendererAndCameraOnWindowResize(); });
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
        this._running = !this._game.paused;
    }
    render(interpolation) {
        this._renderer && this._renderer.render(this._game.scene.instance, this._game.camera.instance, interpolation);
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
            this._rafId = requestAnimationFrame(() => { this.run(); });
        }
    }
    stop() {
        this._running = false;
        core_system_1.Time.stop();
    }
    destroy() {
        if (!this._running) {
            this._renderer && this._renderer.destroy(this._game.domTarget);
            this._renderer = null;
            cancelAnimationFrame(this._rafId);
            this.setWindowResizEventState(WindowResizeEvents.Remove);
        }
    }
}
exports.Loop = Loop;
//# sourceMappingURL=index.js.map