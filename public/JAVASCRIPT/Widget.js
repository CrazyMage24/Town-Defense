class Widget 
{
	constructor(x,y,w,h,szo,font)
	{
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
		this.szo = szo;
		this.font = font;
		this.selected = false; // rákattintva
		this.highlight = false; // fölötte az egér
	}
	
	// örökölt functionok
	
	is_selected(mouseX,mouseY)
	{
		return this.x <= mouseX && this.x + this.w >= mouseX 
			&& this.y <= mouseY && this.y + this.h >= mouseY;
	}
	
	//override functionok
	
	show()
	{
		
	}
	
	task()
	{
		
	}
	
	write(betu)
	{
		
	}
	
	alterText(keyCode)
	{
		
	}
	
	changeValue(keyCode,v)
	{
		
	}
}