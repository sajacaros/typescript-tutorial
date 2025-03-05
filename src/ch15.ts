/**
 * 함수 타입 호환성
 * - 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10; // <- number
let b: B = () => 10; // <- number 리터럴

a = b; // 가능, 업캐스팅
// b = a; // 불가능, 다운캐스팅

// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;
let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // 불가능, 리턴 타입은 다운캐스팅만 가능
d = c; // 가능, 다운캐스팅

type Animal = {
    name: string;
}
type Dog = {
    name: string;
    age: number;
}
let animalFunc = (animal: Animal) => {
    console.log(animal.name)
};
let dogFunc = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.age);
}; 

// animalFunc = dogFunc; // 에러, 리턴타입은 다운캐스팅만 가능
// let testFunc = (animal: Animal) => { // animalFunc의 함수타입에 구현체를 dogFunc로 구현
//     console.log(animal.name);
//     console.log(animal.age); // 에러, Animal에 age가 없음
// }

dogFunc = animalFunc; // 가능, 리터타입 다운캐스팅
let testFunc = (dog: Dog) => { // dogFunc의 함수타입에 구현체를 animalFunc로 구현
        console.log(dog.name);
}

// 2-2. 매개변수의 개수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // 가능, 업캐스팅
// func2 = func1; // 불가능, 다운캐스팅
