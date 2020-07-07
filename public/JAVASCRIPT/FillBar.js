class FillBar extends Widget 
{
	constructor(x,y,w,h,szo,value,maxValue)
	{
		super(x,y,w,h,szo);
		this.szo = szo;
		this.value=value;
		this.maxValue=maxValue;
		this.font = loadFont("FONTS/FFF_Tusj.ttf");
		textFont(this.font,45);
	}
	
	show()
	{	
		fill(255);
		text(this.szo, this.x,this.y-10);
		rect(this.x-2,this.y-2,this.w+4,this.h+4);
		fill(51);
		rect(this.x,this.y,this.w,this.h);
		
		fill(0,255,0);
		rect(this.x,this.y,((this.w*this.value)/this.maxValue),this.h)
	}
}