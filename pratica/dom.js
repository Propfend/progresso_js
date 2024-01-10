let div1 = document.querySelector('#div1')

let div2 = document.querySelector('#div2')

let div3 = document.querySelector('#div3')

let input1 = document.querySelector('.input1')

let input2 = document.querySelector('#input2')

let input3 = document.querySelector('#input3')

let input4 = document.querySelector('.input4')

let botao1 = document.querySelector('#botao1')

let botao2 = document.querySelector('#botao2')

let botao3 = document.querySelector('#botao3')

let link1 = document.querySelector('.link1')

const form = document.querySelector('.form')

console.log('output das divs: : ')

console.log(div1, div2, div3)

console.log('output dos inputs: ')

console.log(input1, input2, input3, input4)

console.log('output dos links: ')

console.log(link1)

console.log('output dos botoes: ')

console.log(botao1, botao2, botao3)

// Mudando o texto dos recursos

botao1.textContent = 'o botao1 foi alterado'

div1.textContent = 'a div1 foi alterada'

link1.textContent = 'o link1 foi alterado'

// Trabalhando com o atributo dos recursos

console.log(link1.getAttribute('href'))

link1.setAttribute("href", "https://github.com/Propfend?tab=overview&from=2023-12-01&to=2023-12-29")

console.log(link1.getAttribute('href'))

console.log(link1.hasAttribute('target'))

if(link1.hasAttribute('target')){
    console.log('o link1 possui o atributo target')
}else{
    console.log('o link1 nao possui o atributo target')
}

if(div1.hasAttribute('style')){
    console.log('a div 1 possui estilo')
}else{
    console.log('a div 1 nao possui estilo')
}

// Trabalhando Com Estilo

div1.style.backgroundColor = 'blue'

if(div2.hasAttribute('style')){
    console.log('a div 2 possui estilo')
}else{
    console.log('a div 2 nao possui estilo ainda')
}

div2.style.backgroundColor = 'red'

div2.style.width = '50px'

if(div2.hasAttribute('style')){
    console.log('a div 2 possui estilo')
}else{
    console.log('a div 2 nao possui estilo ainda')
}

// Adicionando Eventos 

botao1.addEventListener('mouseover', function(){
    console.log('o mouse foi passado por cima do botao1')
})

botao1.addEventListener('click', function(){
    console.log('o botao1 foi clicado')
});

botao2.addEventListener('click', function(){
    console.log('o botao 2 foi clicado')
})

botao2.addEventListener('mouseover', function(){
    console.log('o mouse foi passado por cima do botao2')
})

botao3.addEventListener('click', function(){
    console.log('o botao 3 foi clicado')
})

botao3.addEventListener('mouseover', function(){
    console.log('o mouse foi passado por cima do botao3')
})

// Interrompendo Eventos

form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('o formulario foi enviado');
})

link1.addEventListener('click', function(event){
    event.preventDefault()
    console.log('o link foi clicado')
})







