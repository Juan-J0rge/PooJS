function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log("ola")
    }
    this.dizCargo = function() {
        console.log(this.cargo);
    }
}

function funcionario(nome ,cargo, salario) {
    this.cargo = cargo;
    // this.salario = salario;
    let _salario = salario;

    this.aumento = function() {
        const novoSalario = _salario * 1.1;
        _salario = novoSalario;
    }

    this.chamarSalario = function() {
        return _salario;
    }

    this.setarSalario = function(valor) {
        if(typeof valor === 'number') {
            _salario = valor;
        }

    }

    Pessoa.call(this, nome);
}

function Estagiario(nome) {
    funcionario.call(this, nome, "Estagiario", 2000);

    this.aumento = function() {
        const novoSalario = this.chamarSalario() * 1.07;
        this.setarSalario(novoSalario);
    }
}


const Func1 = new funcionario("Juan", "Dev", 5000);
const Pessoa1 = new Pessoa("Arlindo")
const Func2 = new Estagiario("JayJay");
Func1.setarSalario('mil');
console.log(Func1);
console.log(Pessoa1);
Func1.dizOi();
Func1.dizCargo();
Func1.aumento();
Func2.aumento();

console.log(Func2.chamarSalario());
console.log(Func1.chamarSalario());
