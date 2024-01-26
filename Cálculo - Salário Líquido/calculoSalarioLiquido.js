function calculo(){

var salario_bruto = Number(document.getElementById("salario_bruto").value);
var IRPF;
var IRPF1;
var IRPF2 = 0.075;
var IRPF3 = 0.15;
var IRPF4 = 0.225
var IRPF5 = 0.275


if(salario_bruto <= 2.112){
    IRPF = salario_bruto * IRPF1
    }else if(salario_bruto <= 2826.65){
        IRPF = salario_bruto * IRPF2
        }else if(salario_bruto <= 3751.05){
            IRPF = salario_bruto * IRPF3
            }else if(salario_bruto <= 4664.68){
                    IRPF = salario_bruto * IRPF4
                }else{(salario_bruto > 4664.68)
                    IRPF = salario_bruto * IRPF5     
}
                

var INSS;
var INSS1 = 0.075
var INSS2 = 0.09
var INSS3 = 0.12
var INSS4 = 0.14

if(salario_bruto <= 1412){
    INSS = salario_bruto * INSS1
        }else if(salario_bruto <= 2666.68){
            INSS = salario_bruto * INSS2
            }else if(salario_bruto <= 4000.03){
                INSS = salario_bruto * INSS3
                }else{(salario_bruto <= 7786.02)
                    INSS = salario_bruto * INSS4
}


var salario_liquido = salario_bruto - (IRPF + INSS)

alert("O salário líquido é: R$ " + salario_liquido.toFixed(2));

}