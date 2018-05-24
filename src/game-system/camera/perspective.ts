
/*
*   NovaEngine - GameSystem - Camera - Perspective
*   author: Aurélien Dupays Dexemple
*/

import * as uuid                                            from 'uuid';
import * as Three                                           from 'three';

import { Mathematics }                                      from '../../core-system';

export class Perspective {
    private _id: string;
    private _name: string;

    private _instance: Three.PerspectiveCamera;

    constructor(name?: string) {
        this._id = uuid();
        this._name = name || `unknown-camera-${this._id}`;

        this._instance = new Three.PerspectiveCamera(75, (window.innerWidth / window.innerHeight), 0.1, 1000);
    }

    get instance(): Three.PerspectiveCamera {
        return this._instance;
    }

    public setDefaultPosition(position: Mathematics.Vector3): void {
        this._instance.position.setX(position.x);
        this._instance.position.setY(position.y);
        this._instance.position.setZ(position.z);
    }

    public setFov(fov: number): void {
        this._instance.fov = fov;
    }

    public setAspect(aspect: number): void {
        this._instance.aspect = aspect;
    }

    public setNear(near: number): void {
        this._instance.near = near;
    }

    public setFar(far: number): void {
        this._instance.far = far;
    }
}
