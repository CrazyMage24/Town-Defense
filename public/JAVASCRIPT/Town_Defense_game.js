var canvas;
let widgets =  [];

var selected;
var highlight;

function setup() 
{
  canvas = createCanvas(1600,800);
  canvas.id("vaszon");
  widgets.push(new Button(200,200,100,50,"szo"));
  widgets.push(new Button(300,300,200,100,"VALAMI"));
  widgets.push(new StaticText(500,500,200,200,"Domi szovege",50));
  
  selected = null;
  highlight = null;
}


function draw() 
{
  background(51);
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
	//console.log("x: " + mouseX + ", y: " + mouseY);
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
	selected = null;
	if(mouseButton == LEFT)
	{
		for(i = 0; i < widgets.length; i++)
		{
			if(widgets[i].is_selected(mouseX,mouseY))
			{
				selected = widgets[i];
				widgets[i].selected = true;
			}
			else
			{
				widgets[i].selected = false;
			}
			
		}
	}
}
