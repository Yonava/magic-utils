/**
 * clones an object while preserving the references of non-primitive values
 *
 * @param obj - the object to clone
 * @returns the cloned object
 */
export declare const clone: (obj: Record<any, any>) => {
    [x: string]: any;
};
