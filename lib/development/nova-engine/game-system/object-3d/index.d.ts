import * as Three from 'three';
import { Mesh } from '../mesh';
export declare class Object3D {
    private _id;
    private _name;
    private _mesh;
    constructor(mesh: Mesh, name?: string);
    readonly id: string;
    readonly name: string;
    readonly mesh: Mesh;
    readonly position: Three.Vector3;
    readonly rotation: Three.Euler;
}
