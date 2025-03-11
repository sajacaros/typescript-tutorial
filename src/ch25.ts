/**
 * 제네릭
 */

function func(value: unknown) {
    return value;
}

let num = func(10); // unknown 타입

let bool = func(true); // unknown 타입

let str = func("Hello"); // unknown 타입

// str.toUpperCase(); // 에러, unknown 타입에는 toUpperCase 메서드가 없음
// 타입 좁히기
if (typeof str === "string") {
    str.toUpperCase(); // string 타입으로 좁혀짐
}

// 제네릭 함수, T: 타입 변수
function func2<T>(value: T): T {
    return value;
}
let num2 = func2(10); // number 타입 추론
let bool2 = func2(true); // boolean 타입 추론
let str2 = func2("Hello"); // string 타입 추론
let arr = func2([1, 2, 3]); // number[] 타입 추론
let tuple = func2<[number, number, number]>([1, 2, 3]); // 타입 변수에 튜플 타입 지정
