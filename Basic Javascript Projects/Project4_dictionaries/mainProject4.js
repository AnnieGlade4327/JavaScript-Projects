function Animal_List() {
    var Animal = {
        Class: "Mammalia",
        Genus: "Antilocapra",
        Species: "Antilocapra Americana-Pronghorn",
        Speed: "~65 Miles Per Hour",
        Sound: "tick, tchick, tcherrick",
    };
    document.getElementById("Animal_List").innerHTML = Animal.Genus;
}

function Dictionary() {
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
    document.getElementById("this_Dictionary").innerHTML = Animal.Class;
}

