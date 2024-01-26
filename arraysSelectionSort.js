var vetor = [235, 14, 1, 133, 23, 43, 21, 435, 200, 37];
var posicaoAtual = 0; // indica onde estamos dentro do array
var contador = 0; //será iterado com a quantidade de ordenações

//"posicaoAtual" sempre começa do 0, e então varre o vetor
//"menorAtual" é a nossa referência até agora
for (posicaoAtual = 0; posicaoAtual < vetor.length; posicaoAtual++) {  
var menorAtual = posicaoAtual;
       
//"possivelMenor" será sempre o elemento a frente de "posicaoAtual",     
// ele irá abrir caminho procurando por um elemento menor.  
for (var possivelMenor = posicaoAtual + 1; possivelMenor < vetor.length; possivelMenor++) {
        
//aqui comparamos o elemento a frente com nossa referência anterior
//será que estavamos certos de primeira?
        if (vetor[possivelMenor] < vetor[menorAtual]) {
          menorAtual = possivelMenor;
        }
  }
//caso se atualize o menorAtual,
//iremos finalmente ordenar os dois elementos
//e para cada vez que ordenarmos, contaremos 1
  if (menorAtual !== posicaoAtual) {
    [vetor[posicaoAtual], vetor[menorAtual]] = [vetor[menorAtual], vetor[posicaoAtual]];
    contador++
 }
}
//agora é só exibir o resultado!
console.log("a lista ordenada é igual a:  ", vetor);
console.log("foram feitas ", contador, " trocas (ui)");
