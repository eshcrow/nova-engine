import * as Three from 'three';
import { Mathematics } from '../../core-system';
export declare class Perspective {
    private _id;
    private _name;
    private _instance;
    constructor(name?: string);
    readonly instance: Three.PerspectiveCamera;
    setDefaultPosition(position: Mathematics.Vector3): void;
    setFov(fov: number): void;
    setAspect(aspect: number): void;
    setNear(near: number): void;
    setFar(far: number): void;
}
