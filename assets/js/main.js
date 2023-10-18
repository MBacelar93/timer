
//PROTEGENDO O ESCOPO GLOBAL
function relogio(){

// FUNÇÃO PARA PEGAR O TEMPO
function getTimeFromSeconds(seconds){
    const data = new Date(seconds*1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}
//####################################################

// SELECIONANDO OS BOTOES E O RELOGIO
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

//####################################################

let segundos = 0;
let timer;

//FUNÇÃO QUE INICIA O RELÓGIO E FORMATA USANDO A FUNÇÃO getTimeFromSeconds
function startWatch(){
        timer = setInterval (function () { 
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos); 
    }, 1000);
}
//####################################################

//CAPTURANDO EVENTOS DE CLICK AGRUPADOS USANTO .TARGET E IF
document.addEventListener('click', function(event){
    const elemento = event.target;
    

    if(elemento.classList.contains('iniciar')){
        relogio.classList.remove('relogio-red');
        clearInterval(timer);
         startWatch();
    }

    if(elemento.classList.contains('pausar')){
        relogio.classList.add('relogio-red');
        clearInterval(timer);
    }
    if(elemento.classList.contains('zerar')){
        relogio.classList.remove('relogio-red');
        clearInterval(timer);
        relogio.innerHTML ='00:00:00';
        segundos = 0;
    }

});
//####################################################

//CAPTURANDO EVENTOS DE CLICK DOS BOTOES INDIVIDUAL
// iniciar.addEventListener('click', function(event) {
//     relogio.classList.remove('relogio-red');
//     clearInterval(timer);
//     startWatch();
    
// });
// zerar.addEventListener('click', function(event){
//     relogio.classList.remove('relogio-red');
//     clearInterval(timer);
//     relogio.innerHTML ='00:00:00';
//     segundos = 0;
    
// });
// pausar.addEventListener('click', function(event){
//     relogio.classList.add('relogio-red');
//     clearInterval(timer);
// });

//####################################################
}

relogio();