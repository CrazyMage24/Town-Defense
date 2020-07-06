class Button extends Widget 
{
	constructor(x,y,w,h,szo)
	{
		super(x,y,w,h,szo);
		this.font = loadFont("FONTS/FFF_Tusj.ttf");
	}
	
	show()
	{	
		textFont(this.font,45);
		var tw = textWidth(this.szo);
		if(this.selected)
		{
			fill(255);
			rect(this.x-4,this.y-4,this.w+8,this.h+8);
			fill(255);
			rect(this.x,this.y,this.w,this.h);
			fill(0);
			text(this.szo, this.x+this.w/2 - tw/2, this.y+this.h/1.5);
		}
		else
		{
			if(this.highlight)
			{
				fill(0);
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
				fill(51);
				rect(this.x,this.y,this.w,this.h);
				fill(255);
				text(this.szo, this.x+this.w/2 - tw/2, this.y+this.h/1.5);
			}
		}
		
	}
	
	task()
	{
		switch(this.szo)
		{
			case "1 jatekos": town_name_selector();
				break;
			case "Vissza": fomenu();
				break;
			case "Jatek inditasa": town_defense_game();
				break;
			
			default: console.log(this.szo);
		}
	}
}