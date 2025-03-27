/**
 * infer
 */

type FuncA = () => string;

type ReturnType<T> = T extends () => string? string: never;
type A = ReturnType<FuncA>; // string
type FuncB = () => number;
type B = ReturnType<FuncB>; // never

// infer 키워드 사용
type ReturnType2<T> = T extends () => infer R? R: never;
type C = ReturnType2<FuncA>; // string
type D = ReturnType2<FuncB>; // number
type E = ReturnType2<number>; // never

// promise 타입 추출
type PromiseType<T> = T extends Promise<infer R>? R: never;
// 1. T는 PromiseType 이어야 함
// 2. 프로미스타입의 결과값 타입 반환
type F = PromiseType<Promise<string>>; // string
type G = PromiseType<Promise<number>>; // number