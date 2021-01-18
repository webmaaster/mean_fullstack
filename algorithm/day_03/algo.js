function combineArray(arr,arr2){
  for (j = 0; j < arr2.length; j++) {
      arr.push(arr2[j])
  } 

  for (i = 0; i < arr.length; i++){
      if (arr[i] < arr[i-1]) {
          temp = arr[i];
          for(let y = i; y >= 0; y--){
              if(arr[y-1] <= temp || y == 0){
                  arr[y] = temp;
                  break
              } else {
                  arr[y] = arr[y-1]
              }
          }
      }
  }
  return arr;
}
console.log(combineArray([1, 2, 3, 5], [4, 7, 6, 20]));