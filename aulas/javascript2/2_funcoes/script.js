//o que são funções?
//dita o que faz, relação entre elementos
//cargos, um propósito, funções matemáticas


//função nomeDafunção(parametro){oq a função faz!}
function myName(nome) {
     console.log(nome)
}
function limparACasa() {
    console.log("casa limpinha!")
}

myName("Lilyan");
limparACasa();

function soma(a, b){
    console.log(a + b);
}

soma(2, 3);
soma(12, 360);
soma(414, 7);
soma(8,3);


function diminuir(a, b){
    let anoAtual = a;
    let anoNasc = b;
    console.log(anoAtual - anoNasc);
}

diminuir(2020,1991);