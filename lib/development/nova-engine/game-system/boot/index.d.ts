import { GameConstuctor, Game } from '../game';
export interface BootOptions {
    debug: boolean;
}
export declare class Boot<T extends Game> {
    private _loop;
    private _booted;
    constructor(GameCtr: GameConstuctor<T>);
    readonly booted: boolean;
    loop(): void;
    stop(): void;
    destroy(): void;
}
