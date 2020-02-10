window.addEventListener("DOMContentLoaded", function(){
    let header = document.getElementsByClassName("header")[0];
    window.addEventListener('scroll', function() {
        //console.log(pageYOffset + 'px');
        if (pageYOffset > 50){
            header.classList.add("header-scroll");
            //console.log(header);
        }else{
            header.classList.remove("header-scroll");
        }
    });
});