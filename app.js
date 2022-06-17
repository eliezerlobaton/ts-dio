"use strict";
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var button = document.getElementById('button');
function adicionaNumeros(numero1, numero2) {
    return numero1 + numero2;
}
if (button) {
    button.addEventListener('click', function () {
        if (input1 && input2) {
            console.log(adicionaNumeros(Number(input1.value), Number(input2.value)));
        }
    });
}
