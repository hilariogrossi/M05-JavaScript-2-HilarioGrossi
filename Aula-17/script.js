// Aqui serão adicionados seus scripts
//Exercício 1:
const noticia_principal = document.getElementById('noticia-principal');
alert(`Notícia Principal: ${noticia_principal.innerHTML}`);


//Exercício 2:
const h1 = document.getElementsByTagName('h1');
for (const titulo of h1) {
    titulo.classList.add('titulo-noticia');
    titulo.style.fontWeight = 'bold';

}

/*for (let i = 0; i < h1.length; i++) {
    h1[i].style.fontWeight = 'bold';
    //h1[i].style.fontSize = '100px';

}*/


//Exercício 3:
const paragrafo_noticia = document.getElementsByClassName('paragrafo-noticia');
for (const paragrafo of paragrafo_noticia) {
    paragrafo.innerHTML = 'Leia a notícia completa';

}

/*for (let i = 0; i < paragrafo_noticia.length; i++) {
    paragrafo_noticia[i].textContent = 'Leia a notícia completa';

}*/


//Exercício 4:
const comentario_leitor = document.createElement('p');
comentario_leitor.textContent = 'Deixe seu comentario';
const secao_comentarios = document.getElementById("secao-comentarios");
secao_comentarios.appendChild(comentario_leitor);


//Exercício 5:
const ultimas_atualizacoes = document.getElementById("ultimas-atualizacoes");
const ultimo_item = ultimas_atualizacoes.lastElementChild;
ultimas_atualizacoes.removeChild(ultimo_item);


//Exercício 6:
const alterna_tema = document.getElementById("alternar-tema");
alterna_tema.addEventListener('click', function () {
    let corpo = document.body;
    corpo.classList.toggle('tema-escuro');

});
