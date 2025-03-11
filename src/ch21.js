/**
 * 클래스
 */
// 객체 리터럴
let studentB = {
    name: '슈퍼맨',
    grade: 'A',
    age: 20,
    study() {
        console.log(`${this.name}이(가) 공부합니다.`);
    },
    introduce() {
        console.log(`제 이름은 ${this.name}이고, 성적은 ${this.grade}입니다.`);
    }
};



class Student {
    // 필드
    name;
    grade;
    age;

    // 생성자
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    // 메서드
    study() {
        console.log(`${this.name}이(가) 공부합니다.`);
    }

    introduce() {
        console.log(`제 이름은 ${this.name}이고, 성적은 ${this.grade}입니다.`);
    }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스스
let studentA = new Student('홍길동', "A+", 20);

studentA.study();
studentA.introduce();

// 상속
class StudentDeveloper extends Student {
    favoriteSkill;

    constructor(name, grade, age, language, favoriteSkill) {
        super(name, grade, age);
        this.language = language;
    }

    programming() {
        console.log(`${this.name}이(가) ${this.language}로 코딩합니다.`);
    }
}
let studentDeveloper = new StudentDeveloper('아무개', "C+", 40, 'JavaScript');
studentDeveloper.study();
studentDeveloper.introduce();
studentDeveloper.programming();