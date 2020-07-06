var canvas;
let widgets =  [];

var selected;
var highlight;

var WIDTH = 1600;
var HEIGHT = 800;

function setup() 
{
  canvas = createCanvas(WIDTH,HEIGHT);
  canvas.id("vaszon");
  
  selected = null;
  highlight = null;
  
  fomenu();
}


function draw() 
{
	hatter();
	for(i = 0; i < widgets.length; i++)
	{
		widgets[i].show();
	}
	if(selected != null)
	{
		
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
}


