function full_sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete";
    var part_4 = " sentence";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
    }
    
    // The numbers indicate which characters in your string will be cut out and 
    //displayed. This code would display “Johnny.”::

    function slice_Method() {
        var Sentence = "All work and no play makes Johnny a dull boy.";
        let result = Sentence.toUpperCase();
        var Section = Sentence.slice(27, 33);
        document.getElementById("Slice").innerHTML = Section;
    }
function search() {
let sentence = "Here We Are Going To Search for letters";
let position = sentence.search("Going");
document.getElementById("search").innerHTML=position;
}
//calling a numbers method using toString()
function string_Method() {
    var X = (30285600 * 5000000000000000);
    document.getElementById("Numbers_to_string").innerHTML=X.toString();}

    //creating the function and calling inner html to round Y to nearest 10 decimals.
    //I was unable to figure out how to link it to var X even if i placed the function
    //in the brackets, so I made another p id and onclick with a new object/variable.

    function precision_Method(){
    var Y = 5.6782389328347293847293847;
    document.getElementById("Precision").innerHTML = Y.toPrecision(10);
}

function fixed_Method() {
let num = 7.843454565673255646546456;
let n = num.toFixed(4);
document.getElementById("fixed").innerHTML = n;
}