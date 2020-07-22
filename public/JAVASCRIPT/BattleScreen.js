class BattleScreen
{
	constructor(inventory,town,fonts)
	{
		this.inventory = inventory;
		this.town = town;
		this.fonts = fonts;
		this.widgets = [];
		this.highlight = null;
		this.selected = null;
		this.widgets.push(new StaticText(700,100,200,50,"Éjjeli csata: " + this.inventory[1].key + ". nap",50,this.fonts[0]));
		this.widgets.push(new StaticText(1050,200,200,50,"Megmaradt katonák: " + this.inventory[4].key,35,this.fonts[0]));
		this.widgets.push(new BattleScreenButton(700,600,400,100,"Kovetkezo nap",this.town,this.inventory,this.fonts[0]));
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
}