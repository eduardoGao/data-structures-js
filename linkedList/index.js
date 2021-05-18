class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class singleLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head

    this.length = 1
  }

  append(value) {
    const nodo = new Node(value)

    this.tail.next = nodo
    this.tail = nodo
    this.length++
    return this
  }

  prepend(value) {
    const nodo = new Node(value)

    nodo.next = this.head
    this.head = nodo
    this.length++
    return this
  }
}

let myLinkedList = new singleLinkedList(1)
myLinkedList.append(2)
myLinkedList.prepend(6)
console.log(myLinkedList)