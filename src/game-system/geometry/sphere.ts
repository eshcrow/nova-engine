
/*
*   NovaEngine - GameSystem - Geometry - Sphere
*   author: Aurélien Dupays Dexemple
*/

import * as Three                                           from 'three';

export class Sphere {
    private _instance: Three.SphereGeometry;

    constructor(radius: number, horizontalSegementsNumber: number, verticalSegementsNumber: number) {
        this._instance = new Three.SphereGeometry(radius, horizontalSegementsNumber, verticalSegementsNumber);
    }

    get instance(): Three.SphereGeometry {
        return this._instance;
    }
}
