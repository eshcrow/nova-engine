/*
*   NovaEngine - GameSystem - Object3D
*   author: Aurélien Dupays Dexemple
*/

import * as uuid                                            from 'uuid';

import { Mesh }                                             from '../mesh';

export class Object3D {
    private _name: string;
    private _mesh: Mesh;

    constructor(mesh: Mesh, name: string = `unknowObject3D-${uuid()}`) {
        this._mesh = mesh;
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    get mesh(): Mesh {
        return this._mesh;
    }
}
