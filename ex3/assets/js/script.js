// Ecouter la modification de l'email

let mail = document.getElementById("mail").value;

// ********************Validation EMAIL***********************


    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

document.getElementById("mail").addEventListener("click",function(){
    if (mail.test(regex)) {
        small.innerHTML = "Adresse Valide";
        small.classList.remove("text-danger");
        small.classList.add("text-sucess");
       
    } else {
        small.innerHTML = "Adresse Invalide";
        small.classList.remove("text-success");
        small.classList.add("text-danger");
        
    }

});

   