// 타입 별칭과 인덱스 시그니처
// 타입 별칭
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: String;
    bio: string;
    location: string;
}

let user1: User = {
    id: 1,
    name: 'Neo',
    nickname: 'The One',
    birth: '1977-09-02',
    bio: 'I am the one',
    location: 'Zion'
};

let user2: User = {
    id: 2,
    name: 'Trinity',
    nickname: 'The Trinity',
    birth: '1978-11-20',
    bio: 'I love Neo',
    location: 'Zion'
}

// 인덱스 시그니처
type CountryCodes = {
    [key: string]: string;
};

let countryCodes: CountryCodes = {
    korea: 'ko',
    UnitedStates: 'us',
    UnitedKingdom: 'uk',
    China: 'cn'
};

type CountryNumberCode = {
    [key: string]: number;
}

let countryNumberCode: CountryNumberCode = {
    korea: 82,
    UnitedStates: 1,
    UnitedKingdom: 44,
    China: 86
}

let countryNumberEmpty: CountryNumberCode = {
}

type CountryNumberCode2 = {
    [key: string]: number;
    korea: number
}

// 에러, korea 속성이 있어야 함
// let countryNumberEmpty2: CountryNumberCode2 = {
// } 

let countryNumberEmpty3: CountryNumberCode = {
    korea: 82
}