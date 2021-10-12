function setup(){
    canvas = createCanvas(300,700);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();
}

function draw(){
    image(video, 0,0,300,300);
}
