
/*
*   NovaEngine - GameSystem - Camera - Perspective
*   author: Aurélien Dupays Dexemple
*/

import { Mathematics }                                      from '../../core-system';

import * as Three                                           from 'three';

export class Perspective {
    private _instance: Three.PerspectiveCamera;

    constructor(fov: number = 75, aspect: number = (window.innerWidth / window.innerHeight), near: number = 0.1, far: number = 1000) {
        this._instance = new Three.PerspectiveCamera(fov, aspect, near, far);
    }

    get instance(): Three.PerspectiveCamera {
        return this._instance;
    }

    public setDefaultPosition(position: Mathematics.Vector3): void {
        this._instance.position.setX(position.x);
        this._instance.position.setY(position.y);
        this._instance.position.setZ(position.z);
    }
}
