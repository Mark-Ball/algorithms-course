const [Node, SinglyLinkedList] = require('./SinglyLinkedList.js');

describe('Node class tests', () => {
    test('Node class exists', () => {
        expect(typeof(Node)).toEqual('function');
    });

    test('Node has value property', () => {
        const node = new Node('a');
        expect(node.value).toEqual('a');
    });

    test('Node has next property', () => {
        const node = new Node('b');
        expect(node.next).toEqual(null);
    });
});

describe('SinglyLinkedList class tests', () => {
    describe('Basic class functionality', () => {
        test('SinglyLinkedList has head, tail, and length properties', () => {
            const list = new SinglyLinkedList();
            expect(list.tail).toEqual(null);
            expect(list.head).toEqual(null);
            expect(list.length).toEqual(0);
        });
    });

    describe('Push method tests', () => {
        test('Works if list is empty', () => {
            const list = new SinglyLinkedList();
            list.push('a');
            expect(list.head instanceof Node).toEqual(true);
            expect(list.head.value).toEqual('a');
            expect(list.tail.value).toEqual('a');
            expect(list.length).toEqual(1);
        });

        test('Works if list has items', () => {
            const list = new SinglyLinkedList();
            list.push('a');
            list.push('b');
            list.push('c');
            expect(list.head.value).toEqual('a');
            expect(list.head.next.value).toEqual('b');
            expect(list.tail.value).toEqual('c');
            expect(list.length).toEqual(3);
        });

        test('Push returns the list', () => {
            const list = new SinglyLinkedList();
            const node = list.push('a');
            expect(node instanceof SinglyLinkedList).toEqual(true);
        })
    });

    describe('Pop method tests', () => {
        test('Works if list is empty', () => {
            const list = new SinglyLinkedList();
            expect(list.pop()).toEqual(undefined);
        });

        test('Works if list has 1 item', () => {
            const list = new SinglyLinkedList();
            list.push('a');
            const removed = list.pop();
            expect(list.head).toEqual(null);
            expect(list.tail).toEqual(null);
            expect(list.length).toEqual(0);
            expect(removed instanceof Node).toEqual(true);
            expect(removed.value).toEqual('a');
        });

        test('Works if list has more than 1 item', () => {
            const list = new SinglyLinkedList();
            list.push('a');
            list.push('b');
            list.push('c');
            const removed = list.pop();
            expect(list.head.value).toEqual('a');
            expect(list.tail.value).toEqual('b');
            expect(list.length).toEqual(2);
            expect(removed instanceof Node).toEqual(true);
            expect(removed.value).toEqual('c');
        });
    });

    describe('Shift method tests', () => {
        test('Works if list is empty', () => {
            const list = new SinglyLinkedList();
            const removed = list.shift();
            expect(list.head).toEqual(null);
            expect(list.tail).toEqual(null);
            expect(list.length).toEqual(0);
            expect(removed).toEqual(undefined);
        });

        test('Works if list has 1 item', () => {
            const list = new SinglyLinkedList();
            list.push('a');
            const removed = list.shift();
            expect(list.head).toEqual(null);
            expect(list.tail).toEqual(null);
            expect(list.length).toEqual(0);
            expect(removed.value).toEqual('a');
        });

        test('Works if list has 2 items', () => {
            const list = new SinglyLinkedList();
            list.push('a');
            list.push('b');
            const removed = list.shift();
            expect(list.head.value).toEqual('b');
            expect(list.tail.value).toEqual('b');
            expect(list.length).toEqual(1);
            expect(removed.value).toEqual('a');
        });

        test('Works if list has 3 items', () => {
            const list = new SinglyLinkedList();
            list.push('a');
            list.push('b');
            list.push('c');
            const removed = list.shift();
            expect(list.head.value).toEqual('b');
            expect(list.tail.value).toEqual('c');
            expect(list.length).toEqual(2);
            expect(removed.value).toEqual('a');
        });
    });

    describe('Unshift method tests', () => {
        test('Works if list is empty', () => {
            const list = new SinglyLinkedList();
            const returned = list.unshift('x');
            expect(list.head.value).toEqual('x');
            expect(list.tail.value).toEqual('x');
            expect(list.length).toEqual(1);
            expect(returned instanceof SinglyLinkedList).toEqual(true);
            expect(returned.head.value).toEqual('x');
            expect(returned.tail.value).toEqual('x');
            expect(returned.length).toEqual(1);
        });

        test('Works if list has 1 item', () => {
            const list = new SinglyLinkedList();
            list.push('a');
            const returned = list.unshift('x');
            expect(list.head.value).toEqual('x');
            expect(list.head.next.value).toEqual('a');
            expect(list.tail.value).toEqual('a');
            expect(list.length).toEqual(2);
            expect(returned instanceof SinglyLinkedList).toEqual(true);
            expect(returned.head.value).toEqual('x');
            expect(returned.head.next.value).toEqual('a');
            expect(returned.tail.value).toEqual('a');
            expect(returned.length).toEqual(2);
        });

        test('Works if list has 2 items', () => {
            const list = new SinglyLinkedList();
            list.push('a');
            list.push('b');
            const returned = list.unshift('x');
            expect(list.head.value).toEqual('x');
            expect(list.head.next.value).toEqual('a');
            expect(list.head.next.next.value).toEqual('b');
            expect(list.tail.value).toEqual('b');
            expect(list.length).toEqual(3);
            expect(returned instanceof SinglyLinkedList).toEqual(true);
            expect(returned.head.value).toEqual('x');
            expect(returned.head.next.value).toEqual('a');
            expect(returned.tail.value).toEqual('b');
            expect(returned.length).toEqual(3);
        });
    });

    describe('Get method tests', () => {
        test('Works if index is < 0', () => {
            const list = new SinglyLinkedList();
            const returned = list.get(-1);
            expect(returned).toEqual(null);
        });

        test('Works if index is >= length', () => {
            const list = new SinglyLinkedList();
            list.push('a');
            list.push('b');
            const returned = list.get(5);
            expect(returned).toEqual(null);
        });

        test('Works if list is empty', () => {
            const list = new SinglyLinkedList();
            const returned = list.get(0);
            expect(returned).toEqual(null);
        });

        test('Works if list has 1 item', () => {
            const list = new SinglyLinkedList();
            list.push('a');
            const returned = list.get(0);
            expect(returned instanceof Node).toEqual(true);
            expect(returned.value).toEqual('a');
            expect(returned.next).toEqual(null);
        });

        test('Works if list has 5 items', () => {
            const list = new SinglyLinkedList();
            list.push('a');
            list.push('b');
            list.push('c');
            list.push('d');
            list.push('e');
            const returned = list.get(3);
            expect(returned.value).toEqual('d');
            expect(returned.next.value).toEqual('e');
        });
    });

    describe('Set method tests', () => {
        test('Works with index < 0', () => {
            const list = new SinglyLinkedList();
            const returned = list.set(-1, 'x');
            expect(returned).toEqual(false);
        });

        test('Works with index >= length', () => {
            const list = new SinglyLinkedList();
            const returned = list.set(3, 'x');
            expect(returned).toEqual(false);
        });

        test('Works if list has 1 item', () => {
            const list = new SinglyLinkedList();
            list.push('a');
            const returned = list.set(0, 'b');
            expect(list.head.value).toEqual('b');
            expect(returned).toEqual(true);
        });

        test('Works if list has many items', () => {
            const list = new SinglyLinkedList();
            list.push('a');
            list.push('b');
            list.push('c');
            list.push('d');
            const returned = list.set(2, 'x');
            expect(list.head.next.next.value).toEqual('x');
            expect(returned).toEqual(true);
        });
    });

    describe('Insert method tests', () => {
        test('Works with index < 0', () => {
            const list = new SinglyLinkedList();
            const returned = list.insert(-1, 'a');
            expect(returned).toEqual(false);
            expect(list.head).toEqual(null);
            expect(list.tail).toEqual(null);
            expect(list.length).toEqual(0);
        });
        
        test('Works with index > length', () => {
            const list = new SinglyLinkedList();
            const returned = list.insert(3, 'b');
            expect(returned).toEqual(false);
            expect(list.head).toEqual(null);
            expect(list.tail).toEqual(null);
            expect(list.length).toEqual(0);
        });

        test('Works with index 0', () => {
            const list = new SinglyLinkedList();
            list.push('a');
            const returned = list.insert(0, 'b');
            expect(returned).toEqual(true);
            expect(list.head.value).toEqual('b');
            expect(list.head.next.value).toEqual('a');
            expect(list.tail.value).toEqual('a');
            expect(list.length).toEqual(2);
        });

        test('Works with index = length', () => {
            const list = new SinglyLinkedList();
            list.push('a');
            list.push('b');
            const returned = list.insert(2, 'c');
            expect(returned).toEqual(true);
            expect(list.head.value).toEqual('a');
            expect(list.head.next.value).toEqual('b');
            expect(list.tail.value).toEqual('c');
            expect(list.length).toEqual(3);
        });

        test('Works with intermediate index (1 of 2)', () => {
            const list = new SinglyLinkedList();
            list.push('a');
            list.push('b');
            list.push('c');
            list.push('d');
            const returned = list.insert(3, 'x');
            expect(returned).toEqual(true);
            expect(list.head.value).toEqual('a');
            expect(list.head.next.value).toEqual('b');
            expect(list.head.next.next.value).toEqual('c');
            expect(list.head.next.next.next.value).toEqual('x');
            expect(list.head.next.next.next.next.value).toEqual('d');
            expect(list.tail.value).toEqual('d');
            expect(list.length).toEqual(5);
        });

        test('Works with intermediate index (2 of 2)', () => {
            const list = new SinglyLinkedList();
            list.push('a');
            list.push('b');
            const returned = list.insert(1, 'x');
            expect(returned).toEqual(true);
            expect(list.head.value).toEqual('a');
            expect(list.head.next.value).toEqual('x');
            expect(list.head.next.next.value).toEqual('b');
            expect(list.tail.value).toEqual('b');
            expect(list.length).toEqual(3);
        });
    });

    describe('Remove method tests', () => {
        test('Works if index < 0', () => {
            const list = new SinglyLinkedList();
            const returned = list.remove(-1);
            expect(returned).toEqual(undefined);
            expect(list.head).toEqual(null);
            expect(list.tail).toEqual(null);
            expect(list.length).toEqual(0);
        });
        
        test('Works if index > length', () => {
            const list = new SinglyLinkedList();
            const returned = list.remove(5);
            expect(returned).toEqual(undefined);
            expect(list.head).toEqual(null);
            expect(list.tail).toEqual(null);
            expect(list.length).toEqual(0);
        });

        test('Works if index = 0', () => {
            const list = new SinglyLinkedList();
            list.push('a');
            list.push('b');
            const returned = list.remove(0);
            expect(returned instanceof Node).toEqual(true);
            expect(list.head.value).toEqual('b');
            expect(list.tail.value).toEqual('b');
            expect(list.length).toEqual(1);
        });

        test('Works if index = length - 1', () => {
            const list = new SinglyLinkedList();
            list.push('a');
            list.push('b');
            const returned = list.remove(1);
            expect(returned instanceof Node).toEqual(true);
            expect(returned.value).toEqual('b');
            expect(list.head.value).toEqual('a');
            expect(list.head.next).toEqual(null);
            expect(list.tail.value).toEqual('a');
            expect(list.length).toEqual(1);
        });

        test('Works if index is intermediate (1 of 2)', () => {
            const list = new SinglyLinkedList();
            list.push('a');
            list.push('b');
            list.push('c');
            const returned = list.remove(1);
            expect(returned instanceof Node).toEqual(true);
            expect(returned.value).toEqual('b');
            expect(list.head.value).toEqual('a');
            expect(list.head.next.value).toEqual('c');
            expect(list.tail.value).toEqual('c');
            expect(list.length).toEqual(2);
        });

        test('Works if index is intermediate (2 of 2)', () => {
            const list = new SinglyLinkedList();
            list.push('a');
            list.push('b');
            list.push('c');
            list.push('d');
            list.push('e');
            const returned = list.remove(3);
            expect(returned instanceof Node).toEqual(true);
            expect(returned.value).toEqual('d');
            expect(list.head.value).toEqual('a');
            expect(list.head.next.value).toEqual('b');
            expect(list.head.next.next.value).toEqual('c');
            expect(list.head.next.next.next.value).toEqual('e');
            expect(list.tail.value).toEqual('e');
            expect(list.length).toEqual(4);
        });
    });

    describe('Reverse method tests', () => {
        test('Works if list is empty', () => {
            const list = new SinglyLinkedList();
            const returned = list.reverse();
            expect(returned instanceof SinglyLinkedList).toEqual(true);
            expect(returned.head).toEqual(null);
            expect(returned.tail).toEqual(null);
            expect(returned.length).toEqual(0);
            expect(list.head).toEqual(null);
            expect(list.tail).toEqual(null);
            expect(list.length).toEqual(0);
        });

        test('Works if list has 1 element', () => {
            const list = new SinglyLinkedList();
            list.push('a');
            const returned = list.reverse();
            expect(returned instanceof SinglyLinkedList).toEqual(true);
            expect(returned.head.value).toEqual('a');
            expect(returned.tail.value).toEqual('a');
            expect(returned.length).toEqual(1);
            expect(list.head.value).toEqual('a');
            expect(list.tail.value).toEqual('a');
            expect(list.length).toEqual(1);
        });

        test('Works if list has 2 elements', () => {
            const list = new SinglyLinkedList();
            list.push('a');
            list.push('b');
            const returned = list.reverse();
            expect(returned instanceof SinglyLinkedList).toEqual(true);
            expect(returned.head.value).toEqual('b');
            expect(returned.tail.value).toEqual('a');
            expect(returned.length).toEqual(2);
            expect(list.head.value).toEqual('b');
            expect(list.tail.value).toEqual('a');
            expect(list.length).toEqual(2);
        });

        test('Works if list has 5 elements', () => {
            const list = new SinglyLinkedList();
            list.push('a');
            list.push('b');
            list.push('c');
            list.push('d');
            list.push('e');
            const returned = list.reverse();
            expect(returned instanceof SinglyLinkedList).toEqual(true);
            expect(returned.head.value).toEqual('e');
            expect(returned.head.next.value).toEqual('d');
            expect(returned.head.next.next.value).toEqual('c');
            expect(returned.head.next.next.next.value).toEqual('b');
            expect(returned.tail.value).toEqual('a');
            expect(returned.length).toEqual(5);
            expect(list.head.value).toEqual('e');
            expect(list.head.next.value).toEqual('d');
            expect(list.head.next.next.value).toEqual('c');
            expect(list.head.next.next.next.value).toEqual('b');
            expect(list.tail.value).toEqual('a');
            expect(list.length).toEqual(5);
        });
    });
});