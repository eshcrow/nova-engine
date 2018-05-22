
/*
*   NovaEngine - GameSystem - Play
*   author: Aurélien Dupays Dexemple
*/

import { IGameConstuctor, Game }                            from '../game';
import { Loop }                                             from '../loop';

export function Play<T extends Game>(GameCtr: IGameConstuctor<T>): void {
    const loop = new Loop(GameCtr);

    loop.awake();
    loop.render(0);
}
