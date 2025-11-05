function Pessoa(nome) {
  this.nome = nome;

  this.dizOi = function() {
    console.log("Olá! Eu sou " + this.nome);
  }

  this.dizCargo = function() {
    console.log(this.cargo ? this.cargo : "Cargo não definido.");
  }
}

function Funcionario(nome, cargo, salario) {
  Pessoa.call(this, nome);
  this.cargo = cargo;
  
  let _salario = salario;

  this.chamarSalario = function() {
    return _salario;
  }

  this.setarSalario = function(valor) {
    if (typeof valor === "number") {
      _salario = valor;
    } else {
      console.log("Valor inválido!");
    }
  }

  this.aumento = function() {
    _salario = _salario * 1.1;
  }
}

function Estagiario(nome) {
  Funcionario.call(this, nome, "Estagiário", 2000);

  this.aumento = function() {
    const novoSalario = this.chamarSalario() * 1.07;
    this.setarSalario(novoSalario);
  }
}

// Instâncias
const pessoa1 = new Pessoa("Arlindo");
const func1 = new Funcionario("Juan", "Desenvolvedor", 5000);
const func2 = new Estagiario("JayJay");

// Testes
pessoa1.dizOi();
pessoa1.dizCargo();

func1.dizOi();
func1.dizCargo();
console.log("Salário atual:", func1.chamarSalario());
func1.aumento();
console.log("Salário após aumento:", func1.chamarSalario());

func2.dizOi();
func2.dizCargo();
console.log("Salário do estagiário:", func2.chamarSalario());
func2.aumento();
console.log("Salário do estagiário após aumento:", func2.chamarSalario());