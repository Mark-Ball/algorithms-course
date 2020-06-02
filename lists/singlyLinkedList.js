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

    set(index, value) {
        let node = this.get(index);
        if (node) {
            node.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === 0) {
            this.unshift(value);
        } else if (index === this.length) {
            this.push(value);
        } else {
            const node = new Node(value);
            const previousNode = this.get(index - 1);
            node.next = previousNode.next
            previousNode.next = node;
            this.length++;
        }
        return true;
    }
}

module.exports = [Node, SinglyLinkedList];