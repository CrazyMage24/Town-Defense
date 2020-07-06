var canvas;
let widgets =  [];

var selected;
var highlight;
var game;
var falunev;

var socket;

var WIDTH = 1600;
var HEIGHT = 800;

function setup() 
{
  canvas = createCanvas(WIDTH,HEIGHT);
  canvas.id("vaszon");
  
  selected = null;
  highlight = null;
  game = null;
  falunev = null;
  
  fomenu();
  
  // server shit
  socket = io.connect("127.0.0.1:3000/");
}


function draw() 
{
	hatter();
	if(game != null)
	{
		game.run();
	}
	else
	{
		for(i = 0; i < widgets.length; i++)
		{
			widgets[i].show();
		}
	}
}

function mouseMoved()
{
	highlight = null;
	for(i = 0; i < widgets.length; i++)
	{
		if(widgets[i].is_selected(mouseX,mouseY))
		{
			highlight = widgets[i];
			widgets[i].highlight = true;
		}
		else
		{
			widgets[i].highlight = false;
		}
		
	}
}

function mousePressed()
{
	if(mouseButton == LEFT)
	{
		selected = null;
		for(i = 0; i < widgets.length; i++)
		{
			if(widgets[i].is_selected(mouseX,mouseY))
			{
				selected = widgets[i];
				widgets[i].selected = true;
				selected.task();
			}
			else
			{
				widgets[i].selected = false;
			}
			
		}
	}
}

function hatter()
{
	background(51);
	fill(255);
	strokeWeight(4);
	line(800,0,800,1600);
	line(0,400,1600,400);
	strokeWeight(1);
}

function fomenu()
{
	widgets = [];
	console.log("fomenu");
	widgets.push(new StaticText(700,50,200,50,"Town Defense",50));
	widgets.push(new Button(675,150,250,100,"1 jatekos"));
}

function town_name_selector()
{
	widgets = [];
	console.log("town name selector");
	widgets.push(new Button(675,550,250,100,"Vissza"));
	widgets.push(new StaticText(450,50,50,50,"Város neve:",40));
	falunev = new WritingText(550,50,100,100);
	widgets.push(falunev);
	widgets.push(new Button(700,50,150,100,"Jatek inditasa"));
	
}

function town_defense_game()
{
	widgets = [];
	game = new Town(falunev.szo);
	
	console.log(falunev.szo);
	
	//
	socket.emit('newGame', falunev.szo);
}

function keyTyped() 
{
	if(selected != null)
	{
		selected.write(key);
	}
}

function keyPressed()
{
	if(selected != null)
	{
		selected.alterText(keyCode)
	}
}