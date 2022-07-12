//devuelve la posición de la primera aparición de un valor en una cadena.
//devuelve -1 si no se encuentra el valor.
//distingue entre mayúsculas y minúsculas.

// function indexOf(string, searchString) {
// }

function indexOf (string, searchString){

  for(let i=0; i <string.length; i++){
    if (string[i] === searchString)
      return i
  
    }
    return -1
}


console.log(indexOf('hello world', 'a'))
// -1

console.log(indexOf('hello world', 'o'))
// // 4

console.log(indexOf('Hello world, welcome to the universe', 'welcome'))
// 13

//let text = "Hello world, welcome to the universe.";
//searchString("e"); // expectative  1 position
//searchString ('welcome')// expectative 13
