/**
 * 타입 좁히기: typeof
 * 조검문 등을 이용해 넓은 타입에서 좁은 타입으로 타입을 상황에 따라 좁히는 방법
 */

// value => number : toFixed 메서드 사용 가능
// value => string : toUpperCase 메서드 사용 불가능
function func(value: number | string) {
    if (typeof value === "number") { // typeof 연산자 사용
        console.log(value.toFixed());
    } else if(typeof value === "string") {
        console.log(value.toUpperCase());
    }
}

/**
 * 타입 가드: instanceof 연산자 사용
 */
// value => Date: getTime 메서드 사용 가능
function func2(value: number | string | Date) {
    if (typeof value === "number") {
        console.log(value.toFixed());
    } else if(typeof value === "string") {
        console.log(value.toUpperCase());
    } else if(typeof value === "object") {
        console.log(value.getTime());
    }
}

// value => Date: getTime 메서드 사용 가능
function func3(value: number | string | Date | null) {
    if (typeof value === "number") {
        console.log(value.toFixed());
    } else if(typeof value === "string") {
        console.log(value.toUpperCase());
    } else if(typeof value === "object") {
        // console.log(value.getTime()); // 에러 발생, null 타입도 object 타입에 포함되기 때문
    }
}

// value => Date: getTime 메서드 사용 가능
function func4(value: number | string | Date | null) {
    if (typeof value === "number") {
        console.log(value.toFixed());
    } else if(typeof value === "string") {
        console.log(value.toUpperCase());
    } else if(value instanceof Date) { // instanceof 연산자 사용
        console.log(value.getTime()); 
    }
}


/**
 * 타입 가드: in 연산자 사용
 */
type Person = {
    name: string;
    age: number;
}
// value => Person: name은 age살 입니다.
function func5(value: number | string | Date | null | Person) {
    if (typeof value === "number") {
        console.log(value.toFixed());
    } else if(typeof value === "string") {
        console.log(value.toUpperCase());
    } else if(value instanceof Date) {
        console.log(value.getTime()); 
    } 
    // else if(value instanceof Person) { // Person은 타입일 뿐 클래스가 아니기 때문에 instanceof 사용 불가
    //     console.log(`${value.name}은 ${value.age}살 입니다.`);
    // }
}

// value => Person: name은 age살 입니다.
function func6(value: number | string | Date | null | Person) {
    if (typeof value === "number") {
        console.log(value.toFixed());
    } else if(typeof value === "string") {
        console.log(value.toUpperCase());
    } else if(value instanceof Date) {
        console.log(value.getTime()); 
    } else if(value && 'age' in value) { // in 연산자 사용
        console.log(`${value.name}은 ${value.age}살 입니다.`);
    }

}