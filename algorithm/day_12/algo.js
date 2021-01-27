function unionSort(arr1, arr2){
  newArr = []
  for (i = 0; i < arr1.length; i++){
    for (j = 0; j < arr2.length; j++){
      if (arr1[i] <arr2[j]){
        newArr.push(arr1[i])
        break 
      } else if (arr2[j] <arr1[i]){
        newArr.push(arr2[j])
        
      } else if ()
    }
  }
  return newArr 
}