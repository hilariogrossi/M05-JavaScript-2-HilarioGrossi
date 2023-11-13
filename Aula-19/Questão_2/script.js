function enviarReserva() {
    const formulario = document.forms['reservaForm'];
    const dadosReserva = document.getElementById('dadosReserva');

    const nome = formulario['nome'].value;
    const telefone = formulario['telefone'].value;
    const dataReserva = formulario['data'].value;

    let reserva = '';

    if (!validaTelefone(telefone)) {
        alert('Digite um telefone válido!');
        return;

    }

    dadosReserva.innerHTML = `<span>Dados da Reserva:</span>
    <p>Nome: ${nome}</p>
    <p>Telefone: ${telefone}</p>
    <p>Data da Reserva: ${dataReserva}</p>`;

    document.getElementById('reservaForm').reset();

}

function validaTelefone(telefone) {
    const telefoneNumerico = telefone.replace(/\D/g, '');

    return telefoneNumerico.length >= 10 && telefoneNumerico.length <= 11;

}
