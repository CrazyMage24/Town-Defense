class NextDay extends Widget 
{
	constructor(x,y,w,h,szo,town)
	{
		super(x,y,w,h,szo);
		this.town = town;
		this.font = loadFont("FONTS/FFF_Tusj.ttf");
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
		console.log(this.town);
		
		var data = 
		{
			name: this.town.name,
			population: this.town.population,
			max_population: this.town.max_population,
			soldiers: this.town.soldiers,
			max_soldiers: this.town.max_soldiers,
			farmers: this.town.farmers,
			max_farmers: this.town.max_farmers,
			workers: this.town.workers,
			max_workers: this.town.max_workers,
			freeman: this.town.freeman,
			
			food: this.town.food,
			max_food: this.town.max_food,
			resource: this.town.resource,
			max_resource: this.town.max_resource,
			happiness: this.town.happiness,
			max_happiness: this.town.max_happiness,
			day: this.town.day
		}
		socket.emit('newDay', data);
	}
}