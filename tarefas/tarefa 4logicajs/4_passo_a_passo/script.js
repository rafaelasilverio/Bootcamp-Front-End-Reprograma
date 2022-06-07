//4. Use algum dos operadores que aprendemos para fazer um passo 
//a passo parecido com o que fez em aula com algo prático. 

let ovo = true;
let frigideira = true;
let sal = true;
let oleo = true;
let fogao = true;
let espatula = true;

if (!ovo) {
    console.log("Não dá pra fritar ovo se não tiver ovo kkkk");
}
else if (!frigideira) {
    console.log("Você precisa de uma frigideirinha pra fritar o ovo");
} else if (!sal) {
    console.log("Acho que você não vai gostar de ovo frito sem sal, ein");
} else if (!oleo) {
    console.log("Coloca óleo, senão vai grudar tudo na frigideira");
} else if (!fogao) {
    console.log("Sem fogão não rola, só se vc tiver um PC lento que esquenta, aí vc consegue fritar o ovo nele, mas não recomendo");
} else if (!espatula) {
    console.log("Você precisa de uma espátula, vai queimar a mão doida kkk")
} else {
    ovo = "ovo quebrado";
    frigideira = "frigideira";
    oleo = "óleo";
    espatula = "espátula";
    sal = "sal";

    frigideiraPreparada = frigideira + " " + oleo;
    console.log(frigideiraPreparada);
    fogao = "quente";
    console.log("Fogão:" + fogao);
    console.log("Coloque no fogão " + fogao + " a " + frigideira + " preparada com " + oleo + " e quando ela esquentar, coloque o " + ovo + " e o "+ sal +".");
    frigideiraPreparada = frigideira + " " + oleo + " " + ovo + " " + sal;
    fogao = frigideiraPreparada;
    console.log(" ");
    console.log("Deixe o ovo fritar por 60 segundos, fogo baixo:");
    tempo = 1;
    while (tempo <= 60) {
        faltam = 60 - tempo + 1;
        console.log("Só faltam " + faltam +" segundos pra virar!");
        tempo++
    }
    console.log(" ");
    console.log("Vire o ovo usando a "+espatula);
    console.log(" ");
    console.log("Deixe o ovo fritar desse lado por mais 60 segundos, fogo baixo:");
    tempo = 1;
    while (tempo <= 60) {
        faltam = 60 - tempo + 1;
        console.log("Só faltam " + faltam +" segundos pra terminarr!");
        tempo++
    }
    console.log(" ");
    console.log("Apague o fogão");
    console.log("O ovo frito tá prontin");
}