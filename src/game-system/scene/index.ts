
/*
*   NovaEngine - GameSystem - Scene
*   author: Aurélien Dupays Dexemple
*/

import * as uuid                                            from 'uuid';
import * as Three                                           from 'three';

import { Color }                                            from '../color';
import { Object3D }                                         from '../object-3d';

export class Scene {
    private _id: string;
    private _name: string;

    private _instance: Three.Scene;

    constructor(name?: string) {
        this._id = uuid();
        this._name = name || `unknown-scene-${this._id}`;

        this._instance = new Three.Scene();
    }

    get instance(): Three.Scene {
        return this._instance;
    }

    public setBackground(color: Color): void {
        this._instance.background = color.instance;
    }

    public add(object3d: Object3D): void {
        this._instance.add(object3d.mesh.instance);
    }
}
