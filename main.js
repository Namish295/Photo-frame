function preload()
{
}

function setup()
{
    canvas=createCanvas(400, 300);
    canvas.position(450, 300);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}

function draw()
{
    fill(255, 0, 0)
    rect(100, 100, 500, 50, 20);
    image(video, 0, 0, 400, 300);
    tint(tint_color);
}

function take_snapshot()
{
    save('Photo_Framed_Image.png');
}

function filter_tint()
{
    tint_color=document.getElementById("color_name").value;
}