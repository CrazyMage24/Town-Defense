class Button extends Widget 
{
	constructor(x,y,w,h,szo)
	{
		super(x,y,w,h);
		this.szo=szo;
	}
	
	show()
	{
		fill(255);
		rect(this.x,this.y,this.w,this.h);
		fill(0);
		text(this.szo, this.x, this.y+this.h);
	}
	
	move()
	{
		this.x++;
	}
}