
/*
*   NovaEngine - GameSystem - Game
*   author: Aurélien Dupays Dexemple
*/

import { Mathematics }                                      from '../../core-system';

import { Color }                                            from '../color';

import { ILifecycle }                                       from '../lifecycle';

import { CameraTypes, Camera }                              from '../camera';
import { Scene }                                            from '../scene';

import * as Three                                           from 'three';

export interface GameHelpersOptions {
    camera?: boolean;
    grid?: boolean;
    pointLight?: boolean;
    axes?: boolean;
}

export interface GameConstuctor<T> {
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

    constructor(helpersOptions?: GameHelpersOptions) {
        this._domTarget = document.body;
        this._devicePixelRatio = window.devicePixelRatio;

        this._width = window.innerWidth;
        this._height = window.innerHeight;

        this._camera = new Camera.Perspective((window.innerWidth / window.innerHeight), 'Main Camera');
        this._scene = new Scene('Main Scene');

        this._camera.setDefaultPosition(new Mathematics.Vector3(0, 0, 5));
        this._scene.setBackground(new Color(0x2B3233));

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

    set width(width: number) {
        this._width = width;
    }

    set height(height: number) {
        this._height = height;
    }

    set paused(paused: boolean) {
        this._paused = paused;
    }

    public awake(): void { }

    public start(): void { }

    public update(): void { }
}
