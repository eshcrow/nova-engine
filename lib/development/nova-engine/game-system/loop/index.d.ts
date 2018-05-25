import { ILifecycle } from '../lifecycle';
import { GameConstuctor, Game } from '../game';
export declare enum WindowResizeEvents {
    Add = 0,
    Remove = 1,
}
export declare class Loop<T extends Game> implements ILifecycle {
    private _running;
    private _game;
    private _renderer;
    private _nextTickCount;
    private _rafId;
    constructor(GameCtr: GameConstuctor<T>);
    private setUpRenderer();
    private updateRendererAndCameraOnWindowResize();
    private setWindowResizEventState(state);
    awake(): void;
    start(): void;
    update(): void;
    private render(interpolation);
    private run();
    stop(): void;
    destroy(): void;
}
