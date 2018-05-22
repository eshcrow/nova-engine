import { ILifecycle } from '../lifecycle';
import { CameraTypes } from '../camera';
import { Scene } from '../scene';
export interface IGameConstuctor<T> {
    new (): T;
}
export declare class Game implements ILifecycle {
    private _domTarget;
    private _devicePixelRatio;
    private _width;
    private _height;
    private _camera;
    private _scene;
    constructor(domTarget?: HTMLElement, devicePixelRatio?: number, width?: number, height?: number);
    readonly domTarget: HTMLElement;
    readonly devicePixelRatio: number;
    readonly width: number;
    readonly height: number;
    readonly camera: CameraTypes;
    readonly scene: Scene;
    awake(): void;
    start(): void;
    update(): void;
}
