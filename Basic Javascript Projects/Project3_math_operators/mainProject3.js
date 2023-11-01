

window.alert(Math.random());
window.alert(Math.random() * 100);

function display(val) {
  document.getElementById("result").value += val;

  return val;
}

function solve() {
  let x = document.getElementById("result").value;

  let y = eval(x);

  document.getElementById("result").value = y;

  return y;
}

function negation_Operator() {
  var x = 10;
  document.getElementById("Math").innerHTML = -x;
  document.write(Math);
}

var Q = 5;
Q++;
document.write(Q);
var P = 5.25;
P--;
document.write(P);


function display(mathObjects) {
  document.getElementById("mathObjects").innerHTML = Math.round(4.6);
  document.write(mathObjects);
}

