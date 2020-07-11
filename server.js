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
	
	function newGame(inventory,attributes)
	{	
		writeData(inventory,attributes);
	}
	
	socket.on("newDay", newDay);
	
	function newDay(inventory,attributes)
	{	
		battle(inventory,attributes);
		writeData(inventory,attributes);
	}
	
	function writeData(inventory,attributes)
	{
		fs.appendFile('users/' + attributes.name + '.txt', JSON.stringify(attributes), function (err) 
		{
			if (err) 
			{
				// append failed
				console.log("attributes append failed");
			} 
			else 
			{
				fs.appendFile('users/' + attributes.name + '.txt', JSON.stringify(inventory), function (err) 
				{
					if (err) 
					{
						// append failed
						console.log("inventory append failed");
					} 
					else 
					{
						// done
						console.log(attributes.name + " town saved at Day " + attributes.day);
					}
				})
			}
		})
		
		fs.appendFile('users/' + attributes.name + '.txt', "\n\n", function (err)
		{
			if (err)
			{
				console.log("err");
			}
		})
	}
	
	function battle(inventory,attributes)
	{
		var enemy = attributes.day;
		inventory[2].key -= enemy;
		attributes.day++;
		
		socket.emit('battle', inventory, attributes);
	}
}
