const text = '1,2,3,5,6,a,f,,g,hy,y,c!d?e'

// ESCAPE \
function escape()
{
    const regexDot = /\./g
    console.log(text.split(regexDot))
    
    const regexSimbols = /,|\.|\?|!| /g
    console.log(text.split(regexSimbols))
}

// DOT . as metacaracter, not as string
// is used to get all
function dot()
{
    console.log(text.match(/1.2/g))
    console.log(text.match(/1..2/g))
    console.log(text.match(/1..,/g))

    const grades = '8.3,9.4,8.3,8.1,10.0'
    console.log(grades.match(/8../g))
    console.log(grades.match(/.\../g))
}
// dot()

// EXERCICIO
function exercicio()
{
    const text = 'lista de arquivos mp3: jazz.mp3,rock.mp3,podcast.mp3,blues.mp3'
    console.log(text.match(/:.*/g))
}
// exercicio()

// BRANCOS
function brancos()
{
    const text = `
        ca  r
        r   o s!
    `
    console.log(text.match(/ca\t/))
}
// brancos()

function desafio3espacos()
{
    const text = 'a   b'
    console.log(text.match(/a\s*b/))
}
desafio3espacos()