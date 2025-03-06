/**
 * 선언 합침
 */

type Person = {
    name: string;
}

// type Person = { // error, Duplicate identifier 'Person'
//  age: number;
// }

// 인터페이스는 합칠 수 있음
interface Human {
    name: string;
}

interface Human {
    age: number;
}

const human: Human = {
    name: 'Mark',
    age: 39,
};

// 인터페이스 합침은 슈퍼-서브 관계로 합쳐지지 않음
interface Human2 {
    name: string;
}

interface Human2 {
    // name: "heollo"; // error, 서브타입으로 재정의 불가가
}

/**
 * 모듈 보강
 */
interface Lib { // 라이브러리라 가정정
    a: number;
    b: number;
}

interface Lib { // 모듈 보강
    c: string;
}

const lib: Lib = {
    a: 1,
    b: 2,
    c: 'hello',
};