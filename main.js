function preload(){

}


function setup(){
    canvas=createCanvas(639,479);
    canvas.position(100,250);
    video=createCapture(VIDEO);
    video.hide();
    tint_colour="";
}


function draw(){
image(video,100,100,200,200);
tint(tint_colour);
circle(15,15,333);
}

function filter_tint(){
    tint_colour=document.getElementById("colour_name").value;
}

function take_snapshot(){
    save("my worst image.png");
}