import * as Three from 'three';
export declare class Sphere {
    private _instance;
    constructor(radius: number, horizontalSegementsNumber: number, verticalSegementsNumber: number);
    readonly instance: Three.SphereGeometry;
}
