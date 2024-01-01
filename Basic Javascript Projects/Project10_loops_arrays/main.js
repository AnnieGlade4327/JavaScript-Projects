function Call_Loop () {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}
let text = "Hello World!";
let length = text.length;

document.getElementById("demo").innerHTML = length;

function animal_Pics() {
    var Animal_Picture = [];
    Animal_Picture[0] = "Australian Cattle Dog";
    Animal_Picture[1] = "Clarks Nutcracker";
    Animal_Picture[2] = "Pronghorn Antelope";
    Animal_Picture[3] = "Mountain Lion";
    document.getElementById("Animal").innerHTML = "This is a picture of a " + Animal_Picture[2] + ".";
    
}