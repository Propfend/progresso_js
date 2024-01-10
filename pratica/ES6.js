// Arrow Function

const soma = (a, b) => a + b

console.log(soma(10, 5))


// Spread Operator

const array1 = [1, 2, 3, 4]

const array2 = [...array1, 5, 6, 7, 8]

console.log(array2)

console.log(Math.random())

// classe

class Pessoa{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
        dizNome(){
            console.log(`Olá! o meu nome é ${this.nome}`)
        }

        dizIdade(){
            console.log(`Olá! a minha idade é ${this.idade}`)
        }
    
}

const john = new Pessoa('john', 25)

// john.dizIdade()

// john.dizNome()

// console.log(john.nome)

// console.log(john.idade)


class Animal{
    constructor(membros, nome){
        this.nome = nome
        this.membros = membros
    }

    andar(){
        return 'estou andando'
    }

    comer(){
        return 'estou comendo'
    }

    falar(){
        return 'estou falando'
    }
}

$cachorro = new Animal(4, 'cachorro')

console.log($cachorro.andar())
console.log($cachorro.comer())
console.log($cachorro.falar())

