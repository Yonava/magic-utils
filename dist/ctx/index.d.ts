import type { MaybeRef } from 'vue';
/**
 * pulls ctx from a canvas or canvas ref (vue.js), throws if not found
 *
 * @returns {CanvasRenderingContext2D}
 * @example const ctx = getCtx(canvasRef);
 * // ctx is defined and ready to use
 * @throws {Error} if canvas or 2d context not found
 */
export declare const getCtx: (canvasInput: MaybeRef<HTMLCanvasElement | null | undefined>) => CanvasRenderingContext2D;
