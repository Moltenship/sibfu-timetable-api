/* eslint-disable @typescript-eslint/ban-types */
type NonFunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T];

/**
 * Defines a type with all fields which original type/class has.
 * Works similar to Partial<T> but with all fields required.
 */
export type Full<T> = Pick<T, NonFunctionPropertyNames<T>>;
