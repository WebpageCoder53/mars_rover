canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_x = 10;
rover_y = 10;

rover_height = 100;
rover_width = 100;

background_image = "mars.jpg";
rover_image = "rover.png";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    if (keyPressed == '38' || keyPressed == '87') {
        up();
        console.log("up");
    }
    if (keyPressed == '40' || keyPressed == '83') {
        down();
        console.log("down");
    }
    if (keyPressed == '37' || keyPressed == '65') {
        left();
        console.log("left");
    }
    if (keyPressed == '39' || keyPressed == '68') {
        right();
        console.log("right");
    }
   
}

function up() {
    if(rover_y >= 0 ) {
    rover_y = rover_y + 5;
    console.log("Up was pressed. New x and y: " + rover_x+ ", " + rover_y);
    uploadrover();
    uploadBackground();
    }
}

function down() {
    if(rover_y <= 500 ) {
    rover_y = rover_y - 5;
    console.log("Down was pressed. New x and y: " + rover_x+ ", " + rover_y);
    uploadrover();
    uploadBackground();
    }
}

function left() {
    if(rover_x >= 0 ) {
    rover_x = rover_x - 5;
    console.log("Left was pressed. New x and y: " + rover_x+ ", " + rover_y);
    uploadrover();
    uploadBackground();
    }
}

function right() {
    if(rover_x <= 700 ) {
    rover_x = rover_x + 5;
    console.log("Right was pressed. New x and y: " + rover_x+ ", " + rover_y);
    uploadrover();
    uploadBackground();
    }
}