import { IGameConstuctor, Game } from '../game';
export interface PlayOptions {
    autoplay: boolean;
}
export declare class PlayManager<T extends Game> {
    private static _autoplay;
    private static _boot;
    private static _booted;
    static boot<T extends Game>(GameCtr: IGameConstuctor<T>, options?: PlayOptions): void;
    static play(): void;
}
