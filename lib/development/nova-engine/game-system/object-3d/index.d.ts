import { Mesh } from '../mesh';
export declare class Object3D {
    private _name;
    private _mesh;
    constructor(mesh: Mesh, name?: string);
    readonly name: string;
    readonly mesh: Mesh;
}
