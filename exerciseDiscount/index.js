class Item {
  constructor(name, price) {
    this.name = name
    this.price = price
  }

  discount(disc) {
    const disountAmount = this.price * disc
    this.price = this.price - disountAmount
    return this
  }
}

const Clothe = new Item('camisa', 100)
console.log(Clothe)
console.log(Clothe.discount(.10))