class Town
{
	constructor(nev)
	{
		this.nev = nev;
		this.widgets = [];
		this.widgets.push(new StaticText(1450,0,150,100,this.nev,40));
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