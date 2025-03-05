/**
 * 사용자 정의 타입가드
 */
type Dog = {
    name: string;
    isBark: boolean;
};

type Cat = {
    name: string;
    isScratch: boolean;
};

type Animal = Dog | Cat;

function warning(animal: Animal) {
    if ("isBark" in animal) {
        console.log(`${animal.name}는 짖을 수 있습니다.`);
    } else if ("isScratch" in animal) {
        console.log(`${animal.name}는 할퀴기를 할 수 있습니다.`);
    }
}

function isDog(animal: Animal): animal is Dog { // 사용자 정의 타입 가드, 참일 경우 Dog 타입으로 단언
    return (animal as Dog).isBark !== undefined; // Dog 타입으로 단언 후 isBark 유무 체크
}

function isCat(animal: Animal): animal is Cat { // 사용자 정의 타입 가드, 참일 경우 Cat 타입으로 단언
    return (animal as Cat).isScratch !== undefined; // Cat 타입으로 단언 후 isScratch 유무 체크
}

function warning2(animal: Animal) {
    if (isDog(animal)) {
        console.log(`${animal.name}는 짖을 수 있습니다.`);
    } else if (isCat(animal)) {
        console.log(`${animal.name}는 할퀴기를 할 수 있습니다.`);
    }
}   