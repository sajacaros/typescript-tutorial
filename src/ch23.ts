/**
 * 접근 제어자
 * access modifier
 * => public private protected
 */

class Employee {
    // 필드
    name: string; // 기본 public
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
        console.log("{this.name}은 일을 합니다.");
    }
}

const employee = new Employee("홍길동", 36, "developer");
employee.name = "홍길동"; // 기본 접근 제어자는 public이므로 접근 가능
employee.age = 36;
employee.position = "developer";


class Employee2 {
    // 필드
    private name: string; // private으로 선언하면 클래스 내부에서만 접근 가능
    protected age: number; // protected로 선언하면 클래스 내부와 상속받은 클래스에서만 접근 가능
    position: string; // 기본 public

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

const employee2 = new Employee2("홍길동", 36, "developer");
// employee2.name = "홍길동"; // private은 접근 불가

// 상속
class ExectiveOfficer extends Employee2 {
    // 필드
    officeNumber: number;

    // 생성자
    constructor(name: string, age: number, position: string, officeNumber: number) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }

    // 메서드
    work() {
        // console.log(`${this.name} 회사를 경영합니다.`); // private은 접근 불가
        console.log(`${this.age} 세 입니다.`); // private은 접근 불가
        console.log(`${this.position} 입니다.`); // private은 접근 불가
    }
}

class Employee3 {
    // 생성자, 접근 제어자를 이용해 필드 선언과 초기화를 한번에 작성
    constructor(private name: string, protected age: number, public position: string) {}

    // 메서드
    work() {
        console.log(`${this.name}은 일을 합니다.`);
    }
}