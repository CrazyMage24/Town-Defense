var express = require("express");
var fs = require("fs");
var socket = require("socket.io");


var app = express();
var server = app.listen(3000);

app.use(express.static("public"));

console.log("Running!");

var io = socket(server);


//
io.sockets.on("connection", newConnection);

function newConnection(socket)
{
	console.log("New Player: " + socket.id);
	
	socket.on("newGame",newGame);
	
	function newGame(data)
	{
		let savedata = 
		{
			name: data.name,
			population: data.population,
			max_population: data.max_population,
			soldiers: data.soldiers,
			max_soldiers: data.max_soldiers,
			farmers: data.farmers,
			max_farmers: data.max_farmers,
			workers: data.workers,
			max_workers: data.max_workers,
			freeman: data.freeman,
			
			food: data.food,
			max_food: data.max_food,
			resource: data.resource,
			max_resource: data.max_resource,
			happiness: data.happiness,
			max_happiness: data.max_happiness,
			day: data.day
		}
		
		var file = "users/" + savedata.name + ".txt";
		fs.writeFile(file, JSON.stringify(savedata), (err) => 
		{
			if (err) throw err;
			console.log(savedata.name + " town started and saved");
		});
		
	}
}
