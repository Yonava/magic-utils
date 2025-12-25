/**
 * gets the delta between two objects
 *
 * @param oldObject
 * @param newObject
 * @returns an object with only the changes, the values are the new values
 */
export declare const delta: (oldObject: Record<any, any>, newObject: Record<any, any>) => Record<any, any> | null;
