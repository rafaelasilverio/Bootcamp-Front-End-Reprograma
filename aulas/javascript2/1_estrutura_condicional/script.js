//tudo começacom um se(if)

//condicional
let le = "cozinheira";
if (le == "cozinheira") {
    console.log('a janta tá no jeito!');
} else {
    console.log('e vamo de passar fome!');
}
//se(condição){
//  faça isso
//}senão{
// faça outra coisa
//}

//prompt() - pergunta
//alert() - alerta
let idade = prompt("diga sua idade, plis:");

if (idade >= 60) {
    alert('já pode aposentar!');
} else if (idade >= 18) {
    alert('já pode dirigir!')
} else if (idade >= 16) {
    alert('já pode votar!')
} else if (idade >= 12) {
    alert('já pode ajudar a cozinhar!')
} else {
    alert('vc ainda é um baby <3')
}

let calor = true;
let temDinheiro = true;
let temVontade = true;

if (!temVontade) {
    alert("to sem vontade")
} else if (!temDinheiro) {
    alert("to pobre")
} else if (!calor) {
    alert("ta frioo mew")
} else {
    alert("bora tomar um sorvete!")
}