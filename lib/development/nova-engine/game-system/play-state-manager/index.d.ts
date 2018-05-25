import { GameConstuctor, Game } from '../game';
export interface PlayStateOptions {
    autoplay?: boolean;
}
export declare class PlayStateManager<T extends Game> {
    private _autoplay;
    private _boot;
    private _booted;
    constructor(GameCtr: GameConstuctor<T>, options?: PlayStateOptions);
    play(): void;
    stop(): void;
    destroy(): void;
}
