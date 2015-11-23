function multiplesOf(){

  var valor, somamultiplos = 0;

  valor = document.getElementById("number").value;

  for (var i = 1; i < valor; i++) {

    if (i % 3 == 0 || i % 5 == 0) {
      somamultiplos += i;
    }

  }
  document.getElementById("mult").innerHTML = somamultiplos;
  document.getElementById("val").innerHTML = "The sum of all the multiples of 3 or 5 below <strong>" + valor + "</strong> is: ";
}
