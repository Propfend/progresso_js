// avançando com arrays (Find, Reduce, filter )

let a = ['papai', 'mamae', 'irmaos']

a.unshift('irmaos')

console.log(a)

a.unshift('primos')

console.log(a)

a.pop()

console.log(a)

a.shift()

console.log(a)

numeros = [1, 2, 3, 4, 5, 6]

console.log('usando o find para imprimir os numeros de um numeric array')

numeross = numeros.find((num) => console.log(num))

console.log('usando o find para imprimir os primeiros numero par e impar do numeric array, respectivamente: ')

let numero_par = numeros.find((num) => num % 2 == 0)

console.log(numero_par)

let numero_impar = numeros.find((num) => num % 2 == 1)

console.log(numero_impar)

console.log('usando o filter para imprimir TODOS os numeros pares e impares do numeric array, respectivamente: ')

let pares = numeros.filter((num) => num % 2 == 0)

let impares = numeros.filter((num) => num % 2 == 1)

console.log(pares)

console.log(impares)

// Avançando com manipulação de strings

let fras = 'somos todos programadores'

function mostra_palavras(frase){
    let split = frase.split(" ")
    for(let i = 0; i < split.length ; i++){
        console.log(split[i])
    }
}

mostra_palavras(fras)

// recapitulando

// let nums = [1, 2, 3, 4, 5, 6, 7]

// let mostra_numero = nums.find((num) => console.log(num))

// let mostra_numeros = nums.filter((num) => num % 3 == 0)

// let words = 'codar é muito divertido'

// console.log(`a sua frase é: "${words}"`)

// console.log(`a sua frase tem ${words.split(" ").length} palavras`)

// Tratamento de Erro


/* let idade = 16

if(idade < 18){
    
    throw new Error('Você Deve ter mais de 18 anos para ter uma gp')
}
else{
    console.log('siga a diante')
}


try {
    let idadee = 16
    if(idadee < 18){
        throw new Error('você deve ter mais de 18 anos para ter uma gp')
    }
} catch (error) {
    console.log(error)
}
*/


// Callbacks

// function ola(){
//     console.log('ola')
// }

// function elogiar(){
//     console.log('vose e lindo')
// }
// function xingar(){
//     console.log('vc é um merda')
// }
// function conversa(nome, funcao){
//     console.log(`seu nome é ${nome}, não é?`)
//     funcao()
// }

// conversa('miguel', function(){
//     console.log('eu queria se como vose')
// })

// conversa('miguel', xingar)

// conversa('miguel', elogiar)

// setTimeout(function(){
//     console.log('quero sexo')
// }, 1000)


// Trabalhando Com JSON

let json = {nome: 'luiz', sobrenome: 'miguel', idade: 16}

console.log('arquivo em json: ')
console.log(json)
console.log(typeof json)

let jsonString = JSON.stringify(json)

console.log('arquivo em string: ')
console.log(jsonString)
console.log(typeof jsonString)

let json2 = JSON.parse(jsonString)

console.log('arquivo em json novamente: ')
console.log(json2)
console.log(typeof json2)

// Exercicios

// Imprimindo uma lista inicialmente vazia, adicionando 5 itens e retirando um

const itens = []

itens.push('maça')
itens.push('beterraba')
itens.push('leite')
itens.push('pao')
itens.push('arroz')

console.log(itens)

itens.shift()

console.log(itens)

// ache o primeiro numero maior que 10 do array abaixo

const array = [1, 5, 7, 8, 12, 14, 15 , 19]

console.log(array.find((num) => num > 10))

//Crie um novo array que contenha apenas os numeros maiores que 20 do array abaixo

const array2 = [5, 10, 15, 20, 25, 30, 35, 40]

console.log(array2.filter((num) => num > 20))





