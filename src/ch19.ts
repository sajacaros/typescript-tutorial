/**
 * 인터페이스 확장
 */

// Animal 상속 받기
interface Animal {
    name: string;
    age: number;
}

interface Cat extends Animal {
    isScratch: boolean;
}

interface Dog extends Animal {
    isBark: boolean;
}

interface Chicken extends Animal {
    name: "hello"; // 재정의 가능
    isFly: boolean;
}

// interface Tortoise extends Animal {
//     name: number; // error, 서브타입으로만 재정의 가능
//     isFly: boolean;
// }

// 인터페이스 다중 확장
interface DogCat extends Dog, Cat {
}

// 타입도 확장 가능
type Person = {
    name: string;
    age: number;
}

interface Developer extends Person {
    skills: string[];
}
