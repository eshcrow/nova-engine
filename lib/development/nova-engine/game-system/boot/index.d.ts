import { GameHelpersOptions, GameConstuctor, Game } from '../game';
import { LoopMetrics } from '../loop';
export interface BootOptions {
    debug?: boolean;
    metrics?: LoopMetrics;
    helpers?: GameHelpersOptions;
    verbose?: boolean;
}
export declare class Boot<T extends Game> {
    private _loop;
    private _booted;
    constructor(GameCtr: GameConstuctor<T>, options?: BootOptions);
    readonly booted: boolean;
    loop(): void;
    stop(): void;
    destroy(): void;
}
