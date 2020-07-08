var myVar;

function loadingScreen()
{
	var el = document.getElementById("test");
	el.style.opacity = 0.5;
	document.getElementById("loader").style.display = "block";
	myVar = setTimeout(showPage, 1000);
}

function showPage()
{
	var el = document.getElementById("test");
	el.style.opacity = 1;
	el.style.display = "block";
	document.getElementById("loader").style.display = "none";
}
