var myImage = document.querySelector('img');

myImage.onclick = function() 
{
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/maltese.jpg') 
	{
		myImage.setAttribute ('src','images/maltese2.jpg');
	}
	else if (mySrc === 'images/maltese2.jpg') 
	{
		myImage.setAttribute ('src','images/maltese3.jpg');
	}
	else 
	{
		myImage.setAttribute ('src','images/maltese.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName()
{
	var myName = prompt("Как вас зовут?");
	localStorage.setItem('name',myName);
	myHeading.textContent = "Познакомься с Одиком, " + myName;
}

function clearUserName()
{
	localStorage.removeItem('name');
}

if(localStorage.getItem('name'))
{
	var storedName = localStorage.getItem('name');
	myHeading.textContent = "Познакомься с Одиком, " + storedName;
}

myButton.onclick = function() 
{
	if (!localStorage.getItem('name'))
	{
		setUserName();
	}
	else
	{
		clearUserName();
	}
}