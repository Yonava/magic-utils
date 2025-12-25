/**
 * unwraps a MaybeGetter into a value of type T.
 *
 * @param value - the value to unwrap
 * @param args - the arguments to pass to the getter if the value is a getter
 * @returns T, which is UnwrapMaybeGetter<MaybeGetter<T, K>>
 * @example getValue(5) // 5
 * getValue(() => 5) // 5
 */
export const getValue = (value, ...args) => {
    if (typeof value === 'function') {
        return value(...args);
    }
    return value;
};
