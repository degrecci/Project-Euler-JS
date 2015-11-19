function multiples(){
  var x, text;

  x = document.getElementbyId("numb").value;

  if(x === 1000){
    text = "Teste";
  } else {
    text = "outro";
  }
  document.getElementbyId("demo").innetHTML = text;
}
