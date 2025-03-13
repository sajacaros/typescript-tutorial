/**
 * map 메서드
 */

const arr = [1,2,3];
const newArr = arr.map(it=>it*2);
console.log(newArr);

function map<T>(arr: T[], callback:(item: T) => T) {
    let result = [];
    for(let i=0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }

    return result;
}

map(arr, (it) => it*2);
map(["hi", "hello"], (it) => it.toUpperCase());
// map(["hi", "hello"], (it) => it.length); // 에러 callback의 리턴은 T형(string) 인데 parseInt는 number를 리턴함

function map2<T, U>(arr: T[], callback:(item: T) => U) { // 매개변수 T와 U
    let result = [];
    for(let i=0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }

    return result;
}

map2(arr, (it) => it*2);
map2(["hi", "hello"], (it)=>it.toUpperCase());
console.log(map2(["hi", "hello"], (it)=>it.length)); 

/**
 * forEach
 */
const arr2 = [1,2,3];
arr2.forEach((it) => console.log(it));


function forEach<T>(arr: T[], callback: (it: T) => void) {
    for(let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

forEach(arr2, (it)=>console.log(it.toFixed()));