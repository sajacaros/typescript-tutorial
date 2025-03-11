/**
 * 첫번째 사례
 */

function swap<T>(a: T, b: T) {
    return [b, a];
}

const [a,b] = swap(10, 20); // a: number, b: number
// const [c,d] = swap(10, "new"); // a: number, b: string ,error


function swap2<T, U>(a: T, b: U) {
    return [b, a];
}

const [e,f] = swap2(10, "new");


/**
 * 두번째 사례
 */
function returnFirstValue(data: any) {
    return data[0];
}

let num = returnFirstValue([1, 2, 3]); // number
console.log(num);

function returnFirstValue2<T>(data: T) {
    // return data[0]; // error, T 타입은 배열이 아니라 unknown 타입, 호출할때 추론됨
}

function returnFirstValue3<T>(data: T[]) {
    return data[0];
}
let num2 = returnFirstValue3([4, 5, 6]); // number
console.log(num2);

let num3 = returnFirstValue3([7, "str", "str"]); // string | number
console.log(num3);

function returnFirstValue4<T>(data: [T, ...unknown[]]) { // tuple 타입을 지정해서 배열의 첫번째 요소만 반환
    return data[0];
}
let num4 = returnFirstValue4([8, "str", "str"]); // number
console.log(num4);

/**
 * 세번째 사례
 */
function getLength(data: any) {
    return data.length;
} 

let var1 = getLength("hello"); // 5
let var2 = getLength([1, 2, 3]); // 3
let var3 = getLength({ length: 10 }); // 10
let var4 = getLength(10); // undefined, number 타입은 length 프로퍼티가 없음
console.log(var1, var2, var3, var4);

// 제네릭을 이용해서 length 프로퍼티가 있는 타입만 받도록 제한
function getLength2<T extends { length: number }>(data: T) {
    return data.length;
}
let var5 = getLength2("hello"); // 5
let var6 = getLength2([1, 2, 3]); // 3
let var7 = getLength2({ length: 10 }); // 10
// let var8 = getLength2(10); // error, number 타입은 length 프로퍼티가 없음
