
/*
*   NovaEngine - GameSystem - Material - BasicMesh
*   author: Aurélien Dupays Dexemple
*/

import * as Three                                           from 'three';

import { Color }                                            from '../color';

export class BasicMesh {
    private _instance: Three.MeshBasicMaterial;

    constructor(color?: Color, wireframe?: boolean) {
        this._instance = new Three.MeshBasicMaterial({
            color: color ? color.getHex() : 0x13EFFF,
            wireframe: wireframe || true
        });
    }

    get instance(): Three.MeshBasicMaterial {
        return this._instance;
    }
}
