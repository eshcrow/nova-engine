
/*
*   NovaEngine - GameSystem - color
*   author: Aurélien Dupays Dexemple
*/

import * as Three                                           from 'three';

export class Color {
    private _instance: Three.Color;

    constructor(hex: number) {
        this._instance = new Three.Color(hex);
    }

    get instance(): Three.Color {
        return this._instance;
    }

    public getHex(): number {
        return this._instance.getHex();
    }

    public setHex(hex: number) {
        this._instance.setHex(hex);
    }
}
