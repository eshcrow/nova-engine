
/*
*   NovaEngine - GameSystem - Mesh
*   author: Aurélien Dupays Dexemple
*/

import * as Three                                           from 'three';

import { GemotryTypes }                                     from '../geometry';
import { MaterialTypes }                                    from '../material';

export class Mesh {
    private _instance: Three.Mesh;

    constructor(geometry: GemotryTypes, material: MaterialTypes) {
        this._instance = new Three.Mesh(geometry.instance, material.instance);
    }

    get instance(): Three.Mesh {
        return this._instance;
    }
}
