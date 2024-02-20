class Livro {
  titulo: string;
  autor: string;
  editora: string;
  ano: Date;
  categoria: string;

  constructor(
    titulo: string,
    autor: string,
    editora: string,
    ano: Date,
    categoria: string
  ) {
    this.titulo = titulo;
    this.autor = autor;
    this.editora = editora;
    this.ano = ano;
    this.categoria = categoria;
  }
}
const livro1 = new Livro ("Frankenstein","Mary Shelley","Harding, Mavor & Jones.",new Date(1818,1,1),"Terror")
const livro2 = new Livro ("Dom Quixote","Miguel de Cervantes","Moderna",new Date(1605,1,16),"Romance")

//console.log(livro1);

class Usuario {
  nome: string;
  cpf: string;
  rg: string;
  celular: string;
  email:string;
  endereco: string;

  constructor(
    nome: string,
    cpf: string,
    rg: string,
    celular: string,
    email:string,
    endereco: string,
    

  ) {
    this.nome = nome;
    this.cpf = cpf;
    this.rg = rg;
    this.celular = celular;
    this.email = email;
    this.endereco = endereco;
    
  }
}

const usuario1 = new Usuario ("Patrícia","12345678900","123456789","(84)9 12345678","patricia@email.com","Rua dos campos")
//console.log(usuario1);

class Emprestimos {
    informacoesUsuario: Usuario;
    emprestimosAtivos: Livro;
    dataDeRetirada: Date;
    dataDeDevolucao: Date;
    historico: Livro;
    constructor(
      informacoesUsuario: Usuario,
      emprestimosAtivos: Livro,
      dataDeRetirada: Date,
      dataDeDevolucao: Date,
      historico: Livro){
      this.informacoesUsuario = informacoesUsuario;
      this.emprestimosAtivos = emprestimosAtivos;
      this.dataDeRetirada = dataDeRetirada;
      this.dataDeDevolucao = dataDeDevolucao;
      this.historico = historico;
    }
}
const emprestimo1 = new Emprestimos(usuario1, livro1,new Date (2024,2,20),new Date(2024,3,1), livro2);
console.log(emprestimo1);
