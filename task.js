function compareArrays(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false
  }

  return arr1.every((item, index) => {
    if (arr2[index]) {
      return arr2[index] == item;
    } else {
      return false;
    }
  })
}

function advancedFilter(arr) {
  return arr.filter(item => item > 0).filter(item => item % 3 == 0).map(item => item * 10);  
}