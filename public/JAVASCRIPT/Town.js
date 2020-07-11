class Town
{
	constructor(name,font1,font2)
	{
		this.selected = null;
		this.highlight = null;
		this.font1 = font1;
		this.font2 = font2;
		this.name = name;
		this.day = 1;
		this.inventory = 
		[
			{name: "Population", key: 7}, 
			{name: "Max Population", key: 10},
			{name: "Soldiers", key: 2},
			{name: "Max Soldiers", key: 10},
			{name: "Farmers", key: 1},
			{name: "Max Farmers", key: 10},
			{name: "Workers", key: 1},
			{name: "Max Workers", key: 10},
			{name: "Builders", key: 1},
			{name: "Max Builders", key: 10},
			{name: "Free man", key: 2},
			
			{name: "Food", key: 50},
			{name: "Max Food", key: 100},
			{name: "Resource", key: 40},
			{name: "Max Resource", key: 100},
			{name: "Happiness", key: 80},
			{name: "Max Happiness", key: 100},
		];
		
		this.attributes =
		{
			name: name,
			day: 1
		}
		
		this.widgets = [];
		this.buildings = [];
		this.widgets.push(new AnimatedSign(1300,325,300,100,this.attributes.name,60,"PICS/wooden_sign2.png",font2));
		
		this.widgets.push(new FillBar(50,50,200,20,"Population",this.inventory[0].key,this.inventory[1].key,false,this.font1));
		this.widgets.push(new FillBar(300,50,200,20,"Soldiers",this.inventory[2].key,this.inventory[3].key,true,this.font1));
		this.widgets.push(new FillBar(550,50,200,20,"Farmers",this.inventory[4].key,this.inventory[5].key,true,this.font1));
		this.widgets.push(new FillBar(800,50,200,20,"Workers",this.inventory[6].key,this.inventory[7].key,true,this.font1));
		this.widgets.push(new FillBar(1050,50,200,20,"Builders",this.inventory[8].key,this.inventory[9].key,true,this.font1));
		this.widgets.push(new FillBar(1300,50,200,20,"Free man",this.inventory[10].key,this.inventory[1].key,false,this.font1));
		
		this.widgets.push(new FillBar(450,150,200,20,"Food",this.inventory[11].key,this.inventory[12].key,false,this.font1));
		this.widgets.push(new FillBar(700,150,200,20,"Resource",this.inventory[13].key,this.inventory[14].key,false,this.font1));
		this.widgets.push(new FillBar(950,150,200,20,"Happiness",this.inventory[15].key,this.inventory[16].key,false,this.font1));
		
		this.widgets.push(new NextDay(50,200,150,100,"Next Day",this,this.font1));
		
		this.population_list = [];
		for(i = 0; i < this.population; i++)
		{
			var person = new Person("Person" + (i+1), "farmer",80);
			this.population_list.push(person);
		}
		this.widgets.push(new List(50,350,300,400,"",this.population_list,this.font1));
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
			if(this.selected.szo == "Soldiers")
			{
				this.inventory[2].key = this.selected.changeValue(keyCode);
				this.inventory[10].key = this.inventory[0].key - this.inventory[2].key - this.inventory[4].key - this.inventory[6].key - this.inventory[8].key;
				this.widgets.push(new FillBar(1300,50,200,20,"Free man",this.inventory[10].key,this.inventory[1].key,false,this.font1));
			}
			else if(this.selected.szo == "Farmers")
			{
				this.inventory[4].key = this.selected.changeValue(keyCode);
				this.inventory[10].key = this.inventory[0].key - this.inventory[2].key - this.inventory[4].key - this.inventory[6].key - this.inventory[8].key;
				this.widgets.push(new FillBar(1300,50,200,20,"Free man",this.inventory[10].key,this.inventory[1].key,false,this.font1));
			}
			else if(this.selected.szo == "Workers")
			{
				this.inventory[6].key = this.selected.changeValue(keyCode);
				this.inventory[10].key = this.inventory[0].key - this.inventory[2].key - this.inventory[4].key - this.inventory[6].key - this.inventory[8].key;
				this.widgets.push(new FillBar(1300,50,200,20,"Free man",this.inventory[10].key,this.inventory[1].key,false,this.font1));
			}
			else if(this.selected.szo == "Builders")
			{
				this.inventory[8].key = this.selected.changeValue(keyCode);
				this.inventory[10].key = this.inventory[0].key - this.inventory[2].key - this.inventory[4].key - this.inventory[6].key - this.inventory[8].key;
				this.widgets.push(new FillBar(1300,50,200,20,"Free man",this.inventory[10].key,this.inventory[1].key,false,this.font1));
			}
		}
	}
	
}