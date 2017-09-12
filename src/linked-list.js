const Node = require('./node');

class LinkedList {
    constructor(head = null, tail = null) {
        this.length = 0
        this._head = head
        this._tail = tail
    }

    append(data) {
        if(this.isEmpty()) {
           const node = new Node(data)
           this._head = node
           this._tail = node
        }
        else {
            const node = new Node(data, this._tail)
            this._tail.next = node
            this._tail = node
        }
        this.length += 1

        return this
    }

    head() {
        return this._head.data
    }

    tail() {
        return this._tail.data
    }

    at(index) {
        let tmp = this._head
        for(let i=1; i<=index; i++) {
            tmp = tmp.next
        }
        
        return tmp.data
    }

    insertAt(index, data) {
        if(!this.isEmpty()) {
            let tmp = this._head
            for(let i=1; i<=index; i++) {
                tmp = tmp.next
            }
            tmp.data = data
        }

        return this
    }

    isEmpty() {
        return this._head == null && this._tail == null ? true : false
    }

    clear() {
        if(!this.isEmpty()) {
            let tmp = this._head
            for(let i=0; i<this.length; i++) {
                tmp.data = null
                tmp = tmp.next
            }
            this.length = 0
        }

        return this
    }

    deleteAt(index) {
        if(!this.isEmpty()) {
            let tmp = this._head
            if(this.length == 1) {
                this._head = null
                this._tail = null
            }
            else {
                for(let i=1; i<=index; i++) {
                    tmp = tmp.next
                }
                tmp.next.prev = tmp.prev
                tmp.prev.next = tmp.next
            }
            this.length -= 1
        }

        return this
    }

    reverse() {
        let tmp = this._head
        let swap
        for(let i=0; i<this.length; i++) {
            swap = tmp.next
            tmp.next = tmp.prev
            tmp.prev = swap 
            tmp = swap
        }
        swap = this._head
        this._head = this._tail
        this._tail = swap     

        return this
    }

    indexOf(data) {
        let tmp = this._head
        let idx = -1
        for(let i=0; i<this.length; i++) {
            if(tmp.data == data) {
                idx = i
                break;
            }
            tmp = tmp.next
        }
        
        return idx
    }
}

module.exports = LinkedList;
