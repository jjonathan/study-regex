var cpfString = '600.567.890-12765.998.345-23765.998.345-23765.998.345-23765.998.345-23(15)3756-1212(11)98756-1212, 98756-1212jonathan@cod3r.com.brxico@gmail.comzebarbosa@minahempresa.com.brze_barbosa@minahempresa.com.br';

var cpfRegex = /(?<cpf>\d{3}.\d{3}.\d{3}-\d{2}?)/g
var telRegex = /(?<tel>(?:\(\d{2}\)\s?)?\d{4,5}-\d{4}?)/g
var emaRegex = /(?<email>\w+\@\w+\.\w{2,4}(?:\.\w{2})?)/g

console.log('CPF')
console.log(cpfString.match(cpfRegex))
console.log('TELEFONE')
console.log(cpfString.match(telRegex))
console.log('email')
console.log(cpfString.match(emaRegex))
