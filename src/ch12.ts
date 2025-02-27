import { stat } from "fs";

/**
 * 서로소 유니온 타입
 * -> 교집합이 없는 타입들로만 만든 유니온 타입
 */
type Admin = {
    name: string;
    kickCount: number;
};

type Member = {
    name: string;
    point: number;
};

type Guest = {
    name: string;
    visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> kickCount 사용 가능
// Member -> point 사용 가능
// Guest -> visitCount 사용 가능
function login(user: User) {
    if ("kickCount" in user) {
        console.log(`${user.name}님 ${user.kickCount}번 강퇴했습니다.`);
    } else if ("point" in user) {
        console.log(`${user.name}님 ${user.point}가 쌓였습니다.`);
    } else if ("visitCount" in user) {
        console.log(`${user.name}님 ${user.visitCount}번 방문했습니다.`);
    }
}

login({ name: "Kim", kickCount: 0 });


// tag 프로퍼티를 이용하여 서로소기반 타입 가드 지정
type AdminTag = {
    tag: "ADMIN";
    name: string;
    kickCount: number;
};

type MemberTag = {
    tag: "MEMBER";
    name: string;
    point: number;
};

type GuestTag = {
    tag: "GUEST";
    name: string;
    visitCount: number;
};

type UserTag = AdminTag | MemberTag | GuestTag;

function loginTag(user: UserTag) {
   if(user.tag === "ADMIN") {
       console.log(`${user.name}님 ${user.kickCount}번 강퇴했습니다.`);
   } else if(user.tag === "MEMBER") {
       console.log(`${user.name}님 ${user.point}가 쌓였습니다.`);
   } else if(user.tag === "GUEST") {
       console.log(`${user.name}님 ${user.visitCount}번 방문했습니다.`);
   }
}

loginTag({ name: "Kim", kickCount: 0, tag: "ADMIN" });

function loginSwitch(user: UserTag) {
    switch(user.tag) {
        case "ADMIN":
            console.log(`${user.name}님 ${user.kickCount}번 강퇴했습니다.`);
            break;
        case "MEMBER":
            console.log(`${user.name}님 ${user.point}가 쌓였습니다.`);
            break;
        case "GUEST":
            console.log(`${user.name}님 ${user.visitCount}번 방문했습니다.`);
            break;
     }
}
 
 loginSwitch({ name: "Kim", kickCount: 0, tag: "ADMIN" }); 

 /**
  * ex) 비동기 작업의 결과를 처리하는 서로소 예제
  */

 type LoadingTask = {
    state: "LOADING";
 };
 type FailedTask = {
    state: "FAILED";
    error: {
        message: string;
    };
 };
type SuccessTask = {
    state: "SUCCESS";
    response: {
        data: string;
    };
};
type AsyncTask = LoadingTask | FailedTask | SuccessTask;

function runTask(task: AsyncTask) {
    switch(task.state) {
        case "LOADING":
            console.log("로딩중...");
            break;
        case "FAILED":
            console.log(`실패: ${task.error.message}`);
            break;
        case "SUCCESS":
            console.log(`성공: ${task.response.data}`);
            break;
    }
}

runTask({ state: "LOADING" });