
/*
*   NovaEngine - CoreSystem - Mathematics - Vector3
*   author: Aurélien Dupays Dexemple
*/

import * as Three                                           from 'three';

export class Vector3 {
    private _instance: Three.Vector3;

    constructor(x: number, y: number, z: number) {
        this._instance = new Three.Vector3(x, y, z);
    }

    get instance(): Three.Vector3 {
        return this._instance;
    }

    get x(): number {
        return this._instance.x;
    }

    get y(): number {
        return this._instance.y;
    }

    get z(): number {
        return this._instance.z;
    }

    set x(x: number) {
        this._instance.setX(x);
    }

    set y(y: number) {
        this._instance.setY(y);
    }

    set z(z: number) {
        this._instance.setZ(z);
    }
}
