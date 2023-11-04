console.log(2 + 2); //will display infinity
function my_Function() {
  document.getElementById("Test").innerHTML = 0 / 0;
}

function my_Function() {
  document.getElementById("Test2").innerHTML = isNaN("this is a string");//writing an expression assigning a string
}
function my_Function() {
  document.getElementById("Test4").innerHTML = isNaN("7"); //writing an expression assigning a number
}


function my_Function() {
  document.getElementById("Test3").innerHTML = isNaN("007"); //another number
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

// In JavaScript, there are three Boolean logical operators: && || and !
X = 82;
Y = "82";
document.write(X === Y);
//The && operator determines the logic between values or variables, such as verifying that 
//___ and ___ are true (both must be true to return “true.” If one or both is false, the code will return “false”). 
//In JavaScript, we write this as follows:
A = "Magnus";
B = "Magnus";
document.write(A === B);

document.write(5 > 2 && 10 > 4);

document.write(5 > 10 && 10> 4);

document.write(5 > 10 || 10 > 4);

document.write(5 >  10 || 10 > 20);

function not_Function() {
  document.getElementById("Not").innerHTML = ! (20>10); //making a true statement
}
function not_Function() {
  document.getElementById("Not").innerHTML = ! (5>10); //making a false statement
}