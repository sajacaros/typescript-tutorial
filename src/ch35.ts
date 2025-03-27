/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; // string
let varB: StringNumberSwitch<string>; // number

function removeSpaces(text: string) {
    return text.replaceAll(" ", "");
}

const result = removeSpaces("Hello World");
result.toUpperCase();


// string | undefined | null union 타입 사용시 에러 발생
function removeSpaces2(text: string | undefined | null) {
    if(typeof text === "string") {
        return text.replaceAll(" ", "");
    } else {
        return undefined;
    }
}

const result2 = removeSpaces2("Hello World");
// result2.toUpperCase(); // Error, result2가 undefined일 수 있기 때문에 에러 발생


// 제네릭을 사용하여 해결
function removeSpaces3<T>(text: T): T extends string ? string : undefined { // 조건부 타입
    if(typeof text === "string") {
        return text.replaceAll(" ", "") as any; // any로 타입을 강제로 지정
        // text가 string일 경우 replaceAll(" ", "")을 반환해야 하는데, 
        // TypeScript는 T extends string일 때 반환 타입이 string이 된다는 것을 확신하지 못함
        // 즉, T extends string ? string : undefined을 반환하려고 하지만, 
        // 타입 추론이 정확히 일어나지 않음
    } else {
        return undefined as any; // any로 타입을 강제로 지정
    }
}

const result3 = removeSpaces3("Hello World");
result3.toUpperCase(); 
const result4 = removeSpaces3(undefined);



// 오버로드 시그니처를 사용하여 해결
function removeSpaces4<T>(text: T): T extends string? string: undefined; // 오버로드 시그니처
function removeSpaces4(text: any) { // 타입스크립트가 조건부 타입 추론
    if(typeof text === "string") {
        return text.replaceAll(" ", "");
    } else {
        return undefined;
    }
}

const result5 = removeSpaces3("Hello World");
result3.toUpperCase(); 
const result6 = removeSpaces3(undefined);