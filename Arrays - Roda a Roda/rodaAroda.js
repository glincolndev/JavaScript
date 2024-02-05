
//modularizar dividindo em funções com parametros


function jogarRodaARoda() {
//letras da palavra certa
var palavraMisteriosa = ["a", "p", "o", "s", "t", "a"]; 
//vetor com as letras do usuário
var palavraUsuario = []; 
  /*    vamos agora limitar a quantidade de letras
        que o usuário pode tentar
*/
  while (palavraUsuario.length < 6) {
    //pediremos o palpite de cada referida letra no HTML
    var palpiteUsuario = document.getElementById("palpite").value;
    //armazenamos a letra no vetor do usuário
    palavraUsuario.push(palpiteUsuario);
    //vamos varrer o vetor gabarito
    for (var index in palavraMisteriosa) {
        //e varrer o vetor do usuário
      for (palpiteUsuario in palavraUsuario) {
      }
    }
     /*
        agora iremos condicionar o loop com a comparação:
        se as letras forem iguais, mostra a palavra certa e os parabéns
        */ 
    if (palavraUsuario[palpiteUsuario] == palavraMisteriosa[index]) {
        window.alert(palavraMisteriosa[index]);
      } else {
          //caso contrário: :(((((((((
        window.alert("você errou. tente novamente!");
      }
  }
}
