class Cliente {
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
  const cliente1 = new Cliente ("João","12345678900","123456789","(84)9 12345678","joao@email.com","Rua dos lirios", new Date (1970,2,15),"Masculino")
  //console.log(cliente1)

  
  


  class Transacoes {
    informacoestitular: Cliente;
    entradas: number;
    //dataDeEntrada: Date;
    saidas: number;
    //dataDeSaida: Date;
    
      constructor(
        informacoestitular: Cliente,
        entradas:number,
        //dataDeEntrada: Date,
        saidas: number,
        //dataDeSaida: Date,
      ){
        this.informacoestitular = informacoestitular;
        this.entradas = entradas;
       // this.dataDeEntrada = dataDeEntrada;
        this.saidas = saidas;
       // this.dataDeSaida = dataDeSaida;
      }
    }

const transcoes1 = new Transacoes (cliente1,3,0.5);


class Contas {
  titular: Cliente;
  tipoDeConta: string;
  saldo: number;
  metaFinanceira?: string;
  valorMeta?: number
  constructor(
    titular: Cliente,
    tipoDeConta: string,
    saldo: number,
    metaFinanceira?: string,
    valorMeta?: number
  ){
    this.titular = titular;
    this.tipoDeConta = tipoDeConta;
    this.saldo = saldo;
    this.metaFinanceira = metaFinanceira;
    this.valorMeta= valorMeta;
    if(saldo<0){
      console.log("Situação: Saldo negativo");
    }else{
      console.log("Situação: Regular");
    }
    if(valorMeta!=undefined){
    if(valorMeta>saldo){
        console.log(`Faltam ${(valorMeta-saldo)} reais para alcançar a meta.`);
    }else{
        console.log("Meta alcançada! Parabéns!");
    }
    }
  }
}

const conta1 = new Contas (cliente1,"Corrente",(transcoes1.entradas-transcoes1.saidas),"Carro 0km",100);

console.log(conta1);











  

