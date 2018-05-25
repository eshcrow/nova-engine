
/*
*   NovaEngine - GameSystem - PlayManager
*   author: Aurélien Dupays Dexemple
*/

import { GameConstuctor, Game }                             from '../game';
import { Boot, BootOptions }                                from '../boot';

export interface PlayStateOptions {
    autoplay?: boolean;
    boot?: BootOptions
};

export class PlayStateManager<T extends Game> {

    private _boot: Boot<T>;
    private _booted: boolean = false;

    public constructor(GameCtr: GameConstuctor<T>, options?: PlayStateOptions) {
        this._boot = new Boot(GameCtr);
        this._booted = true;

        (options && options.autoplay) && this.play();
    }

    public play(): void {
        this._boot && this._booted && this._boot.loop();
    }

    public stop(): void {
        this._boot && this._boot.stop();
    }

    public destroy(): void {
        this._boot && this._boot.destroy();
    }
}
