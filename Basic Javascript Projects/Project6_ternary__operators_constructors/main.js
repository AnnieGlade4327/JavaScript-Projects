function Age_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Nest_Function() 
    {
    document.getElementById("Nesting").innerHTML = Count();
    function Count() {
    var Starting_point = 9;
    function Plus_one()
    {Starting_point += 1;}
    Plus_one();
    return Starting_point; 
        }
    }