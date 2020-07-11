class AnimatedSign extends Widget 
{
	constructor(x,y,w,h,szo,bm,source,font)
	{
		super(x,y,w,h,szo,font);
		this.bm=bm;
		this.szo = this.szo.toUpperCase();
		this.img = loadImage(source);
	}
	
	show()
	{	
		image(this.img,this.x,this.y,this.w,this.h);
		textFont(this.font,this.bm);
		var tw = textWidth(this.szo);
		fill(0);
		text(this.szo, this.x+this.w/2 - tw/2, this.y+this.h/1.5);
	}
}