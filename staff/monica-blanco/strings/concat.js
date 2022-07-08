function concat1() {
    var string = ''

    for (var i = 0; i < arguments.length; i++) {
        string = string + arguments[i]
    }

    return string
}

console.log(concat1('Hola', 'Mundo'))
// HolaMundo
console.log(concat1('Adios', 'Mundo', 'Cruel'))
// AdiosMundoCruel

console.log(concat1('i', ' ', 'love', ' ', 'coding'))
// i love coding