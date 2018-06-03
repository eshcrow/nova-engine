
/*
*   NovaEngine - GameSystem - Light - Ambient
*   author: Aurélien Dupays Dexemple
*/

import * as Three                                           from 'three';

import { Color }                                            from '../color';

export class Ambient {
    private _instance: Three.AmbientLight;

    constructor(color?: Color) {
        this._instance = new Three.AmbientLight(color ? color.getHex() : 0x404040);
    }

    get instance(): Three.AmbientLight {
        return this._instance;
    }
}
