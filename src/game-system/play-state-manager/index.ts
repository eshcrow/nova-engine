
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

    public constructor(GameCtr: GameConstuctor<T>, options?: PlayStateOptions) {
        this._boot = new Boot(GameCtr);

        (options && options.autoplay) && this.play();
    }

    public play(): void {
        this._boot.booted && this._boot.loop();
    }

    public stop(): void {
        this._boot.booted && this._boot.stop();
    }

    public destroy(): void {
        this._boot.booted && this._boot.destroy();
    }
}
