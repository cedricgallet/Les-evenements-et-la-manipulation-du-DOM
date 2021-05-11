//FONCTION NOMMÉE

// function size(Taille){ 
//     Taille.style.width = "100%";
// }

//FONCTION FLECHÉE


document.getElementById("taille").addEventListener("click",function(){
     
     this.src="assets/img/finDuMonde.jpeg";
});
document.getElementById("taille").addEventListener("mouseover",function(){
     
     this.style.width="100%";
});
document.getElementById("taille").addEventListener("click",function(){
     
     this.style.width="";
});
