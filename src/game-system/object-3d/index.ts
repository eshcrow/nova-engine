/*
*   NovaEngine - GameSystem - Object3D
*   author: Aurélien Dupays Dexemple
*/

import * as uuid                                            from 'uuid';
import * as Three                                           from 'three';

import { LightTypes }                                       from '../light';
import { Mesh }                                             from '../mesh';

export type Object3DInstanceType = Mesh | LightTypes;

export class Object3D {
    private _id: string;
    private _name: string;

    private _instance: Object3DInstanceType;

    constructor(instance: Object3DInstanceType, name?: string) {
        this._id = uuid();

        this._instance = instance;
        this._name = name || `unknown-object-3d-${this._id}`;
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get instance(): Object3DInstanceType {
        return this._instance;
    }

    get position(): Three.Vector3 {
        return this._instance.instance.position;
    }

    get rotation(): Three.Euler {
        return this._instance.instance.rotation;
    }
}
