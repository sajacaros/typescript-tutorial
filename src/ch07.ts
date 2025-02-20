/**
 * 기본 타입간의 호환성
 */
let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // 업캐스팅

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?
 * -> 프로퍼티 기준으로 판단
 * -> 구조적 타입 시스템 (Structural Type System)
 */
type Animal = {
    name: string;
    color: string;
};

type Dog = {
    name: string;
    color: string;
    breed: string;
}

let animal: Animal = {
    name: "dog",
    color: "white"
};

let dog: Dog = {
    name: "dog",
    color: "white",
    breed: "Poodle"
};

animal = dog; // 업캐스팅
// dog = animal; // 에러, 다운캐스팅

type Book = {
    name: string;
    price: number;
};

type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
    name: "JS Programming",
    price: 20000,
    skill: "JS"
};

book = programmingBook; // 업캐스팅
// programmingBook = book; // 에러, 다운캐스팅
// book.skill; // 에러, 프로퍼티가 없음


/**
 * 초과 프로퍼티 검사
 */
let book2: Book = {
    name: "JS Programming",
    price: 20000,
    // skill: "JS"
};
let book3: Book = programmingBook; // 업캐스팅

/**
 * 함수 매개변수 타입 호환성 - 초과 프로퍼티
 */
function func(book: Book) {}
func({
    name: "JS Programming",
    price: 20000,
    // skill: "JS" // 에러, 초과 프로퍼티
});
func(programmingBook); // 업캐스팅