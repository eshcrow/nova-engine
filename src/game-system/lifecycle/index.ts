
/*
*   NovaEngine - CoreSystem - Lifecycle
*   author: Aurélien Dupays Dexemple
*/

export interface ILifecycle {
    awake(): void;
    start(): void;
    update(): void;
}
