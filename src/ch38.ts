/**
 * Partial<T>
 * -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */
interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailUrl?: string;    
}

type Partial<T> = {
    [key in keyof T]?: T[key];
}

// const draft1: Post = { // 에러, content 프로퍼티가 없음
//     title: "최신 타입스크립트 강좌",
//     content: "초암",
// };
const draft: Partial<Post> = {
    title: "최신 타입스크립트 강좌",
    content: "초암",
};

/**
 * Required<T>
 * -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

type Required<T> = {
    [key in keyof T]-?: T[key]; // -?를 사용하여 선택적 프로퍼티를 필수 프로퍼티로 변경
}

const withThumbnail: Required<Post> = {
    title: "최신 타입스크립트 강좌",    
    tags: ["typescript"],
    content: "초암",
    thumbnailUrl: "https://example.com",
};

/**
 * Readonly<T>
 * -> 특정 객체 타입의 모든 프로퍼티를 읽기 전용으로 바꿔주는 타입
 */
type Readonly<T> = {
    readonly [key in keyof T]: T[key];
}

const readOnlyPost: Readonly<Post> = {
    title: "최신 타입스크립트 강좌",
    tags: ["typescript"],
    content: "초암",
};
// readOnlyPost.title = "타입스크립트 입문"; // 에러, 읽기 전용 프로퍼티

/**
 * Pick<T, K>
 * -> 특정 객체 타입 T에서 K라는 프로퍼티만 선택하여 타입을 만들어주는 타입
 */
type Pick<T, K extends keyof T> = { // K에 아무거나 못 들어오도록 T의 프로퍼티 타입으로 제한해둠
    [key in K]: T[key];
}
const legacyPost: Pick<Post, "title" | "content"> = {
    title: "최신 타입스크립트 강좌",
    content: "초암",
    // tag 프로퍼티가 없어도 에러가 안남
};

/**
 * Omit<T, K>
 * -> 특정 객체 타입 T에서 K라는 프로퍼티를 제외한 타입을 만들어주는 타입
 */
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = "title"
// Pick<Post, Exclude<keyof Post, "title">>
// Pick<Post, Exclude<"title" | "tags" | "content" | "thumbnailUrl", "title">>
// Pick<Post, "tags" | "content" | "thumbnailUrl">
const withoutThumbnail: Omit<Post, "title"> = {
    tags: ["typescript"],
    content: "초암",
};

/**
 * Record<K, T>
 * -> K라는 프로퍼티 키를 가진 T라는 타입을 만들어주는 타입
 */

type ThumbnailLegacy = { // 구조적 중복이 심함
    large: {
        url: string;
    };
    medium: {
        url: string;
    };
    small: {
        url: string;
    };
    watch: {
        url: string;
    };
};

type Record<K extends keyof any, V> = {
    [key in K]: V;  
};
type Thumbnail = Record<"large" | "medium" | "small" | "watch", { url: string, suze: number }>;