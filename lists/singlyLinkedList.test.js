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
        test('Works with empty list', () => {
            const list = new SinglyLinkedList();
            list.push('a');
            expect(list.head instanceof Node).toEqual(true);
            expect(list.head.value).toEqual('a');
            expect(list.tail.value).toEqual('a');
            expect(list.length).toEqual(1);
        });

        test('Works with non-empty list', () => {
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

});