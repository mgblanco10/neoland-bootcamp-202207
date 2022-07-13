function includes(array, element) {
    let result = ''
    for (let i = 0; i < array.length; i++) {
        if (element === array[i]) {
            return true;
        }else {
            return false;
        }
    }
}

/// SIN TERMINAR, REVISAR
  
  console.log(includes([1, 2, 3, 4], 5))
// false
  console.log(includes([1, 2, 3, 4], 2))
// true