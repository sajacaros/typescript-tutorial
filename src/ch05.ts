// enum 타입
enum Role {
    ADMIN = 1,
    USER = 2,
    GUEST = 3,
}

const user1 = {
    name: 'Neo',
    role: Role.ADMIN // 1
};

const user2 = {
    name: 'Trinity',
    role: Role.USER // 2
};

const user3 = {
    name: 'Morpheus',
    role: Role.GUEST // 3
};

console.log(user1, user2, user3);

enum Role2 {
    ADMIN,
    USER = 10,
    GUEST
}

const user4 = {
    name: 'Neo',
    role: Role2.ADMIN // 0
};

const user5 = {
    name: 'Trinity',
    role: Role2.USER // 10
};

const user6 = {
    name: 'Morpheus',
    role: Role2.GUEST // 11
};

console.log(user4, user5, user6);

enum Language {
    English = 'en',
    Korean = 'ko',
}

const user7 = {
    name: 'Neo',
    language: Language.English // 'en'
};

console.log(user7);