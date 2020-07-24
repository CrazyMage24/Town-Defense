class Person
{
	constructor(name,occupation,happiness, isInjured, isDead)
	{
		this.name = name;
		this.occupation=occupation;
		this.happiness=happiness;
		this.isInjured = isInjured;
		this.isDead = isDead;
		
		this.x = 850 + Math.floor(Math.random() * 501) - 250;
		this.y = 500 + Math.floor(Math.random() * 501) - 250;
	}
	
	show()
	{
		if(this.occupation == "Soldier")
		{
			fill(255,0,0);
			circle(this.x,this.y,5);
		}
		
		if(this.occupation == "Farmer")
		{
			fill(0,255,0);
			circle(this.x,this.y,5);
		}
		
		if(this.occupation == "Worker")
		{
			fill(0,0,255);
			circle(this.x,this.y,5);
		}
		
		if(this.occupation == "Builder")
		{
			fill(255,211,0);
			circle(this.x,this.y,5);
		}
		
		if(this.occupation == "Free man")
		{
			fill(255);
			circle(this.x,this.y,5);
		}
	}
}