function enviarCadastro() {
    const div = document.createElement('div');
    document.body.appendChild(div);

    let enviarCadastro = '';

    for (let cadastro of document.forms['cadastroForm']) {
        if (cadastro.type !== 'button') {
            enviarCadastro += `<p><strong>${cadastro.name}</strong>: ${cadastro.value}</p>`;

        }

    }

    div.innerHTML = enviarCadastro;

    document.getElementById('cadastroForm').reset();

}
