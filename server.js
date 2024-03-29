var express = require("express");
var fs = require("fs");
var socket = require("socket.io");

var app = express();
var server = app.listen(3000);

app.use(express.static("public"));

console.log("Running at 127.0.0.1:3000!");

var io = socket(server);

io.sockets.on("connection", newConnection);

function newConnection(socket)
{
	console.log("New Player: " + socket.id);
	
	socket.on("newGame",newGame);
	
	function newGame(inventory)
	{	
		writeData(inventory);
	}
	
	socket.on("newDay", newDay);
	
	function newDay(inventory)
	{	
		battle(inventory);
		writeData(inventory);
	}
	
	function writeData(inventory)
	{
		fs.writeFileSync('users/'+inventory[0].key+'.json',JSON.stringify(inventory, null, 2),'utf-8');
		console.log(inventory[0].key + " town saved at Day " + inventory[1].key);
	}
	
	function battle(inventory)
	{
		var enemy = inventory[1].key;
		var population = inventory[2].key;
		var soldiers = inventory[4].key;
		var farmers = inventory[6].key;
		var workers = inventory[8].key;
		var builders = inventory[10].key;
		var freeman = inventory[12].key;
		
		var food = inventory[13].key;
		var resource = inventory[15].key;
		var happiness = inventory[17].key;
		
		
		
		while(enemy > 0)
		{
			if(soldiers > 0)
			{
				if(Math.floor(Math.random() * 101) % 4 == 0)
				{
					soldiers--;
					population--;
					happiness+=-5;
				}
				enemy--;
			}
			else
			{
				if(farmers > 0)
				{
					farmers--;
				}
				else if(workers > 0)
				{
					workers--;
				}
				else if(builders > 0)
				{
					builders--;
				}
				else if(freeman > 0)
				{
					freeman--;
				}
				enemy--;
				population--;
			}
		}
		
		if(population < 1)
		{
			socket.emit('lose');
		}
		
		// kaja
		
		food+=farmers*2;
		
		food -= population;
		
		//csata nyerés plusz boldogság
		
		if(food < 0)
		{
			happiness-=50;
		}
		
		// sok kaja --> happy
		else if(food > population*2)
		{
			happiness+=population;
		}
		
		// vice versa
		else if(food < population/2)
		{
			happiness-=population;
		}
		
		// nyersanyag
		
		resource+=workers;
		
		// random populáció növekedés
		
		if(Math.floor(Math.random() * 101) % 4 == 0)
		{
			var mennyi = Math.floor(Math.random() * 4);
			population+=mennyi;
			freeman+=mennyi;
			happiness+=mennyi;
		}
		
		// visszaküldés
		
		var newinventory = 
		[
			{name: "Name", key: inventory[0].key}, 				//[0]
			{name: "Day", key: inventory[1].key + 1}, 			//[1]
			{name: "Population", key: population}, 				//[2]
			{name: "Max Population", key: inventory[3].key},	//[3]
			{name: "Soldiers", key: soldiers},					//[4]
			{name: "Max Soldiers", key: inventory[5].key},		//[5]
			{name: "Farmers", key: farmers},					//[6]
			{name: "Max Farmers", key: inventory[7].key},		//[7]
			{name: "Workers", key: workers},					//[8]
			{name: "Max Workers", key: inventory[9].key},		//[9]
			{name: "Builders", key: builders},					//[10]
			{name: "Max Builders", key: inventory[11].key},		//[11]
			{name: "Free man", key: freeman},					//[12]
			
			{name: "Food", key: food},							//[13]
			{name: "Max Food", key: inventory[14].key},			//[14]
			{name: "Resource", key: resource},					//[15]
			{name: "Max Resource", key: inventory[16].key},		//[16]
			{name: "Happiness", key: happiness},				//[17]
			{name: "Max Happiness", key: inventory[18].key},	//[18]
		];
		socket.emit('battle',inventory, newinventory);
	}
	
	socket.on('disconnect', function() {
      console.log("Disconnected: " + socket.id);
   });
}
