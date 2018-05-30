import { GameConstuctor, Game } from '../game';
export interface BootOptions {
    debug?: boolean;
    metrics?: boolean;
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
