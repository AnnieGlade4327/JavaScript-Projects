// //Global Variable
// var X = 10;
// function Add_Numbers_1() {
//   document.write(20 + X + "<br>");
// }
// function Add_Numbers_2() {
//   document.write((X = 100));
// }
// Add_Numbers_1();
// Add_Numbers_2();

// //Local variable
// function Add_numbers_1() {
//   var x = 10;
//   document.write(20 + X + "<br>");
// }
// function Add_numbers_2() {
//   document.write(X + 100);
// }
// Add_numbers_1();
// Add_numbers_2();

// //using console.log to check for errors
// function Add_numbers_1() {
//   var x = 10;
//   //   console.log(15 + X);
// }
// function Add_numbers_2() {
//   //   console.log(X + 100);
// }
// Add_numbers_1();
// Add_numbers_2();

// function get_Date() {
//   if (new Date().getHours() <= 18) {
//     document.getElementById("Greeting").innerHTML = "How is your day today?";
//   }
//   console.log("Greetings");
// }

function Age_Function() {
  Age = document.getElementById("Age").value;
  if (Age >= 18) {
    Vote = "You are old enough to vote!";
  } else {
    Vote = "You are not old enough to vote!";
  }
  document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Credit_Function() {
  Age = document.getElementById("Credits").value;
  if (Credits >= 100) {
    Go = "You have enough Credits!";
  } else {
    Go = "You Do Not Have Enough Credits!";
  }
  document.getElementById("Do_You_Have_Enough_Credits?").innerHTML = Go;
}
