/**
 * 함수 오버로딩
 * 하나의 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 만드는 문법법
 */

// 오버로드 시그니처
function func(a: number): void;
function func(a: number, b: number, c: number): void; // 구현부가 있으면 에러 사라짐

// 구현 시그니처처
// function func(a: number, b: number, c: number) {} // 오버로드 시그니처에서 에러, func(a: number): void; 구현부가 없으면 에러
function func(a: number, b?: number, c?: number) {} // 선택적 프로퍼티로 정의하여 오버로드 시그니처에 의미 부여
func(1);
// func(1, 2); // 에러, 인수가 2개인 시그니처가 없음
func(1, 2 ,3);