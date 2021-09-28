
status1="";
objects=[];
function setup()
{
canvas=createCanvas(480,380);
canvas.center();
video.hide();
}

function modelLoaded()
{
 console.log("modelLoaded");
 status1=true;
video.loop();
video.speed(1);
video.volume(1);
    
}


function draw()
{
image(video,0,0,480,380);
if(status1!="")

{  objectDetector.detect(video,gotResult);
    
    for(i=0;i<objects.length;i++)
{
 document.getElementById("Statuss").innerHTML="status object detected";
 document.getElementById("no.of..objects").innerHTML="no. of object detected" + objects.length;
 fill("#FF0000");
 percent=floor(objects[i].confidence*100);
 text(objects[i].label+""+percent+"%",objects[i].x,objects[i].y);
 noFill();
 stroke("#C400FF");
 rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
 

}

}


}


function preload()
{
 video=createVideo("video.mp4");

}

function gotResult(error,results)
{
 if(error)
 {
     console.log(error);
 }
 console.log(results)
 objects=results;
}

function start()
{
 objectDetector=ml5.objectDetector("cocossd",modelLoaded);
 document.getElementById("Statuss").innerHTML="Statuss:detectingObjects";

}
