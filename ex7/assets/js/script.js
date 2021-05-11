let Taille = document.getElementById("text")

window.addEventListener("scroll", function(){
    if (window.scrollY > 400){
        Taille.classList.add("scroll");
    } else {
        Taille.classList.remove("scroll");
    }
});