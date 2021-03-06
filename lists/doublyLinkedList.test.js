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

    describe('Set method tests', () => {
        test('Works on an empty list', () => {
            const list = new DoublyLinkedList();
            const returned = list.set(0, 'x');
            expect(returned).toEqual(false);
            expect(list.head).toEqual(null);
            expect(list.tail).toEqual(null);
        });

        test('Works if the index is < 0', () => {
            const list = new DoublyLinkedList();
            list.push('a');
            const returned = list.set(-1, 'x');
            expect(returned).toEqual(false);
            expect(list.head.data).toEqual('a');
            expect(list.tail.data).toEqual('a');
        });

        test('Works if the index is >= length', () => {
            const list = new DoublyLinkedList();
            list.push('a');
            const returned = list.set(2, 'x');
            expect(returned).toEqual(false);
            expect(list.head.data).toEqual('a');
            expect(list.tail.data).toEqual('a');
        });

        test('Works if list has 1 item', () => {
            const list = new DoublyLinkedList();
            list.push('a');
            const returned = list.set(0, 'x');
            expect(returned).toEqual(true);
            expect(list.head.data).toEqual('x');
            expect(list.tail.data).toEqual('x');
        });

        test('Works if list has multiple items', () => {
            const list = new DoublyLinkedList();
            list.push('a');
            list.push('b');
            list.push('c');
            const returned = list.set(1, 'x');
            expect(returned).toEqual(true);
            expect(list.head.data).toEqual('a');
            expect(list.head.next.data).toEqual('x');
            expect(list.head.next.next.data).toEqual('c');
        });
    });

    describe('Insert method tests', () => {
        test('Works if index < 0', () => {
            const list = new DoublyLinkedList();
            const returned = list.insert(-1, 'a');
            expect(list.head).toEqual(null);
            expect(list.tail).toEqual(null);
            expect(returned).toEqual(false);
        });

        test('Works if index >= length', () => {
            const list = new DoublyLinkedList();
            const returned = list.insert(3, 'a');
            expect(list.head).toEqual(null);
            expect(list.tail).toEqual(null);
            expect(returned).toEqual(false);
        });

        test('Works if inserting at the head', () => {
            const list = new DoublyLinkedList();
            const returned = list.insert(0, 'a');
            expect(returned).toEqual(true);
            expect(list.head.data).toEqual('a');
            expect(list.head.prev).toEqual(null);
            expect(list.head.next).toEqual(null);
            expect(list.tail.data).toEqual('a');
            expect(list.tail.prev).toEqual(null);
            expect(list.tail.next).toEqual(null);
            expect(list.length).toEqual(1);
        });

        test('Works if inserting at the tail', () => {
            const list = new DoublyLinkedList();
            list.push('a');
            list.push('b');
            const returned = list.insert(2, 'c');
            expect(returned).toEqual(true);
            expect(list.head.data).toEqual('a');
            expect(list.head.next.data).toEqual('b');
            expect(list.head.next.next.data).toEqual('c');
            expect(list.tail.data).toEqual('c');
            expect(list.length).toEqual(3);
        });

        test('Works if inserting in the middle', () => {
            const list = new DoublyLinkedList();
            list.push('a');
            list.push('c');
            list.push('d');
            const returned = list.insert(1, 'b');
            expect(returned).toEqual(true);
            expect(list.head.data).toEqual('a');
            expect(list.head.next.data).toEqual('b');
            expect(list.head.next.next.data).toEqual('c');
            expect(list.head.next.next.next.data).toEqual('d');
            expect(list.tail.data).toEqual('d');
            expect(list.length).toEqual(4);
        });
    });

    describe('Remove method tests', () => {
        test('Works if index < 0', () => {
            const list = new DoublyLinkedList();
            const returned = list.remove(-2);
            expect(returned).toEqual(false);
        });

        test('Works if index > length', () => {
            const list = new DoublyLinkedList();
            const returned = list.remove(2);
            expect(returned).toEqual(false);
        });

        test('Removes first element', () => {
            const list = new DoublyLinkedList();
            list.push('a').push('b').push('c');
            const returned = list.remove(0);
            expect(returned.data).toEqual('a');
            expect(returned.prev).toEqual(null);
            expect(returned.next).toEqual(null);
            expect(list.head.data).toEqual('b');
            expect(list.tail.data).toEqual('c');
            expect(list.length).toEqual(2);
        });
        test('Removes last element', () => {
            const list = new DoublyLinkedList();
            list.push('a').push('b').push('c');
            const returned = list.remove(2);
            expect(returned.data).toEqual('c');
            expect(returned.prev).toEqual(null);
            expect(returned.next).toEqual(null);
            expect(list.head.data).toEqual('a');
            expect(list.tail.data).toEqual('b');
            expect(list.length).toEqual(2);
        });

        test('Removes middle element', () => {
            const list = new DoublyLinkedList();
            list.push('a').push('b').push('c');
            const returned = list.remove(1);
            expect(returned.data).toEqual('b');
            expect(returned.prev).toEqual(null);
            expect(returned.next).toEqual(null);
            expect(list.head.data).toEqual('a');
            expect(list.tail.data).toEqual('c');
            expect(list.length).toEqual(2);
        });
    });
});