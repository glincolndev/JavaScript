//sorteia a palavra do Banco de Palavras a exibe junto da dica correspondente
function sortearPalavra(){
    //inicializamos a função que conterá nosso gabarito
    var bancoDePalavras = [
                            ["Amarelo", "Girassol"],
                            ["Arvore","Planta"],
                            ["Amor","Sentimento"],
                            ["Ave","Galinha"],
                            ["Avião","Vôo"],
                            ["Avó","Senhorinha"],
                            ["Balão","Bexiga"],
                            ["Bebê","Criança"],
                            ["Bolo","Comida"],
                            ["Branco","Neve"],
                            ["Cama","Móvel"],
                            ["Caneca","Café"],
                            ["Celular","Ligação"],
                            ["Céu","Estrelas"]
                        ];
    //retira um vetor contendo palavra e dica
    var palavraSorteada = (bancoDePalavras[(Math.floor(Math.random() * bancoDePalavras.length))]);
    //mostra apenas a dica correspondente na tela
    console.log("A palavra foi sorteada e a dica é "+ palavraSorteada[1]);
    return palavraSorteada;
}

//chama a função e armazena em uma variável global
var palavraSorteada=[sortearPalavra()];

//PARAMOS AQUI - Resolver laço de repetição que irá armazenar continuos inputs para checarmos depois
//lê o input do usuário
function lerInput(){
var letraUsuario = (document.getElementById("letraUsuario").value);
var palavraDoUsuario = [];
for(i=0;palavraDoUsuario<palavraSorteada;i++)
    {
    palavraDoUsuario.push(letraUsuario);
    console.log(palavraDoUsuario[i])
    }
}
//chama a função e armazena em uma variável global
var palavraDoUsuario = [lerInput()];


