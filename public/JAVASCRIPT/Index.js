var myVar;

function loadingScreen()
{
	document.getElementById("loader").style.display = "block";
	var all = document.getElementsByClassName("loading");
	for (var i=0, max=all.length; i < max; i++)
	{
		clsElements[i].style.display = "none";
	}
	myVar = setTimeout(showPage, 100);
}

function showPage()
{
	var all = document.getElementsByClassName("loading");
	for (var i=0, max=all.length; i < max; i++)
	{
		clsElements[i].style.display = "block";
	}
	document.getElementById("loader").style.display = "none";
}
