// devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada

function find(array,element){
    for (let i=0; i< array.length; i++){
        if (array.length[i]< element){
            return array.length[i]
        }
    }

}

// let array = [1, 2, 5, 11, 15, 2, 130]
// let element = 10
console.log (find([1, 2, 5, 11, 15, 2, 130],10))
