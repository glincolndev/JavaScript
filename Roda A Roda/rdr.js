/* 
Olá! Aqui começa o nosso código.

Importante: Todos os outputs são via console, mas exibição 
via HTML será implementada.

Entretanto, qualquer usuário com pouca familiaridade às devTools
deve ser capaz de jogar com pouca dificuldade, dado que
tanto o palpite quanto a verificação são botões intuitivos.

Futuramente, instruções serão mostradas no HTML ao abrir a página.
*/

/*
Primeiro, a função sortear() irá usar a biblioteca Math para
retirar um índice aleatório do banco de palavras (inicializado como "gabarito")
e teremos a palavra misteriosa junto de sua dica, que será exibida.
*/
function sortear() {
  var gabarito = [
    [["G", "A", "T", "O"],["Felino"]],
    [["C", "A", "S", "A"],["Moradia"]],
    [["C", "A", "M", "A"]["Dormir"]],
    [["V", "E", "R", "M", "E", "L", "H", "O"],["Cor"]],
    [["M", "A", "Ç", "Ã"],["Fruto proibido"]],
    [["S", "O", "L"],["Astro rei"]],
    [["C", "A", "B", "O"],["Patente militar"]],
    [["P", "A", "R", "Á"],["Estrela solitária da bandeira nacional"]],
    [["B", "O", "L", "A"],["...de futebol, de volei, de basquete"]],
    [["F", "O", "G", "O"],["Lareira"]],
  ];

  var resultSort = gabarito[Math.floor(Math.random() * gabarito.length)];
  console.log(`A dica é: ${resultSort[1].toString()}`);
  return resultSort;
}

// Vetor onde serão armazenados os inputs
var tentativa = [];

// Função que receberá o input e enviará ao vetor tentativa[]
function input() {
  var letra = document.getElementById("letra").value;
  letra.toUpperCase(letra);
  tentativa.push(letra);
  console.log(tentativa);
  //console.log(letra);
  return letra;
}

var letra = input();
var resultSort = sortear();


/*
Este vetor servirá para implentação futura de um
evento de erro, para maior engajamento do usuário 
e também para que seja facilitada a tomada de decisão
*/
var erros = [];

/*
Criando este loop,
acertos[] agora tem o mesmo número de elementos
da palavra gabarito e vai atuar como a nossa versão
censurada dela, que irá se revelando conforme
tentativas bem sucedidas
*/


var acertos = [];
for (a in resultSort[0]) {
  acertos.push("_");
}


/* 
checar() é o coração do jogo.
Esta função passa por todos as letras que estão
em tentativas[] e por todo o vetor da palavra misteriosa,
verificando a cada letra nova que o usuário envia
se é correspondente ou não, para daí atualizar o vetor acertos[]
ou erros[].
*/


function checar() {
  for (b in tentativa) {
    for (a in resultSort[0]) {
      if (tentativa[b] == resultSort[0][a]) {
        acertos.splice(a, 1, tentativa[b]);
        console.log("Acertou!");
      }
    }
  }
  console.log(`Acertos: ${acertos}`);
  //console.log(`Erros: ${erros}`);
}

