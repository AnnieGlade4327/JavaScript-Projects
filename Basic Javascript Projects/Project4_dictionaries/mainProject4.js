function this_Dictionary() {
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
    document.getElementById("Dictionary").innerHTML = Animal.Class;
}

