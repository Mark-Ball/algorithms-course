class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) {
            return undefined;
        }

        const tail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            tail.prev = null;
        }
        this.length--;
        return tail;
    }

    shift() {
        if (!this.head) {
            return undefined;
        }

        const head = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            head.next = null;
        }
        this.length--;
        return head;
    }

    unshift(data) {
        const node = new Node(data);
        if (!this.head) {
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
        }
        this.head = node;
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }

        let node;
        if (index < this.length / 2) {
            node = this.head;
            for (let i = 0; i < index; i++) {
                node = node.next;
            }
        } else {
            node = this.tail;
            for (let i = 0; i < this.length - index - 1; i++) {
                node = node.prev;
            }
        }
        return node;
    }

    set(index, data) {
        const node = this.get(index);
        if (!node) {
            return false;
        }
        node.data = data;
        return true;
    }

    insert(index, data) {
        // add a node at a certain position
        // return true or false
        if (index === 0) {
            this.unshift(data);
            return true;
        } else if (index === this.length) {
            this.push(data);
            return true;
        }
        const prevNode = this.get(index - 1);
        if (!prevNode) {
            return false;
        }
        const node = new Node(data);
        const nextNode = prevNode.next;
        prevNode.next = node;
        node.prev = prevNode;
        node.next = nextNode;
        nextNode.prev = node;
        return true;
    }
}

module.exports = [Node, DoublyLinkedList];