function esconderMostrar() {
    const foto = document.getElementById('foto');

    if (foto.style.visibility == 'hidden') {
        foto.style.visibility = 'visible';

    } else {
        foto.style.visibility = 'hidden';

    }

}

function alterarTextAlign() {
    const sobre = document.getElementById('sobre');
    const alteraTextAlign = document.getElementById('alteraTextAlign');
    const fontFamily = document.getElementById('fontFamily');
    //Franklin Gothic Medium

    sobre.style.textAlign = alteraTextAlign.value;

    sobre.style.fontFamily = fontFamily.value;

}

function alteraCor() {
    const footer = document.getElementById('footer');
    const header = document.getElementById('header');
    const alteraCor = document.getElementById('cor');

    if (alteraCor.value == 'white') {
        footer.style.backgroundColor = 'white';
        header.style.backgroundColor = 'white';

        footer.style.color = 'black';
        header.style.color = 'black';

    } else if (alteraCor.value == 'black') {
        footer.style.backgroundColor = 'black';
        header.style.backgroundColor = 'black';

        footer.style.color = 'white';
        header.style.color = 'white';

    } else {
        footer.style.backgroundColor =  alteraCor.value;
        header.style.backgroundColor = alteraCor.value;

    }

}

function escuroClaro() {
    const escuroClaro = document.getElementById('conteudo');

    if (escuroClaro.style.background == 'white') {
        escuroClaro.style.background = 'black';
        escuroClaro.style.color = 'white';

    } else {
        escuroClaro.style.background = 'white';
        escuroClaro.style.color = 'black';

    }

}
