// generar un array de forma manual

class MyArray {
  constructor() {
    this.length = 0
    this.data = {}
  }

  get(index) {
    return this.data[index]
  }

  push(item) {
    this.data[this.length] = item
    this.length++
    return this.data
  }

  pop() {
    delete this.data[this.length - 1]
    this.length--
    return this.data
  }

  delete(index) {
    const item = this.data[index]
    this.shiftIndex(index)
    delete this.data[this.length - 1]
    this.length--
    return item
  }

  shiftIndex(index) {
    for(let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]
    }
    // delete this.data[this.length - 1]
    // this.length--
  }

  shift(item) {
    for(let i = 0; i < this.length - 1; i++) {
      this.data[i + 1] = this.data[i]
    }
    this.data[0] = item
    this.length++
    return this.data
  }

  unshift() {
    this.delete(0)
  }
}

const myArray = new MyArray()

myArray.push('Lalo')
myArray.push('Seb')
myArray.push('Ara')
myArray.push('Edu')
//myArray.pop()
// myArray.delete(0)
// myArray.unshift()
// myArray.shift('Primero')
console.log(myArray)