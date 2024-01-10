// tipagem e variaveis(let, const, var)

let a = 'eu amo comer a sua mae'

console.log("a variavel '" + a + "' é  do tipo " + typeof a)

let b = 10

console.log("a variavel '" + b + "' é do tipo " + typeof b)

let c = "10"

console.log("a variavel '" + c + "' é do tipo " + typeof c)

const d = false

console.log("a constante '" + d + "' é do tipo " + typeof d)

let num1 = 50

let num2 = 10

// operações numéricas

console.log(num1 + " + " + num2 + " é igual a " + (num1 + num2) + " que é do tipo " + typeof (num1 + num2))

console.log(num1 + " - " + num2 + " é igual a " + (num1 - num2) + " que é do tipo " + typeof (num1 - num2))

console.log(num1 + " * " + num2 + " é igual a " + (num1 * num2) + " que é do tipo " + typeof (num1 * num2))

console.log(num1 + " / " + num2 + " é igual a " + (num1 / num2) + " que é do tipo " + typeof (num1 / num2))

// conectivos logicos 

let nome = 'miguel'

let sobrenome = 'miguel'

let sobreNome = 'luiz'

console.log("nome é " + nome)

console.log("sobreNome " + sobreNome)

console.log("sobrenome " + sobrenome)

console.log("nome == sobrenome é " + (nome == sobrenome))

console.log("sobreNome == sobrenome é  " + (sobreNome == sobrenome))

let num3 = 5

let num4 = 6

console.log("num3 é " + num3)

console.log("num4 é " + num4)

console.log("num3 > num4 é " + (num3 > num4))

console.log("num4 > num3 é " + (num4 > num3))

// Estrutura Condicional (if, else, if else, switch)

let num5 = 16

let num6 = 15

console.log(num5) 

console.log(num6) 

if(num6 > num5){
    console.log('o numero ' + num6 +' é maior do que o numero ' + num5)
}else if(num5 > num6){
    console.log('o numero ' + num5 +' é maior do que o numero ' + num6)
}else{
    console.log('o numero ' + num5 + ' é igual ao numero ' + num6)
}

let num7 = null

if(num7){
    console.log('o numero existe')
}else{
    console.log('o numero nao existe')
}

let fruta = 'cereja';

switch(fruta){
    case "banana":
        console.log('a fruta é banana')
        break;
    case 'maçã':
        console.log('a fruta é maça')
        break
    case 'laranja':
        console.log('a fruta é laranja')
        break
    default:
        console.log('a fruta nao foi encontrada(maçã, laranja, banana)')
}


// estrutura de repetição

for(let num8 = 1; num8 <= 10; num8 ++){
    console.log(num8)
}

console.log('contando até 1 para a explosao dos fogos de natal(meupal)')

for(let num9 = 10; num9 >= 1; num9 --){
    console.log(num9)
}

console.log('BOOOOM!!!')

let num10 = 10

console.log('contando de 10 para 1 ate a explosao dos fogos do natal(piru) usando while')

while(num10 >= 1){
    console.log(num10)
    num10 --
}
console.log('BOOOOM!!!')

console.log('fazendo o mesmo usando do-while')

let num11 = 10

do{
    console.log(num11)
    num11 --
}while(num11 >= 1)

console.log('BOOOOM!!!')

// Funções

function ola(){
    console.log('ola!!')
}

ola();

function soma(num12, num13){
    console.log(Number("" + (num12 + num13)))
}

soma(5, 6)


function multiplica(num14, num15){
    console.log(num14 * num15)
}

multiplica(6, 7)

// Arrays/Listas

let lista = [1, 2, 3, 4, 5]

console.log(lista)

let len = lista.length

for(let cont = 0; cont < len ; cont++){
    console.log(lista[cont]);
}

lista.pop() 

lista.push(7)

lista.push(5)

lista.pop()

lista.splice(4, 5)

console.log(lista)


// Manipulação de strings

let num16 = 16

let num17 = 17

console.log(`os numeros num16 e num17 sao, respectivamente ${num16} e ${num17}`)

let teste = 'esta é a variável de teste'

console.log(`frase original: ${teste}`)

console.log(`quantidade de caracteres: ${teste.length}`)

console.log(`posição 5: "${teste[5]}" `)

console.log(`tudo em maiusculo: ${teste.toUpperCase()}`)

console.log(`tudo em minusculo: ${teste.toLowerCase()}`)

console.log('imprimindo todas as posições: ')

let str = 'eu amo comer a sua mae'

for(let i = 0; i < str.length; i++){
    console.log(str[i])
}

// Manipulando Hora e Data

let data = Date();

console.log(`a data e hora atuais sao: ${data}`)

let aniv = new Date(2024, 8, 24);

console.log(`o dia do meu aniversário é: ${aniv}`)

// Funções Matemáticas

let num18 = 49

function raiz_exata(num18){
    console.log(`a raiz quadrada de ${num18} é ≅ ${Math.sqrt(num18)}`)
}

function raiz_arredondada(num19){
    console.log(`a raiz quadrada de ${num19} é ≅ ${Math.round(Math.sqrt(num19))}`)
}

raiz_exata(num18)

raiz_exata(23)

raiz_arredondada(num18)

raiz_arredondada(23)

function potencia(num20, pot){
    console.log(Math.pow(num20, pot))
}

potencia(4, 2)

potencia(7, 5)
