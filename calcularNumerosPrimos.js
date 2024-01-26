var numero = 1;
var acumulador = 0;

while (numero <= 49) {
  acumulador += numero;
  numero++;

  if (numero % 2 == 0 && numero != 2) {
    //fazer nada
  } else if (numero % 3 == 0 && numero != 3) {
    //fazer nada
  } else if (numero % 5 == 0 && numero != 5) {
    //fazer nada
  } else if (numero % 7 == 0 && numero != 7) {
    //fazer nada
  } else {
    //printar números
    console.log(numero);
  }
}
