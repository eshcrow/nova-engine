
/*
*   NovaEngine - GameSystem - Game
*   author: Aurélien Dupays Dexemple
*/

import { Mathematics }                                      from '../../core-system';

import { ILifecycle }                                       from '../lifecycle';

import { CameraTypes, Camera }                              from '../camera';
import { Scene }                                            from '../scene';

import * as Three                                           from 'three';

export interface IGameConstuctor<T> {
    new(): T
}

export class Game implements ILifecycle {

    private _domTarget: HTMLElement;
    private _devicePixelRatio: number;

    private _width: number;
    private _height: number;

    private _camera: CameraTypes;
    private _scene: Scene;

    private _paused: boolean;

    constructor(domTarget: HTMLElement = document.body, devicePixelRatio: number = window.devicePixelRatio, width: number = window.innerWidth, height = window.innerHeight) {
        this._domTarget = domTarget;
        this._devicePixelRatio = devicePixelRatio;

        this._width = width;
        this._height = height;

        this._camera = new Camera.Perspective();
        this._scene = new Scene();

        this._camera.setDefaultPosition(new Mathematics.Vector3(0, 0, 5));

        this._paused = false;
    }

    get domTarget(): HTMLElement {
        return this._domTarget;
    }

    get devicePixelRatio(): number {
        return this._devicePixelRatio;
    }

    get width(): number {
        return this._width;
    }

    get height(): number {
        return this._height;
    }

    get camera(): CameraTypes {
        return this._camera;
    }

    get scene(): Scene {
        return this._scene;
    }

    get paused(): boolean {
        return this._paused;
    }

    set paused(paused: boolean) {
        this._paused = paused;
    }

    public awake(): void { }

    public start(): void { }

    public update(): void { }
}
