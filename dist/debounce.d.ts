/**
 * a function that will only be called after a certain amount
 * of time has passed since the last time it was called
 *
 * @param fn target function
 * @param ms time in milliseconds
 * @returns a debounced function
 */
export declare const debounce: <T extends () => void>(fn: T, ms: number) => () => void;
