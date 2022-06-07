//1- capturar todos os meus gatinhos e guardar numa variavel
//2- percorrer essa lista de gatinhos
//3- ligar o click 
  //3.1 - criar uma condicional que torna o gatinho visivel ou invisivel

//Eventos em Java é todo interação que o usuário: click, scroll, press
const meusGatos = document.querySelectorAll('.item__imagem')
console.log(meusGatos)

meusGatos.forEach(function(gato){
    gato.addEventListener('click', function(evento){
        if(gato.classList.contains("invisivel")){
            gato.classList.remove("invisivel")
        }else{
            gato.classList.add("invisivel")
        }
    })
})