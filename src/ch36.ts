/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;
let c: StringNumberSwitch<number | string>; // 분산적 조건부 타입
// c는 각각의 타입에 대한 조건부 타입을 분산적으로 적용
// StringNumberSwitch<number> | StringNumberSwitch<string>

// Exclude
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>; // number | boolean
type B = Exclude<number | string | boolean, string | boolean>; // number

// Extract
type Extract<T, U> = T extends U ? T : never;
type C = Extract<number | string | boolean, string>; // string
type D = Extract<number | string | boolean, string | boolean>; // string | boolean
type E = Extract<number | string | boolean, string | boolean | undefined>; // string | boolean