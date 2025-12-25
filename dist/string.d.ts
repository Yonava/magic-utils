/**
 * makes the first letter of a string uppercase
 *
 * @param str - the string to capitalize
 * @returns the capitalized string
 * @example capitalize('hello') // 'Hello'
 */
export declare const capitalize: (str: string) => string;
/**
 * turns a camelCase string into a title case string
 *
 * @param str - the string to convert
 * @returns the title case string
 * @example camelCaseToTitleCase('camelCase') // 'Camel Case'
 */
export declare const camelCaseToTitleCase: (str: string) => string;
/**
 * turns an array of strings into a comma separated list with 'and' before the last item
 * @example toCommaList(['a', 'b', 'c']) // 'a, b and c'
 */
export declare const getCommaList: (arr: string[]) => string;
