var canvas;
let widgets =  [];

function setup() 
{
  canvas = createCanvas(1600,800);
  canvas.id("vaszon");
  widgets.push(new Button(200,200,100,50,"szo"));
  widgets.push(new Button(300,300,200,100,"VALAMI"));
  
  var selected = null;
  var highlight = null;
}


function draw() 
{
  background(51);
  for(i = 0; i < widgets.length; i++)
  {
	  widgets[i].show();
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
