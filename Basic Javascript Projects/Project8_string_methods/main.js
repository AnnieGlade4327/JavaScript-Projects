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

