import * as Three from 'three';
import { LightTypes } from '../light';
import { Mesh } from '../mesh';
export declare type Object3DInstanceType = Mesh | LightTypes;
export declare class Object3D {
    private _id;
    private _name;
    private _instance;
    constructor(instance: Object3DInstanceType, name?: string);
    readonly id: string;
    readonly name: string;
    readonly instance: Object3DInstanceType;
    readonly position: Three.Vector3;
    readonly rotation: Three.Euler;
}
