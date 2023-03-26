class ClienteController{
    private inputNome: HTMLInputElement;
    private inputCpf: HTMLInputElement;
    private inputConta: HTMLInputElement;


    private clientes: Clientes;
    private contas: Contas;

    constructor() {
        this.inputNome = <HTMLInputElement>document.querySelector("#nome");
        this.inputCpf = <HTMLInputElement>document.querySelector("#cpf");
        this.inputConta = <HTMLInputElement>document.querySelector("#conta");
        this.clientes = new Clientes();
        this.contas = new Contas();
    }

    inserir(evento: Event){
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

    listar(){
        this.clientes.listar().forEach(cliente => {
            this.inserirClienteNoHTML(cliente);
        });
    }

    inserirClienteNoHTML(cliente: Cliente){
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo conta ' + cliente.toString());
                this.clientes.remover(cliente.cpf);
                (<Element>event.target).parentElement.remove();
            }
        );
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);

    }



}