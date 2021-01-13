function insertshort(arr) {
  
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < arr[i-1]) {
      //shift right until srr[i] >= arr[i-1]
      temp = arr[i]
      for(let y=i; y >=0; y--) {
        arr[y]=arr[y-i]
      }
    }

  }

}