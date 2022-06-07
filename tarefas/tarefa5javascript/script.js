// console.log("foi")

let inputNome = document.getElementById("inputNome")
let inputEmail = document.getElementById("inputEmail")
let botao = document.getElementById("botao")

console.log(inputNome)
console.log(inputEmail)
console.log(botao)

botao.addEventListener('click', function(){
    event.preventDefault()
    alert(`Ei ${inputNome.value}! O e-mail ${inputEmail.value} foi cadastrado com sucesso`)
})