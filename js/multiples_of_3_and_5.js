function multiples(){
  var x, text;

  x = document.getElementById("numb").value;

  if(x === 1000){
    text = "Teste";
  } else {
    text = "outro";
  }
  document.getElementById("demo").innetHTML = text;
}
