function Pessoa(nome) {
  this.nome = nome;

  this.dizOi = function() {
    console.log("Olá! Eu sou " + this.nome);
  }

  this.dizCargo = function() {
    console.log(this.cargo ? this.cargo : "Cargo não definido.");
  }
}

function Funcionario(nome, salario) {
  Pessoa.call(this, nome);
  this.cargo = "Funcionário";

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

function Gerente(nome, salario) {
  Pessoa.call(this, nome);
  this.cargo = "Gerente";

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
    _salario = _salario * 1.2;
  }
}

function Estagiario(nome, salario) {
  Pessoa.call(this, nome);
  this.cargo = "Estagiário";

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
    _salario = _salario * 1.05;
  }
}

// Instâncias
const pessoa1 = new Pessoa("Arlindo");
const func1 = new Funcionario("Juan", 5000);
const gerente1 = new Gerente("JayJay", 8000);
const estagiario1 = new Estagiario("Caio", 2000);

// Testes
pessoa1.dizOi();
pessoa1.dizCargo();

func1.dizOi();
func1.dizCargo();
console.log("Salário atual:", func1.chamarSalario());
func1.aumento();
console.log("Salário após aumento:", func1.chamarSalario());

gerente1.dizOi();
gerente1.dizCargo();
console.log("Salário do gerente:", gerente1.chamarSalario());
gerente1.aumento();
console.log("Salário do gerente após aumento:", gerente1.chamarSalario());

estagiario1.dizOi();
estagiario1.dizCargo();
console.log("Salário do estagiário:", estagiario1.chamarSalario());
estagiario1.aumento();
console.log("Salário do estagiário após aumento:", estagiario1.chamarSalario());

// Observação:
// O conteúdo de "class" e "extends" ainda não foi apresentado em aula.
// Por isso, o exercício foi feito com funções construtoras e call() para representar a herança.