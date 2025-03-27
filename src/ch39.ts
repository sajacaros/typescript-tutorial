/**
 * Exclude<T, U>
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>; // number | boolean
type B = Exclude<number | string | boolean, string | boolean>; // number

/**
 * Extract<T, U>
 */
type Extract<T, U> = T extends U ? T : never;

type C = Exclude<number | string | boolean, string>; // number | boolean
type D = Extract<number | string | boolean, string>; // string

/**
 * ReturnType<T>
 */
type ReturnType<T> = T extends (...args: any) => infer R ? R : any;
type E = ReturnType<() => string>; // string

function funcA() {
    return "Hello";
}

function funcB() {
    return 10;
}

type ReturnTypeA = ReturnType<()=>"hi">; // "hi"
type ReturnTypeB = ReturnType<typeof funcA>; // string
type ReturnTypeC = ReturnType<typeof funcB>; // number