class Town
{
	constructor(name)
	{
		this.selected = null;
		this.highlight = null;
		
		this.name = name;
		
		this.population = 5;
		this.max_population = 10;
		this.soldiers = 0;
		this.max_soldiers = 10;
		this.farmers = 5;
		this.max_farmers = 10;
		this.workers = 0;
		this.max_workers = 10;
		this.freeman = 0;
		
		this.food=50;
		this.max_food = 100;
		this.resource = 40;
		this.max_resource = 100;
		this.happiness=80;
		this.max_happiness=100;
		this.day = 1;
		
		this.widgets = [];
		this.buildings = [];
		this.widgets.push(new AnimatedSign(1300,25,300,100,this.name,60,"PICS/wooden_sign2.png"));
		
		this.widgets.push(new FillBar(50,50,200,20,"Population",this.population,this.max_population,false));
		this.widgets.push(new FillBar(350,50,200,20,"Soldiers",this.soldiers,this.max_population,true));
		this.widgets.push(new FillBar(650,50,200,20,"Farmers",this.farmers,this.max_population,true));
		this.widgets.push(new FillBar(950,50,200,20,"Workers",this.workers,this.max_population,true));
		
		this.widgets.push(new FillBar(50,150,200,20,"Food",this.food,this.max_food,false));
		this.widgets.push(new FillBar(350,150,200,20,"Resource",this.resource,this.max_resource,false));
		this.widgets.push(new FillBar(650,150,200,20,"Happiness",this.happiness,this.max_happiness,false));
		this.widgets.push(new FillBar(950,150,200,20,"Free man",this.freeman,this.population,false));
		
		this.widgets.push(new NextDay(1400,200,150,100,"Next Day",this));
		
		this.population_list = [];
		for(i = 0; i < this.population; i++)
		{
			var person = new Person("Person" + (i+1), "farmer",80);
			this.population_list.push(person);
		}
		this.widgets.push(new List(50,350,300,400,"",this.population_list));
		
		this.font = loadFont("FONTS/FFF_Tusj.ttf");
	}
	
	run()
	{
		for(i = 0; i < this.widgets.length; i++)
		{
			this.widgets[i].show();
		}
	}
	
	mouseMoved(mouseX,mouseY)
	{
		this.highlight = null;
		for(i = 0; i < this.widgets.length; i++)
		{
			if(this.widgets[i].is_selected(mouseX,mouseY))
			{
				this.highlight = this.widgets[i];
				this.widgets[i].highlight = true;
			}
			else
			{
				this.widgets[i].highlight = false;
			}
			
		}
	}

	mousePressed(mouseX,mouseY)
	{
		this.selected = null;
		for(i = 0; i < this.widgets.length; i++)
		{
			if(this.widgets[i].is_selected(mouseX,mouseY))
			{
				this.selected = this.widgets[i];
				this.widgets[i].selected = true;
				this.selected.task();
			}
			else
			{
				this.widgets[i].selected = false;
			}
			
		}
	}
	
	keyTyped(key)
	{
		if(this.selected != null)
		{
			this.selected.write(key);
		}
	}
	
	keyPressed(keyCode)
	{
		if(this.selected != null)
		{
			this.selected.alterText(keyCode)
		}
	}
	
}