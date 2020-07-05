var canvas;
let widgets =  [];

function setup() 
{
  canvas = createCanvas(1600,800);
  canvas.id("vaszon");
  widgets.push(new Widget(100,100,100,50));
  widgets.push(new Button(200,200,100,50,"szo"));
}


function draw() 
{
  background(51);
  for(i = 0; i < widgets.length; i++)
	{
		widgets[i].show();
		widgets[i].move();
	}
}
