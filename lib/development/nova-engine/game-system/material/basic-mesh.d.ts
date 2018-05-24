import * as Three from 'three';
import { Color } from '../color';
export declare class BasicMesh {
    private _instance;
    constructor(color?: Color, wireframe?: boolean);
    readonly instance: Three.MeshBasicMaterial;
}
