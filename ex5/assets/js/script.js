document.getElementById('text');

document.getElementById('btn1');
document.getElementById('btn2');
document.getElementById('btn3');
document.getElementById('btn4');
document.getElementById('btn5');


function Color(){
    document.getElementById('text').style.color = "pink";
}

document.getElementById('btn1').addEventListener("click" , function (){
    Color();
} );

function Color1(){
    document.getElementById('text').style.color = "blue";
}

document.getElementById('btn2').addEventListener("click" , function (){
    Color1();
} );
function Color2(){
    document.getElementById('text').style.color = "purple";
}

document.getElementById('btn3').addEventListener("click" , function (){
    Color2();
} );
function Color3(){
    document.getElementById('text').style.fontWeight = "bold";
}

document.getElementById('btn4').addEventListener("click" , function (){
    Color3();
} );
function Color4(){
    document.getElementById('text').style.fontStyle = "italic";
}

document.getElementById('btn5').addEventListener("click" , function (){
    Color4();
} );
