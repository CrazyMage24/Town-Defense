class DrawTown
{
	constructor(x,y,w,h,population_list,buildings)
	{
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.population_list = population_list;
		this.buildings = buildings;
	}
	
	show()
	{	
		fill(255);
		circle(this.x+this.w/2,this.y+this.h/2,this.w+4);
		fill(0);
		circle(this.x+this.w/2,this.y+this.h/2,this.w);
		
		for(var i = 0; i < this.population_list.length; i++)
		{
			this.population_list[i].show();
		}
		
		for(var i = 0; i < this.buildings.length; i++)
		{
			this.buildings[i].show();
		}
	}
}