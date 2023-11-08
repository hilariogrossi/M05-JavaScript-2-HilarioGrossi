class Produto {
    constructor (nome, preco) {
    this.nome = nome;
    this.preco = preco;

    }
    
}

class Cliente {
    constructor (nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
        this.idade = 0;

    }

}

class Venda {
    constructor (cliente, produtos) {
        this.cliente = cliente;
        this.produtos = produtos;

    }

    total () {
        let total = 0;

        for (let i = 0; i < this.produtos.length; i++) {
            total += this.produtos[i].preco;

        }

        return `${total.toFixed(2).replace('.', ',')}`;

    }

}


const clientsStringJson = '[{"nome":"Client 1", "cpf":"12345678901"},'+ 
'{"nome":"Client 2", "cpf":"10987654321"},'+ 
'{"nome":"Client 3", "cpf":"12345098765"},'+ 
'{"nome":"Client 4", "cpf":"12345098765"},'+ 
'{"nome":"Client 5", "cpf":"12345098765"},'+ 
'{"nome":"Client 6", "cpf":"12345098765"},'+ 
'{"nome":"Client 7", "cpf":"12345098765"},'+ 
'{"nome":"Client 8", "cpf":"12345098765"},'+ 
'{"nome":"Client 9", "cpf":"12345098765"},'+ 
'{"nome":"Client 10", "cpf":"12345098765"}]';

const clientes = JSON.parse(clientsStringJson);


const productsStringJson = '[{"nome":"Product 1", "preco":1.00},'+ 
'{"nome":"Product 2", "preco":2.00},'+ 
'{"nome":"Product 3", "preco":3.00},'+ 
'{"nome":"Product 4", "preco":4.00},'+ 
'{"nome":"Product 5", "preco":5.00},'+ 
'{"nome":"Product 6", "preco":6.00},'+ 
'{"nome":"Product 7", "preco":7.00},'+ 
'{"nome":"Product 8", "preco":8.00},'+ 
'{"nome":"Product 9", "preco":9.00},'+ 
'{"nome":"Product 10", "preco":10.00}]';

const produtos = JSON.parse(productsStringJson);


const venda_1 = new Venda(clientes[0], produtos);


console.log(`\nA venda tem valor total de R$ ${venda_1.total()}.\n`);
