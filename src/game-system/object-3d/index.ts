/*
*   NovaEngine - GameSystem - Object3D
*   author: Aurélien Dupays Dexemple
*/

import * as uuid                                            from 'uuid';
import * as Three                                           from 'three';

import { Mesh }                                             from '../mesh';

export class Object3D {
    private _id: string;
    private _name: string;

    private _mesh: Mesh;

    constructor(mesh: Mesh, name?: string) {
        this._id = uuid();

        this._mesh = mesh;
        this._name = name || `unknown-object-3d-${this._id}`;
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get mesh(): Mesh {
        return this._mesh;
    }

    get position(): Three.Vector3 {
        return this._mesh.instance.position;
    }

    get rotation(): Three.Euler {
        return this._mesh.instance.rotation;
    }
}
