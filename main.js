function setup(){
   canvas=createCanvas (500,400);
   canvas.center();
   video=createCapture(VIDEO);
   video.hide();
   tint_color=''
}
function draw(){
    image (video,0,0,500,400);
    tint(tint_color);
}
function take_snapshot(){
    save('mypicture.png');
}
function filter_tint(){
    tint_color=document.getElementById('color_name').value ;
}