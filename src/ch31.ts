/** 
 * 인덱스드 엑세스 타입
 */

interface Post {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
    };
}

const post: Post = {
    title: "제목",
    content: "본문",
    author: {
        id: 1,
        name: "duk"
    }
};

function printAuthorInfo(author: {id: number; name: string}) { // Post의 author가 변경된다면 함수 매개변수도 변경되어야 함
    console.log(`${author.name}-${author.id}`);
}

printAuthorInfo(post.author);


function printAuthorInfo2(author: Post["author"]) {  // 인덱스드 엑세스 타입
    console.log(`${author.name}-${author.id}`);
}

printAuthorInfo2(post.author);


const key = "author";
// function printAuthorInfo3(author: Post[key]) {  // error, "author"는 값이 아니라 타입임
//     console.log(`${author.name}-${author.id}`);
// }

function printAuthorInfo4(id: Post["author"]["id"]) {  // 인덱스드 엑세스 타입
    console.log(`${id}`);
}

printAuthorInfo4(post.author.id);


// 배열 타입 처리
type PostList = Post[];

const post2: PostList[number] = { 
    title: "게시글",
    content: "본문",
    author: {
        id: 1,
        name: "du"
    }
}

const post3: PostList[0] = { // 0은 타입
    title: "게시글",
    content: "본문",
    author: {
        id: 1,
        name: "du"
    }
}

function printAuthorInfo5(author: PostList[number]["author"]) {  // 배열타입 접근근
    console.log(`${author.id}-${author.name}`);
}

// tuple
type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
// type Tup3 = Tup[3]; // 에러, 3번째 타입 없음
type Tup3 = Tup[number]; // tuple에 있는 공통 타입 추출