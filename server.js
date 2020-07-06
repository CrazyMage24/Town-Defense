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
			name : data,
			population: 5,
			day : 1
		}
		
		var file = savedata.name + ".txt";
		fs.writeFile(file, JSON.stringify(savedata), (err) => 
		{
			if (err) throw err;
			console.log("Game Saved!");
		});
		
	}
}

io.sockets.on('disconnect', () => {
    console.log(socket.id + 'disconnected');
  });
