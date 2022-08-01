//cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
Cachay.prototype.splice = function (values, start, deleteCount, item1){
    const result = new Cachay

    for (let i = start; i< start+deleteCount;i++){
        // result.push(values[i])
        values[i] = values[i + deleteCount]
    }
    for(let i= values.length ; i > start; i--){
        values [i] = values[i-1]
    }
    values[start]= item1 

    return result
}