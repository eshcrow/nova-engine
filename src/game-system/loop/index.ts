
/*
*   NovaEngine - CoreSystem - Loop
*   author: Aurélien Dupays Dexemple
*/

import { Time, Renderer }                                   from '../../core-system';

import { ILifecycle }                                       from '../lifecycle';
import { IGameConstuctor, Game }                            from '../game';

export enum LoopSettings {
    TICKS_PER_SECOND = 25,
    SKIP_TICKS = 1000 / 25,
    MAX_FRAMESKIP = 5
}

export class Loop<T extends Game> implements ILifecycle {

    private _running: boolean = false;
    private _nextTickCount: number = 0;

    private _game: T;
    private _renderer: Renderer;

    constructor(GameCtr: IGameConstuctor<T>) {
        this._renderer = new Renderer();
        this._game = new GameCtr();
    }

    public awake(): void {
        this._renderer.setDomTarget(this._game.domTarget);
        this._renderer.setPixelRatio(this._game.devicePixelRatio);
        this._renderer.setSize(this._game.width, this._game.height);

        this._game.awake();
    }

    public start(): void {
        Time.start();

        this._running = true;
        this.run();
    }

    public update(): void {

    }

    public render(interpolation: number): void {
        this._renderer.render(this._game.scene.instance, this._game.camera.instance);
    }

    public run(): void {
        this._nextTickCount = Time.getElapsedTime();

        while (this._running) {
            let loops: number = 0;

            while (Time.getDeltaTime() > this._nextTickCount && loops < LoopSettings.MAX_FRAMESKIP) {
                this.update();

                this._nextTickCount = this._nextTickCount + LoopSettings.SKIP_TICKS;
                loops =  loops + 1;
            }

            const interpolation: number = (Time.getElapsedTime() + LoopSettings.SKIP_TICKS - this._nextTickCount ) / LoopSettings.SKIP_TICKS;

            this.render(interpolation);
        }
    }

    public pause(paused: boolean): void {
        this._running = paused;
        this._running === false && this.run();
    }

    public stop(): void {
        this._running = false;

        Time.stop();
    }
}
