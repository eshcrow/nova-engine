import { GameConstuctor, Game } from '../game';
import { BootOptions } from '../boot';
export interface PlayStateOptions {
    autoplay?: boolean;
    boot?: BootOptions;
}
export declare class PlayStateManager<T extends Game> {
    private _boot;
    constructor(GameCtr: GameConstuctor<T>, options?: PlayStateOptions);
    play(): void;
    stop(): void;
    destroy(): void;
}
