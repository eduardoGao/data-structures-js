const disorder = [8, 4, 1, 0, 4]

function sorted(arr) {
  for(let p = 0; p < arr.length; p++) {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] > arr[i+1]) {
        let tmp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = tmp
      }
    }
  }
  return arr
}

console.log(sorted(disorder))