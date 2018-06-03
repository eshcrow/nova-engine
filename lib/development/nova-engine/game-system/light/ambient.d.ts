import * as Three from 'three';
import { Color } from '../color';
export declare class Ambient {
    private _instance;
    constructor(color?: Color);
    readonly instance: Three.AmbientLight;
}
