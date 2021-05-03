const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay=document.querySelector('.overlay');
const fadeItems = document.querySelectorAll('.has-fade')
const body = document.querySelector('body')
const menu=document.querySelector('.header__menu');



header.addEventListener('click', () => {
    console.log("open burger");
    if(header.classList.contains('open')){// for close
        header.classList.remove('open');
     
        menu.classList.add('has-fade');
        menu.classList.remove('has-no-fade');

        body.classList.remove('noscroll');
        fadeItems.forEach((element)=>{
        element.classList.add('fade-out');
        element.classList.remove('fade-in');
        })
        
    }
    else{
        header.classList.add('open');// for open
        menu.classList.remove('has-fade');
        menu.classList.add('has-no-fade');
        body.classList.add('noscroll');
        fadeItems.forEach((element)=>{
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        })
  
    }
   

});