import { Mathematics } from '../../core-system';
import * as Three from 'three';
export declare class Perspective {
    private _instance;
    constructor(fov?: number, aspect?: number, near?: number, far?: number);
    readonly instance: Three.PerspectiveCamera;
    setDefaultPosition(position: Mathematics.Vector3): void;
}
