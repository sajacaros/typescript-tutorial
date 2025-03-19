/**
 * keyof 연산자
 */

interface Person {
    name: string;
    age: number;
}

const person: Person = {
    name: "이정환",
    age: 27
};

function getPropertyKey(person: Person, key: "name"|"age") { // key 타입 정의할 때 property가 많다면?
    return person[key];
}


getPropertyKey(person, "name");

function getPropertyKey2(person: Person, key: keyof Person) { // keyof 연산자
    return person[key];
}

getPropertyKey2(person, "name");


type Person2 = typeof person; // 객체의 타입을 뽑아낼때도 사용

function getPropertyKey3(person: Person, key: keyof typeof person) { // keyof + typeof 연산자 활용
    return person[key];
}

getPropertyKey3(person, "name");