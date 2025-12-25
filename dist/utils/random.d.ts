/**
 * given two numbers, this function returns a random number between them (inclusive)
 *
 * @param min - the lowest number
 * @param max - the highest number
 * @returns a random number between min and max
 */
export declare const getRandomInRange: (min: number, max: number) => number;
export declare const getRandomPointOnCanvas: (canvas: HTMLCanvasElement, buffer?: number) => {
    x: number;
    y: number;
};
/**
 * get a random element from an array
 *
 * @param array
 * @returns random element from given array
 */
export declare const getRandomElement: <T>(array: ArrayLike<T>) => T;
