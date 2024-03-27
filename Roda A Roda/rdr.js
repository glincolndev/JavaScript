function sortear() {
  var gabarito = [
    ["G", "A", "T", "O"],
    ["C", "A", "S", "A"],
    ["C", "A", "M", "A"],
    ["V", "E", "R", "M", "E", "L", "H", "O"],
    ["M", "A", "Ç", "A"],
    ["S", "O", "L"],
    ["C", "A", "B", "O"],
    ["P", "A", "R", "A"],
    ["B", "O", "L", "A"],
    ["F", "O", "G", "O"],
  ];

  var resultSort = gabarito[Math.floor(Math.random() * gabarito.length)];
  console.log(resultSort)
  return resultSort;
}

var tentativa = [];

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

var acertos = [];
for (a in resultSort) {
  acertos.push("_");
}
console.log(acertos);

var erros = [];

function checar() {
  for (b in tentativa) {
    for (a in resultSort) {
      if (tentativa[b] == resultSort[a]) {
        acertos.splice(a, 1, tentativa[b]);
        console.log("Acertou!");
      }
    }
  }
  console.log(`Acertos: ${acertos}`);
  //console.log(`Erros: ${erros}`);
}


