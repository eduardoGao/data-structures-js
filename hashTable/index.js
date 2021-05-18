class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }

  hashMethod(key) {
    let hash = 0
    for(let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 1) % this.data.length
    }
    return hash
  }

  set(key, value) {
    const address = this.hashMethod(key)
    if(!this.data[address]) {
      this.data[address] = []
    }
    this.data[address].push([key, value])
    return this.data
  }
}

const myHashTable = new HashTable(50)
myHashTable.set('Lalo', 1996)
myHashTable.set('Seb', 1999)
console.log(myHashTable)