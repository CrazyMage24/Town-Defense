var canvas;
let widgets =  [];

var selected;
var highlight;
var game;
var falu;
var font1;
var font2;

var socket;

var WIDTH = 1600;
var HEIGHT = 800;

function setup() 
{
  canvas = createCanvas(WIDTH,HEIGHT);
  canvas.id("vaszon");
  canvas.addClass("loader");
  
  selected = null;
  highlight = null;
  game = null;
  falu = null;
  font1 = loadFont("FONTS/FFF_Tusj.ttf");
  font2 = loadFont("FONTS/sign_font.otf");
  
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
	if(game !=null)
	{
		game.mouseMoved(mouseX,mouseY);
	}
	else
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
}

function mousePressed()
{
	if(mouseButton == LEFT)
	{
		if(game !=null)
		{
			game.mousePressed(mouseX,mouseY);
		}
		else
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
	widgets.push(new StaticText(700,50,200,50,"Town Defense",50,font1));
	widgets.push(new Button(675,150,250,100,"1 jatekos",font1));
	loadingScreen();
}

function town_name_selector()
{
	widgets = [];
	widgets.push(new Button(675,550,250,100,"Vissza",font1));
	widgets.push(new StaticText(650,100,50,50,"Város neve:",40,font1));
	falu = new WritingText(850,100,250,50,"semmi",font1);
	widgets.push(falu);
	widgets.push(new Button(650,300,300,100,"Jatek inditasa",font1));
	loadingScreen();
}

function town_defense_game()
{
	if(falu.szo.length > 0)
	{
		widgets = [];
		game = new Town(falu.szo,font1,font2);
		
		// server shit
		socket.emit('newGame', game.inventory,game.attributes);
	}
	loadingScreen();
}

function keyTyped() 
{
	if(game !=null)
	{
		game.keyTyped(key);
	}
	else if(selected != null)
	{
		selected.write(key);
	}
}

function keyPressed()
{
	if(game !=null)
	{
		game.keyPressed(keyCode);
	}
	else if(selected != null)
	{
		selected.alterText(keyCode)
	}
}