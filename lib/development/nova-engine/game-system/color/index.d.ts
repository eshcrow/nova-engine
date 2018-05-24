import * as Three from 'three';
export declare class Color {
    private _instance;
    constructor(hex: number);
    readonly instance: Three.Color;
    getHex(): number;
    setHex(hex: number): void;
}
