let Change = document.getElementById("ChangeColor").value;

document.getElementById("ChangeColor").addEventListener("click", function () {
  if (Change) {

    document.getElementById("ChangeColor").classList.add("colorRed");
    document.getElementById("ChangeColor").classList.remove("colorGreen");
    document.getElementById("ChangeColor").classList.add("colorRed");
    document.getElementById("ChangeColor").classList.remove("colorGreen");
    document.getElementById("ChangeColor").innerHTML = "Hello World"
  } else {

    document.getElementById('ChangeColor').classList.add("colorGreen");
    document.getElementById('ChangeColor').classList.remove("colorRed");
    document.getElementById("ChangeColor").classList.add("colorGreen");
    document.getElementById('ChangeColor').classList.remove("colorRed");
    document.getElementById("ChangeColor").innerHTML = "Hello World";
  }

});