function primeFactor()
{
var x = 1, y, fim;

y = document.getElementById("number").value
fim = document.getElementById("number").value

  while (x <= fim) {
    x += 1;

      if(y % x == 0){
        fim = fim / x;
      }
  }
  document.getElementById("prime").innerHTML = "The largest prime factor of the number is: " + x;
}
