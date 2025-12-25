/**
 * a registry for all localStorage keys this application uses
 */
export declare const localKeys: {
    /** nodes in graph product */
    readonly nodes: (key: string) => `nodes-${string}`;
    /** edges in graph product */
    readonly edges: (key: string) => `edges-${string}`;
    /** graph product simulation speed */
    readonly simulationPlaybackSpeed: "simulation-playback-speed";
    /** graph theme set by user - {@link Graph.preferredTheme} */
    readonly preferredTheme: "preferred-theme";
};
/**
 * all return values of localStorage are, by default, string.
 * this type allows string to be narrowed to types such as 'true' | 'false'
 */
type TypeOverride = {};
type LocalObj = typeof localKeys;
/**
 * @example
 * type T = TypeOrReturnType<number> // number
 * type TFunc = TypeOrReturnType<() => number> // number
 */
type TypeOrReturnType<T> = T extends (...args: any[]) => infer U ? U : T;
type LocalKeys = TypeOrReturnType<LocalObj[keyof LocalObj]>;
type LocalType<T extends LocalKeys> = T extends keyof TypeOverride ? TypeOverride[T] : string;
/**
 * perform **type safe** localStorage actions
 */
export declare const local: {
    get: <T extends LocalKeys>(key: T) => string | null;
    set: <T extends LocalKeys, K extends LocalType<T>>(key: T, value: K) => void;
    remove: <T extends LocalKeys>(key: T) => void;
    clear: () => void;
};
export {};
