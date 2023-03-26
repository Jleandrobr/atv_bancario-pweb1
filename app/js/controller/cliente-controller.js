class ClienteController {
    constructor() {
        this.inputNome = document.querySelector("#nome");
        this.inputCpf = document.querySelector("#cpf");
        this.inputConta = document.querySelector("#conta");
        this.clientes = new Clientes();
        this.contas = new Contas();
    }
    inserir(evento) {
        evento.preventDefault();
        let novaConta = new Conta(this.inputConta.value);
        let novoCliente = new Cliente(this.inputNome.value, this.inputCpf.value, novaConta);
        // let novoCliente = new Cliente(this.inputNome.value,
        //     this.inputCpf.value, (this.contas) => {
        //     this.inputConta.
        // });
        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
    }
    listar() {
        this.clientes.listar().forEach(cliente => {
            this.inserirClienteNoHTML(cliente);
        });
    }
    inserirClienteNoHTML(cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            console.log('removendo conta ' + cliente.toString());
            this.clientes.remover(cliente.cpf);
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
