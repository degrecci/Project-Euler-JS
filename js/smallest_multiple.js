function smallestMultiple(){

var n = 1, c = 1, para = false;

n = document.getElementById("number").value;
while (para == false){
  n++
  while (c <= 20) {

    if((n % c) != 0){
      c++;
    }
    else{
      para = true;
    }
  }
}
  document.getElementById("multiple").innerHTML = "The smallest positive number that is evenly divisible by all of the numbers from 1 to 20?" + n;
}
