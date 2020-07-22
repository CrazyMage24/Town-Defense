class Town
{
	constructor(name,fonts)
	{
		this.fonts = fonts;
		this.inventory = 
		[
			{name: "Name", key: name}, 			//[0]
			{name: "Day", key: 1}, 				//[1]
			{name: "Population", key: 7}, 		//[2]
			{name: "Max Population", key: 10},	//[3]
			{name: "Soldiers", key: 2},			//[4]
			{name: "Max Soldiers", key: 10},	//[5]
			{name: "Farmers", key: 1},			//[6]
			{name: "Max Farmers", key: 10},		//[7]
			{name: "Workers", key: 1},			//[8]
			{name: "Max Workers", key: 10},		//[9]
			{name: "Builders", key: 1},			//[10]
			{name: "Max Builders", key: 10},	//[11]
			{name: "Free man", key: 2},			//[12]
			
			{name: "Food", key: 50},			//[13]
			{name: "Max Food", key: 100},		//[14]
			{name: "Resource", key: 40},		//[15]
			{name: "Max Resource", key: 100},	//[16]
			{name: "Happiness", key: 80},		//[17]
			{name: "Max Happiness", key: 100},	//[18]
		];
		
		this.setWidgets();
	}
	
	run()
	{
		if(this.battle != null)
		{
			this.battle.run();
		}
		else
		{
			for(i = 0; i < this.widgets.length; i++)
			{
				this.widgets[i].show();
			}
		}
		
	}
	
	setWidgets()
	{
		this.selected = null;
		this.highlight = null;
		this.battle = null;
		
		this.widgets = [];
		this.buildings = [];
		this.widgets.push(new AnimatedSign(1300,325,300,100,this.inventory[0].key,60,"PICS/wooden_sign2.png",this.fonts[1]));
		
		this.widgets.push(new FillBar(50,50,200,20,"Population",this.inventory[2].key,this.inventory[3].key,false,this.fonts[0]));
		this.widgets.push(new FillBar(300,50,200,20,"Soldiers",this.inventory[4].key,this.inventory[5].key,true,this.fonts[0]));
		this.widgets.push(new FillBar(550,50,200,20,"Farmers",this.inventory[6].key,this.inventory[7].key,true,this.fonts[0]));
		this.widgets.push(new FillBar(800,50,200,20,"Workers",this.inventory[8].key,this.inventory[9].key,true,this.fonts[0]));
		this.widgets.push(new FillBar(1050,50,200,20,"Builders",this.inventory[10].key,this.inventory[11].key,true,this.fonts[0]));
		this.widgets.push(new FillBar(1300,50,200,20,"Free man",this.inventory[12].key,this.inventory[3].key,false,this.fonts[0]));
		
		this.widgets.push(new FillBar(450,150,200,20,"Food",this.inventory[13].key,this.inventory[14].key,false,this.fonts[0]));
		this.widgets.push(new FillBar(700,150,200,20,"Resource",this.inventory[15].key,this.inventory[16].key,false,this.fonts[0]));
		this.widgets.push(new FillBar(950,150,200,20,"Happiness",this.inventory[17].key,this.inventory[18].key,false,this.fonts[0]));
		
		this.widgets.push(new NextDay(50,200,150,100,"Next Day",this,this.fonts[0]));
		
		this.population_list = [];
		for(i = 0; i < this.inventory[2].key; i++)
		{
			if(i < 2)
			{
				var person = new Person("Person" + (i+1), "Soldier",80,false,false);
			}
			else if(i < 3)
			{
				var person = new Person("Person" + (i+1), "Farmer",80,false,false);
			}
			else if(i < 4)
			{
				var person = new Person("Person" + (i+1), "Worker",80,false,false);
			}
			else if(i < 5)
			{
				var person = new Person("Person" + (i+1), "Builder",80,false,false);
			}
			else
			{
				var person = new Person("Person" + (i+1), "Free man",80,false,false);
			}
			this.population_list.push(person);
		}
		this.widgets.push(new List(50,350,300,400,"",this.population_list,this.fonts[0]));
	}
	
	newDay(inventory)
	{
		loadingScreen();
		this.inventory = inventory;
		this.setWidgets();
	}
	
	mouseMoved(mouseX,mouseY)
	{
		if(this.battle != null)
		{
			this.battle.mouseMoved(mouseX,mouseY);
		}
		else
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
	}

	mousePressed(mouseX,mouseY)
	{
		if(this.battle != null)
		{
			this.battle.mousePressed(mouseX,mouseY);
		}
		else
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
				this.checkFreeman(4);
			}
			else if(this.selected.szo == "Farmers")
			{
				this.checkFreeman(6);
			}
			else if(this.selected.szo == "Workers")
			{
				this.checkFreeman(8);
			}
			else if(this.selected.szo == "Builders")
			{
				this.checkFreeman(10);
			}
		}
	}
	
	checkFreeman(z)
	{
		this.inventory[z].key = this.selected.changeValue(keyCode,this.widgets[6].value);
		this.inventory[12].key = this.inventory[2].key - this.inventory[4].key - this.inventory[6].key - this.inventory[8].key - this.inventory[10].key;
		this.widgets[6].value = this.inventory[12].key;
	}
	
}