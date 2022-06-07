//enquanto ou while
//para ou for

console.log("loop com while");

let idade = 17;
while (idade >= 0) {
    console.log("Olha eu aqui rejuvenescendo! " + idade);
    idade -= 1;
}

//-= é o mesmo q variavel = variavel - 1
// -- também 
// ++ também, mas como incremento e não decremento


console.log("loop com for");

for (let i = 17; i >= 0; i--) {
    console.log("Olha eu aqui rejuvenescendo! " + i);
}