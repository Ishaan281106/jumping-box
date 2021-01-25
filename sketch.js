var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
fixedgreen=createSprite(660,585,130,30)
fixedgreen.shapeColor="green"
fixedpurple=createSprite(490,585,130,30)
fixedpurple.shapeColor="purple"
fixedyellow=createSprite(320,585,130,30)
fixedyellow.shapeColor="yellow"
fixedblue=createSprite(150,585,130,30)
fixedblue.shapeColor="blue"
//create box sprite and give velocity
box=createSprite(660,530,50,50)
}

function draw() {
    background(rgb(0,0,0));
    box.x=mouseX
    box.y=mouseY
    if(box.isTouching(fixedgreen)){
        box.shapeColor="green"
        fixedgreen.shapeColor="green"
       }
       if(box.isTouching(fixedpurple)){
        box.shapeColor="purple"
        fixedpurple.shapeColor="purple"
       }
       if(box.isTouching(fixedyellow)){
        box.shapeColor="yellow"
        fixedyellow.shapeColor="yellow"
       }
       if(box.isTouching(fixedblue)){
        box.shapeColor="blue"
        fixedblue.shapeColor="blue"
       }

















    //create edgeSprite


 //add condition to check if box touching surface and make it box


 drawSprites();
}
