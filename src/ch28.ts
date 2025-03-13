/**
 * 제네릭 인터페이스
 */

// 타입 변수
// 타입 파라미터
// 제네릭 타입 변수
// 제네릭 타입 파라미터
interface KeyPair<K, V> {
    key: K;
    value: V;
}

let keyPair: KeyPair<string, number> = {
    key: "key",
    value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
    key: true,
    value: ["1", "2"]
};

/**
 * 인덱스 시그니처
 */

interface NumberMap {
    [key: string]: number;
}

let numberMap1: NumberMap = {
    key: -1,
    key2: 123,
}


interface Map<V> {
    [key: string]: V;
}

let stringMap: Map<string> = {
    key: "value",
};

let booleanMap: Map<boolean> = {
    key: true
};

/** 
 * 제네릭 타입 별칭
 */
type Map2<V> = {
    [key: string]: V
};

let stringMap2: Map2<string> = {
    key: "hello",
};

/**
 * 제네릭 인터페이스의 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분: 학생 유저/개발자 유저
 */
interface Student {
    type: "student";
    school: string;
}

interface Developer { // Student와 서로소
    type: "developer";
    skill: string;
}

interface User {
    name: string;
    profile: Student | Developer;
}

const developerUser: User = {
    name: "이정환",
    profile: {
        type: "developer",
        skill: "TypeScript"
    }
}

const studentUser: User = {
    name: "홍길동",
    profile: {
        type: "student",
        school: "Dacon"
    }
}

function goToSchool(user: User) {
    if(user.profile.type !== "student") { 
        console.log("잘 못 오셨습니다.")
    }
}

// ---- 제네릭 이용
interface User2<T> {
    name: string;
    profile: T;
}

const developerUser2: User2<Developer> = {
    name: "이정환",
    profile: {
        type: "developer",
        skill: "TypeScript"
    }
}

const studentUser2: User2<Student> = {
    name: "홍길동",
    profile: {
        type: "student",
        school: "Dacon"
    }
}

function goToSchool2(user: User2<Student>) {
    console.log(`${user.name}이 ${user.profile.school}에 등교합니다.`);
}

goToSchool2(studentUser2);
// goToSchool2(developerUser2); // error, StudentUser2만 올 수 있음

