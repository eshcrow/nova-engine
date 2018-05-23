
/*
*   NovaEngine - CoreSystem - Time
*   author: Aurélien Dupays Dexemple
*/

import * as Three                                           from 'three';

export class Time {
    private static _instance: Three.Clock = new Three.Clock(false);

    static start(): void {
        this._instance.start();
    }

    static stop(): void {
        this._instance.stop();
    }

    static getDeltaTime(): number {
        return this._instance.getDelta() * 1000;
    }

    static getElapsedTime(): number {
        return this._instance.getElapsedTime() * 1000;
    }

    static now(): number {
        return performance.now();
    }
}
