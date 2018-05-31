import { ILifecycle } from '../lifecycle';
import { CameraTypes } from '../camera';
import { Scene } from '../scene';
export interface GameHelpersOptions {
    camera?: boolean;
    grid?: boolean;
    pointLight?: boolean;
    axes?: boolean;
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
    constructor(helpersOptions?: GameHelpersOptions);
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
