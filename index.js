window.addEventListener("DOMContentLoaded", function(){
    const preloader = document.getElementsByClassName("preloader__wrapper")[0];
    const burger = document.getElementsByClassName('burger')[0];
    const header = document.getElementsByClassName("header")[0];
    const burgerIcon = document.getElementsByClassName("burger__icon")[0];

    window.addEventListener('scroll', function() {
        if (pageYOffset > 50){
            header.classList.add("header-scroll");
        }else{
            header.classList.remove("header-scroll");
        }
    });
    burger.addEventListener("click",  function() {
        burger.classList.toggle("burger-active");
        burgerIcon.classList.toggle("burger__icon-play_animation");
    });
    window.addEventListener("load", () => {
        preloader.classList.add("loaded");
        setTimeout(() =>{
            preloader.style = "display: none;"
        },1500);
    })
});