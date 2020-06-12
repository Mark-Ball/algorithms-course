const [Node, DoublyLinkedList] = require('./doublyLinkedList');

describe('Node class tests', () => {
    test('Node has a data property', () => {
        const node = new Node('a');
        expect(node.data).toEqual('a');
    })

    test('Node has a next property set to null', () => {
        const node = new Node('a');
        expect(node.next).toEqual(null);
    })

    test('Node has a prev property set to null', () => {
        const node = new Node('a');
        expect(node.prev).toEqual(null);
    })
})

describe('DoublyLinkedList tests', () => {
    describe('Class tests', () => {
        test('Class has a head property', () => {
            const list = new DoublyLinkedList();
            expect(list.head).toEqual(null);
        })

        test('Class has a tail property', () => {
            const list = new DoublyLinkedList();
            expect(list.tail).toEqual(null);
        })
        test('Class has a length property', () => {
            const list = new DoublyLinkedList();
            expect(list.length).toEqual(0);
        })
    })

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
        })

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
        })
    })
})