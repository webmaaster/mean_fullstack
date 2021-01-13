//Selection sort swaps outside of for loop

function bubbleSort (arr) {
  var temp = 0;
  for (u =0; u < arr.length; i++) {
    for (i = 1; i < arr.length; i++) {
      if (arr[i] > arr[i+1]) {
        temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp 
      }
    }

  }
  return arr 
}

console.log(bubbleSort([3,1,7,5,8,0]))