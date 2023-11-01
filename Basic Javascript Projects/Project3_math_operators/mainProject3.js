var Math = "addition";
function addition() {
  var addition = 2 + 2;
  document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtraction() {
  var subtraction = 5 - 2;
  document.getElementById("Math").innerHTML = "5 - 2 = " + subtraction;
}
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