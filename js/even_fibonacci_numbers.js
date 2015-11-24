function fibonacci(){

  var valor = 0, a = 1, b = 2, c = 0, somatotal = 2;
  var

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
    document.getElementById("seq").innerHTML = "Sequence: ";
    document.getElementById("soma").innerHTML = "Sum of the even-valued terms: <strong>" + somatotal + "</strong>.";
}
