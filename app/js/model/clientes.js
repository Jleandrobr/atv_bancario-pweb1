class Clientes {
    constructor() {
        this._clientes = new Array();
        const c1 = new Conta('1', 413);
        const p1 = new Poupanca('2', 233);
        const cb1 = new ContaBonificada('3', 0);
        const cli1 = new Cliente("João Pedro", "14632654267", c1);
        const cli2 = new Cliente("José Carlos", "34526487542", p1);
        const cli3 = new Cliente("Henrique", "12314647893", cb1);
        this._clientes.push(cli1, cli2, cli3);
    }
    inserir(cliente) {
        this._clientes.push(cliente);
    }
    remover(cpf) {
        const clienteRemover = this.pesquisar(cpf);
        if (clienteRemover) {
            const indiceCliente = this._clientes.indexOf(clienteRemover);
            if (indiceCliente > -1) {
                this._clientes.splice(indiceCliente, 1);
            }
        }
    }
    listar() {
        return this._clientes;
    }
    pesquisar(cpf) {
        return this._clientes.find(cliente => cliente.cpf === cpf);
    }
}
