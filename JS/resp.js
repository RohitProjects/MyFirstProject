burger = document.querySelector('.burger')
rightnav = document.querySelector('.rightnav')
navbar = document.querySelector('.navbar')
navlist= document.querySelector('.navlist')

burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-class');
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})
