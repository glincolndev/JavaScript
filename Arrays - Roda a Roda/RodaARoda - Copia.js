function sorteio() {
  const palavras = [
    [["A", "r", "v", "o", "r", "e"], ["Planta"]],
    [["A", "m", "o", "r"], ["Sentimento"]],
    [["G", "a", "l", "i", "n", "h", "a"], ["Ave"]],
    [["A", "v", "i", "ã", "o"], ["Vôo"]],
    [["A", "v", "ó"], ["Senhorinha"]],
    [["B", "a", "l", "ã", "o"], ["Bexiga"]],
    [["B", "e", "b", "ê"], ["Criança"]],
    [["B", "o", "l", "o"], ["Comida"]],
    [["B", "r", "a", "n", "c", "o"], ["Cor"]],
    [["C", "a", "m", "a"], ["Móvel"]],
    [["C", "a", "n", "e", "c", "a"], ["Café"]],
    [["C", "e", "l", "u", "l", "a", "r"], ["Ligação"]],
    [["C", "é", "u"], ["Estrelas"]],
  ];

  let palavraEDica = palavras[Math.floor(Math.random() * palavras.length)];
  let dica = palavraEDica[1];
  console.log(`A dica é: ${dica}`);
  return palavraEDica;
}

var resultSorteio = [sorteio()[0]];
//console.log(resultSorteio)
var acertos = [];
var erros = [];

for (let i = 0; i < resultSorteio[0].length; i++) {
acertos.push("_");
}
console.log(acertos);


var palavraDoUsuario = [];

function input() {
  var inputUsuario = document.getElementById("palavraUsuario").value;
  palavraDoUsuario.push(inputUsuario);
  console.log(palavraDoUsuario);
  return palavraDoUsuario;
}

/*
PARAMOS AQUI - Melhorar maneira de armazenar acertos e erros,
pois a atual não funciona com letras que aparecem mais de uma vez.
APÓS ISTO - Desenvolver exibição em tempo real das letras descobertas 
&& definir condição de vitória
*/
function checagem() {
  for (let b = 0; b < palavraDoUsuario.length; b++) {
    for (let a = 0; a < resultSorteio[0].length; a++) {
      if (palavraDoUsuario[b] === resultSorteio[0][a] && palavraDoUsuario[b] != acertos[b]) {
        acertos.push(resultSorteio[0][a]);
        console.log(`Acertou: ${palavraDoUsuario[b]}`);
        console.log("Acertos:", acertos);
      } else if (palavraDoUsuario[b] != erros[b]) {
        erros.push(palavraDoUsuario[b]);
        console.log("Errou!", erros);
      }
    }
  }
}