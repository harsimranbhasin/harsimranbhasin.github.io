/*var myHeading = document.querySelector('h1')
myHeading.textContent = 'Hello world!';

function multiply(num1,num2){

	var result=num1*num2;
	return result;
}

multiply(4,7);
document.write(multiply(3,9));

document.querySelector('html').onclick = function(){
alert('Ouch');}
*/
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/download.jfif') {
      myImage.setAttribute ('src','images/firefox.jfif');
    } else {
      myImage.setAttribute ('src','images/download.jfif');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}