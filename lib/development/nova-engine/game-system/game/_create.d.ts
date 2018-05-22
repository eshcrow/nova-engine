export interface GameConstuctor<T> {
    new (): T;
}
export declare function createGame<T>(ctr: GameConstuctor<T>): T;
