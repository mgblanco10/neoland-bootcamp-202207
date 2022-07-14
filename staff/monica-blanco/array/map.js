// function map(array, callback) {
//     let result = [0]
//     for(let i = 0; i < array.length;i++){
//             result[i] = callback(array[i])     
//         }
//          return result

// }

function map(array, callback) {
    let results = []
    for(let i = 0; i < array.length;i++){
        const element = array [i]
        const result = callback(element)
            results[i] = result    
        }
         return results

}