// Questão 1
function cliqueMe() {
    const cliqueMe = document.getElementById('btnClick');
    alert('O botão foi clicado!');

}

// Questão 2
function mudarCor() {
    const mudarCor = document.getElementById('inputText');

    mudarCor.style.color = '#00c8a8';

}

// Questão 3
function mudarCorDigitando() {
    const mudarCorDigitando = document.getElementById('inputText');

    mudarCorDigitando.style.color = '#c81e00';

}

/*function digiteDown(elemento) {
    const digiteDown = document.getElementById('onkeydown');
    elemento.nextSibling.innerHTML = `Conteudo do input: ${elemento.value}`;

}

function digitePress(elemento) {
    const digitePress = document.getElementById('onkeypress');

    elemento.nextSibling.innerHTML = `Conteudo do input: ${elemento.value}`;

}

function digiteUp(elemento) {
    const digiteUp = document.getElementById('onkeyup');

    elemento.nextSibling.innerHTML = `Conteudo do input: ${elemento.value}`;

}*/

// Questão 4
document.getElementById('inputText').onkeydown = function () {
    document.getElementById('outputMessage').innerText = 'Teclado pressionado!';
    document.getElementById('outputMessage').style.color = 'green';

}

document.getElementById('inputText').onkeypress = function () {
    document.getElementById('outputMessage').innerText = 'Tecla sendo pressionada!';
    document.getElementById('outputMessage').style.color = '#c81e00';

}

document.getElementById('inputText').onkeyup = function () {
    document.getElementById('outputMessage').innerText = 'Tecla solta!';
    document.getElementById('outputMessage').style.color = '#1409af';

}

// Questão 5
function mouseOver() {
    const mouseOver = document.getElementById('box');

    mouseOver.style.backgroundColor = '#c81e00'

}

function mouseOut() {
    const mouseOut = document.getElementById('box');

    mouseOut.style.backgroundColor = '#00c8a8';

}

// Questão 6
var drag = document.getElementById('box');

drag.ondragstart = function (event) {
    event.dataTransfer.setData('text/plain', 'Arrastado');

}

drag.ondragover = function (event) {
    event.preventDefault();

}

drag.ondrop = function (event) {
    event.preventDefault();
    const informacao = event.dataTransfer.getData('text/plain');
    drag.innerText = informacao;
    drag.style.color = '#c81e00';

}

//Questão 7
window.onload = () => {
    alert('A página foi completamente carregada!');

}

//Questão Extra
var contadorDeCliques = 0;

function botaoDesafioExtra() {
    const botaoDesafioExtra = document.getElementById('btnChallenge');
    contadorDeCliques += 1;

    let contador = document.getElementById('count');

    contador.innerHTML = contadorDeCliques;

}

setTimeout(function() {
    alert(`O tempo acabou! Você clicou ${contadorDeCliques} vezes!`);

}, 10000);
