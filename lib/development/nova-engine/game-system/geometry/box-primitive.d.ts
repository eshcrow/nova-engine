import * as Three from 'three';
export declare class BoxPrimitive {
    private _instance;
    constructor(width?: number, height?: number, depth?: number);
    readonly instance: Three.BoxGeometry;
}
