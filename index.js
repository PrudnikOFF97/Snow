window.addEventListener("DOMContentLoaded", function(){
    const burger = document.getElementsByClassName('burger')[0];
    const header = document.getElementsByClassName("header")[0];
    window.addEventListener('scroll', function() {
        //console.log(pageYOffset + 'px');
        if (pageYOffset > 50){
            header.classList.add("header-scroll");
            //console.log(header);
        }else{
            header.classList.remove("header-scroll");
        }
    });
    burger.addEventListener("click",  function() {
        burger.classList.toggle("burger-active");
    });
});