function preload(){
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(150, 300);
    webcam = createCapture(VIDEO);
    webcam.hide();
    filter = "";
}
function draw(){
    image(webcam, 0,0,640,480);
    tint(filter);
}
function apply_filter(){
    filter=document.getElementById("color_input").value;
}

function take_snapshot(){
    save("student_image.png");
}