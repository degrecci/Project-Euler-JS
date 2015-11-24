function fibonacci(){

  var a = 1, b = 2, c = 0, somatotal = 2;
  var valor = 0;

  valor = document.getElementById("number").value;

    while(c <= valor)
    {
      c = a + b;
      a = b;
      b = c;

        if(c % 2 == 0)
        {
          somatotal += c;
        }
    }
    document.getElementById("soma").innerHTML = somatotal;
}
