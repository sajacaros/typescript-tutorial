/**
 * 맵드 타입
 */

interface User {
    id: number;
    name: string;
    age: number;
}

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): User{
    return {
        id: 1,
        name: "duk",
        age: 30
    }
}

function updateUser(user: User) {
    // 수정하는 기능
}

// updateUser({ // 에러, id, name, age 필수
//     age: 25,
// });

type PartialUser = {
    [key in "id" | "name" | "age"]?: User[key];
}

function updateUser2(user: PartialUser) {
    // 수정하는 기능
}

updateUser2({ 
    age: 25,
});

type BooleanUSer = { // 프로퍼티 자료형 바꾸기
    [key in 'id' | "name" | "age"]: boolean;
}

type ReadOnlyUser = { // read only
    readonly [key in 'id' | "name" | "age"]: User[key] 
};

type ReadOnlyUser2 = { // keyof 활용
    readonly [key in keyof User]: User[key] 
};