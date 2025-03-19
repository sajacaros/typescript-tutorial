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

type BooleanUSer = {
    [key in 'id' | "name" | "age"]: boolean;
}

type ReadOnlyUser = {
    [key in keyof User]: User[key] 
};