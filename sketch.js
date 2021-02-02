var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100,550,200,50);
    surface1.shapeColor = "red";
    surface2 = createSprite(305,550,200,50);
    surface2.shapeColor = "blue";
    surface3 = createSprite(510,550,200,50);
    surface3.shapeColor = "green";
    surface4 = createSprite(715,550,200,50);
    surface4.shapeColor = "yellow";


    //create box sprite and give velocity
    box = createSprite(random(20, 750),300,30,30);
    box.shapeColor = "white";
    box.velocityX = 2;
    box.velocityY = 2;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
     createEdgeSprites();


    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = "red";
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = "blue";
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = "green";
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = "yellow";
    }

    surface1.display();
    surface2.display();
    surface3.display();
    surface4.display();
    box.display();
}