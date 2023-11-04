//Global Variable
var X = 10;
function Add_Numbers_1() {
document.write(20 + X + "<br>");
}
function Add_Numbers_2() {
document.write(X = 100);
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
    