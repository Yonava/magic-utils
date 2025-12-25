export declare const isPlainObject: (obj: any) => obj is Record<string | number | symbol, unknown>;
/**
 * Deeply merges multiple objects. Properties from later objects overwrite those from earlier ones.
 * Non-object values (including arrays) are replaced, not merged.
 *
 * @param {...any[]} objects - Objects to merge. The rightmost object's properties take precedence.
 * @returns {any} - A new deeply merged object.
 *
 * @example
 * const result = deepMerge(
 *   { a: 1, b: { c: 2 } },
 *   { b: { d: 3 }, e: 4 }
 * );
 * // result: { a: 1, b: { c: 2, d: 3 }, e: 4 }
 */
export declare const deepMerge: (...objects: any[]) => any;
