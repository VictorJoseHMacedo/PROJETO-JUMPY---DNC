var elementosInputs = document.querySelectorAll("input")
var elementoBotao = document.querySelector(".paragrafo-geral")

var elementosParagrafo = document.querySelectorAll(".paragrafo")
let i = 0;
let check = true;

function checarCampos() {
    while (i < elementosInputs.length){
        if (elementosInputs[i].value == ""){
            elementosParagrafo[i].innerHTML = "Campo Obrigatório!";   
            i++;
            check = false; 
            elementoBotao.innerHTML = "Campos obrigatórios não registrados."
        }
        else {
        i++;
        }
    }
    if (check == true){
        elementoBotao.innerHTML = `<p class = "sucesso">Sucesso!</p>`
        limparCampos();
    }
} 


function limparCampos() {
    for (let i = 0; i < elementosInputs.length; i++){
        elementosInputs[i].value = "";
    }  
}