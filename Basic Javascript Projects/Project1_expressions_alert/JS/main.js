alert("Hello World! 1 ");

window.alert("Hello World! 2"); //Also, did you notice we created a string? As we mentioned earlier,
//strings are one of the seven value types. In JavaScript, we can create strings with double quotes (“) or single quotes (‘),
//such as: “Mary had a little lamb,” or ‘Its fleece was white as snow.’
//In our above code, “Hello, World!” is a string. It doesn’t matter whether you use double or single quotes;
//they both perform the same functions.

document.write("Hello World! 3");

var X = " Hello, World!";
document.write(X);

var frog = " This is a list of frogs";
document.write(frog);

var stringTest = "This is a string";
window.alert(stringTest);

document.write(
  ' <br> Nadia told Lazlo, <br> "I cannot even utter his Name--" <br> "I don\'t give a f***, his name was Mike." Lazlo responded.'
);

document.write(
  '<br> "This is how we talk in Tuscan Arizoña" -Lazlo' +
    ' <br> "We drank the blood of some people, but the people were on drugs,' +
    " and now I'm a wizard.\" -Nandor"
);

var B = "<br>Concatenated" + " String";
document.write(B); //concatenated string value added to variable and displayed.

var vampiricCouncil = "<br>Vampiric Council:<br>",
  coChairs = "Nadia and Nandor<br>",
  coCoChair = "Lazlo<br>",
  assistant = "Guillermo<br>";
document.write(vampiricCouncil);
document.write(coChairs);
document.write(coCoChair);
document.write(assistant);

document.write(3 + 7);
document.write(3 * 3 * 43);
//Here is an actual function (this is JavaScript code – it would be written within the external .js file):

function my_first_function() {
  var str = "this is the button txt";
  document.getElementById("button_text").innerHTML = str;
}

var sent1 = "<br>This is the beginning of the string";
var sent2 = "<br>and this is the end of the string";
document.write(sent1 + sent2);

