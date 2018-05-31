
/*
*   NovaEngine - GameSystem - Geometry - Sphere
*   author: Aurélien Dupays Dexemple
*/

import * as Three                                           from 'three';

export class Plane {
    private _instance: Three.PlaneGeometry;

    constructor(width: number, height: number) {
        this._instance = new Three.PlaneGeometry(width, height);
    }

    get instance(): Three.PlaneGeometry {
        return this._instance;
    }
}
