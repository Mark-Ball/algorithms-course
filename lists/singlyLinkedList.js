class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) {
            return;
        }

        
        if (!this.head.next) {
            const removed = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return removed;
        }

        let pointer = this.head;
        while (pointer.next.next) {
            pointer = pointer.next;
        }
        const removed = this.tail;
        pointer.next = null;
        this.tail = pointer;
        this.length--;
        return removed;
    }

    shift() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            const removed = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return removed;
        }

        const removed = this.head;
        this.head = this.head.next;
        this.length--;
        return removed;
    }
}

const list = new SinglyLinkedList();
list.push('a');
list.push('b');
list.push('c');
// console.log(list.pop());
list.shift();
console.log(list);