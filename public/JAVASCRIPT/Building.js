class Building
{
	constructor(x,y,w,h,name)
	{
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.name = name;
	}
	
	show()
	{	
		if(this.name == "House")
		{
			fill(255);
			rect(this.x-4,this.y-4,this.w+8,this.h+8);
			fill(0);
			rect(this.x,this.y,this.w,this.h);
			fill(255);
			
			strokeWeight(4);
			stroke(255);
			line(this.x,this.y-4,this.x+this.w/2,this.y-this.h/2);
			line(this.x+this.w,this.y-4,this.x+this.w-this.w/2,this.y-this.h/2);
			strokeWeight(1);
			noStroke();	
		}
	}
}