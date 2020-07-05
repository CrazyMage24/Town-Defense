class Button extends Widget 
{
	constructor(x,y,w,h,szo)
	{
		super(x,y,w,h);
		this.szo=szo;
		this.font = loadFont("FONTS/FFF_Tusj.ttf");
	}
	
	show()
	{
		if(this.highlight)
		{
			fill(0);
			rect(this.x-2,this.y-2,this.w+4,this.h+4);
			fill(255);
			rect(this.x,this.y,this.w,this.h);
			fill(0);
			textFont(this.font,44);
			var tw = textWidth(this.szo);
			text(this.szo, this.x+this.w/2 - tw/2, this.y+this.h/1.5);
		}
		else
		{
			fill(255);
			rect(this.x-2,this.y-2,this.w+4,this.h+4);
			fill(51);
			rect(this.x,this.y,this.w,this.h);
			fill(255);
			textFont(this.font,44);
			var tw = textWidth(this.szo);
			text(this.szo, this.x+this.w/2 - tw/2, this.y+this.h/1.5);
		}
		
	}
}