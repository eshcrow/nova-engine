import * as Three from 'three';
import { Object3D } from '../object-3d';
export declare class Scene {
    private _instance;
    constructor();
    readonly instance: Three.Scene;
    setName(name: string): void;
    add(object3d: Object3D): void;
}
