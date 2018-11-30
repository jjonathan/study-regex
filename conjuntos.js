function pair()
{
    const text = '1,2,3,4,5,5,6,a.b'
    const regexPair = /[02468]/g
    console.log(text.match(regexPair))
}

function conj()
{
    const text = 'João não vai passear na moto'
    const regexOr = /.[aã]/g
    console.log(text.match(regexOr))
}

function conj()
{
    const text = '1,2,3,4,5a,b,c,d,e,f'
    const regexConj = /[a-d1-3]/g
    console.log(text.match(regexConj))
}
// conj()

function interval()
{
    const texto = '.$+*?-'

    console.log(texto.match(/[+.?*$]./g)) // não precisa de escape dentro do conjunto
    console.log(texto.match(/[$-?]/g)) // isso é um intervalo (range)

    // NÃO é um intervalo (range)...
    console.log(texto.match(/[$\-?]/g))
    console.log(texto.match(/[-?]/g))

    // pode precisar de escape dentro do conjunto: - [ ] ^
}
// interval()

function interval2(){
    const text = 'ABC [abc] a-c 1234'
    console.log(text.match(/[a-c]/g))
    console.log(text.match(/a-c/g))
}
// interval2()

function shorthand()
{
    const texto = `1,2,3,4,5,6,a.b c!d?e\r	-
    f_g`

    console.log(texto.match(/\d/g)) // números [0-9]
    console.log(texto.match(/\D/g)) // não números [^0-9]

    console.log(texto.match(/\w/g)) // caracteres [a-zA-Z0-9_]
    console.log(texto.match(/\W/g)) // não caracteres [^a-zA-Z0-9_]

    console.log(texto.match(/\s/g)) // espaço [ \t\n\r\f]
    console.log(texto.match(/\S/g)) // não espaço [^ \t\n\r\f]

    // \b \B
}