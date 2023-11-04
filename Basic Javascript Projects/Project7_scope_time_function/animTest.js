
// position of the ball
var position = 20;
// how far the ball moves every time
var speed = 3;

function start_Animation() {
    if (position > 375) {
        speed = -5;
    }
    if (position < 0) {
        speed = -5;
    }
}
    // move the ball
    position = position + speed;
