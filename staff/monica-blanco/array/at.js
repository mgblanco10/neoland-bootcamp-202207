// posicion del elemento dentro del array
//si es negativo el elemento devuelto se encuentra contando de de atrás a adelante

function at(array, element) {
    var result =[]
    for (let i = 0; i < array.length; i++) {

        result = array.length[i + element]
    }
    return result
}
console.log (at([2,7,9,5], 2))