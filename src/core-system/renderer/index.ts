
/*
*   NovaEngine - CoreSystem - Renderer
*   author: Aurélien Dupays Dexemple
*/

import * as Three                                           from 'three';

export class Renderer {
    private _instance: Three.WebGLRenderer;

    constructor() {
        this._instance = new Three.WebGLRenderer({ antialias: true });
    }

    get instance(): Three.WebGLRenderer {
        return this._instance;
    }

    public setPixelRatio(devicePixelRatio: number): void {
        this._instance.setPixelRatio(devicePixelRatio);
    }

    public setSize(width: number, height: number): void {
        this._instance.setSize(width, height);
    }

    public setDomTarget(domTarget: HTMLElement): void {
        domTarget.appendChild(this._instance.domElement);
    }

    public render(scene: Three.Scene, camera: Three.Camera, interpolation: number): void {
        this._instance.render(scene, camera);
    }
}
