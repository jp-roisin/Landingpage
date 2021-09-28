// Sélection des éléments
let buttonShow = document.querySelector('#button-show');
let buttonHide = document.querySelector('#button-hide');
let hide = document.querySelector('#hide');

// Cacher les éléments
hide.style.display = "none";
buttonHide.style.display = "none";

// Création des évenements button
buttonShow.addEventListener('click', ()=>{
    hide.style.display = "block";
    buttonShow.style.display = "none";
    buttonHide.style.display = "block";
})

buttonHide.addEventListener('click', ()=>{
    hide.style.display = "none";
    buttonShow.style.display = "block";
    buttonHide.style.display = "none";
})