//Global Variable
var X = 10;
function Add_Numbers_1() {
  document.write(20 + X + "<br>");
}
function Add_Numbers_2() {
  document.write((X = 100));
}
Add_Numbers_1();
Add_Numbers_2();

//Local variable
function Add_numbers_1() {
  var x = 10;
  document.write(20 + X + "<br>");
}
function Add_numbers_2() {
  document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

//using console.log to check for errors
function Add_numbers_1() {
  var x = 10;
//   console.log(15 + X);
}
function Add_numbers_2() {
//   console.log(X + 100);
}
Add_numbers_1();
Add_numbers_2();

function get_Date() {
    if (new Date().getHours() <= 18) {
        document.getElementById("Greeting").innerHTML = "How is your day today?";
    }
    console.log("Greetings");
}