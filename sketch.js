const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(1100,100,30);
	mango2=new Mango(1200,200,30);
	mango3=new Mango(1000,150,30);
	mango4=new Mango(1150,250,30);
	mango5=new Mango(950,200,30);
	mango6=new Mango(950,200,30);
	mango7=new Mango(1070,250,30);
	mango8=new Mango(1050,1500,30);
	rock1 = new Rock (100,200,50,50);
	treeObj=new Tree(1050,580);
	groundObject=new Ground(width/2,600,width,20);
	slingShot = new SlingShot(rock1.body,{x: 230, y:400});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  rock1.display();
  groundObject.display();

  //mouseDragged();
  //mouseReleased();
}

function mouseDragged(){
	Matter.Body.setPosition(rock1.body,{x:mouseX,y:mouseY});
	}

function mouseReleased(){
	slingShot.fly()  
	}
	
