function fibonacci(){

var x1 = 100, x2 = 100, resultado;
var r = [];

  while(x1 < 999)
  {
    resultado = x1 * x2;
    x1++;
    while (x2 <= 999)
    {
      resultado = x1 * x2;
      x2++;
      if (resultado == str.split('').reverse().join('')) {
        r.push(resultado);
        break;
      }
    }
  }
  var maior = Math.max.apply(null,r)

  document.getElementById("palindrome").innerHTML = "The largest palindrome made from the product of two 3-digit numbers is: " + maior;
}
