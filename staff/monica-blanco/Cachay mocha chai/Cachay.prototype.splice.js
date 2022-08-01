//cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
function splice (value, start, deleteCount, item1){
    const result = []

    for (let i = start; i< start+deleteCount;i++){
        result.push (value[i])
    }
    for(let i= value.length ; i> start; i--){
        value [i] = value[i-1]
    }
    value[start]= item1 

    return result
}