class StaticText extends Widget 
{
	constructor(x,y,w,h,szo,bm)
	{
		super(x,y,w,h);
		this.szo=szo;
		this.bm=bm;
		this.font = loadFont("FONTS/FFF_Tusj.ttf");
	}
	
	show()
	{	
		textFont(this.font,this.bm);
		var tw = textWidth(this.szo);
		fill(255);
		text(this.szo, this.x+this.w/2 - tw/2, this.y+this.h/1.5);
	}
}