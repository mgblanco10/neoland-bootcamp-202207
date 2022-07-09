function replaceChar(text, search, replace) {
    search = 'o'
    replace = 'U'
    text = 'hola mundo'
    for ( var i = 0; i < text.length; i++){
      var newtext = text - search
    return newtext + replace
    }
}
    

// tests

console.log(replaceChar('hola mundo', 'o', 'U'))
// hUla mundU

//console.log(replaceChar('0123456_89', '_', '7'))
// 0123456789

//console.log(replaceChar('hell- w-rld', '-', 'o'))
// hello world