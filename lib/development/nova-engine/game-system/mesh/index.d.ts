import * as Three from 'three';
import { GemotryTypes } from '../geometry';
import { MaterialTypes } from '../material';
export declare class Mesh {
    private _instance;
    constructor(geometry: GemotryTypes, material: MaterialTypes);
    readonly instance: Three.Mesh;
}
