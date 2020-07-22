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
		//const oldinventory = inventory;
		var enemy = inventory[1].key;
		
		inventory[4].key -= enemy;
		inventory[1].key++;
		socket.emit('battle',inventory);
	}
	
	socket.on('disconnect', function() {
      console.log("Disconnected: " + socket.id);
   });
}
