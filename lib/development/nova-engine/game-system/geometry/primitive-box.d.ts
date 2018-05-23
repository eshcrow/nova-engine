import * as Three from 'three';
export declare class PrimitiveBox {
    private _instance;
    constructor(width?: number, height?: number, depth?: number);
    readonly instance: Three.BoxGeometry;
}
