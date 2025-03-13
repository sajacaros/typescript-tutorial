/**
 * 프로미스
 */
const promise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(20);
    }, 3000);
});
console.log("비동기");
promise.then((response)=> {
    console.log(response);
    // console.log(response * 2); // 에러, unknown 타입
});

const promise2 = new Promise<number>((resolve, reject)=>{
    setTimeout(() => {
        resolve(20);
    }, 3000);
});
console.log("비동기2");
promise2.then((response)=> {
    console.log(response);
    console.log(response * 2); // number 타입
});

const promise3 = new Promise<number>((resolve, reject)=>{
    setTimeout(() => {
        reject("error");
    }, 3000);
});
promise3.catch((err)=> {
    if(typeof err === "string") {
        console.log(err);
    }
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */
interface Post {
    id: number;
    title: string;
    content: string;
}

function fetchPost() {
    return new Promise<Post>((resolve, reject)=> { // Promise에 타입 정의
        setTimeout(() => {
            resolve({
                id: 1,
                title: "제목",
                content: "내용"
            })
        }, 3000);
    });
}

const postResult = fetchPost();
postResult.then(post => {
    console.log(post.id);
});

function fetchPost2(): Promise<Post> { // 리턴 타입으로 정의
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve({
                id: 1,
                title: "제목",
                content: "내용"
            })
        }, 3000);
    });
}
const postResult2 = fetchPost2();
postResult2.then(post => {
    console.log(post.id);
});