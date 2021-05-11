function verifier() {

    let mdp = document.getElementById("mdp").value;
    let confirm_mdp = document.getElementById("confirm_mdp").value;


    // ajout de class et suppression pour navigateur récent avec classlist.add ou remove
    if (mdp != confirm_mdp) {

        document.getElementById("mdp").classList.add("colorRed");
        document.getElementById("mdp").classList.remove("colorGreen");

        document.getElementById("confirm_mdp").classList.add("colorRed");
        document.getElementById("confirm_mdp").classList.remove("colorGreen");

    } else {

        document.getElementById('mdp').classList.add("colorGreen");
        document.getElementById('mdp').classList.remove("colorRed");

        document.getElementById("confirm_mdp").classList.add("colorGreen");
        document.getElementById('mdp').classList.remove("colorRed");

    }
}

// Création d un évènement sur le boutton au click + appel de la fonction
document.getElementById("btn").addEventListener("click", function () {
    verifier();
});