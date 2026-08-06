

// ==========================
// CARROSSEL DE IMAGENS
// ==========================

const slides = document.querySelectorAll(".slide");

const next = document.querySelector(".next");

const prev = document.querySelector(".prev");

let indice = 0;

let intervalo;


// ==========================
// Mostrar Slide
// ==========================

function mostrarSlide(n){

    slides.forEach((slide)=>{

        slide.classList.remove("active");

    });

    slides[n].classList.add("active");

}


// ==========================
// Próximo Slide
// ==========================

function proximoSlide(){

    indice++;

    if(indice >= slides.length){

        indice = 0;

    }

    mostrarSlide(indice);

}


// ==========================
// Slide Anterior
// ==========================

function slideAnterior(){

    indice--;

    if(indice < 0){

        indice = slides.length - 1;

    }

    mostrarSlide(indice);

}


// ==========================
// Iniciar Carrossel
// ==========================

function iniciarCarrossel(){

    intervalo = setInterval(() => {

        proximoSlide();

    },5000);

}


// ==========================
// Reiniciar Tempo
// ==========================

function reiniciar(){

    clearInterval(intervalo);

    iniciarCarrossel();

}


// ==========================
// Botão Direita
// ==========================

next.addEventListener("click",()=>{

    proximoSlide();

    reiniciar();

});


// ==========================
// Botão Esquerda
// ==========================

prev.addEventListener("click",()=>{

    slideAnterior();

    reiniciar();

});


// ==========================
// Inicialização
// ==========================

mostrarSlide(indice);

iniciarCarrossel();
