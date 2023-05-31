const h1 = document.querySelector('h1');
const btn = document.querySelector('#btnCalcular')
const input1 =document.querySelector('#calculo1')
const input2 =document.querySelector('#calculo2');
const pResult = document.querySelector('#result');

h1.innerHTML = 'Patito del guebo';      


function btnOnClick() {
    const num1 = parseInt(input1.value);
    const num2 = parseInt(input2.value);
    const sumaInputs = num1 + num2;
    pResult.innerText = `Resultado ${sumaInputs}`;
}


btn.addEventListener('click', btnOnClick);