
/*
*   NovaEngine - GameSystem - Boot
*   author: Aurélien Dupays Dexemple
*/

import { GameConstuctor, Game }                             from '../game';
import { Loop }                                             from '../loop';

export interface BootOptions {
    debug?: boolean;
    metrics?: boolean;
}

export class Boot<T extends Game> {
    private _loop: Loop<T>;

    private _booted: boolean = false;

    constructor(GameCtr: GameConstuctor<T>, options?: BootOptions) {
        this._loop = new Loop<T>(GameCtr);
        this._loop.awake();

        this._booted = true;
    }

    get booted(): boolean {
        return this._booted;
    }

    public loop(): void {
        this._loop.start();
    }

    public stop(): void {
        this._loop.stop();
    }

    public destroy(): void {
        this._loop.destroy();
    }
}
