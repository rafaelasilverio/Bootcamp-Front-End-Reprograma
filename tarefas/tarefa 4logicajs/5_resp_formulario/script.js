//5. Use as condicionais para criar as possíveis respostas de um formulário. 
//Use variáveis com prompt() para fazer as perguntas e com alert() para mostrar as respostas
alert("Perguntas aleatórias:");
alert("Vamos ver de qual turma você seria na escolinha de natação do Seu Zé:");
let idade = prompt("Qual é a sua idade? ");

if(idade >= 50){
    alert('Você seria da Turma Sênior!');
} else if (idade >= 18) {
    alert('Você seria da Turma Adulta!')
} else if (idade >= 15) {
    alert('Você seria da Turma Juvenil!')
} else if (idade >= 8) {
    alert('Você seria da Turma Kids!')
} else {
    alert('Você ainda é muito jovem para qualquer turma')
}

alert("Agora vamos ver se você pode ter um pet:");
alert("Responda com Sim ou Não:");
let espaco = prompt("Você tem espaço pra um pet na sua casa? ");
let alimentar = prompt("Você vai consegir alimentar esse pet direitinho? ");
let limpeza = prompt("Você tem tempo pra manter seu pet e o espaço dele limpinhos? ");
let saude = prompt("Você vai poder cuidar da saúde do seu pet? ");
let abandono = prompt("Você vai abandonar ele?");
let amor = prompt("Você vai poder dar amor e carinho pro seu pet não ficar triste? ");

if(espaco == "Não"){
    alert('Antes de adotar um pet, você precisa se certificar de que tem um espaço que ele possa viver adequadamente.');
} else if (alimentar == "Não") {
    alert('Você não pode deixar o pet passar fome, ou comer coisas que fazem mal.');
} else if (limpeza == "Não") {
    alert('Se você realmente quer um pet, tem que manter tudo limpinho, pois ele merece um espaço decente e pode até ficar doente se viver na sujeira.');
} else if (saude == "Não") {
    alert('Pra ter um pet, você precisa cuidar da saúde dele');
} else if(abandono == "Sim"){
    alert('Jamais adote um pet se não tem certeza que vai poder cuidar ou pretende abandonar! Os bichinhos também tem sentimentos e merecem carinho e cuidado, nunca os abandone!');
} else if(amor == "Não"){
    alert('Amar seu pet é essencial, não faz sentido ter um se não vai poder dedicar um tempinho pra brincar e deixar ele feliz!');
}else{
    alert('Você pode adotar um pet! Cuide muito bem dele e seja feliz!');
}
