import { IGameConstuctor, Game } from '../game';
export interface PlayOptions {
    autostart?: boolean;
}
export declare class PlayManager<T extends Game> {
    private _autostart;
    static boot<T>(GameCtr: IGameConstuctor<T>, options?: PlayOptions): void;
}
