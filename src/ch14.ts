/**
 * 함수 타입 표현식
 */
const add1 = (a: number, b: number) => a + b;

type Add = (a: number, b: number) => number;

const add2: Add = (a, b) => a + b;

type Operation = (a: number, b: number) => number;
const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const mul: Operation = (a, b) => a * b;
const div: Operation = (a, b) => a / b;

/**
 * 호출 시그니처(콜 시그니처)
 */
type Operation2 = { // 함수도 객체이므로 가능한 표현
    (a: number, b: number): number;
    name: string; // 함수 객체에 프로퍼티 추가 가능
}
const add3: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const mul2: Operation2 = (a, b) => a * b;
const div2: Operation2 = (a, b) => a / b;