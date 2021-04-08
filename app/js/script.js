const btnHumburger = document.querySelector("#btnHumburger");
const body= document.querySelector('body');
const header = document.querySelector(".header");
const fadeElems = document.querySelectorAll(".has-fade");

const openMenuAnimate = () => {
    fadeElems.forEach((elem) =>{
        elem.classList.remove('fade-in');
        elem.classList.add('fade-out');               
    });    
};

const closeMenuAnimate = () => {
    fadeElems.forEach((elem) =>{
        elem.classList.remove('fade-out'); 
        elem.classList.add('fade-in');            
    });
};

body.addEventListener('click', (event) => {
    const target = event.target;    
    if (target.closest('#btnHumburger') || target.closest('.overlay'))  {
        header.classList.contains('open') ? openMenuAnimate() : closeMenuAnimate();
        body.classList.toggle('noscroll'); 
        header.classList.toggle('open');
    }   
});