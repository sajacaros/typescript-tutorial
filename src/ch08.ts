/** 
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재
 */

/**
 * 1. 합집합 - Union Type
 */
let a: string | number;
a = 1;
a = "hello";

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
    name: string;
    color: string;
};

type Person = {
    name: string;
    language: string;
}

type Union1 = Dog | Person;

let union1: Union1 = {
    name: "dog",
    color: "white"
};

let union2: Union1 = {
    name: "person",
    language: "korean"
};

let union3: Union1 = {
    name: "dog",
    color: "white",
    language: "korean"
};

// let union4: Union1 = { // 오류
//     name: "person"
// }

// let union5: Union1 = { // 오류
//     name: "dog",
//     color: "white",
//     language: "korean",
//     breed: "Poodle"
// };

/**
 * 2. 교집합 타입 - Intersection Type
 */
let variable: string & number; // never

type Intersection = Dog & Person;
let intersection1: Intersection = {
    name: "dog",
    color: "white",
    language: "korean"
};