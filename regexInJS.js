const str = '0123456abcdef'

const newRegex = RegExp('6')

console.log('Métodos da RegExp')
console.log(newRegex.test(str))
console.log(newRegex.exec(str))


const regexLet = /[a-e]/g
console.log('Métodos da string...')
console.log(str.match(regexLet))
console.log(str.search(regexLet))
console.log(str.replace(regexLet, 't'))
console.log(str.split(regexLet))
