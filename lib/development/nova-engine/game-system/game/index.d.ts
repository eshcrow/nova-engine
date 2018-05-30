import { ILifecycle } from '../lifecycle';
import { CameraTypes } from '../camera';
import { Scene } from '../scene';
import * as Three from 'three';
export interface GameHelpers {
    camera?: Three.CameraHelper;
    grid?: Three.GridHelper;
    pointLight?: Three.PointLightHelper;
}
export interface GameConstuctor<T> {
    new (): T;
}
export declare class Game implements ILifecycle {
    private _domTarget;
    private _devicePixelRatio;
    private _width;
    private _height;
    private _camera;
    private _scene;
    private _paused;
    constructor(helpers?: GameHelpers);
    readonly domTarget: HTMLElement;
    readonly devicePixelRatio: number;
    width: number;
    height: number;
    readonly camera: CameraTypes;
    readonly scene: Scene;
    paused: boolean;
    awake(): void;
    start(): void;
    update(): void;
}
