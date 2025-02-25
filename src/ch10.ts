/**
 * 타입 단어
 */

// 필요한 상황 살펴보기
type Person = {
    name: string;
    age: number;
};

// let person1: Person = {}; // 에러, 타입 지정시 프로퍼티 필요함

// 타입 추론 이용
let person2 = {};
// person2.name = "Kim"; // 에러, person2의 타입에 name이 없음
// person2.age = 10; // 에러, person2의 타입에 age가 없음

// 타입 단어 사용
let person3: Person = {} as Person;
person3.name = "Kim";
person3.age = 10;

type Dog = {
    name: string;
    color: string;
};

let dog1: Dog = {
    name: "dog",
    color: "white"
};

let dog2: Dog = {
    name: "dog",
    color: "white",
    // breed: "Poodle" // 에러, 타입 지정시 프로퍼티 필요함
};

// 타입 단어 사용
let dog3: Dog = {
    name: "dog",
    color: "white",
    breed: "Poodle"
} as Dog;


/**
 * 타입 단언의 규칙
 */
let num1 = 10 as never; // 10은 never의 슈퍼타입
let num2 = 10 as unknown; // 10은 unknown의 서브타입
// let num3 = 10 as string; // 에러, 단언하려면 슈퍼타입이거나 서브타입이어야 함
let num4 = 10 as unknown as string; // 가능, but 비추천

/**
 * const 단언
 */
let num5 = 10 as const; // num5는 10의 리터럴 타입

let cat1 = {
    name: "야옹이",
    color: "white"
};

let cat2: { readonly name: string; readonly color: string } = {
    name: "야옹이",
    color: "white"
};

let cat3 = {
    name: "야옹이",
    color: "white"
} as const; // cat3는 const 단어시 readonly로 설정됨

/**
 * Non Null 단언
 */
type Post = {
    title: string;
    author?: string;
};

let post: Post = {
    title: "title",
    author: "author"
}

// const len: number = post.author?.length; // 옵셔널 체이닝으로 인해 author가 undefined일 수 있음
const len: number = post.author!.length; // Non Null 단언으로 author가 undefined가 아님을 명시
