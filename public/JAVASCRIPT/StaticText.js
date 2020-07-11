class StaticText extends Widget 
{
	constructor(x,y,w,h,szo,bm,font)
	{
		super(x,y,w,h,szo,font);
		this.bm=bm;
	}
	
	show()
	{	
		textFont(this.font,this.bm);
		var tw = textWidth(this.szo);
		fill(255);
		text(this.szo, this.x+this.w/2 - tw/2, this.y+this.h/1.5);
	}
}