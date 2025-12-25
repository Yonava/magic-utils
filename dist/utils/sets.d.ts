/**
 * combine an array of sets into a single set
 *
 * @param sets array of sets
 * @returns a single set containing all elements from the input sets
 * @example mergeSetArrayIntoSet([new Set([1, 2]), new Set([2, 3])]) // Set(1, 2, 3)
 */
export declare const mergeSetArrayIntoSet: <T>(sets: Set<T>[]) => Set<T>;
