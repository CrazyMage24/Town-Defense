class Town
{
	constructor(name)
	{
		this.name = name;
		
		this.population = 5;
		this.max_population = 10;
		this.soldiers = 0;
		this.farmers = 5;
		this.workers = 0;
		
		this.food=50;
		this.resource = 40;
		this.happiness=80;
		this.day = 1;
		
		this.widgets = [];
		this.buildings = [];
		this.widgets.push(new StaticText(1450,0,150,100,this.name,40));
		this.widgets.push(new StaticText(100,50,200,50,"Population: " + this.population,40));
		this.widgets.push(new StaticText(100,100,200,50,"Max population: " + this.max_population,40));
		this.widgets.push(new StaticText(100,150,200,50,"Soldiers: " + this.soldiers,40));
		this.widgets.push(new StaticText(100,200,200,50,"Farmers: " + this.farmers,40));
		this.widgets.push(new StaticText(100,250,200,50,"Workers: " + this.workers,40));
		
		this.widgets.push(new StaticText(100,350,200,50,"Food: " + this.food,40));
		this.widgets.push(new StaticText(100,400,200,50,"Resource: " + this.resource,40));
		this.widgets.push(new StaticText(100,450,200,50,"Happiness: " + this.happiness,40));
		this.widgets.push(new StaticText(100,500,200,50,"Day count: " + this.day,40));
		this.font = loadFont("FONTS/FFF_Tusj.ttf");
	}
	
	run()
	{
		for(i = 0; i < this.widgets.length; i++)
		{
			this.widgets[i].show();
		}
	}
}