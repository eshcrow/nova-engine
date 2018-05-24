import * as Three from 'three';
import { Color } from '../color';
import { Object3D } from '../object-3d';
export declare class Scene {
    private _id;
    private _name;
    private _instance;
    constructor(name?: string);
    readonly instance: Three.Scene;
    setBackground(color: Color): void;
    add(object3d: Object3D): void;
}
