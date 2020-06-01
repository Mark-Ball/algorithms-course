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

    unshift(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    get(n) {
        if (n < 0 || n >= this.length) {
            return null;
        }
        let node = this.head;
        for (let i = 0; i < n; i++) {
            node = node.next;
        }
        return node;
    }
}

module.exports = [Node, SinglyLinkedList];