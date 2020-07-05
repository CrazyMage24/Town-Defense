class List extends Widget 
{
	constructor(x,y,w,h,lista)
	{
		super(x,y,w,h);
		this.lista=lista;
		this.selected_item = lista[0];
		this.selected_index = 0;
		this.font = loadFont("FONTS/FFF_Tusj.ttf");
	}
	
	show()
	{	
		// ha csak úgy van
		fill(255);
		rect(this.x-2,this.y-2,this.w+4,this.h+4);
		fill(51);
		rect(this.x,this.y,this.w,this.h);
		textFont(this.font,20);
		for(var i = 0; i < this.lista.length; i++)
		{
			if(i==this.selected_index)
			{
				fill(0);
				rect(this.x,this.y+i*40,this.w,40);
				var tw = textWidth(this.lista[i]);
				fill(255);
				text(this.lista[i], this.x+this.w/2 - tw/2, this.y + 25 + i*40);
			}
			else
			{
				fill(255);
				rect(this.x,this.y+i*40,this.w,40);
				var tw = textWidth(this.lista[i]);
				fill(0);
				text(this.lista[i], this.x+this.w/2 - tw/2, this.y + 25 + i*40);
			}
		}
	}
}