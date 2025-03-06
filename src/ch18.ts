/**
 * 인터페이스
 */
interface Person1 {
    name: string;
    age: number;
}

const person1: Person1 = {
    name: 'Mark',
    age: 39,
};

// optional property
interface Person2 {
    name: string;
    age?: number;
}

const person2: Person2 = {
    name: 'Mark',
    age: 39 // 생략 가능
};

// readonly
interface Person3 {
    name: string;
    readonly age: number;
}

const person3: Person3 = {
    name: 'Mark',
    age: 39 
};
// person3.age = 40; // Error, readonly

// 함수 타입 표현식식
interface Person4 {
    name: string;
    age?: number;
    sayHi: () => void; // 함수 타입 표현식
}

const person4: Person4 = {
    name: 'Mark',
    age: 39,
    sayHi: function() { 
        console.log('안녕하세요!');
    }
};


// 호출 시그니처
interface Person5 {
    name: string;
    age?: number;
    sayHi(): void; 
}

const person5: Person5 = {
    name: 'Mark',
    age: 39,
    sayHi: function() {
        console.log('안녕하세요!');
    },
};


// 함수 오버로딩
// 함수 시그니처에서 오버로딩 가능
interface Person6 {
    name: string;
    age?: number;
    sayHi(): void; 
    sayHi(name: string): void;
    sayHi(name: string, age: number): void;
}

const person6: Person6 = {
    name: 'Mark',
    age: 39,
    sayHi: function(name?: string, age?: number): void {
        if (name === undefined && age === undefined) {
            console.log('안녕하세요!');
        } else if (name && age === undefined) {
            console.log(`안녕하세요 ${name}님!`);
        } else {
            console.log(`안녕하세요 ${name}님! ${age}살이시네요.`);
        }
    }
};