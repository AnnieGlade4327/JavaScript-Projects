function Age_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}
//assigning the nested function and calling the ID
function Nest_Function() 
    {
    document.getElementById("Nesting").innerHTML = Count(); //now when Nesting is retrieved, it will begin the Count function
    function Count() {
    var Starting_point = 9; //starting at 9
    function Plus_one() //adding 1
    {Starting_point += 1;}
    Plus_one();
    return Starting_point; //returns the new amnt which should display as 10: 9 (starting point) + 1.
        }
    }