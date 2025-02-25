/**
 * 타입 추론
 *  -> 점진적인 타입 시스템  
 *      -> 타입 추론은 타입스크립트가 자동으로 타입을 추론하는 것을 의미
 */
let a = 10;
let b = "hello";
let c = {
    id: 1,
    name: "Kim",
    profile: {
        nickName: "KimCoding"
    },
    urls: ["naver.com", "google.com"]
};

let { id, name, profile, urls } = c;

let [one, two, three] = [1, "hello", true]

function func(message="hello") {
    return "hello";
}

// ===============================================
let d; // 암묵적인 any 타입

d = 10; // number
d.toFixed();

d = "hello"; // string
d.toUpperCase();
// d.toFixed(); // 에러

// ===============================================
let e: any; // any 타입

e = 10; // any
e.toFixed();

e = "hello"; // any
e.toUpperCase();
// e.toFixed(); // 에러

// ===============================================
const num = 10; // const num: 10
const str = "hello"; // const str: "hello"
const arr = [1, "string", true]; // (string | number | boolean)[]