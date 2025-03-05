/**
 * 함수 타입 정의 
 */
function func(a: number, b: number): number { // return number는 추론이 가능하므로 생략 가능
    return a + b;
}

/** 
 * 화살표 함수의 타입을 정의하는 방법
 */
const add = (a: number, b: number): number => a + b; // return number는 추론이 가능하므로 생략 가능

/**
 * 함수의 매개변수
 */
function introduce1(name = "dukim") { // default 값으로 타입 추론
    console.log(`안녕하세요, ${name}입니다.`);
}

function introduce2(name = "dukim", tall?: number) { 
    console.log(`안녕하세요, ${name}입니다.`);
    // console.log(`tail : ${tall + 10}`); // error, tall이 undefined 일 수 있음
}

function introduce3(name = "dukim", tall?: number) { 
    console.log(`안녕하세요, ${name}입니다.`);
    if(typeof tall === "number") { // type guard를 사용하여 number임을 확인
        console.log(`tail : ${tall + 10}`); 
    }
}

// function introduce4(name = "dukim", tall?: number, age: number) {  // error, 선택적 매개변수 뒤에 필수 매개변수가 올 수 없음
//     console.log(`안녕하세요, ${name}입니다.`);
//     if(typeof tall === "number") { 
//         console.log(`tail : ${tall + 10}`); 
//     }
// }

function introduce5(name = "dukim", age: number, tall?: number) {  
    console.log(`안녕하세요, ${name}/${age}입니다.`);
    if(typeof tall === "number") { 
        console.log(`tail : ${tall + 10}`); 
    }
}

introduce5('dukim', 10); // name parameter를 생략할 수 없음

function introduce6(age: number, name = "dukim", tall?: number) { 
    console.log(`안녕하세요, ${name}/${age}입니다.`);
    if(typeof tall === "number") { 
        console.log(`tail : ${tall + 10}`); 
    }
}

introduce6(10);
introduce6(10, 'sajacaros');
introduce6(10, 'sajacaros', 10);

function getSum1(...rest: number[]) {
    let sum = 0;
    rest.forEach((num) => sum += num);
    return sum;
}

getSum1(1,2,3);
getSum1(1,2,3,4,5,6);

function getSum2(...rest: [number, number, number]) { // 튜플을 이용하여 개수 제한
    let sum = 0;
    rest.forEach((num) => sum += num);
    return sum;
}

getSum2(1,2,3);
// getSum2(1,2,3,4,5,6); // 에러, 3개의 인자만 받을 수 있음