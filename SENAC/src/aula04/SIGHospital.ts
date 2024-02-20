class Funcionario {
  nome: string;
  cpf: number;
  rg: number;
  celular: number;
  endereco: string;
  cargo: string;
  salario: number;

  constructor(
    nome: string,
    cpf: number,
    rg: number,
    celular: number,
    endereco: string,
    cargo: string,
    salario: number
  ) {
    this.nome = nome;
    this.cpf = cpf;
    this.rg = rg;
    this.celular = celular;
    this.endereco = endereco;
    this.cargo = cargo;
    this.salario = salario;
  }
}
const funcionario1 = new Funcionario("Marcos S.",12345678900,123456789,84912345678,"Rua dos Bobos","Clínico Geral",2500)
console.log(funcionario1);


class Paciente {
  nome: string;
  cpf: string;
  rg: string;
  celular: string;
  email:string;
  endereco: string;
  idade:Date;
  sexo:string;

  constructor(
    nome: string,
    cpf: string,
    rg: string,
    celular: string,
    email:string,
    endereco: string,
    idade:Date,
    sexo:string
  ) {
    this.nome = nome;
    this.cpf = cpf;
    this.rg = rg;
    this.celular = celular;
    this.email = email;
    this.endereco = endereco;
    this.idade = idade;
    this.sexo = sexo;
  }
}
const paciente1 = new Paciente ("Carla","1235678900","123456789","84912345678","carla@email.com","Rua das Casas",new Date(1970,8,13),"Feminino")
console.log(paciente1);

class Consultas {
      especialidade:string;
      medico:string;
      data: Date;
      paciente:Paciente;
      constructor(
        especialidade:string,
        medico:string,
        data: Date,
        paciente:Paciente){
          this.especialidade = especialidade;
          this.medico = medico;
          this.data = data;
          this.paciente = paciente;
      }
}

const consulta1 = new Consultas ("Geral","Dr. Marcos",new Date(2024,5,21),paciente1)
console.log(consulta1);

