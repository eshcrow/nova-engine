import { ILifecycle } from '../lifecycle';
import { GameConstuctor, Game } from '../game';
export declare class Loop<T extends Game> implements ILifecycle {
    private _running;
    private _game;
    private _renderer;
    private _nextTickCount;
    private _rafId;
    constructor(GameCtr: GameConstuctor<T>);
    private setUpRenderer();
    awake(): void;
    start(): void;
    update(): void;
    private render(interpolation);
    private run();
    stop(): void;
    destroy(): void;
}
