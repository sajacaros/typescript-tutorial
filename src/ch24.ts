/**
 * 인터페이스와 클래스
 */
interface CharacterInterface {
    name: string;
    moveSpeed: number;
    move(): void;
}

class Character implements CharacterInterface {
    constructor(public name: string, public moveSpeed: number) { // 인터페이스는 public 접근제어자만 가능
    }

    move() {
        console.log(`${this.name}이(가) 이동합니다.`);
    }
}