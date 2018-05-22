export interface LoopLifecycle {
    awake(): void;
    update(): void;
}
export declare class Loop implements LoopLifecycle {
    constructor();
    awake(): void;
    update(): void;
    render(): void;
}
