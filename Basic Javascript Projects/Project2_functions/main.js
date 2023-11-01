
function my_first_function() {
    var str = "This Will be the Text of the Button, or Whatever is to display/link";
    document.getElementById("button_text").innerHTML =str;
}
function my_second_function() {
    var str = "and to see if it will go back when you click again";
    document.getElementById("button_text2").innerHTML = str;
}
//probably has to be a way to make it so you can click through and display diff texts each time? 

//+- will concatenate a string. <p id="Concatenate"></p> //assigning an id in HTML


function testFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}



const calculate = document.getElementById('calculate');
const first = document.getElementById('first');
const second = document.getElementById('second');
const res = document.getElementById('res');

function calcul() {
  const one = parseFloat(first.value) || 0;
  const two = parseFloat(second.value) || 0;
  console.log(first * second);
}

res.addEventListener('click', calcul);


let nouveau = document.createElement('div');
nouveau.id = 'nouveau';
nouveau.textContent = "nouveau";
calculate.appendChild(nouveau);