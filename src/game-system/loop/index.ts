
/*
*   NovaEngine - GameSystem - Loop
*   author: Aurélien Dupays Dexemple
*/

import { Time, Renderer }                                   from '../../core-system';

import { ILifecycle }                                       from '../lifecycle';
import { IGameConstuctor, Game }                            from '../game';

const TICKS_PER_SECOND          = 25;
const SKIP_TICKS                = 1000 / TICKS_PER_SECOND;
const MAX_FRAMESKIP             = 5;

export class Loop<T extends Game> implements ILifecycle {
    private _running: boolean = false;

    private _game: T;
    private _renderer: Renderer;

    private _nextTickCount: number = 0.0;

    constructor(GameCtr: IGameConstuctor<T>) {
        this._renderer = new Renderer();
        this._game = new GameCtr();

        this.setUpRenderer();
    }

    private setUpRenderer(): void {
        this._renderer.setDomTarget(this._game.domTarget);

        this._renderer.setPixelRatio(this._game.devicePixelRatio);
        this._renderer.setSize(this._game.width, this._game.height);

        this._renderer.setClearColor(0xffffff);
    }

    public awake(): void {
        Time.start();

        this._game.awake();
    }

    public start(): void {
        this._game.start();
        this._running = !this._game.paused;

        this._nextTickCount = Time.getElapsedTime();

        requestAnimationFrame(() => { this.run() });
    }

    public update(): void {
        this._game.update();
    }

    private render(interpolation: number): void {
        this._renderer.render(this._game.scene.instance, this._game.camera.instance, interpolation);
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

            requestAnimationFrame(() => { this.run() });
        }
    }
}
