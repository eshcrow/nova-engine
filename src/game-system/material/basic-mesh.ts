
/*
*   NovaEngine - GameSystem - Material - BasicMesh
*   author: Aurélien Dupays Dexemple
*/

import * as Three                                           from 'three';

export class BasicMesh {
    private _instance: Three.MeshBasicMaterial;

    constructor() {
        this._instance = new Three.MeshBasicMaterial({
            color: 0x00ff00,
            wireframe: true 
        });
    }

    get instance(): Three.MeshBasicMaterial {
        return this._instance;
    }
}
