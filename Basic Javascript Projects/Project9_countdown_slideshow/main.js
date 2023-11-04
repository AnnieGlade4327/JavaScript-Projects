function countdown() {
    var seconds = document.getElementById("minutes").value;
    var seconds = document.getElementById("seconds").value;


    function tick() {
        minutes = minutes -1;
        timer.innerHTML = minutes;
        var time = setTimeout(tick, 1000);
        if (minutes == -1){
        tick();
    }
        function tick() {
            seconds = seconds -1;
            timer.innerHTML = seconds;
            var time = setTimeout(tick, 1000);
            if (seconds == -1) {
                alert("Time!!");
                clearTimeout(time);
                timer.innerHTML="";
            }
        }
        tick();
    }
    


    