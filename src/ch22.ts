/**
 * 타입스크립트의 클래스
 */

const employee = {
    name: '홍길동',
    age: 36,
    position: "developer",
    work() {
        console.log("일을 합니다.");
    }
};

class Employee {
    // 필드
    name: string;
    age: number;
    position: string;

    // 생성자
    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    // 메서드
    work() {
        console.log(`${this.name}은 일을 합니다.`);
    }
}

const employee1 = new Employee("홍길동", 36, "developer");
console.log(employee1); // 홍길동


// 타입스크립트는 클래스를 사용할 때 타입을 지정할 수 있음
const employee2: Employee = {
    name: "홍길동",
    age: 36,
    position: "developer",
    work() {
        console.log("일을 합니다.");
    }
};

// 상속
class ExectiveOfficer extends Employee {
    // 필드
    officeNumber: number;

    // 생성자
    constructor(name: string, age: number, position: string, officeNumber: number) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
}