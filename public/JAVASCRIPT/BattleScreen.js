class BattleScreen
{
	constructor(inventory, attributes)
	{
		this.inventory = inventory;
		this.attributes = attributes;
		this.font1 = loadFont("FONTS/FFF_Tusj.ttf");
		this.widgets = [];
		this.widgets.push(new StaticText(100,100,200,50,"Éjjeli csata: " + attributes.day + ". nap",50,this.font1));
	}
	
	run()
	{
		for(i = 0; i < this.widgets.length; i++)
		{
			this.widgets[i].show();
		}
	}
}