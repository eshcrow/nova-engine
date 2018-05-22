
/*
*   NovaEngine - GameSystem - Geometry - BoxPrimitive
*   author: Aurélien Dupays Dexemple
*/

import * as Three                                           from 'three';

export class BoxPrimitive {
    private _instance: Three.BoxGeometry;

    constructor(width: number = 1, height: number = 1, depth: number = 1) {
        this._instance = new Three.BoxGeometry(width, height, depth);
    }

    get instance(): Three.BoxGeometry {
        return this._instance;
    }
}
