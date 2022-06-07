//1- capturar os elementos e guardar em variaveis 
        //input - ok
        //a palavra world - ok
        //botão - ok
//2- ligar o click do botao - ok 
//3- prevenir o comportamento padrão do navegador quando clico  - ok 
//4- trocar a palavra world pelo palavra digitada no input

let input = document.querySelector('input')
let world = document.querySelector('h2')
let button = document.querySelector('#botão')

console.log(input, world, button)

function cliquei(){
    event.preventDefault()
    console.log("Entrando")
    world.innerHTML = input.value
}