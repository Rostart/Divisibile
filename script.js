let num = document.getElementById("numero");
let div = document.getElementById("divisore");
let calc = document.getElementById("calcola");
let result = document.getElementById("risultato");

function calcola () {
    let numero = parseInt(num.value)
    let divisore = parseInt(div.value)
    if (numero % divisore ==0){
        result.innerHTML = "si"
    }
    else {
        result.innerHTML = "no"
    }


}

calc.addEventListener("click", calcola)



