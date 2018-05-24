import { ILifecycle } from '../lifecycle';
import { IGameConstuctor, Game } from '../game';
export declare class Loop<T extends Game> implements ILifecycle {
    private _running;
    private _game;
    private _renderer;
    private _nextTickCount;
    constructor(GameCtr: IGameConstuctor<T>);
    private setUpRenderer();
    awake(): void;
    start(): void;
    update(): void;
    private render(interpolation);
    private run();
}
