/**
 * unknown 타입
 */
function unknownExam() {
    let a: unknown = 1; // 업캐스팅
    let b: unknown = "hello";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    // let unknownVar: unknown;
    // let num: number = unknownVar; // 다운 캐스팅
    // let str: string = unknownVar;
}

/**
 * never 타입
 * 모든 타입의 서브 타입
 * 공집합
 */
function neverExam() {
    function neverFunc(): never {
        while(true) {}
    }

    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    // let never1: never = 10; // 다운 캐스팅
    // let never2: never = "hello";
    // let never3: never = true;
}

/**
 * void 타입
 */
function voidExam() {
    function voidFunc(): void { // 업캐스팅
        console.log("hi");
        return undefined;
    }
}

/**
 * any 타입
 * 치트키
 */
function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverType: never;

    anyVar = unknownVar; // 업 캐스팅
    undefinedVar = anyVar; // any는 다운 캐스팅
    // neverType = anyVar // never는 공집합이므로 제외
}