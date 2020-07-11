class FillBar extends Widget 
{
	constructor(x,y,w,h,szo,value,maxValue, isEditable, font)
	{
		super(x,y,w,h,szo,font);
		this.value = value;
		this.maxValue = maxValue;
		this.isEditable = isEditable;
		this.szo = szo;	
	}
	
	show()
	{	
		if(this.selected)
		{
			fill(255);
			textFont(this.font,25);
			text(this.szo + ": " + this.value + "/" + this.maxValue, this.x,this.y-10);
			rect(this.x-4,this.y-4,this.w+8,this.h+8);
			fill(51);
			rect(this.x-2,this.y-2,this.w+4,this.h+4);
			
			fill(211,255,0);
			rect(this.x,this.y,((this.w*this.value)/this.maxValue),this.h)
		}
		else
		{
			fill(255);
			textFont(this.font,25);
			text(this.szo + ": " + this.value + "/" + this.maxValue, this.x,this.y-10);
			rect(this.x-2,this.y-2,this.w+4,this.h+4);
			fill(51);
			rect(this.x,this.y,this.w,this.h);
			
			fill(0,255,0);
			rect(this.x,this.y,((this.w*this.value)/this.maxValue),this.h)
		}
	}
	
	changeValue(keyCode)
	{
		if(this.isEditable)
		{
			if(keyCode == 39)
			{
				this.value++;
				return this.value;
			}
			if(keyCode == 37)
			{
				this.value--;
				return this.value;
			}
		}
	}
}