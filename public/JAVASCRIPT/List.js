class List extends Widget 
{
	constructor(x,y,w,h,szo,lista,font)
	{
		super(x,y,w,h,szo,font);
		this.lista=lista;
	}
	
	show()
	{	
		// ha csak úgy van
		fill(255);
		rect(this.x-2,this.y-2,this.w+4,this.h+4);
		
		fill(51);
		rect(this.x,this.y,this.w,this.h);
		
		strokeWeight(4);
		stroke(255);
		line(this.x+this.w/3,this.y,this.x+this.w/3,this.y+this.h);
		line(this.x+2*this.w/3,this.y,this.x+2*this.w/3,this.y+this.h);
		strokeWeight(1);
		noStroke();
		
		textFont(this.font,20);
		for(var i = 0; i < this.lista.length; i++)
		{
			strokeWeight(4);
			stroke(255);
			line(this.x,this.y+(i+1)*40,this.x+this.w,this.y+(i+1)*40);
			strokeWeight(1);
			noStroke();
			
			fill(255);
			text(this.lista[i].name, this.x+10,this.y+(i+1)*40-15);
			
			text(this.lista[i].occupation, this.x+this.w/3+10,this.y+(i+1)*40-15);
			
			text(this.lista[i].happiness, this.x+2*this.w/3+10,this.y+(i+1)*40-15);
		}
	}
}