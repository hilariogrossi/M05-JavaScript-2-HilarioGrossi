function adicionarTarefa() {
    const tarefa = document.getElementById('tarefa').value;
    const listaTarefas = document.getElementById('listaTarefas');

    const novaTarefa = document.createElement('li');
    
    novaTarefa.innerHTML = `
    <p>${tarefa} </p>
    <button onclick="removerTarefa(this)">REMOVER</button>`;

    listaTarefas.appendChild(novaTarefa);

    document.getElementById('tarefaForm').reset();

}

function removerTarefa(button) {
    const tarefa = button.parentNode;
    tarefa.remove();

}
