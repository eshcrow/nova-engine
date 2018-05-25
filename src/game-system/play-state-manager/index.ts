
/*
*   NovaEngine - GameSystem - PlayManager
*   author: Aurélien Dupays Dexemple
*/

import { GameConstuctor, Game }                             from '../game';
import { Boot }                                             from '../boot';

export interface PlayStateOptions {
    autoplay?: boolean;
};

export class PlayStateManager<T extends Game> {
    private _autoplay: boolean = false;

    private _boot: Boot<T>;
    private _booted: boolean = false;

    public constructor(GameCtr: GameConstuctor<T>, options?: PlayStateOptions) {
        this._boot = new Boot(GameCtr);

        this._autoplay = options && options.autoplay ? options.autoplay : this._autoplay;

        this._booted = true;

        this._autoplay && this.play();
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
