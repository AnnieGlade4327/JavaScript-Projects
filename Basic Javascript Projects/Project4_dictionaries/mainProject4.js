function Animal_List() { //kvp targeting something to display the genus
    var Animal = {
        Class: "Mammalia",
        Genus: "Antilocapra",
        Species: "Antilocapra Americana-Pronghorn",
        Speed: "~65 Miles Per Hour",
        Sound: "tick, tchick, tcherrick",
    };
    document.getElementById("Animal_List").innerHTML = Animal.Genus;
}

function Dictionary() { //making another function to display the sound
    var Animal = {
        Class: "Mammalia",
        Genus: "Antilocapra",
        Species: "Antilocapra Americana-Pronghorn",
        Speed: "~65 Miles Per Hour",
        Sound: "tick, tchick, tcherrick",
    };
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}

function this_Dictionary() {
    var Animal = {
        Class: "Mammalia",
        Genus: "Antilocapra",
        Species: "Antilocapra Americana-Pronghorn",
        Speed: "~65 Miles Per Hour",
        Sound: "tick, tchick, tcherrick",
    };
    delete Animal.Class;
    document.getElementById("this_Dictionary").innerHTML = Animal.Class; //it is working but, what is odd is bc of how I targeted the id's and what I labeled where, 
    //I am not understanding why undefined pops up first no matter which ordfer the script or html is it.  but this is the final submission for assign bc it is functional!
}

