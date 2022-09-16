const hamburger = document.querySelector('.header .header container .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .header container .nav-list .hamburger ul');
const header = document.querySelector('.header .header container');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = '#29323c';
    }else{
        header.style.backgroundColor = 'transparent';
    }
});