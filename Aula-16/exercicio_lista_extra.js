const prompt = require('prompt-sync')();

class Cliente {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;

    }

}

class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
        this.quantidadeVendida = 0;

    }

}

class Venda {
    constructor(cliente, produtos) {
        this.cliente = cliente;
        this.produtos = produtos;

    }

    realizarVenda() {
        console.log(`\nVenda para ${this.cliente.nome} realizada com sucesso!`);
        console.log(`\nA venda tem valor total de R$ ${this.total()}.`);
    
        for (let i = 0; i < this.produtos.length; i++) {
            const produto = this.produtos[i];
    
            if (produto.quantidadeVendida > produto.quantidade) {
                console.log(`\nQuantidade insuficiente de ${produto.nome} em estoque. A venda não pode ser concluída!`);
                return;

            }

        }
    
        for (let i = 0; i < this.produtos.length; i++) {
            const produto = this.produtos[i];

            produto.quantidade -= produto.quantidadeVendida;
    
            if (produto.quantidade === 0) {
                console.log(`\nAtenção: o estoque de ${produto.nome} está zerado.`);

            }
    
            produto.quantidadeVendida = 0;

        }

    }

    total() {
        let total = 0;

        for (let i = 0; i < this.produtos.length; i++) {
            total += this.produtos[i].preco * this.produtos[i].quantidadeVendida;

        }

        return total.toFixed(2).replace('.', ',');

    }

}

const clientes = [];
const produtos = [];

function inserirCliente() {
    const nome = prompt('\nDigite o nome do cliente: ');
    const cpf = prompt('\nDigite o CPF do cliente: ');

    clientes.push(new Cliente(nome, cpf));

    console.log('\nCliente inserido com sucesso!\n');

}

function inserirProduto() {
    const nome = prompt('\nDigite o nome do produto: ');
    const preco = parseFloat(prompt('\nDigite o preço do produto: '));
    const quantidade = parseInt(prompt('\nDigite a quantidade do produto: '));

    produtos.push(new Produto(nome, preco, quantidade));

    console.log('\nProduto inserido com sucesso.\n');

}

function realizarVenda() {
    console.log('\n----- Lista de Clientes -----');
    clientes.forEach((cliente, indice_1) => {
        console.log(`${indice_1 + 1}. ${cliente.nome} CPF = (${cliente.cpf})`);

    });

    const clienteIndice = prompt('\nDigite o índice do cliente para a venda: ');

    if (clienteIndice.trim() === '' || isNaN(clienteIndice)) {
        console.log('\nÍndice do cliente inválido. A venda não pode ser realizada.\n');
        return;

    }

    const cliente = clientes[clienteIndice - 1];

    const quantidadeProduto = parseInt(prompt('\nQuantos produtos deseja adicionar? '));

    if (isNaN(quantidadeProduto) || quantidadeProduto <= 0) {
        console.log('\nQuantidade de produtos inválida. Venda não realizada.\n');
        return;

    }

    console.log('\n----- Lista de Produtos -----');
    produtos.forEach((produto, indice_2) => {
        console.log(`${indice_2 + 1}. ${produto.nome} - R$ ${Number(produto.preco).toFixed(2).replace('.', ',')} - Quantidade: ${produto.quantidade}`);

    });

    const produtosSelecionados = [];

    for (let i = 0; i < quantidadeProduto; i++) {
        const produtoIndice = prompt(`\nDigite o índice do produto ${i + 1} ou pressione Enter para finalizar a compra: `);

        if (produtoIndice.trim() === '' || isNaN(produtoIndice)) {
            break;

        }

        const indiceNumerico = parseInt(produtoIndice);

        if (indiceNumerico < 1 || indiceNumerico > produtos.length) {
            console.log('\nÍndice inválido. Venda não realizada.\n');
            return;

        }

        const quantidadeDesejada = parseInt(prompt(`\nQuanto(a)s ${produtos[indiceNumerico - 1].nome}(s) deseja comprar? `));

        if (quantidadeDesejada > produtos[indiceNumerico - 1].quantidade) {
            console.log(`\nQuantidade insuficiente de ${produtos[indiceNumerico - 1].nome} em estoque. A venda não pode ser concluída!`);
            return;

        }

        produtosSelecionados.push({
            ...produtos[indiceNumerico - 1],
            quantidadeVendida: quantidadeDesejada,

        });
    }

    if (produtosSelecionados.length > 0) {
        const venda = new Venda(cliente, produtosSelecionados);

        venda.realizarVenda();

    } else {
        console.log('\nVenda cancelada.\n');

    }

}

function menu() {
    console.log(`\n----- Menu -----
1. Inserir Cliente
2. Inserir Produto
3. Realizar Venda
4. Sair\n`);

}

let escolha = 0;

while (escolha !== 4) {
    menu()

    escolha = parseInt(prompt('\nEscolha uma opção (1 a 4): '));

    switch (escolha) {
        case 1:
            inserirCliente();
            break;

        case 2:
            inserirProduto();
            break;

        case 3:
            realizarVenda();
            break;

        case 4:
            console.log('\nSaindo do programa...\n');
            break;

        default:
            console.log('\nERRO! Opção inválida. Tente novamente.\n');

    }

}
