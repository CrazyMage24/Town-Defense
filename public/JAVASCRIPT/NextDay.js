class NextDay extends Widget 
{
	constructor(x,y,w,h,szo,town,font)
	{
		super(x,y,w,h,szo,font);
		this.town = town;
	}
	
	show()
	{	
		textFont(this.font,30);
		var tw = textWidth(this.szo);
		if(this.selected)
		{
			fill(255);
			rect(this.x-4,this.y-4,this.w+8,this.h+8);
			fill(0);
			rect(this.x,this.y,this.w,this.h);
			fill(255,211,0);
			text(this.szo, this.x+this.w/2 - tw/2, this.y+this.h/1.5);
		}
		else
		{
			if(this.highlight)
			{
				fill(255,211,0);
				rect(this.x-2,this.y-2,this.w+4,this.h+4);
				fill(255);
				rect(this.x,this.y,this.w,this.h);
				fill(0);
				text(this.szo, this.x+this.w/2 - tw/2, this.y+this.h/1.5);
			}
			else
			{
				fill(255);
				rect(this.x-2,this.y-2,this.w+4,this.h+4);
				fill(255,211,0);
				rect(this.x,this.y,this.w,this.h);
				fill(0);
				text(this.szo, this.x+this.w/2 - tw/2, this.y+this.h/1.5);
			}
		}
		
	}
	
	task()
	{
		socket.emit('newDay', this.town.inventory);
	}
}