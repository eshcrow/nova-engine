
/*
*   NovaEngine - GameSystem - Loop
*   author: Aurélien Dupays Dexemple
*/

import { Time, Renderer }                                   from '../../core-system';

import { ILifecycle }                                       from '../lifecycle';
import { GameConstuctor, Game }                             from '../game';

const TICKS_PER_SECOND          = 25;
const SKIP_TICKS                = 1000 / TICKS_PER_SECOND;
const MAX_FRAMESKIP             = 5;

export enum WindowResizeEvents {
    Add = 0,
    Remove = 1
}

export interface LoopMetrics {
    memory?: boolean;
    framerate?: boolean;
}

export class Loop<T extends Game> implements ILifecycle {
    private _running: boolean = false;

    private _game: T;
    private _renderer: Renderer | null;

    private _nextTickCount: number = 0.0;
    private _rafId: number = 0;

    constructor(GameCtr: GameConstuctor<T>) {
        this._renderer = new Renderer();
        this._game = new GameCtr();

        this.setUpRenderer();
        this.setWindowResizEventState(WindowResizeEvents.Add);
    }

    private setUpRenderer(): void {
        this._renderer && this._renderer.setDomTarget(this._game.domTarget);

        this._renderer && this._renderer.setPixelRatio(this._game.devicePixelRatio);
        this._renderer && this._renderer.setSize(this._game.width, this._game.height);

        this._renderer && this._renderer.setClearColor(0xffffff);
    }

    private updateRendererAndCameraOnWindowResize(): void {
        this._game.width = window.innerWidth;
        this._game.height = window.innerHeight;

        this._game.camera.setAspect(this._game.width / this._game.height);
        this._game.camera.updateProjectionMatrix();

        this._renderer && this._renderer.setSize(this._game.width, this._game.height);
    }

    private setWindowResizEventState(state: WindowResizeEvents): void {
        state === 0 && window.addEventListener('resize', () => { this.updateRendererAndCameraOnWindowResize() });
        state === 1 && window.removeEventListener('resize', () => { this.updateRendererAndCameraOnWindowResize() });
    }

    public awake(): void {
        Time.start();

        this._game.awake();
    }

    public start(): void {
        this._game.start();
        this._running = !this._game.paused;

        this._nextTickCount = Time.getElapsedTime();

        this._rafId = requestAnimationFrame(() => { this.run() });
    }

    public update(): void {
        this._game.update();
        this._running = !this._game.paused;
    }

    private render(interpolation: number): void {
        this._renderer && this._renderer.render(this._game.scene.instance, this._game.camera.instance, interpolation);
    }

    private run(): void {
        if (this._running) {
            let loops: number = 0;
            let interpolation: number = 0;

            while (Time.getElapsedTime() > this._nextTickCount && loops < MAX_FRAMESKIP) {
                this.update();

                this._nextTickCount = this._nextTickCount + SKIP_TICKS;
                loops = loops + 1;
            }

            interpolation = (Time.getDeltaTime() + SKIP_TICKS - this._nextTickCount) / SKIP_TICKS;
            this.render(interpolation);

            this._rafId = requestAnimationFrame(() => { this.run() });
        }
    }

    public stop(): void {
        this._running = false;
        Time.stop();
    }

    public destroy(): void {
        if (!this._running) {
            this._renderer && this._renderer.destroy(this._game.domTarget);
            this._renderer = null;

            cancelAnimationFrame(this._rafId);
            this.setWindowResizEventState(WindowResizeEvents.Remove);
        }
    }
}
