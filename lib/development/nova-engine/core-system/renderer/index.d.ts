import * as Three from 'three';
export declare class Renderer {
    private _instance;
    constructor();
    readonly instance: Three.WebGLRenderer;
    setClearColor(color: number): void;
    setPixelRatio(devicePixelRatio: number): void;
    setSize(width: number, height: number): void;
    setDomTarget(domTarget: HTMLElement): void;
    render(scene: Three.Scene, camera: Three.Camera, interpolation: number): void;
}
