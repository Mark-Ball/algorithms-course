const [Node, DoublyLinkedList] = require('./doublyLinkedList');

describe('Node class tests', () => {
    test('Node has a data property', () => {
        const node = new Node('a');
        expect(node.data).toEqual('a');
    });

    test('Node has a next property set to null', () => {
        const node = new Node('a');
        expect(node.next).toEqual(null);
    });

    test('Node has a prev property set to null', () => {
        const node = new Node('a');
        expect(node.prev).toEqual(null);
    });
});

describe('DoublyLinkedList tests', () => {
    describe('Class tests', () => {
        test('Class has a head property', () => {
            const list = new DoublyLinkedList();
            expect(list.head).toEqual(null);
        });

        test('Class has a tail property', () => {
            const list = new DoublyLinkedList();
            expect(list.tail).toEqual(null);
        });
        test('Class has a length property', () => {
            const list = new DoublyLinkedList();
            expect(list.length).toEqual(0);
        });
    });

    describe('Push method tests', () => {
        test('Works if list is empty', () => {
            const list = new DoublyLinkedList();
            list.push('a');
            expect(list.head.data).toEqual('a');
            expect(list.head.next).toEqual(null);
            expect(list.head.prev).toEqual(null);
            expect(list.tail.data).toEqual('a');
            expect(list.tail.next).toEqual(null);
            expect(list.tail.prev).toEqual(null);
            expect(list.length).toEqual(1);
        });

        test('Works if list has an item in it', () => {
            const list = new DoublyLinkedList();
            list.push('a');
            list.push('b');
            expect(list.head.data).toEqual('a');
            expect(list.head.next.data).toEqual('b');
            expect(list.head.prev).toEqual(null);
            expect(list.tail.data).toEqual('b');
            expect(list.tail.prev.data).toEqual('a');
            expect(list.tail.next).toEqual(null);
            expect(list.length).toEqual(2);
        });
    });

    describe('Pop method tests', () => {
        test('Works on an empty list', () => {
            const list = new DoublyLinkedList();
            const returned = list.pop();
            expect(returned).toEqual(undefined);
            expect(list.head).toEqual(null);
            expect(list.tail).toEqual(null);
            expect(list.length).toEqual(0);
        });
        
        test('Works on a list with 1 element', () => {
            const list = new DoublyLinkedList();
            list.push('a');
            const returned = list.pop();
            expect(returned instanceof Node).toEqual(true);
            expect(returned.data).toEqual('a');
            expect(returned.prev).toEqual(null);
            expect(returned.next).toEqual(null);
            expect(list.head).toEqual(null);
            expect(list.tail).toEqual(null);
            expect(list.length).toEqual(0);
        });

        test('Works on a list with multiple elements', () => {
            const list = new DoublyLinkedList();
            list.push('a');
            list.push('b');
            list.push('c');
            const returned = list.pop();
            expect(returned instanceof Node).toEqual(true);
            expect(returned.data).toEqual('c');
            expect(returned.prev).toEqual(null);
            expect(returned.next).toEqual(null);
            expect(list.head.data).toEqual('a');
            expect(list.head.prev).toEqual(null);
            expect(list.head.next.data).toEqual('b');
            expect(list.tail.data).toEqual('b');
            expect(list.tail.prev.data).toEqual('a');
            expect(list.tail.next).toEqual(null);
            expect(list.length).toEqual(2);
        });
    });

    describe('Shift method tests', () => {
        test('Works on an empty list', () => {
            const list = new DoublyLinkedList();
            const returned = list.shift();
            expect(returned).toEqual(undefined);
            expect(list.head).toEqual(null);
            expect(list.tail).toEqual(null);
            expect(list.length).toEqual(0);
        });

        test('Works on a list with 1 element', () => {
            const list = new DoublyLinkedList();
            list.push('a');
            const returned = list.shift();
            expect(returned instanceof Node).toEqual(true);
            expect(returned.data).toEqual('a');
            expect(returned.prev).toEqual(null);
            expect(returned.next).toEqual(null);
            expect(list.head).toEqual(null);
            expect(list.tail).toEqual(null);
            expect(list.length).toEqual(0);
        });

        test('Works on a list with multiple elements', () => {
            const list = new DoublyLinkedList();
            list.push('a');
            list.push('b');
            list.push('c');
            const returned = list.shift();
            expect(returned instanceof Node).toEqual(true);
            expect(returned.data).toEqual('a');
            expect(returned.prev).toEqual(null);
            expect(returned.next).toEqual(null);
            expect(list.head.data).toEqual('b');
            expect(list.head.prev).toEqual(null);
            expect(list.head.next.data).toEqual('c');
            expect(list.tail.data).toEqual('c');
            expect(list.tail.prev.data).toEqual('b');
            expect(list.tail.next).toEqual(null);
            expect(list.length).toEqual(2);
        });
    });

    describe('Unshift method tests', () => {
        test('Works on an empty list', () => {
            const list = new DoublyLinkedList();
            const returned = list.unshift('a');
            expect(returned instanceof DoublyLinkedList).toEqual(true);
            expect(returned.head.data).toEqual('a');
            expect(returned.head.prev).toEqual(null);
            expect(returned.head.next).toEqual(null);
            expect(returned.tail.data).toEqual('a');
            expect(returned.tail.prev).toEqual(null);
            expect(returned.tail.next).toEqual(null);
            expect(returned.length).toEqual(1);
            expect(list.head.data).toEqual('a');
            expect(list.head.prev).toEqual(null);
            expect(list.head.next).toEqual(null);
            expect(list.tail.data).toEqual('a');
            expect(list.tail.prev).toEqual(null);
            expect(list.tail.next).toEqual(null);
            expect(list.length).toEqual(1);
        });

        test('Works on a list with 1 element', () => {
            const list = new DoublyLinkedList();
            list.push('b');
            const returned = list.unshift('a');
            expect(returned instanceof DoublyLinkedList).toEqual(true);
            expect(returned.head.data).toEqual('a');
            expect(returned.head.prev).toEqual(null);
            expect(returned.head.next.data).toEqual('b');
            expect(returned.tail.data).toEqual('b');
            expect(returned.tail.prev.data).toEqual('a');
            expect(returned.tail.next).toEqual(null);
            expect(returned.length).toEqual(2);
            expect(list.head.data).toEqual('a');
            expect(list.head.prev).toEqual(null);
            expect(list.head.next.data).toEqual('b');
            expect(list.tail.data).toEqual('b');
            expect(list.tail.prev.data).toEqual('a');
            expect(list.tail.next).toEqual(null);
            expect(list.length).toEqual(2);
        });

        test('Works on a list with multiple elements', () => {
            const list = new DoublyLinkedList();
            list.push('b');
            list.push('c');
            const returned = list.unshift('a');
            expect(returned instanceof DoublyLinkedList).toEqual(true);
            expect(returned.head.data).toEqual('a');
            expect(returned.head.next.data).toEqual('b');
            expect(returned.head.next.next.data).toEqual('c');
            expect(returned.tail.data).toEqual('c');
            expect(returned.length).toEqual(3);
            expect(list.head.data).toEqual('a');
            expect(list.head.next.data).toEqual('b');
            expect(list.head.next.next.data).toEqual('c');
            expect(list.tail.data).toEqual('c');
            expect(list.length).toEqual(3);
        });
    });

    describe('Get method tests', () => {
        test('Works on an empty list', () => {
            const list = new DoublyLinkedList();
            const returned = list.get(1);
            expect(returned).toEqual(null);
        });

        test('Works if the index < 0', () => {
            const list = new DoublyLinkedList();
            list.push('a');
            const returned = list.get(-1);
            expect(returned).toEqual(null);
        });

        test('Works if the index >= length', () => {
            const list = new DoublyLinkedList();
            list.push('a');
            const returned = list.get(2);
            expect(returned).toEqual(null);
        });

        test('Retrieves a node in the first half of the list', () => {
            const list = new DoublyLinkedList();
            list.push('a');
            list.push('b');
            list.push('c');
            list.push('d');
            list.push('e');
            const returned = list.get(1);
            expect(returned.data).toEqual('b');
        });

        test('Retrieves the middle node', () => {
            const list = new DoublyLinkedList();
            list.push('a');
            list.push('b');
            list.push('c');
            list.push('d');
            list.push('e');
            const returned = list.get(2);
            expect(returned.data).toEqual('c');
        });

        test('Retrieves a node in the second half of the list', () => {
            const list = new DoublyLinkedList();
            list.push('a');
            list.push('b');
            list.push('c');
            list.push('d');
            list.push('e');
            const returned = list.get(4);
            expect(returned.data).toEqual('e');
        });
    });
});