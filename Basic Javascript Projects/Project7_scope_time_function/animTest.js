
// position of the ball
var ball = 20;
// how far the ball moves every time
var speed = 3;

function start_Animation() {
    if (ball > 375) {
        speed = -5;
    }
    if (ball < 0) {
        speed = -5;
    }    // move the ball
    ball = ball + speed;
}

