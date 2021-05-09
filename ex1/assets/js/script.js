function verifier() {
    
    let mdp = document.getElementById("mdp").value;
    let confirm_mdp = document.getElementById("confirm_mdp").value;
    

    if(mdp != confirm_mdp)
    {
        document.getElementById("mdp").style.borderColor = "red";
        document.getElementById("confirm_mdp").style.borderColor = "red";
    }
    else{
        document.getElementById("mdp").style.borderColor = "green";
        document.getElementById("confirm_mdp").style.borderColor = "green";
    }
}


document.getElementById("btn").addEventListener("click",function(){
    verifier();
});





