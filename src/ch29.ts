/**
 * 제네릭 클래스
 */

class NumberList {
    constructor(private list: number[]) {}

    push(data: number) {
        this.list.push(data);
    }

    pop() {
        return this.list.pop();
    }

    print() {
        console.log(this.list);
    }
}

const numberList = new NumberList([1,2,3]);

numberList.pop();
numberList.push(4);
numberList.print()

class List<T> {
    constructor(private list: T[]) {}

    push(data: T) {
        this.list.push(data);
    }

    pop() {
        return this.list.pop();
    }

    print() {
        console.log(this.list);
    }
}

const stringList = new List(["h", "e", "l", "l"]);

stringList.pop();
stringList.push("o");
stringList.print()

const numberList2 = new List([1,2,3,4]);

numberList2.pop();
numberList2.push(5);
numberList2.print()