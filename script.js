const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const resultado = document.querySelector('#resultado');
const btn = document.querySelector('#btnCalcular');

function btnCalcular(){
    console.log(`El resultado es ${Number(input1.value) + Number(input2.value)}`);
}

btn.addEventListener('click',btnCalcular);