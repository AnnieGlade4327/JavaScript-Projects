console.log(2 + 2);
function my_Function() {
  document.getElementById("Test").innerHTML = 0 / 0;
}

function my_Function() {
  document.getElementById("Test2").innerHTML = isNaN("this is a string");
}

function my_Function() {
  document.getElementById("Test3").innerHTML = isNaN("007");
}

document.write(2e310);
document.write(-3e310);

document.write(10 > 2);

document.write(10 < 2);

console.log("false");

document.write(10==10);
document.write(3==11);

//Now, remember, a single equal sign assigns a variable. Here is a way we could utilize === in JavaScript:
X = 82;
Y = "82";
document.write(X === Y);

X = 82;
Y = "82";
document.write(X === Y);

A = "Magnus";
B = "Magnus";
document.write(A === B);

document.write(5 > 2 && 10 > 4);

document.write(5 > 10 && 10> 4);

document.write(5 > 10 || 10 > 4);

document.write(5 >  10 || 10 > 20);

function not_Function() {
  document.getElementById("Not").innerHTML = ! (20>10);
}
function not_Function() {
  document.getElementById("Not").innerHTML = ! (5>10);
}