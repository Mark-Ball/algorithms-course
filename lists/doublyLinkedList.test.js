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
})