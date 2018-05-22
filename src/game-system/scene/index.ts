
/*
*   NovaEngine - GameSystem - Scene
*   author: Aurélien Dupays Dexemple
*/

import * as Three                                           from 'three';

import { Object3D }                                         from '../object-3d';

export class Scene {
    private _instance: Three.Scene;

    constructor() {
        this._instance = new Three.Scene();
    }

    get instance(): Three.Scene {
        return this._instance;
    }

    public setName(name: string): void {
        this._instance.name = name;
    }

    public add(object3d: Object3D): void {
        this._instance.add(object3d.mesh.instance);
    }
}
