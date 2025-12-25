/**
 * a registry for all localStorage keys this application uses
 */
export const localKeys = {
    /** nodes in graph product */
    nodes: (key) => `nodes-${key}`,
    /** edges in graph product */
    edges: (key) => `edges-${key}`,
    /** graph product simulation speed */
    simulationPlaybackSpeed: 'simulation-playback-speed',
    /** graph theme set by user - {@link Graph.preferredTheme} */
    preferredTheme: 'preferred-theme',
};
/**
 * perform **type safe** localStorage actions
 */
export const local = {
    get: (key) => localStorage.getItem(key),
    set: (key, value) => localStorage.setItem(key, value),
    remove: (key) => localStorage.removeItem(key),
    clear: localStorage.clear,
};
