const btnHumburger = document.querySelector("#btnHumburger");
const body= document.querySelector('body');
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

btnHumburger.addEventListener('click', () => {
    
    if(header.classList.contains('open')) {
        body.classList.remove('noscroll'); 
        header.classList.remove('open');           
         fadeElems.forEach((elem) =>{
            elem.classList.remove('fade-in');
            elem.classList.add('fade-out');
            
        });    
    } else {
        body.classList.add('noscroll'); 
        overlay.classList.remove('fade-out'); 
        header.classList.add('open');        
        fadeElems.forEach((elem) =>{
            elem.classList.remove('fade-out'); 
            elem.classList.add('fade-in');            
        });
    }
    console.log(body);

    
})