
/*
*   NovaEngine - GameSystem - Material - MeshBasic
*   author: Aurélien Dupays Dexemple
*/

import * as Three                                           from 'three';

export class MeshBasic {
    private _instance: Three.MeshBasicMaterial;

    constructor() {
        this._instance = new Three.MeshBasicMaterial({ color: 0x00ff00 });
    }

    get instance(): Three.MeshBasicMaterial {
        return this._instance;
    }
}
