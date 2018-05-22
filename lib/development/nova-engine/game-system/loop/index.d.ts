import { ILifecycle } from '../lifecycle';
import { IGameConstuctor, Game } from '../game';
export declare enum LoopSettings {
    TICKS_PER_SECOND = 25,
    SKIP_TICKS = 40,
    MAX_FRAMESKIP = 5,
}
export declare class Loop<T extends Game> implements ILifecycle {
    private _running;
    private _nextTickCount;
    private _game;
    private _renderer;
    constructor(GameCtr: IGameConstuctor<T>);
    awake(): void;
    start(): void;
    update(): void;
    render(interpolation: number): void;
    run(): void;
    pause(paused: boolean): void;
    stop(): void;
}
